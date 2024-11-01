import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";
import Edit from "@/app/edit/[id]/Edit";

const EditPage = async (props) => {
    const resolve = await props.params
    const { id } = resolve


    const db = (await connectDB).db("next_forum");
    const result = await db.collection("post").findOne({_id: new ObjectId(id)});




    return (
        <div className="p-20">
            <h4>수정페이지</h4>
            <Edit _id={result._id.toString()} title={result.title} content={result.content}/>
        </div>
    )

}

export default EditPage;