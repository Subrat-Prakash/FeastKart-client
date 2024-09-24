import Hero from "@/Component/Hero";
import Carousel from "@/Component/Carousel";
import HotelCards from "@/Component/HotelCards";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FeastKart | Food Delivery App | Order Food Online | Zomato clone",
  description: "FeastKart is a leading food delivery web app offering a variety of cuisines from top restaurants. Order food online and get fast delivery right to your doorstep.",
  keywords: "food delivery, order food online, FeastKart, online food delivery, fast food delivery, restaurant delivery, local restaurants, best food delivery app",
};
export default function Home() {
  return (
    <div className=" bg-yellow-50"> {/* Ensure no horizontal overflow */}
      <Hero />
      <Carousel />
      <HotelCards />
    </div>
  );
}
