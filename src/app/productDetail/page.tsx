import React from "react"
import Image from "next/image"
import { PiShoppingCartLight } from "react-icons/pi"
import { Button } from "@/components/ui/button"

const ProductDetail = () => {
  return (
    <div id="ProductDetail" className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            className="w-full h-96 object-cover rounded-lg"
            alt="Nike Air Force 1 PLT.AF.ORM"
            src="/nphoto/productDetail.png"
            width={653}
            height={653}
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Nike Air Force 1
            <br className="hidden md:inline" />
            PLT.AF.ORM
          </h1>
          <p className="mb-6 text-gray-600 leading-relaxed">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired
            construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand
            silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading,
            rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
          </p>
          <p className="text-3xl font-bold text-gray-900 mb-6">₹ 8,695.00</p>
          <Button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full text-xl flex items-center gap-2">
            <PiShoppingCartLight className="size-6" />
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

