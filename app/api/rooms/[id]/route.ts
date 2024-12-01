import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

// GET handler for retrieving a specific room by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, message: "Invalid room ID!" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("Suite-Spot");
    const collection = db.collection("rooms");

    const room = await collection.findOne({ _id: new ObjectId(id) });

    if (!room) {
      return NextResponse.json({ success: false, message: "Room not found!" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: room,
    });
  } catch (error) {
    console.error("Error fetching room by ID:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch room!" }, { status: 500 });
  }
}

// PATCH handler for updating a specific room by ID
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, message: "Invalid room ID!" }, { status: 400 });
    }

    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("Suite-Spot");
    const collection = db.collection("rooms");

    const updateResult = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...body, updatedAt: new Date() } }
    );

    if (updateResult.modifiedCount === 0) {
      return NextResponse.json(
        { success: false, message: "No updates made to the room!" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Room updated successfully!",
    });
  } catch (error) {
    console.error("Error updating room:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update room!" },
      { status: 500 }
    );
  }
}

// DELETE handler for deleting a specific room by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, message: "Invalid room ID!" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("Suite-Spot");
    const collection = db.collection("rooms");

    const deleteResult = await collection.deleteOne({ _id: new ObjectId(id) });

    if (deleteResult.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Room not found or already deleted!" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Room deleted successfully!",
    });
  } catch (error) {
    console.error("Error deleting room:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete room!" },
      { status: 500 }
    );
  }
}
