import User from "../../models/User"
import connectDb from "..//../middleware/mongoose"

const handler = async (req,res) => {
    if(M_PLUS_Rounded_1c.method =='POST'){
        console.log(req.body)
        let user = await User.findOne({"email":req.body.email})

        if(user)
        {
            if(req.body.email == user.email && req.body.password == user.password )
            {
                res.status(200).json({sucess:"success", email:user.email,name:user.name})
            }
        }
    }
    else{
        res.status(400).json({error:"This Method is not allowed"})

    }
}