import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

// Detail 서버 컴포넌트에
// props 다이나믹 라우터에 params 가 들어있다
const Detail = async (props)=>{

    const {id} = await props.params

    const db = (await  connectDB).db("next_forum")
    let result = await  db.collection("post").findOne({_id: new ObjectId(id)})




    return(
     <div>
         <h4>상세페이지</h4>
         <h4>{result.title}</h4>
         <p>{result.content}</p>
     </div>
    )
}

export default Detail