import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/lib/mongoose";
import Movie from "@/models/movie";

// GET ALL MOVIES

export async function GET(req: NextRequest) {
  try {

    await connectToDB();

    const movies = await Movie.find({});

    return NextResponse.json({message: "Successful", data: movies});
  } catch (error: any) {
    return NextResponse.json({ message: "Failed to get movie", error: error.message }, { status: 500 });
}
}

// POST ONE MOVIE

export async function POST(req: NextRequest) {
    try {
        
        const {_id, title, plot, year} = await
        req.json();

        const newMovie = {
            _id,
            title,
            plot,
            year
        }

        await connectToDB();

        await Movie.create(newMovie);

        return NextResponse.json({ message: "Movie added successfully", data: newMovie}, {status: 201});
    } catch (error: any) {
        return NextResponse.json({ message: "Failed to create a movie", error: error.message }, { status: 500 });
    }
}
