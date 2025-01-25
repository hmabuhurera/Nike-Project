'use client'

import { useState } from "react"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  addressLine1: z.string().min(1, "Address is required"),
  addressLine2: z.string().optional(),
  addressLine3: z.string().optional(),
  postalCode: z.string().min(6, "Valid postal code is required"),
  locality: z.string().min(1, "Locality is required"),
  state: z.string().min(1, "State is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  pan: z.string().min(10, "Valid PAN is required"),
  saveAddress: z.boolean().default(false),
  savePan: z.boolean().default(false),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
})

export default function CheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      saveAddress: false,
      savePan: false,
      consent: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Handle form submission
    console.log(values)
    setIsSubmitting(false)
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[880px] mx-auto p-6">
        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          <div>
            <div className="mb-8">
              <h1 className="text-2xl font-medium mb-4">How would you like to get your order?</h1>
              <div className="bg-[#F8F8F8] p-4 rounded text-sm">
                <p>
                  Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.{" "}
                  <button className="underline hover:text-black transition-colors">
                    Learn More
                  </button>
                </p>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-medium">Enter your name and address</h2>
                  <div className="grid gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="First Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Last Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="addressLine1"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Address Line 1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <p className="text-xs text-muted-foreground">We do not ship to P.O boxes</p>
                    <FormField
                      control={form.control}
                      name="addressLine2"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Address Line 2" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="addressLine3"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Address Line 3" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="postalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Postal Code" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="locality"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Locality" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="State/Territory" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="delhi">Delhi</SelectItem>
                                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                <SelectItem value="karnataka">Karnataka</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormItem>
                        <Select disabled defaultValue="india">
                          <SelectTrigger>
                            <SelectValue placeholder="Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="india">India</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="saveAddress"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          Save this address to my profile
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-medium">What's your contact information?</h2>
                  <div className="grid gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <p className="text-xs text-muted-foreground">A confirmation email will be sent after checkout.</p>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Phone Number" type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <p className="text-xs text-muted-foreground">A carrier might contact you to confirm delivery.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-medium">What's your PAN?</h2>
                  <div className="grid gap-4">
                    <FormField
                      control={form.control}
                      name="pan"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="PAN" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <p className="text-xs text-muted-foreground">Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
                    <FormField
                      control={form.control}
                      name="savePan"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            Save PAN details to Nike Profile
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        I have read and consent to eShopWorld processing my information in accordance with the{" "}
                        <button className="underline hover:text-black transition-colors">
                          Privacy Statement
                        </button>{" "}
                        and{" "}
                        <button className="underline hover:text-black transition-colors">
                          Cookie Policy
                        </button>
                        . eShopWorld is a trusted Nike partner.
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-white text-black rounded-full border-black hover:bg-blue-400"
                  disabled={isSubmitting}
                >
                  Continue
                </Button>
                
              </form>
            </Form>
          </div>

          <div className="lg:sticky lg:top-4">
            <div className="bg-white p-6 space-y-6">
              <h2 className="text-xl font-medium">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹ 20,890.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery/Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-sm border-t pt-4">
                  <span>Total</span>
                  <span>₹ 20,890.00</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  The total reflects the price of your order, including all duties and taxes
                </p>
              </div>

              <div>
                <p className="text-sm mb-4">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="h-24 w-24 bg-[#F8F8F8] rounded flex-shrink-0">
                      <Image
                        src= {require("../../../public/nphoto/gear1.png")}
                        alt="Nike Dri-FIT"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</h3>
                      <p className="text-sm text-muted-foreground">Qty: 1</p>
                      <p className="text-sm text-muted-foreground">Size: L</p>
                      <p className="text-sm">₹ 3,895.00</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-24 w-24 bg-[#F8F8F8] rounded flex-shrink-0">
                      <Image
                        src={require("../../../public/nphoto/shoes3.png")}
                        alt="Nike Air Max"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Nike Air Max 97 SE Men's Shoes</h3>
                      <p className="text-sm text-muted-foreground">Qty: 1</p>
                      <p className="text-sm text-muted-foreground">Size: UK 8</p>
                      <p className="text-sm">₹ 16,995.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

