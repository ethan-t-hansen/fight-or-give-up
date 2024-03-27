import { Schema, model, models } from "mongoose";

const fightSchema = new Schema (
    {
        _id: String,
        title: String,
        url: String,
        fights: Number,
        giveups: Number
    }
)

const Fight = models.Fight || model("Fight", fightSchema);

export default Fight;