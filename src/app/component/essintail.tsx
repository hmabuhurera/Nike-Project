'use client'

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Men's",
    Image: require("../../../public/nphoto/EssinalMan.png"),
    href: "/mens"
  },
  {
    id: 2,
    name: "Women's",
    Image: require("../../../public/nphoto/EssintalWomen.png"),
    href: "/womens"
  },
  {
    id: 3,
    name: "Kids'",
    Image: require("../../../public/nphoto/EssintalKid.png"),
    href: "/kids"
  }
]

export default function Essentials() {
  return (
    <section className="w-full max-w-[1344px] min-h-[592px] mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">The Essentials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={category.href}>
            <Card className="w-full max-w-[440px] h-[540px] mx-auto overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-0 h-full relative">
                <Image
                  src={category.Image}
                  alt={`${category.name} category`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex px-4 py-2 bg-white rounded-full text-sm font-medium">
                    {category.name}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

