import { Schema, model, models } from "mongoose";

const movieSchema = new Schema (
    {
        _id: String,
        title: String,
        plot: String,
        year: Number
    }
)

const Movie = models.Movie || model("Movie", movieSchema);

export default Movie;