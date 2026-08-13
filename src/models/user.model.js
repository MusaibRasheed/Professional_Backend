import mongoose {schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userschema = newschema(
    {
        username{
            type:string,
            require:true,
            unique:true,
            lowercase:true,
            index:true
            trim:true
        },
        email{
            type:string,
            require:true,
            unique:true,
            lowercase:true,
            trim:true
        },
        Fullname{
            type:string,
            require:true,
            lowercase:true,
            index:true,
            trim: true
        },
        Avatar{
            type:string //cloundary url
            require:true
        },
        coverImage{
            type:string //cloundary url
        },
        password{
            type: string
            required:[true,"password is required"]
        },
        refreshtoken{
            type:string
        }

    },
    {Timestamp:true}
)
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)

    userSchema.methods.generateAcessToken=function(){
        return jwt.sign(
            {
                _id:this.id,
                username:this.username,
                fullname:this.fullname
            },
            process.env.generateAcessToken
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY
            }
        )
    }
    userSchema.methods.generaterefreshToken=function(){
        return jwt.sign(
            {
                _id:this.id

            },
            process.env.REFRESHTOKENSECRET
            {
                expiresIn:process.env.REFRESH_TOKEN_EXPIRY
            }
        )
    }

export const user = mongoose.model("user", userschema)



