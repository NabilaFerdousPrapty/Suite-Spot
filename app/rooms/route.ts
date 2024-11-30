import dbConnect from "@/lib/mongodb";
import Room from "@/models/Room";

export async function GET() {
  await dbConnect();

    try {
      const rooms = await Room.find();
      console.log(rooms);
     
    }catch(err){
console.log(err);
    }
  
}
