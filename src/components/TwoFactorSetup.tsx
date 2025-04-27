
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "sonner";
import { Check, Copy } from "lucide-react";

interface TwoFactorSetupProps {
  email: string;
  onComplete: () => void;
}

export const TwoFactorSetup = ({ email, onComplete }: TwoFactorSetupProps) => {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);
  
  // В реальном приложении этот код будет получен с сервера
  const recoveryCode = "GAMERS-ARENA-1234-5678";
  
  const handleCopyCode = () => {
    navigator.clipboard.writeText(recoveryCode);
    setCopied(true);
    toast.success("Код восстановления скопирован в буфер обмена");
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleVerify = () => {
    if (value.length === 6) {
      // В реальном приложении здесь будет запрос к серверу для проверки кода
      toast.success("Двухфакторная аутентификация успешно настроена");
      onComplete();
      // Редирект на страницу профиля пользователя
      window.location.href = "/profile";
    } else {
      toast.error("Введите полный код");
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Настройка двухфакторной аутентификации</CardTitle>
        <CardDescription>
          Для вашей безопасности мы отправили код подтверждения на {email}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            Введите 6-значный код из письма:
          </p>
          <InputOTP 
            value={value} 
            onChange={setValue} 
            maxLength={6}
            className="justify-center"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Код восстановления</h4>
            <Button 
              size="sm" 
              variant="outline" 
              className="flex gap-1 items-center h-8" 
              onClick={handleCopyCode}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Скопировано" : "Скопировать"}
            </Button>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Сохраните этот код. Он понадобится, если вы потеряете доступ к устройству.
          </p>
          <div className="bg-white border rounded-md p-3 font-mono text-sm text-center">
            {recoveryCode}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-purple-600 hover:bg-purple-700"
          onClick={handleVerify}
        >
          Подтвердить
        </Button>
      </CardFooter>
    </Card>
  );
};
