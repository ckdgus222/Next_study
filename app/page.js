
import { connectDB } from "@/util/database";



export default async function Home() {


   const db = (await connectDB).db("next_forum")
   let result = await db.collection('post').find().toArray()
   console.log(result)
  

  return (
     <div>{result[0].content}</div>
  );
}
