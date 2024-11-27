import Rooms from "@/components/rooms/page";
import Services from "@/components/services/page";

export default function Home() {
  return (
    <div className="container">
      <h1>Next.js + TypeScript + Tailwind CSS</h1>
      <Rooms />
      <Services />
    </div>
  );
}
