'use client'

import { Search, Phone, MessageSquare, Mail, MapPin, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold mb-8">GET HELP</h1>
        <div className="max-w-2xl mx-auto px-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="What can we help you with?"
              className="w-full bg-[#fff] border-black h-12 pl-4 pr-12 rounded-sm placeholder:text-gray-400"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 bg-white text-black p-8 rounded-sm">
            <h2 className="text-2xl font-bold mb-6">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
            
            <p className="mb-4">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
            
            <p className="mb-4">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
            
            <p className="mb-4">If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or Link local credit or debit card.</p>
            
            <p className="mb-4">Apple Pay</p>
            
            <p className="mb-4">
              <span className="font-bold">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you're not already Link Member,{' '}
              <Link href="#" className="underline">join us</Link> today.
            </p>

            <div className="flex gap-4 mb-8">
              <Button variant="outline" className="rounded-full bg-black text-white">JOIN US</Button>
              <Button variant="outline" className="rounded-full bg-black text-white">SHOP NIKE</Button>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold">FAQs</h3>
              
              <div>
                <h4 className="font-bold mb-2">Does my card need international purchases enabled?</h4>
                <p className="mb-2">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                <p>Please note, some banks may charge Link <Link href="#" className="underline">small transaction fee</Link> for international orders.</p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Can I pay for my order with multiple methods?</h4>
                <p>No, payment for Nike orders can't be split between multiple payment methods.</p>
              </div>

              <div>
                <h4 className="font-bold mb-2">What payment method is accepted for SNKRS orders?</h4>
                <p>You can use any accepted credit card to pay for your SNKRS order.</p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Why don't I see Apple Pay as an option?</h4>
                <p>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use Link compatible Apple device running the latest OS, be signed in to your iCloud account and have Link supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
              </div>

              <div>
                <p className="mb-2">Was this answer helpful?</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="">
                    <ThumbsUp className="h-4 w-4 " />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-sm">
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-gray-500 font-medium mb-4">RELATED</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="underline font-medium">WHAT ARE NIKE'S DELIVERY OPTIONS?</Link>
                  </li>
                  <li>
                    <Link href="#" className="underline font-medium">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6">CONTACT US</h3>
              <div className="space-y-8">
                <div>
                  <Phone className="h-8 w-8 mx-auto mb-4" />
                  <p className="font-bold">000 800 919 0566</p>
                  <p className="text-sm">Products & Orders: 24 hours Link day,</p>
                  <p className="text-sm">7 days Link week</p>
                  <p className="text-sm">Company Info & Enquiries: 07:30 -</p>
                  <p className="text-sm">16:30, Monday - Friday</p>
                </div>

                <div>
                  <MessageSquare className="h-8 w-8 mx-auto mb-4" />
                  <p className="text-sm">24 hours Link day</p>
                  <p className="text-sm">7 days Link week</p>
                </div>

                <div>
                  <Mail className="h-8 w-8 mx-auto mb-4" />
                  <p className="text-sm">We'll reply within</p>
                  <p className="text-sm">five business days</p>
                </div>

                <div>
                  <MapPin className="h-8 w-8 mx-auto mb-4" />
                  <p className="font-bold">STORE LOCATOR</p>
                  <p className="text-sm">Find Nike retail stores near you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

