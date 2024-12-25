'use client';

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { GoogleAuthButton } from "./google-auth-button";
// import { Separator } from "@/components/ui/separator";

// const formSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6),
// });

interface LoginFormProps {
  onSuccess: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // TODO: Implement login logic
  //   console.log(values);
  const success = false;
  if(success){
    onSuccess();
  }
  // }

  return (
    <div className="space-y-6 p-4">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Welcome back</h2>
        <p className="text-sm text-muted-foreground">Enter your credentials to sign in</p>
      </div>
      <GoogleAuthButton variant="login" />
      
    </div>
  );
}