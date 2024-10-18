import Image from "next/image";
import banner from "../../asset/banner.jpg"
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
export default function Home() {
  return (
   <div>
   <Image src={banner} alt="banner" width={2000} height={1000} className="w-screen"/>
   <Collections/>
   <ProductList/>
   </div>
  );
}
