import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function SignupPage() {

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/nphoto/nike.png"
            alt="Nike"
            width={74}
            height={26}
            className="h-6 w-auto"
          />
        </div>

        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">
            BECOME A NIKE MEMBER
          </h1>
          <p className="text-lg text-muted-foreground">
            Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="First Name"
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Last Name"
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              type="date"
              required
              className="h-12"
            />
          </div>
          
          <p className="text-sm text-muted-foreground">
            Get a Nike Member Reward every year on your Birthday.
          </p>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pakistan">Pakistan</SelectItem>
                <SelectItem value="gaza">Gaza</SelectItem>
                <SelectItem value="sham">Sham</SelectItem>
                <SelectItem value="bangladesh">Bangldesh</SelectItem>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="purtogal">Purtogal</SelectItem>
                <SelectItem value="uk">United Kingdum</SelectItem>
                <SelectItem value="us">United State</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="h-12 text-base font-normal"
            >
              Male
            </Button>
            <Button
              variant="outline"
              className="h-12 text-base font-normal"
            >
              Female
            </Button>
          </div>

          <div className="flex items-start space-x-3 pt-2">
            <Checkbox id="emailSignup" />
            <Label htmlFor="emailSignup" className="text-sm font-normal leading-tight">
              Sign up for emails to get updates from Nike on products, offers and your Member benefits
            </Label>
          </div>

          <div className="text-center text-sm text-muted-foreground pt-4">
            By creating an account, you agree to Nike's{" "}
            <Link href="#" className="underline font-medium">
              Privacy <br /> Policy
            </Link>
            {""} and{" "}
            <Link href="#" className="underline font-medium">
              Terms of Use
            </Link>
            .
          </div>

          <Button className="w-full h-12 bg-black hover:bg-black/90">
            JOIN US
          </Button>

          <div className="text-center text-sm">
            Already a Member?{" "}
            <Link href="/signin" className="underline font-semibold">
              Sign In.
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

