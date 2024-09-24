import Hero from "@/Component/Hero";
import Carousel from "@/Component/Carousel";
import HotelCards from "@/Component/HotelCards";

export default function Home() {
  return (
    <div className=" bg-yellow-50"> {/* Ensure no horizontal overflow */}
      <Hero />
      <Carousel />
      <HotelCards />
    </div>
  );
}
