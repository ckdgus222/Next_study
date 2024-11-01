import {connectDB} from "@/util/database";

const List = async (req,res)=>{
    const listData = (await connectDB).db("next_forum")
    const data = await  listData.collection("post").find().toArray();

     return res.status(200).send(data)


}

export default  List