import clientPromise from "../../lib/dbconnect";

export async function GET() {
  try {
    // Establish connection with the database
    const client = await clientPromise;
    const db = client.db("Suite-Spot");
    const collection = db.collection("rooms");

    // Fetch all rooms from the collection
    const rooms = await collection.find().toArray();
    console.log(rooms);

    return new Response(JSON.stringify({ success: true, data: rooms }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error fetching rooms:", err);

    return new Response(
      JSON.stringify({ success: false, message: "Failed to fetch rooms!" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
