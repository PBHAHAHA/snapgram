import * as z from "zod";

export const LoginValidationSchema = z.object({
  username: z
    .string()
    .min(2, { message: "用户名最少两个字" })
    .max(10, "用户名最多10个字"),
  email: z.string().email("邮箱格式不正确"),
  password: z
   .string()
   .min(6, { message: "密码最少6个字" })
   .max(20, "密码最多20个字"),
});
