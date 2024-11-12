import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Signin() {
  return (
    <main className="flex flex-row min-w-full min-h-screen">
      <div className="flex flex-col justify-between w-full min-h-full p-5 sm:p-10">
        <div className="flex flex-col min-h-full">
          <div className="flex flex-row justify-end">
            <Button variant={"link"} asChild>
              <Link href={'/pages/login'}>Login</Link>
            </Button>
          </div>
          <div className="flex flex-col justify-center items-center h-full">
            <form className="flex flex-col items-center md:w-min w-full gap-6">
              <div className="flex flex-col text-center w-max gap-2">
                <span className="text-2xl font-semibold">Create an account</span>
                <span className="text-zinc-400 text-sm">Enter your e-mail below to create your account</span>
              </div>
              <div className="flex flex-col w-full sm:w-80 gap-2">
                <Input type="text" placeholder="Username" required/>
                <Input type="email" placeholder="E-mail" required/>
                <Input type="password" placeholder="Password"required/>
              </div>
              <div className="flex flex-col w-full sm:w-80 gap-4">
                <Button className="w-full" size={"icon"}>Sign In<MoveRight /></Button>
                <span className="text-zinc-400 text-sm text-center w-full">
                  By clicking "Sign In", you acknowledge that you have read and agree to our <u>Terms of Service</u> and <u>Privacy Policy</u>.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};