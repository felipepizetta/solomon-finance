
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex flex-row min-w-full min-h-screen">
      <div className="flex flex-col justify-between w-full min-h-full p-5 sm:p-10">
        <div className="flex flex-col min-h-full">
          <div className="flex flex-row justify-end">
            <Button variant={"link"} asChild>
              <Link href={'/pages/signin'}>Sign In</Link>
            </Button>
          </div>
          <div className="flex flex-col justify-center items-center h-full w-full">
            <form className="flex flex-col items-center md:w-min w-full gap-6">
              <div className="flex flex-col text-center w-max gap-2">
                <span className="text-2xl font-semibold">Welcome Back</span>
                <span className="text-zinc-400 text-sm">Enter your username and password to continue</span>
              </div>
              <div className="flex flex-col w-full sm:w-80 gap-2">
                <Input type="text"placeholder="Username"required/>
                <Input type="password" placeholder="Password" required/>
              </div>
              <div className="flex flex-col w-full sm:w-80 gap-4">
                <Button type="submit" className="w-full" size={"icon"}>Continue</Button>
                <span className="text-zinc-400 text-sm text-center w-full text-pretty">
                  By clicking "Continue", you acknowledge that you have read and agree to our <u>Terms of Service</u> and <u>Privacy Policy</u>.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};