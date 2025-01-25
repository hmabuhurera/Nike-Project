// export default function FooterNav2() {
//     const navItems = [
//       {
//         title: "Icons",
//         links: [
//           { name: "Air Force 1", href: "#" },
//           { name: "Huarache", href: "#" },
//           { name: "Air Max 90", href: "#" },
//           { name: "Air Max 95", href: "#" },
//         ],
//       },
//       {
//         title: "Shoes",
//         links: [
//           { name: "All Shoes", href: "#" },
//           { name: "Custom Shoes", href: "#" },
//           { name: "Jordan Shoes", href: "#" },
//           { name: "Running Shoes", href: "#" },
//         ],
//       },
//       {
//         title: "Clothing",
//         links: [
//           { name: "All Clothing", href: "#" },
//           { name: "Modest Wear", href: "#" },
//           { name: "Hoodies & Pullovers", href: "#" },
//           { name: "Shirts & Tops", href: "#" },
//         ],
//       },
//       {
//         title: "Kids",
//         links: [
//           { name: "Infant & Toddler Shoes", href: "#" },
//           { name: "Kids' Shoes", href: "#" },
//           { name: "Kids' Jordan Shoes", href: "#" },
//           { name: "Kids' Basketball Shoes", href: "#" },
//         ],
//       },
//     ]
  
//     return (
//       <nav className="w-full max-w-[880px] h-[192px] mx-auto px-4 py-6">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 h-full">
//           {navItems.map((section) => (
//             <div key={section.title} className="space-y-3">
//               <h2 className="font-semibold text-base">{section.title}</h2>
//               <ul className="space-y-2">
//                 {section.links.map((link) => (
//                   <li key={link.name}>
//                     <a
//                       href={link.href}
//                       className="text-sm text-muted-foreground hover:text-foreground transition-colors"
//                     >
//                       {link.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </nav>
//     )
//   }
  
export default function FooterNav2() {
  const navItems = [
    {
      title: "Icons",
      links: [
        { name: "Air Force 1", href: "#" },
        { name: "Huarache", href: "#" },
        { name: "Air Max 90", href: "#" },
        { name: "Air Max 95", href: "#" },
      ],
    },
    {
      title: "Shoes",
      links: [
        { name: "All Shoes", href: "#" },
        { name: "Custom Shoes", href: "#" },
        { name: "Jordan Shoes", href: "#" },
        { name: "Running Shoes", href: "#" },
      ],
    },
    {
      title: "Clothing",
      links: [
        { name: "All Clothing", href: "#" },
        { name: "Modest Wear", href: "#" },
        { name: "Hoodies & Pullovers", href: "#" },
        { name: "Shirts & Tops", href: "#" },
      ],
    },
    {
      title: "Kids",
      links: [
        { name: "Infant & Toddler Shoes", href: "#" },
        { name: "Kids' Shoes", href: "#" },
        { name: "Kids' Jordan Shoes", href: "#" },
        { name: "Kids' Basketball Shoes", href: "#" },
      ],
    },
  ];

  return (
    <nav className="w-full max-w-[880px] mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-full"> 
        {navItems.map((section) => (
          <div key={section.title} className="space-y-3">
            <h2 className="font-semibold text-base">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}