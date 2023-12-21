import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {Link} from "react-router-dom"
import {
  Form,
  FormControl,
//   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LoginValidationSchema } from "@/lib/validation";
import { useState } from "react";


const Login = () => {
  const form = useForm<z.infer<typeof LoginValidationSchema>>({
    resolver: zodResolver(LoginValidationSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });
  const onSubmit = (data: z.infer<typeof LoginValidationSchema>) => {
    console.log(data);
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  };
  const [isLoading, setIsLoading] = useState(false)
  return (

      <Form {...form}>
        <div className=" sm:w-420 flex-center flex-col">
            {/* <img src="/assets/images/logo.svg" alt="logo" /> */}
            <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">桌搭社</h2>
            <p className="text-light-3">.....</p>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col gap-5 w-420 mt-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>用户名或邮箱</FormLabel>
                <FormControl>
                  <Input placeholder="请输入用户名" className=" shad-input" {...field} />
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
                <FormLabel>密码</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="请输入密码" className=" shad-input" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="shad-button_primary" type="submit">{ isLoading ? '登录中...' : '登 录' }</Button>
        <p className="text-small-regular text-light-2 text-center mt-2">
            没有账号？
            <Link to={"/register"} className="text-primary-500 text-small-semibold ml-1">注册</Link>
        </p>
        </form>
      </Form>
  );
};

export default Login;
