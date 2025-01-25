// import Image from "next/image"
// import { Badge } from "@/components/ui/badge"

// interface Product {
//   id: string
//   name: string
//   category: string
//   price: number
//   colors: number
//   image: string
//   tags?: string[]
// }

// interface ProductGridProps {
//   products: Product[]
// }

// export function ProductGrid({ products }: ProductGridProps) {
//   return (
//     <div className="grid grid-cols-3 gap-6">
//       {products.map((product) => (
//         <div key={product.id} className="group cursor-pointer space-y-2">
//           <div className="relative aspect-square overflow-hidden bg-gray-100">
//             <Image
//               src={product.image}
//               alt={product.name}
//               fill
//               className="object-cover"
//             />
//             {product.tags?.map((tag) => (
//               <Badge
//                 key={tag}
//                 className="absolute left-2 top-2 bg-white text-black"
//                 variant="secondary"
//               >
//                 {tag}
//               </Badge>
//             ))}
//           </div>
//           <div className="space-y-1">
//             <h3 className="font-medium">{product.name}</h3>
//             <p className="text-sm text-gray-500">{product.category}</p>
//             {product.colors > 1 && (
//               <p className="text-sm text-gray-500">{product.colors} Colours</p>
//             )}
//             <p className="font-medium">
//               MRP : ₹ {product.price.toLocaleString("en-IN")}.00
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

