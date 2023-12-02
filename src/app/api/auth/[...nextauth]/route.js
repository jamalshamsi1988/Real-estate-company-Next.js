import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/utils/auth";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("در سرور مشکلی رخ داده است");
        }
        if (!email || !password)
          throw new Error("لطفا اطلاعات معتبر وارد کنید ");

        const user = await User.findOne({ email });
        if (!user) throw new Error("لطفا حساب کاربری ایجاد کنید");

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("ایمیل یا پسوورد اشتباه است");
        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}