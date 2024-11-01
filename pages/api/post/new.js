import {connectDB} from "@/util/database";


const handler = async (req, res) => {
    try {
        if (req.method === "POST") {
            if (req.body.title !== "" && req.body.content !== "") {
                const db = (await connectDB).db("next_forum");
                const postData = await db.collection("post");
                const userData = req.body
                await postData.insertOne(userData);
                return res.status(200).redirect('/list')
            }
            return res.status(401).json("빈칸 보내지마라")
        }
    } catch (error) {
        req.status = 404;
    }


}

export default handler