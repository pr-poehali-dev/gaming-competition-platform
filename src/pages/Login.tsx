
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TwoFactorVerification } from "@/components/TwoFactorVerification";

const formSchema = z.object({
  email: z.string().email("Введите корректный email"),
  password: z.string().min(1, "Введите пароль"),
});

type FormValues = z.infer<typeof formSchema>;

const Login = () => {
  const [step, setStep] = useState<"login" | "2fa">("login");
  const [email, setEmail] = useState("");
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const onSubmit = (values: FormValues) => {
    console.log("Login form submitted:", values);
    setEmail(values.email);
    setStep("2fa");
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-md mx-auto">
          {step === "login" ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Вход в аккаунт</CardTitle>
                <CardDescription>
                  Войдите для доступа к вашему профилю и играм
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="email@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Пароль</FormLabel>
                          <FormControl>
                            <Input placeholder="********" type="password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-end">
                      <Link to="/forgot-password" className="text-sm text-purple-600 hover:underline">
                        Забыли пароль?
                      </Link>
                    </div>
                    
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                      Войти
                    </Button>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-gray-600">
                  Нет аккаунта?{" "}
                  <Link to="/register" className="text-purple-600 hover:underline">
                    Зарегистрироваться
                  </Link>
                </p>
              </CardFooter>
            </Card>
          ) : (
            <TwoFactorVerification email={email} onComplete={() => {}} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
