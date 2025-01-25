// "use client"

// import * as React from "react"
// import { ChevronDown } from 'lucide-react'
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible"

// interface FilterGroupProps {
//   title: string
//   children: React.ReactNode
//   defaultOpen?: boolean
// }

// function FilterGroup({ title, children, defaultOpen = false }: FilterGroupProps) {
//   return (
//     <Collapsible defaultOpen={defaultOpen} className="border-b border-gray-200 py-4">
//       <CollapsibleTrigger className="flex w-full items-center justify-between text-base font-medium">
//         {title}
//         <ChevronDown className="h-4 w-4" />
//       </CollapsibleTrigger>
//       <CollapsibleContent className="mt-2 space-y-2">
//         {children}
//       </CollapsibleContent>
//     </Collapsible>
//   )
// }

// interface FilterOptionProps {
//   label: string
// }

// function FilterOption({ label }: FilterOptionProps) {
//   return (
//     <div className="flex items-center space-x-2">
//       <Checkbox id={label} />
//       <label
//         htmlFor={label}
//         className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//       >
//         {label}
//       </label>
//     </div>
//   )
// }

// export function ProductFilters() {
//   return (
//     <div className="w-60 space-y-4">
//       <div className="flex items-center justify-between border-b border-gray-200 pb-4">
//         <h2 className="text-lg font-medium">Hide Filters</h2>
//       </div>

//       <FilterGroup title="Shoes" defaultOpen>
//         <FilterOption label="Lifestyle" />
//         <FilterOption label="Jordan" />
//         <FilterOption label="Running" />
//         <FilterOption label="Basketball" />
//         <FilterOption label="Football" />
//         <FilterOption label="Training & Gym" />
//         <FilterOption label="Skateboarding" />
//         <FilterOption label="Golf" />
//         <FilterOption label="Tennis" />
//         <FilterOption label="Athletics" />
//         <FilterOption label="Walking" />
//       </FilterGroup>

//       <FilterGroup title="Sports Bras">
//         <FilterOption label="Low Support" />
//         <FilterOption label="Medium Support" />
//         <FilterOption label="High Support" />
//       </FilterGroup>

//       <FilterGroup title="Tops & T-Shirts">
//         <FilterOption label="Tops" />
//         <FilterOption label="T-Shirts" />
//         <FilterOption label="Jerseys" />
//       </FilterGroup>

//       <FilterGroup title="Hoodies & Sweatshirts">
//         <FilterOption label="Hoodies" />
//         <FilterOption label="Sweatshirts" />
//         <FilterOption label="Crew Necks" />
//       </FilterGroup>

//       <FilterGroup title="Jackets">
//         <FilterOption label="Lightweight Jackets" />
//         <FilterOption label="Fleece Jackets" />
//         <FilterOption label="Insulated Jackets" />
//       </FilterGroup>

//       <FilterGroup title="Trousers & Tights">
//         <FilterOption label="Trousers" />
//         <FilterOption label="Tights" />
//         <FilterOption label="Joggers" />
//       </FilterGroup>

//       <FilterGroup title="Shorts">
//         <FilterOption label="Running Shorts" />
//         <FilterOption label="Gym Shorts" />
//         <FilterOption label="Casual Shorts" />
//       </FilterGroup>

        
//        <FilterGroup title="Tracksuits" />
      

//       <FilterGroup title="Jumpsuits & Rompers" />

//       <FilterGroup title="Skirts & Dresses" />

//       <FilterGroup title="Socks" />

//       <FilterGroup title="Accessories & Equipment" /> 

//       <FilterGroup title="Gender">
//         <FilterOption label="Men" />
//         <FilterOption label="Women" />
//         <FilterOption label="Unisex" />
//         <FilterOption label="Kids" />
//         <FilterOption label="Boys" />
//         <FilterOption label="Girls" />
//       </FilterGroup>

//       <FilterGroup title="Shop By Price">
//         <FilterOption label="Under ₹ 2 500.00" />
//         <FilterOption label="₹ 2 501.00 - ₹ 7 500.00" />
//         <FilterOption label="Over ₹ 7 500.00" />
//       </FilterGroup>
//     </div>
//   )
// }

