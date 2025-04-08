"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaCalendarAlt, FaClock, FaHome, FaMoneyBillWave, FaStar } from "react-icons/fa";

export default function Detail() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [price, setPrice] = useState(350000);
  const [isHoveringNext, setIsHoveringNext] = useState(false);

  // ข้อมูล dropdown
  const locations = [
    "ບ້ານ +ຫ້ອງນອນຫນຶ່ງຫ້ອງ",
    "ບ້ານ + 2 ຫ້ອງນອນ",
    "ອາພາດເມັນ 1 ຫ້ອງນອນ",
    "ອາພາດເມັນ 2 ຫ້ອງນອນ"
  ];

  const times = ["2 ຊມ", "3 ຊມ", "4 ຊມ", "5 ຊມ", "6 ຊມ"];

  // สีสันแบบ gradient
  const gradients = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600",
    secondary: "bg-gradient-to-r from-green-400 to-blue-500",
    danger: "bg-gradient-to-r from-red-500 to-pink-500",
    warning: "bg-gradient-to-r from-yellow-400 to-orange-500"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-50 to-blue-50"
    >
      {/* Animated Header */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className={`w-full p-4 ${gradients.primary} text-white shadow-lg`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <FaStar className="text-yellow-300 text-xl" />
            </motion.div>
            <span className="font-bold">Clean House</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="hidden sm:inline-block">Customer Service</span>
            <span className="font-mono">020-966-11479</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Logo Section */}
      <motion.header
        className={`w-full p-4 ${gradients.secondary} shadow-md`}
        whileHover={{ scale: 1.01 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-4"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.7 }}
              className="relative w-12 h-12"
            >
              <Image 
                src="/home.jpg" 
                alt="Clean House Logo" 
                fill
                className="rounded-full border-4 border-white shadow-lg object-cover"
              />
            </motion.div>
            <motion.h1 
              className="text-xl font-bold text-white"
              animate={{ 
                textShadow: ["0 0 8px rgba(255,255,255,0.3)", "0 0 16px rgba(255,255,255,0.6)", "0 0 8px rgba(255,255,255,0.3)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ບໍລິການທຳຄວາມສະອາດ
            </motion.h1>
          </motion.div>
          
          <motion.select 
            className="border-0 p-2 rounded-lg bg-white bg-opacity-90 shadow-md focus:ring-2 focus:ring-purple-500"
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
          >
            <option value="lo">🇱🇦 ລາວ</option>
            <option value="th">🇹🇭 ไทย</option>
            <option value="en">🇺🇸 English</option>
          </motion.select>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-full max-w-2xl my-8 px-4"
      >
        {/* Title with Floating Animation */}
        <motion.div
          className="text-center my-10"
          animate={{ 
            y: [0, -5, 0],
            textShadow: ["0 0 0px #000", "0 0 5px rgba(0,0,0,0.1)", "0 0 0px #000"]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <h1 className="text-3xl font-bold text-gray-800">
            ບໍລິການທຳຄວາມສະອາດ
          </h1>
          <motion.p 
            className="text-blue-600 mt-2"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ເລືອກບໍລິການທີ່ທ່ານຕ້ອງການ
          </motion.p>
        </motion.div>

        {/* Form Container with Glassmorphism Effect */}
        <motion.div
          className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white border-opacity-30"
          whileHover={{ boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
        >
          {/* Location Selection */}
          <motion.div
            className="mb-8"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div className="flex items-center mb-3">
              <FaHome className="text-blue-500 mr-2 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">
                ທ່ານຕ້ອງການໃຊ້ ສະຖານທີ່ໃດ
              </h2>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className={`border-2 border-blue-200 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent ${gradients.primary} bg-clip-text text-transparent`}
              >
                <option value="" disabled className="text-gray-500">
                  ຊື່ບ້ານ ເມືອງ ເເຂວງ
                </option>
                {locations.map((loc, index) => (
                  <option 
                    key={index} 
                    value={loc}
                    className="text-gray-800"
                  >
                    {loc}
                  </option>
                ))}
              </select>
            </motion.div>
          </motion.div>

          {/* Service Type */}
          <motion.div
            className="mb-8"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          >
            <motion.p className="text-gray-600 mb-3 flex items-center">
              <FaHome className="text-green-500 mr-2" />
              ກະລຸນາເລືອກປະເພດໃຫ້ບໍລິການ...
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <select
                className={`border-2 border-green-200 p-3 rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-transparent ${gradients.secondary} bg-clip-text text-transparent`}
              >
                {locations.map((loc, index) => (
                  <option key={index} value={loc} className="text-gray-800">
                    {loc}
                  </option>
                ))}
              </select>
            </motion.div>
          </motion.div>

          {/* Time Selection */}
          <motion.div
            className="mb-8"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <motion.div className="flex items-center mb-3">
              <FaClock className="text-purple-500 mr-2 text-xl" />
              <p className="text-gray-600">ເເນະນຳ 2 ຊມ - 2ຊມ. 30 ນາທີ</p>
            </motion.div>
            
            <motion.ul className="list-disc list-inside text-gray-600 mb-4 pl-5">
              <motion.li 
                whileHover={{ scale: 1.05, x: 5 }}
                className="mb-1"
              >
                1:30
              </motion.li>
            </motion.ul>
            
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className={`border-2 border-purple-200 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500 focus:border-transparent ${gradients.warning} bg-clip-text text-transparent`}
              >
                {times.map((time, index) => (
                  <option key={index} value={time} className="text-gray-800">
                    {time}
                  </option>
                ))}
              </select>
            </motion.div>
          </motion.div>

          {/* Date Picker */}
          <motion.div
            className="mb-8"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          >
            <motion.div className="flex items-center mb-3">
              <FaCalendarAlt className="text-red-500 mr-2 text-xl" />
              <p className="text-gray-600">
                ທ່ານຕ້ອງການໃຊ້ບໍລິການນີ້ເມື່ອໃດ
              </p>
            </motion.div>
            
            <motion.p className="text-sm text-red-500 mb-2">
              *ບໍ່ລວມເວລາພັກຂອງພະນັດກງານ
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className={`border-2 border-red-200 p-3 rounded-lg w-full focus:ring-2 focus:ring-red-500 focus:border-transparent ${gradients.danger} bg-clip-text text-transparent`}
                min={new Date().toISOString().split('T')[0]}
              />
            </motion.div>
          </motion.div>

          {/* Price Input */}
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
          >
            <motion.div className="flex items-center mb-3">
              <FaMoneyBillWave className="text-yellow-500 mr-2 text-xl" />
              <p className="text-gray-600">
                ຄ່າບໍລິການລວມທັງຫມົດ (ບໍ່ລວມພາສີ)
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={`border-2 border-yellow-200 p-3 rounded-lg w-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${gradients.warning} bg-clip-text text-transparent`}
                min="0"
                step="1000"
              />
              <motion.span 
                className="absolute right-3 top-3 text-gray-500"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                LAK
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Next Button with Floating Animation */}
        <motion.div
          className="text-center mt-10 mb-10"
          onHoverStart={() => setIsHoveringNext(true)}
          onHoverEnd={() => setIsHoveringNext(false)}
        >
          <Link href="/Review" passHref>
            <motion.button
              className={`px-8 py-4 rounded-xl text-white font-bold text-lg shadow-lg ${gradients.primary} relative overflow-hidden`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span className="relative z-10 flex items-center justify-center">
                ໜ້າຕໍ່ໄປ
                <motion.div
                  animate={{ x: isHoveringNext ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  className="ml-2"
                >
                  <FaArrowRight />
                </motion.div>
              </motion.span>
              
              {/* Animated background */}
              <motion.div
                className={`absolute inset-0 ${gradients.secondary} opacity-0`}
                animate={{ opacity: isHoveringNext ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating particles */}
              <AnimatePresence>
                {isHoveringNext && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: Math.random() * 100 - 50,
                          y: Math.random() * 50 - 25
                        }}
                        transition={{ 
                          duration: 1.5,
                          delay: i * 0.1
                        }}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                          left: "50%",
                          top: "50%"
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-100 rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
} 