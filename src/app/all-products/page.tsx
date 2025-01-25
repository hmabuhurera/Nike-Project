import Image from "next/image";


export default function Home() {
    const products = Array.from({ length: 90 }, (_, index) => ({
        id: index + 1,
        image:`/nphoto/All Products/image ${index +1}.png`,
        name: `Nike Air Force ${index + 1}`,
        description: "Men's Shoes",
        price: `₹${10795 + index * 100}`,
        imageUrl: `/product-detail${(index % 5) + 1}.jpeg`, 
    }));

    return (
        <div className="min-h-screen">

        {/* Main Content */}
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 hidden md:block bg-gray-50 border-r py-8 px-4">
                <h2 className="font-bold text-lg mb-4">New <span className="text-gray-400">(500)</span></h2>
                <ul className="space-y-2 text-gray-600">
                    <li>Shoes</li>
                    <li>Sports Bras</li>
                    <li>Tops & T-Shirts</li>
                    <li>Hoodies & Sweatshirts</li>
                    <li>Jackets</li>
                    <li>Trousers & Tights</li>
                    <li>Shorts</li>
                    <li>Tracksuits</li>
                    <li>Skirts & Dresses</li>
                    <li>Socks</li>
                    <li>Accessories</li>
                    <li>Equipment</li>
                </ul>
                <hr className="my-8" />
                <h3 className="font-semibold mt-8 mb-2">Gender</h3>
                <ul className="space-y-2 text-gray-600">
                    <li><input type="checkbox" id="men" /> <label htmlFor="men" className="cursor-pointer">Men</label></li>
                    <li><input type="checkbox" id="women" /> <label htmlFor="women" className="cursor-pointer">Women</label></li>
                    <li><input type="checkbox" id="unisex" /> <label htmlFor="unisex" className="cursor-pointer">Unisex</label></li>
                </ul>
                <hr className="my-8" />
                <h3 className="font-semibold mt-8 mb-2">Kids</h3>
                <ul className="space-y-2 text-gray-600">
                    <li><input type="checkbox" id="men" /> <label htmlFor="men" className="cursor-pointer">Boys</label></li>
                    <li><input type="checkbox" id="women" /> <label htmlFor="women" className="cursor-pointer">Girls</label></li>
                </ul>
                <hr className="my-8" />
                <h3 className="font-semibold mt-8 mb-2">Shop By Price</h3>
                <ul className="space-y-2 text-gray-600">
                    <li>
                        <input type="checkbox" id="price" />{" "}
                        <label htmlFor="price" className="cursor-pointer">Under  ₹ 2 500.00 </label>
                    </li>
                    <li>
                        <input type="checkbox" id="price" />{" "}
                        <label htmlFor="price" className="cursor-pointer"> ₹ 2 501.00 -  ₹</label>
                    </li>
                </ul>
            </div>

            {/* Product Grid */}
            <div className="w-full md:w-3/4 p-8">
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <div className="flex space-x-4">
                        <button className="text-gray-600 border px-4 py-1 rounded hover:bg-gray-100">Filter</button>
                        <select 
                            className="border px-4 py-1 rounded text-gray-600"
                            aria-label="Sort products"
                        >
                            <option>Sort By</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="font-semibold text-gray-700">{product.name}</h3>
                                <p className="text-sm text-gray-500">{product.description}</p>
                                <p className="font-bold mt-2">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)};



// 'use client'

// import Image from "next/image";
// import { useState } from "react";
// import { Filter, X } from 'lucide-react';

// export default function Home() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const products = Array.from({ length: 90 }, (_, index) => ({
//         id: index + 1,
//         image: `/nphoto/All Products/image ${index + 1}.png`,
//         name: `Nike Air Force ${index + 1}`,
//         description: "Men's Shoes",
//         price: `₹${10795 + index * 100}`,
//         imageUrl: `/product-detail${(index % 5) + 1}.jpeg`,
//     }));

//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     return (
//         <div className="min-h-screen bg-gray-100">
//             {/* Header */}
//             <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
//                 <div className="container mx-auto flex justify-between items-center">
//                     <h1 className="text-xl font-bold">Nike Store</h1>
//                     <button
//                         onClick={toggleSidebar}
//                         className="md:hidden bg-gray-200 p-2 rounded-full"
//                         aria-label="Toggle filters"
//                     >
//                         <Filter size={20} />
//                     </button>
//                 </div>
//             </header>

//             {/* Main Content */}
//             <div className="flex flex-col md:flex-row">
//                 {/* Sidebar */}
//                 <div
//                     className={`${
//                         isSidebarOpen ? 'fixed inset-0 z-20 bg-white' : 'hidden'
//                     } md:relative md:block md:w-1/4 bg-gray-50 border-r py-8 px-4 overflow-y-auto`}
//                 >
//                     <div className="flex justify-between items-center mb-4 md:hidden">
//                         <h2 className="font-bold text-lg">Filters</h2>
//                         <button onClick={toggleSidebar} aria-label="Close filters">
//                             <X size={24} />
//                         </button>
//                     </div>
//                     <h2 className="font-bold text-lg mb-4">New <span className="text-gray-400">(500)</span></h2>
//                     <ul className="space-y-2 text-gray-600">
//                         <li>Shoes</li>
//                         <li>Sports Bras</li>
//                         <li>Tops & T-Shirts</li>
//                         <li>Hoodies & Sweatshirts</li>
//                         <li>Jackets</li>
//                         <li>Trousers & Tights</li>
//                         <li>Shorts</li>
//                         <li>Tracksuits</li>
//                         <li>Skirts & Dresses</li>
//                         <li>Socks</li>
//                         <li>Accessories</li>
//                         <li>Equipment</li>
//                     </ul>
//                     <hr className="my-8" />
//                     <h3 className="font-semibold mt-8 mb-2">Gender</h3>
//                     <ul className="space-y-2 text-gray-600">
//                         <li><input type="checkbox" id="men" /> <label htmlFor="men" className="cursor-pointer">Men</label></li>
//                         <li><input type="checkbox" id="women" /> <label htmlFor="women" className="cursor-pointer">Women</label></li>
//                         <li><input type="checkbox" id="unisex" /> <label htmlFor="unisex" className="cursor-pointer">Unisex</label></li>
//                     </ul>
//                     <hr className="my-8" />
//                     <h3 className="font-semibold mt-8 mb-2">Kids</h3>
//                     <ul className="space-y-2 text-gray-600">
//                         <li><input type="checkbox" id="boys" /> <label htmlFor="boys" className="cursor-pointer">Boys</label></li>
//                         <li><input type="checkbox" id="girls" /> <label htmlFor="girls" className="cursor-pointer">Girls</label></li>
//                     </ul>
//                     <hr className="my-8" />
//                     <h3 className="font-semibold mt-8 mb-2">Shop By Price</h3>
//                     <ul className="space-y-2 text-gray-600">
//                         <li>
//                             <input type="checkbox" id="price1" />{" "}
//                             <label htmlFor="price1" className="cursor-pointer">Under ₹ 2 500.00 </label>
//                         </li>
//                         <li>
//                             <input type="checkbox" id="price2" />{" "}
//                             <label htmlFor="price2" className="cursor-pointer"> ₹ 2 501.00 - ₹ 5 000.00</label>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Product Grid */}
//                 <div className="w-full md:w-3/4 p-4 md:p-8">
//                     <div className="flex flex-col sm:flex-row justify-between items-center mb-6 border-b pb-4">
//                         <div className="flex space-x-4 mb-4 sm:mb-0">
//                             <button 
//                                 onClick={toggleSidebar}
//                                 className="md:hidden text-gray-600 border px-4 py-1 rounded hover:bg-gray-100"
//                             >
//                                 Filter
//                             </button>
//                             <select 
//                                 className="border px-4 py-1 rounded text-gray-600"
//                                 aria-label="Sort products"
//                             >
//                                 <option>Sort By</option>
//                                 <option>Price: Low to High</option>
//                                 <option>Price: High to Low</option>
//                                 <option>Newest</option>
//                             </select>
//                         </div>
//                         <p className="text-gray-600 text-sm">Showing {products.length} results</p>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
//                         {products.map((product) => (
//                             <div key={product.id} className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300">
//                                 <Image
//                                     src={product.image}
//                                     alt={product.name}
//                                     width={300}
//                                     height={300}
//                                     className="w-full h-48 object-cover rounded-md"
//                                 />
//                                 <div className="mt-4 text-center">
//                                     <h3 className="font-semibold text-gray-700">{product.name}</h3>
//                                     <p className="text-sm text-gray-500">{product.description}</p>
//                                     <p className="font-bold mt-2">{product.price}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// 'use client'

// import Image from "next/image";
// import { useState } from "react";
// import { Filter, X, ShoppingCart, Heart } from 'lucide-react';

// export default function Home() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const products = Array.from({ length: 90 }, (_, index) => ({
//         id: index + 1,
//         image: `/nphoto/All Products/image ${index + 1}.png`,
//         name: `Nike Air Force ${index + 1}`,
//         description: "Men's Shoes",
//         price: `₹${10795 + index * 100}`,
//         rating: 4.5,
//         reviews: 120 + index,
//     }));

//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     return (
//         <div className="min-h-screen bg-gray-100">
//             {/* Header */}
//             <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
//                 <div className="container mx-auto flex justify-between items-center">
//                     <h1 className="text-xl font-bold">Nike Store</h1>
//                     <button
//                         onClick={toggleSidebar}
//                         className="md:hidden bg-gray-200 p-2 rounded-full"
//                         aria-label="Toggle filters"
//                     >
//                         <Filter size={20} />
//                     </button>
//                 </div>
//             </header>

//             {/* Main Content */}
//             <div className="flex flex-col md:flex-row">
//                 {/* Sidebar */}
//                 <div
//                     className={`${
//                         isSidebarOpen ? 'fixed inset-0 z-20 bg-white' : 'hidden'
//                     } md:relative md:block md:w-1/4 bg-gray-50 border-r py-8 px-4 overflow-y-auto`}
//                 >
//                     <div className="flex justify-between items-center mb-4 md:hidden">
//                         <h2 className="font-bold text-lg">Filters</h2>
//                         <button onClick={toggleSidebar} aria-label="Close filters">
//                             <X size={24} />
//                         </button>
//                     </div>
//                     <h2 className="font-bold text-lg mb-4">New <span className="text-gray-400">(500)</span></h2>
//                     <ul className="space-y-2 text-gray-600">
//                         <li>Shoes</li>
//                         <li>Sports Bras</li>
//                         <li>Tops & T-Shirts</li>
//                         <li>Hoodies & Sweatshirts</li>
//                         <li>Jackets</li>
//                         <li>Trousers & Tights</li>
//                         <li>Shorts</li>
//                         <li>Tracksuits</li>
//                         <li>Skirts & Dresses</li>
//                         <li>Socks</li>
//                         <li>Accessories</li>
//                         <li>Equipment</li>
//                     </ul>
//                     <hr className="my-8" />
//                     <h3 className="font-semibold mt-8 mb-2">Gender</h3>
//                     <ul className="space-y-2 text-gray-600">
//                         <li><input type="checkbox" id="men" /> <label htmlFor="men" className="cursor-pointer">Men</label></li>
//                         <li><input type="checkbox" id="women" /> <label htmlFor="women" className="cursor-pointer">Women</label></li>
//                         <li><input type="checkbox" id="unisex" /> <label htmlFor="unisex" className="cursor-pointer">Unisex</label></li>
//                     </ul>
//                     <hr className="my-8" />
//                     <h3 className="font-semibold mt-8 mb-2">Kids</h3>
//                     <ul className="space-y-2 text-gray-600">
//                         <li><input type="checkbox" id="boys" /> <label htmlFor="boys" className="cursor-pointer">Boys</label></li>
//                         <li><input type="checkbox" id="girls" /> <label htmlFor="girls" className="cursor-pointer">Girls</label></li>
//                     </ul>
//                     <hr className="my-8" />
//                     <h3 className="font-semibold mt-8 mb-2">Shop By Price</h3>
//                     <ul className="space-y-2 text-gray-600">
//                         <li>
//                             <input type="checkbox" id="price1" />{" "}
//                             <label htmlFor="price1" className="cursor-pointer">Under ₹ 2 500.00 </label>
//                         </li>
//                         <li>
//                             <input type="checkbox" id="price2" />{" "}
//                             <label htmlFor="price2" className="cursor-pointer"> ₹ 2 501.00 - ₹ 5 000.00</label>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Product Grid */}
//                 <div className="w-full md:w-3/4 p-4 md:p-8">
//                     <div className="flex flex-col sm:flex-row justify-between items-center mb-6 border-b pb-4">
//                         <div className="flex space-x-4 mb-4 sm:mb-0">
//                             <button 
//                                 onClick={toggleSidebar}
//                                 className="md:hidden text-gray-600 border px-4 py-1 rounded hover:bg-gray-100"
//                             >
//                                 Filter
//                             </button>
//                             <select 
//                                 className="border px-4 py-1 rounded text-gray-600"
//                                 aria-label="Sort products"
//                             >
//                                 <option>Sort By</option>
//                                 <option>Price: Low to High</option>
//                                 <option>Price: High to Low</option>
//                                 <option>Newest</option>
//                             </select>
//                         </div>
//                         <p className="text-gray-600 text-sm">Showing {products.length} results</p>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//                         {products.map((product) => (
//                             <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
//                                 <div className="relative">
//                                     <Image
//                                         src={product.image}
//                                         alt={product.name}
//                                         width={300}
//                                         height={300}
//                                         className="w-full h-64 object-cover object-center"
//                                     />
//                                     <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                         <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100" aria-label="Add to wishlist">
//                                             <Heart size={20} className="text-gray-600" />
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className="p-4">
//                                     <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
//                                     <p className="text-sm text-gray-500 mb-2">{product.description}</p>
//                                     <div className="flex justify-between items-center mb-2">
//                                         <p className="font-bold text-lg">{product.price}</p>
//                                         <div className="flex items-center">
//                                             <span className="text-yellow-400">★</span>
//                                             <span className="ml-1 text-sm text-gray-600">{product.rating} ({product.reviews})</span>
//                                         </div>
//                                     </div>
//                                     <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300 flex items-center justify-center">
//                                         <ShoppingCart size={18} className="mr-2" />
//                                         Add to Cart
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// 'use client'

// import Image from "next/image";
// import { useState } from "react";
// import { ChevronDown, X, Menu, ChevronUp } from 'lucide-react';

// type Product = {
//     id: number;
//     image: string;
//     tag: string;
//     name: string;
//     category: string;
//     colors: string;
//     price: string;
// };

// type FilterState = {
//     gender: string[];
//     kids: string[];
//     priceRanges: string[];
// };

// export default function Home() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [expandedSections, setExpandedSections] = useState({
//         gender: true,
//         kids: true,
//         price: true
//     });
//     const [filters, setFilters] = useState<FilterState>({
//         gender: [],
//         kids: [],
//         priceRanges: []
//     });
//     const [sortBy, setSortBy] = useState('featured');

//     const products: Product[] = [
//         {
//             id: 1,
//             image: "/nphoto/All Products/image 1.png",
//             tag: "Just In",
//             name: "Nike Air Force 1 Mid '07",
//             category: "Men's Shoes",
//             colors: "1 Colour",
//             price: "₹ 10 795.00"
//         },
//         {
//             id: 2,
//             image: "/nphoto/All Products/image 2.png",
//             tag: "Just In",
//             name: "Nike Court Vision Low Next Nature",
//             category: "Men's Shoes",
//             colors: "1 Colour",
//             price: "₹ 4 995.00"
//         },
//         {
//             id: 3,
//             image: "/nphoto/All Products/image 3.png",
//             tag: "Just In",
//             name: "Nike Air Force 1 PLT.AF.ORM",
//             category: "Women's Shoes",
//             colors: "1 Colour",
//             price: "₹ 8 695.00"
//         },
//         {
//             id: 4,
//             image: "/nphoto/All Products/image 4.png",
//             tag: "Just In",
//             name: "Nike Air Force 1 React",
//             category: "Men's Shoes",
//             colors: "1 Colour",
//             price: "₹ 13 295.00"
//         },
//         {
//             id: 5,
//             image: "/nphoto/All Products/image 5.png",
//             tag: "Promo Exclusion",
//             name: "Air Jordan 1 Elevate Low",
//             category: "Women's Shoes",
//             colors: "1 Colour",
//             price: "₹ 11 895.00"
//         },
//         {
//             id: 6,
//             image: "/nphoto/All Products/image 6.png",
//             tag: "Just In",
//             name: "Nike Standard Issue",
//             category: "Women's Basketball Jersey",
//             colors: "1 Colour",
//             price: "₹ 2 895.00"
//         }
//     ];

//     const toggleSection = (section: keyof typeof expandedSections) => {
//         setExpandedSections(prev => ({
//             ...prev,
//             [section]: !prev[section]
//         }));
//     };

//     const toggleFilter = (type: keyof FilterState, value: string) => {
//         setFilters(prev => ({
//             ...prev,
//             [type]: prev[type].includes(value)
//                 ? prev[type].filter(item => item !== value)
//                 : [...prev[type], value]
//         }));
//     };

//     const sortProducts = (products: Product[]) => {
//         switch (sortBy) {
//             case 'price-low-high':
//                 return [...products].sort((a, b) => 
//                     parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, '')));
//             case 'price-high-low':
//                 return [...products].sort((a, b) => 
//                     parseFloat(b.price.replace(/[^\d.]/g, '')) - parseFloat(a.price.replace(/[^\d.]/g, '')));
//             default:
//                 return products;
//         }
//     };

//     const filterProducts = (products: Product[]) => {
//         return products.filter(product => {
//             const genderMatch = filters.gender.length === 0 || 
//                 filters.gender.some(gender => product.category.toLowerCase().includes(gender.toLowerCase()));
            
//             return genderMatch;
//         });
//     };

//     const filteredAndSortedProducts = sortProducts(filterProducts(products));

//     return (
//         <div className="min-h-screen bg-white">
//             {/* Mobile Menu Button */}
//             <button 
//                 className="md:hidden fixed bottom-4 right-4 z-50 bg-black text-white p-3 rounded-full shadow-lg"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//                 <Menu size={24} />
//             </button>

//             {/* Header */}
//             <div className="flex justify-between items-center px-4 md:px-6 py-4 border-b">
//                 <h1 className="text-xl font-medium">New <span className="text-gray-500">(500)</span></h1>
//                 <div className="flex items-center gap-4 md:gap-6">
//                     <button 
//                         className="flex items-center gap-2 hover:text-gray-500"
//                         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//                     >
//                         {isSidebarOpen ? 'Hide' : 'Show'} Filters
//                         {isSidebarOpen ? <X size={16} /> : <ChevronDown size={16} />}
//                     </button>
//                     <div className="relative group">
//                         <button className="flex items-center gap-2 hover:text-gray-500">
//                             Sort By
//                             <ChevronDown size={16} />
//                         </button>
//                         <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg hidden group-hover:block">
//                             <div className="py-1">
//                                 <button 
//                                     className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 ${sortBy === 'featured' ? 'font-medium' : ''}`}
//                                     onClick={() => setSortBy('featured')}
//                                 >
//                                     Featured
//                                 </button>
//                                 <button 
//                                     className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 ${sortBy === 'price-low-high' ? 'font-medium' : ''}`}
//                                     onClick={() => setSortBy('price-low-high')}
//                                 >
//                                     Price: Low-High
//                                 </button>
//                                 <button 
//                                     className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 ${sortBy === 'price-high-low' ? 'font-medium' : ''}`}
//                                     onClick={() => setSortBy('price-high-low')}
//                                 >
//                                     Price: High-Low
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="flex">
//                 {/* Sidebar */}
//                 <div className={`
//                     fixed inset-0 z-40 bg-white md:relative md:z-0
//                     ${isMenuOpen ? 'block' : 'hidden'} 
//                     ${isSidebarOpen ? 'md:block' : 'md:hidden'}
//                     w-full md:w-60 border-r min-h-screen overflow-y-auto
//                 `}>
//                     <div className="p-6">
//                         {/* Mobile Close Button */}
//                         <button 
//                             className="md:hidden absolute top-4 right-4"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             <X size={24} />
//                         </button>

//                         <ul className="space-y-3 text-[15px]">
//                             <li className="hover:text-gray-600 cursor-pointer">Shoes</li>
//                             <li className="hover:text-gray-600 cursor-pointer">Sports Bras</li>
//                             <li className="hover:text-gray-600 cursor-pointer">Tops & T-Shirts</li>
//                             <li className="hover:text-gray-600 cursor-pointer">Hoodies & Sweatshirts</li>
//                             <li className="hover:text-gray-600 cursor-pointer">Jackets</li>
//                             <li className="hover:text-gray-600 cursor-pointer">Trousers & Tights</li>
//                             <li className="hover:text-gray-600 cursor-pointer">Shorts</li>
//                             <li className="hover:text-gray-600 cursor-pointer">Tracksuits</li>
//                             <li className="hover:text-gray-600 cursor-pointer">Jumpsuits & Rompers</li>
//                             <li className="hover:text-gray-600 cursor-pointer">Skirts & Dresses</li>
//                             <li className="hover:text-gray-600 cursor-pointer">Socks</li>
//                             <li className="hover:text-gray-600 cursor-pointer">Accessories</li>
//                             <li className="hover:text-gray-600 cursor-pointer">& Equipment</li>
//                         </ul>

//                         <div className="mt-8">
//                             <button 
//                                 className="flex items-center justify-between w-full py-2"
//                                 onClick={() => toggleSection('gender')}
//                             >
//                                 <span className="font-medium">Gender</span>
//                                 {expandedSections.gender ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//                             </button>
//                             {expandedSections.gender && (
//                                 <ul className="space-y-2 mt-2">
//                                     {['Men', 'Women', 'Unisex'].map((gender) => (
//                                         <li key={gender} className="flex items-center gap-2">
//                                             <input 
//                                                 type="checkbox" 
//                                                 id={gender.toLowerCase()} 
//                                                 className="rounded"
//                                                 checked={filters.gender.includes(gender)}
//                                                 onChange={() => toggleFilter('gender', gender)}
//                                             />
//                                             <label htmlFor={gender.toLowerCase()}>{gender}</label>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>

//                         <div className="mt-8">
//                             <button 
//                                 className="flex items-center justify-between w-full py-2"
//                                 onClick={() => toggleSection('kids')}
//                             >
//                                 <span className="font-medium">Kids</span>
//                                 {expandedSections.kids ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//                             </button>
//                             {expandedSections.kids && (
//                                 <ul className="space-y-2 mt-2">
//                                     {['Boys', 'Girls'].map((type) => (
//                                         <li key={type} className="flex items-center gap-2">
//                                             <input 
//                                                 type="checkbox" 
//                                                 id={type.toLowerCase()} 
//                                                 className="rounded"
//                                                 checked={filters.kids.includes(type)}
//                                                 onChange={() => toggleFilter('kids', type)}
//                                             />
//                                             <label htmlFor={type.toLowerCase()}>{type}</label>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>

//                         <div className="mt-8">
//                             <button 
//                                 className="flex items-center justify-between w-full py-2"
//                                 onClick={() => toggleSection('price')}
//                             >
//                                 <span className="font-medium">Shop By Price</span>
//                                 {expandedSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//                             </button>
//                             {expandedSections.price && (
//                                 <ul className="space-y-2 mt-2">
//                                     <li className="flex items-center gap-2">
//                                         <input 
//                                             type="checkbox" 
//                                             id="price1" 
//                                             className="rounded"
//                                             checked={filters.priceRanges.includes('under2500')}
//                                             onChange={() => toggleFilter('priceRanges', 'under2500')}
//                                         />
//                                         <label htmlFor="price1">Under ₹ 2 500.00</label>
//                                     </li>
//                                     <li className="flex items-center gap-2">
//                                         <input 
//                                             type="checkbox" 
//                                             id="price2" 
//                                             className="rounded"
//                                             checked={filters.priceRanges.includes('2501plus')}
//                                             onChange={() => toggleFilter('priceRanges', '2501plus')}
//                                         />
//                                         <label htmlFor="price2">₹ 2 501.00 - ₹</label>
//                                     </li>
//                                 </ul>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Product Grid */}
//                 <div className="flex-1 p-4 md:p-6">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//                         {filteredAndSortedProducts.map((product) => (
//                             <div key={product.id} className="group cursor-pointer">
//                                 <div className="relative mb-4">
//                                     <Image
//                                         src={product.image}
//                                         alt={product.name}
//                                         width={400}
//                                         height={400}
//                                         className="w-full aspect-square object-cover bg-[#F6F6F6]"
//                                     />
//                                 </div>
//                                 <div className="space-y-1">
//                                     <div className="flex justify-between items-start">
//                                         <span className={`text-sm font-medium ${
//                                             product.tag === "Promo Exclusion" ? "text-[#D01F45]" : "text-[#D01F45]"
//                                         }`}>
//                                             {product.tag}
//                                         </span>
//                                     </div>
//                                     <h3 className="font-medium">{product.name}</h3>
//                                     <p className="text-gray-500">{product.category}</p>
//                                     <p className="text-gray-500">{product.colors}</p>
//                                     <p className="font-medium">MRP : {product.price}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


