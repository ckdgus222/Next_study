import {connectDB} from "@/util/database";

const Time = async (req,res) =>{
    const Times = new Date().getTime()

    return res.json(Times)


}

export default Time
