

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm">
      {/* Top Section */}
      <div className="max-w-1440 max-h-331 mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-600">
        {/* Column 1 */}
        <div className="w-[1372] h-[213]">
        <h3 className="font-semibold mb-2">FIND A STORE</h3>
          <ul className="space-y-2 w-[245.25] h-[169.63]">
           <li><Link href="#" className="hover:underline">BECOME A MEMBER</Link></li>
            <li><Link href="#" className="hover:underline">SING UO FOR EMAIL</Link></li>
            <li> <Link href="#" className="hover:underline">SEND AS FEEDBACK</Link></li>
            <li> <Link href="#" className="hover:underline">STUDENT DISCOUNT</Link></li>
          </ul>
        </div>
        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-2">GET HELP</h3>
          <ul className="space-y-2 w-[245.25] h-[210]">
            <li><Link href="#" className="hover:underline">Order Status</Link></li>
            <li><Link href="#" className="hover:underline">Delivery</Link></li>
            <li><Link href="#" className="hover:underline">Returns</Link></li>
            <li><Link href="#" className="hover:underline">Payment Options</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us Nike.com Inquiries</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us All other Inquiries</Link></li>

          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-2">ABOUT NIKE</h3>
          <ul className="space-y-2 w-[245.25] h-[151]">
            <li><Link href="#" className="hover:underline">News</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Investors</Link></li>
            <li><Link href="#" className="hover:underline">Sustainability</Link></li>
          </ul>
        </div>
        {/* Column 4 */}
        <div className="flex space-x-4 justify-center md:justify-end pr-2">
          <FaTwitter className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaFacebookF className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaYoutube className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaInstagram className="text-xl hover:text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-400 text-xs">
        <div className="flex items-center space-x-2 w-[1372] h-[62]">
          <HiOutlineLocationMarker />
          <span>Pakistan</span>
          <span>© 2023 Nike, Inc. All Rights Reserved</span>
        </div>
        <div className="flex space-x-6 w-[680] h-[46]">
          <Link href="#" className="hover:underline">Guides</Link>
          <Link href="#" className="hover:underline">Terms of Sale</Link>
          <Link href="#" className="hover:underline">Terms of Use</Link>
          <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
