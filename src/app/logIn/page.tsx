import Image from 'next/image'
import Link from 'next/link'
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Nike Logo */}
      <div className="mb-12">
        <Image
          src= {require("../../../public/nphoto/nike.png")}
          alt="Nike Logo"
          width={60}
          height={60}
          className="mx-auto"
        />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[460px] space-y-8">
        {/* Heading */}
        <div className="text-center space-y-1">
          <h1 className="text-[28px] font-bold tracking-tight">
            YOUR ACCOUNT
          </h1>
          <h1 className="text-[28px] font-bold tracking-tight">
            FOR EVERYTHING
          </h1>
          <h1 className="text-[28px] font-bold tracking-tight">
            NIKE
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <Input 
            type="email" 
            placeholder="Email address"
            className="h-14 text-lg placeholder:text-gray-500 rounded-sm"
          />
          <Input 
            type="password" 
            placeholder="Password"
            className="h-14 text-lg placeholder:text-gray-500 rounded-sm"
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="keep-signed" className="rounded-sm border-gray-300" />
              <label htmlFor="keep-signed" className="ml-2 text-gray-500">
                Keep me signed in
              </label>
            </div>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              Forgotten your password?
            </Link>
          </div>

          <div className="text-center text-gray-500 text-sm">
            By logging in, you agree to Nike's{' '}
            <Link href="#" className="underline hover:text-gray-700">
              Privacy Policy <br />
            </Link>
            {' '}and{' '}
            <Link href="#" className="underline hover:text-gray-700">
              Terms of Use
            </Link>
            .
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 text-lg bg-black hover:bg-gray-900 rounded-sm"
          >
            SIGN IN
          </Button>
        </form>

        <div className="text-center text-gray-500">
          Not a Member?{' '}
          <Link href="#" className="text-black font-bold underline">
            Join Us.
          </Link>
        </div>
      </div>
    </div>
  )
}

