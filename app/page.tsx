import Rooms from "@/components/rooms/page";
import Services from "@/components/services/page";

import Home from "@/components/Home/Home";
export default function HomePage() {
  return (
    <div className="">
      <Home />
      <Rooms />
      <Services />
    </div>
  );
}
