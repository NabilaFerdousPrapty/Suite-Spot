import clientPromise from "@/lib/mongodb"; // Import MongoDB client
import { NextResponse } from "next/server"; // Import Next.js response utility

/**
 * POST handler for adding a new room to the database.
 * Expects a JSON payload with 'name', 'location', and other room details.
 */
export async function POST(req: Request) {
  try {
    // Parse the JSON body from the request
    const body = await req.json();

    // Destructure fields from the request body
    const { name, price, area } = body;

    // Validate required fields
    if (!name) {
      return NextResponse.json({ success: false, message: "Name is required!" }, { status: 400 });
    }

    // Get the MongoDB client and connect to the database and collection
    const client = await clientPromise;
    const db = client.db("Suite-Spot");
    const collection = db.collection("rooms");

    // Insert the room document into the collection
    const result = await collection.insertOne({
      name,
      price: price || null, // Use null as default for optional fields
      area: area || null,
      createdAt: new Date(),
    });

    // Return success response with the result of the insertion
    return NextResponse.json({
      success: true,
      message: "room added successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Error posting room:", error); // Log errors for debugging
    return NextResponse.json(
      { success: false, message: "Failed to add room!" },
      { status: 500 } // Internal Server Error
    );
  }
}

/**
 * GET handler for retrieving all rooms from the database.
 */
export async function GET() {
  try {
    // Get the MongoDB client and connect to the database and collection
    const client = await clientPromise;
    const db = client.db("Suite-Spot");
    const collection = db.collection("rooms");

    // Fetch all room documents from the collection
    const rooms = await collection.find().toArray();

    // Return success response with the fetched rooms
    return NextResponse.json({
      success: true,
      data: rooms,
    });
  } catch (error) {
    console.error("Error fetching rooms:", error); // Log errors for debugging
    return NextResponse.json(
      { success: false, message: "Failed to fetch rooms!" },
      { status: 500 } // Internal Server Error
    );
  }
}
