'use client';

import Image from 'next/image';
import { FaPhone, FaFacebook, FaStar, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

import houseclean from '@/public/home.jpg';
import maid1 from '@/public/maebarn-123.jpg'; // Replace with your actual maid images
import maid2 from '@/public/maebarn-1234.jpg';
import maid3 from '@/public/maebarn-12345.jpg';

export default function Home() {
  const [ratings, setRatings] = useState([5, 4, 5]); // Ratings for each maid
  const [selectedMaid, setSelectedMaid] = useState<number | null>(null);

  const maids = [
    {
      id: 1,
      name: "ນາງໄ່ກ່ ຫານາໄກ່",
      locations: [
        "ຢູ່ບ້ານ ພານທອງ ຈັນທະບູ ນະຄອນຫຼວງ",
        "ຢູ່ບ້ານ ດອນກອຍ ເມືອງສີສັດຕະນາກ ນະຄອນຫຼວງ"
      ],
      experience: "ມີປະສົບການຫຼາຍກວ່າ 5 ປີ ສາມາດທຳຄວາມສະອາດບ້ານໄດ້ຢ່າງດີເຢັ້ມ",
      image: maid1
    },
    {
      id: 2,
      name: "ນາງພາ ນະຕອນ",
      locations: [
        "ຢູ່ບ້ານ ດອນກອຍ ເມືອງສີສັດຕະນາກ ນະຄອນຫຼວງ"
      ],
      experience: "ມີປະສົບການຫຼາຍກວ່າ 5 ປີ ສາມາດທຳຄວາມສະອາດໄດ້",
      image: maid2
    },
    {
      id: 3,
      name: "ນາງພຶມ ພຶມນະພາ",
      locations: [
        "ຢູ່ບ້ານໂດນ ເມືອງສີສັດຕະນາກ ນະຄອນຫຼວງ"
      ],
      experience: "ມີປະສົບການຫຼາຍກວ່າ 10 ປີ ສາມາດທຳຄວາມສະອາດໄດ້",
      image: maid3
    }
  ];

  const handleMaidSelect = (id: number) => {
    setSelectedMaid(id === selectedMaid ? null : id);
  };

  const handleNext = () => {
    if (selectedMaid) {
      alert(`ທ່ານໄດ້ເລືອກ ${maids.find(m => m.id === selectedMaid)?.name} ເປັນຜູ້ໃຫ້ບໍລິການ`);
      // Here you would typically navigate to the next step
    } else {
      alert("ກະລຸນາເລືອກຜູ້ໃຫ້ບໍລິການ");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
      {/* Header */}
      <div className="flex items-center justify-between w-full bg-blue-500 text-white p-2 px-6 border border-black">
        <div className="flex items-center space-x-4">
          <span className="font-bold">Customer Service</span>
          <span className="flex items-center space-x-1">
            <FaPhone /> <span>02096611479</span>
          </span>
          <span className="flex items-center space-x-1">
            <FaFacebook /> <span>Clean House</span>
          </span>
        </div>
        <select className="border p-1 rounded cursor-pointer bg-white text-black">
          <option value="th">TH</option>
          <option value="lo">ລາວ</option>
          <option value="en">EN</option>
        </select>
      </div>

      {/* Logo and title */}
      <div className="bg-green-400 w-full flex items-center justify-between p-4 px-6 border border-black">
        <div className="flex items-center space-x-4">
          <Image src={houseclean} alt="houseclean" width={50} height={50} />
          <h1 className="text-xl font-bold text-purple-700">Clean House</h1>
        </div>
      </div>

      {/* Main content */}
      <button className="bg-white p-3 rounded shadow-md my-4 text-lg border border-black hover:bg-gray-200 transition-colors duration-300">
        ເລືອກຜູ້ໃຫ້ບໍລິການດ້ວຍຕົວທ່ານເອງ
      </button>

      {/* Maid Cards */}
      {maids.map((maid, index) => (
        <div 
          key={maid.id}
          onClick={() => handleMaidSelect(maid.id)}
          className={`bg-white rounded-lg shadow-lg p-4 my-4 w-full max-w-md border-2 cursor-pointer transition-all duration-200 ${
            selectedMaid === maid.id 
              ? 'border-blue-500 transform scale-105 shadow-xl' 
              : 'border-black hover:border-blue-300'
          }`}
        >
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image 
                src={maid.image} 
                alt={maid.name} 
                width={100} 
                height={120} 
                className="rounded-full border border-black object-cover h-24 w-24"
              />
              {selectedMaid === maid.id && (
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  ✓
                </div>
              )}
            </div>
            <div>
              <h2 className="font-bold text-lg">{maid.name}</h2>
              {maid.locations.map((location, i) => (
                <p key={i} className="text-1xl font-bold">{location}</p>
              ))}
              <p className="text-sm text-gray-600">{maid.experience}</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < ratings[index] ? "text-yellow-400" : "text-gray-300"} 
                  />
                ))}
                <span className="text-black text-sm ml-1">({ratings[index]}.0)</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Next Button with animation */}
      <Link 
          href="/Details" 
          className="bg-white p-2 rounded shadow-md text-sm border border-black hover:bg-gray-200 transition-colors duration-300"
        >
         <button 
        onClick={handleNext}
        className={`mt-6 mb-10 flex items-center justify-center bg-blue-500 text-white py-3 px-8 rounded-lg border border-black hover:bg-blue-600 transition-colors duration-300 ${
          selectedMaid ? 'animate-bounce' : ''
        }`}
      >
        ຖັດໄປ
        <FaArrowRight className="ml-2" />
      </button>
        </Link>

      {/* Selected maid confirmation (appears when a maid is selected) */}
      {selectedMaid && (
        <div className="fixed bottom-0 left-0 right-0 bg-green-100 p-4 border-t border-black text-center">
          ທ່ານໄດ້ເລືອກ {maids.find(m => m.id === selectedMaid)?.name} ເປັນຜູ້ໃຫ້ບໍລິການ
        </div>
      )}
    </div>
  );
}