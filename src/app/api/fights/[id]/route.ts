import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/lib/mongoose";
import Fight from "@/models/fight";

export async function GET(req: NextRequest, { params: { id } }: any) {
  try {
    await connectToDB();

    const fight = await Fight.findOne({ _id: id });

    if (fight === null) {
      return NextResponse.json({ message: "Fight not found" }, { status: 404 });
    } else {
      return NextResponse.json({ message: "Successful", data: fight });
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: "Fight not found", error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, { params: { id } }: any) {
  try {
    const { newTitle: title, newUrl: url } = await req.json();

    const newFight = {
      title,
      url,
    };

    await connectToDB();

    await Fight.findByIdAndUpdate(id, newFight);

    return NextResponse.json(
      { message: "Fight updated successfully", data: newFight },
      { status: 500 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Unable to update fight", error: error.message },
      { status: 500 }
    );
  }
}
