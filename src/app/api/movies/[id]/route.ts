import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/lib/mongoose";
import Movie from "@/models/movie";

export async function GET(req: NextRequest, {params: {id}}: any) {
    try {
  
      await connectToDB();
  
      const movie = await Movie.findOne({_id: id});
        
      if (movie === null) {
        return NextResponse.json({message: "Movie not found"}, {status: 404});
      } else {
        return NextResponse.json({message: "Successful", data: movie});
      }
    } catch (error: any) {
      return NextResponse.json({ message: "Movie not found", error: error.message }, { status: 500 });
  }
  
}