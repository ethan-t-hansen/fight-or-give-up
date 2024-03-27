import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/lib/mongoose";
import Fight from "@/models/fight";

// GET ALL FIGHTS

export async function GET(req: NextRequest) {

  try {

    await connectToDB();

    const fights = await Fight.find({});

    return NextResponse.json({ message: "Successful retrieval", data: fights });
    
  } catch (error: any) {
    
    return NextResponse.json(
      { message: "Failed to get data", error: error.message },
      { status: 500 }
    );

  }
}

// POST ONE FIGHT

export async function POST(req: NextRequest) {
  try {
    const { _id, title, url, fights, giveups } = await req.json();

    const newFight = {
      _id,
      title,
      url,
      fights,
      giveups
    };

    await connectToDB();

    await Fight.create(newFight);

    return NextResponse.json(
      { message: "Fight entity added successfully", data: newFight },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to create a fight entity", error: error.message },
      { status: 500 }
    );
  }
}

// DELETE ONE FIGHT

export async function DELETE(req: NextRequest) {
  try {

    const id = req.nextUrl.searchParams.get("id");

    await connectToDB();
    
    await Fight.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Fight deleted successfully"},
      { status: 500 }
    );

  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to delete fight", error: error.message },
      { status: 500 }
    );
  }
}