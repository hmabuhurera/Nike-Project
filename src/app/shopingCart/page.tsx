'use client'

import Image from "next/image"
import { Heart, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ShoppingCart() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-[1200px]">
        {/* Free Delivery Banner */}
        <div className="mb-8 bg-[#F8F8F8] p-4 rounded">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-base">Free Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Applies to orders of ₹ 14,000.00 or more.{" "}
                <button className="underline hover:text-black transition-colors">
                  View details
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {/* Bag Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-medium">Bag</h2>
              
              {/* Cart Items */}
              <div className="space-y-6">
                {/* Item 1 */}
                <div className="border-b pb-6">
                  <div className="flex gap-4">
                    <div className="h-24 w-24 flex-shrink-0 bg-[#F8F8F8] rounded">
                      <Image
                        src="/public/nphoto/gear1.png"
                        alt="Nike Dri-FIT TecKnit Ultra"
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</h3>
                            <p className="font-medium pl-72">MRP: ₹ 3,895.00</p>
                          </div>
                          <p className="text-sm text-muted-foreground">Men's Short-Sleeve Running Top</p>
                          <p className="text-sm text-muted-foreground">Ashen Slate/Cobalt Bliss</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Size</span>
                            <Select defaultValue="l">
                              <SelectTrigger className="w-16">
                                <SelectValue placeholder="L" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="s">S</SelectItem>
                                <SelectItem value="m">M</SelectItem>
                                <SelectItem value="l">L</SelectItem>
                                <SelectItem value="xl">XL</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Quantity</span>
                            <Select defaultValue="1">
                              <SelectTrigger className="w-16">
                                <SelectValue placeholder="1" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      
                        <div className="flex gap-4">
                          <button className="text-muted-foreground hover:text-black transition-colors">
                            <Heart className="h-5 w-5" />
                          </button>
                          <button className="text-muted-foreground hover:text-black transition-colors">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="border-b pb-6">
                  <div className="flex gap-4">
                    <div className="h-24 w-24 flex-shrink-0 bg-[#F8F8F8] rounded">
                      <Image
                        src="/public/nphoto/shoes2.png"
                        alt="Nike Air Max"
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Nike Air Max 97 SE</h3>
                            <p className="font-medium ml-96 ">MRP: ₹ 16,995.00</p>
                          </div>
                          <p className="text-sm text-muted-foreground">Men's Shoes</p>
                          <p className="text-sm text-muted-foreground">Flat Pewter/Light Bone/Black/White</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Size</span>
                            <Select defaultValue="8">
                              <SelectTrigger className="w-16">
                                <SelectValue placeholder="8" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="8">8</SelectItem>
                                <SelectItem value="9">9</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Quantity</span>
                            <Select defaultValue="1">
                              <SelectTrigger className="w-16">
                                <SelectValue placeholder="1" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <button className="text-muted-foreground hover:text-black transition-colors">
                            <Heart className="h-5 w-5" />
                          </button>
                          <button className="text-muted-foreground hover:text-black transition-colors">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Favourites Section */}
            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-medium">Favourites</h2>
              <p className="text-sm text-muted-foreground">
                There are no items saved to your favourites.
              </p>
            </div>

            {/* You Might Also Like Section */}
            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-medium">You Might Also Like</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <div className="aspect-square bg-[#F8F8F8] rounded">
                    <Image
                      src="/public/nphoto/shoes3.png"
                      alt="Air Jordan 1 Mid SE Craft"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium">Air Jordan 1 Mid SE Craft</h3>
                  <p className="text-sm text-muted-foreground">Men's Shoes</p>
                  <p className="font-medium">MRP: ₹ 12,295.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-4">
              <div className="space-y-6">
                <h2 className="text-xl font-medium">Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹ 20,890.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Estimated Delivery & Handling</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>₹ 20,890.00</span>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-black/90" size="lg">
                    Member Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

