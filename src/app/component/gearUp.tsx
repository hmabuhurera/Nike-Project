'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

interface ProductCarouselProps {
  title: string
  products: Product[]
}

function ProductCarousel({ title, products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= products.length ? 0 : prevIndex + 2
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 2 < 0 ? Math.max(products.length - 2, 0) : prevIndex - 2
    )
  }

  return (
    <div className="w-full max-w-[666px] h-auto sm:h-[509px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-8 h-8 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            onClick={prevSlide}
            aria-label="Previous products"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-8 h-8 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            onClick={nextSlide}
            aria-label="Next products"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        {products.slice(currentIndex, currentIndex + 2).map((product) => (
          <Card key={product.id} className="w-full sm:w-[300px] h-auto sm:h-[393px] flex-shrink-0 group cursor-pointer transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-0">
              <div className="aspect-square relative mb-2 bg-white overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-medium text-sm group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-xs text-gray-500">{product.description}</p>
                <p className="font-medium text-sm">₹ {product.price.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default function GearUp() {
  const mensProducts = [
    {
      id: "1",
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      description: "Men's Short-Sleeve Running Top",
      price: 3895,
      image: "/nphoto/gear1.png",
    },
    {
      id: "2",
      name: "Nike Dri-FIT Challenger",
      description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
      price: 2495,
      image: "/nphoto/gear2.png",
    },
    {
      id: "3",
      name: "Nike Dri-FIT ADV Run Division",
      description: "Men's Long-Sleeve Running Top",
      price: 5295,
      image: "/nphoto/gear1.png",
    },
    {
      id: "4",
      name: "Nike Fast",
      description: "Men's Mid-Rise 7/8 Running Tights with Pockets",
      price: 3795,
      image: "/nphoto/gear2.png",
    },
  ]

  const womensProducts = [
    {
      id: "5",
      name: "Nike Dri-FIT ADV Run Division",
      description: "Women's Long-Sleeve Running Top",
      price: 5295,
      image: "/nphoto/gear4.png",
    },
    {
      id: "6",
      name: "Nike Fast",
      description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
      price: 3795,
      image: "/nphoto/gear3.png",
    },
    {
      id: "7",
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      description: "Women's Short-Sleeve Running Top",
      price: 3895,
      image: "/nphoto/gear4.png",
    },
    {
      id: "8",
      name: "Nike Dri-FIT Challenger",
      description: "Women's 18cm (approx.) 2-in-1 Versatile Shorts",
      price: 2495,
      image: "/nphoto/gear3.png"
    },
  ]

  return (
    <div className="w-full max-w-[1344px] min-h-[561px] mx-auto px-4 py-8 overflow-hidden">
      <h1 className="text-3xl font-bold text-center mb-8">Gear Up</h1>
      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        <ProductCarousel title="Shop Men's" products={mensProducts} />
        <ProductCarousel title="Shop Women's" products={womensProducts} />
      </div>
    </div>
  )
}

