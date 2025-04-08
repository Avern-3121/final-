import Image from "next/image";
import Avern from "@/public/Avern-3121.jpg";
import Any from "@/public/Any-1234.jpg";
import ValidationError from "@/public/valentint-1234.jpg";
import "../style.css"; // หรือใช้ CSS Module ก็ได้

export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <h2>Avern</h2>
        <Image src={Avern} alt="Avern" width={100} height={200} />
        ຮັບຜິດຊອບຫນ້າ Sevrice,Details,Review
      </div>
      <div className="card">
        <h2>Any</h2>
        <Image src={Any} alt="Any" width={100} height={200} />
        ຮັບຜິດຊອຍຫນ້າ login,Choosse_service
      </div>
      <div className="card">
        <h2>Valentint</h2>
        <Image src={ValidationError} alt="Valentint" width={100} height={200} />
        ຮັບຜິດຊອບຫນ້າ home,
      </div>
    </div>
  );
}
