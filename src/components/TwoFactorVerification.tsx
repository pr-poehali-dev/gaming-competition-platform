
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

interface TwoFactorVerificationProps {
  email: string;
  onComplete: () => void;
}

export const TwoFactorVerification = ({ email, onComplete }: TwoFactorVerificationProps) => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleVerify = () => {
    if (value.length === 6) {
      setIsLoading(true);
      
      // Имитация запроса к серверу
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Вход выполнен успешно");
        onComplete();
        // Редирект на страницу профиля пользователя
        window.location.href = "/profile";
      }, 1500);
    } else {
      toast.error("Введите полный код");
    }
  };
  
  const handleResendCode = () => {
    toast.info(`Новый код отправлен на ${email}`);
  };
  
  const handleBackToLogin = () => {
    window.location.href = "/login";
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Подтверждение входа</CardTitle>
        <CardDescription>
          Введите код, отправленный на {email}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            Введите 6-значный код для подтверждения входа:
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
        
        <div className="flex justify-center">
          <Button 
            variant="link" 
            size="sm" 
            className="text-purple-600" 
            onClick={handleResendCode}
          >
            Отправить код повторно
          </Button>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            Не получили код? Проверьте папку спам или используйте код восстановления.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button 
          className="w-full bg-purple-600 hover:bg-purple-700"
          onClick={handleVerify}
          disabled={isLoading}
        >
          {isLoading ? "Проверка..." : "Подтвердить"}
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex gap-1 items-center" 
          onClick={handleBackToLogin}
        >
          <ArrowLeft size={16} />
          Вернуться к входу
        </Button>
      </CardFooter>
    </Card>
  );
};
