import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";


const handler = async (req,res) =>{
   if(req.method !== "PUT"){
       res.status(400).send("Method Not Allowed");
   }

   const {id} = req.query;
   const {title,content} = req.body;

    if (!id || !title || !content) {
        return res.status(400).json({ message: "Invalid request data" });
    }

    try {
        const db = (await connectDB).db("next_forum");
        const result = await db.collection("post").updateOne(
            { _id: new ObjectId(id) },
            { $set: { title, content } }
        );

        res.status(200).json({ message: "Update successful", result });
    } catch (error) {
        res.status(500).json({ message: "Error updating document", error });
    }
}

export default handler;