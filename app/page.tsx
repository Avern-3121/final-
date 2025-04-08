"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { h1 } from "framer-motion/client";

export default function Home() {
  // สร้างข้อมูลปุ่มเมนู

  const menuItems = [
    { href: "/login", text: "Login", color: "bg-blue-500 hover:bg-blue-600" },
    { href: "/Service", text: "Service", color: "bg-purple-500 hover:bg-purple-600" },
    { href: "/Choose_service", text: "Choose_service", color: "bg-green-500 hover:bg-green-600" },
    { href: "/Details", text: "Details", color: "bg-green-500 hover:bg-green-600" },
    { href: "/Review", text: "Review", color: "bg-red-500 hover:bg-red-600" },
    { href: "/about", text: "about", color: "bg-yellow-500 hover:bg-green-600" },
  ];
  

  return (
    <div 
        
      className="min-h-screen flex flex-col items-center justify-start bg-white p-6"
      style={{
        backgroundImage: "url('/photobg.jpeg')", // เปลี่ยนจาก '/public/photobg.jpeg'
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header */}
      <motion.div 
        className="flex items-center justify-between text-white bg-blue-500 w-full p-4"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring" }}
      >
        <div className="flex items-center space-x-4">
          <span>Customer Service</span>
          <span>02096611479</span>
        </div>
        <span>Clean House</span>
      </motion.div>

      {/* Logo Header */}
      <motion.header 
        className="bg-green-400 w-full p-4 flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src="/home.jpg" 
              alt="Clean House Logo" 
              width={50} 
              height={50}
              className="rounded-full border-2 border-white"
            />
          </motion.div>
          <h1 className="text-xl font-bold text-purple-700">Clean House</h1>
        </div>
        <select className="border p-1 rounded bg-white shadow-md">
          <option value="lo">🇱🇦 ລາວ</option>
          <option value="th">🇹🇭 ไทย</option>
          <option value="en">🇺🇸 English</option>
        </select>
      </motion.header>

      {/* Main Content */}
      <motion.div
        className="bg-white bg-opacity-90 shadow-2xl rounded-2xl p-8 w-full max-w-4xl flex flex-col items-center text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)"
        }}
      >
        <motion.h1
          className="text-5xl font-bold text-gray-800 mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Welcome to Clean House
        </motion.h1>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={`${item.color} text-white text-xl md:text-2xl font-semibold px-6 py-3 rounded-lg shadow-md block w-full text-center transition-all duration-300`}
              >
                {item.text}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}