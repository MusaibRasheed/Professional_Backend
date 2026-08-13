import mongoose {schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoschema= newschema(
    {
         videoFile: {
            type: String, //cloudinary url
            required: true
        },
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: Number, 
            required: true
        },
        views: {
            type: Number,
            default: 0 //becuse the views stsrt from 0 
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"

    },
    {timestamps:true}
)

videoschema.plugin(mongooseaggregatepaginate)

export const video = mongoose.model("video",videoschema)
