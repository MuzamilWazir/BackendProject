import mongoose, { Schema, schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const VideoSchema = new Schema(
  {
    videoFile: {
      type: String,
      require: true,
    },

    thumbnail: {
      type: String,
      require: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    title: {
      type: String,
      require: true,
    },

    description: {
      type: String,
      require: true,
    },

    duration: {
      type: Number,
      require: true,
    },

    veiws: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

VideoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", VideoSchema);
