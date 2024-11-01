import {connectDB} from "@/util/database";
import Link from "next/link";
import DetailLink from "@/app/list/DetailLink";
// server 컴포넌트
const List = async () => {
    const db = (await connectDB).db("next_forum");
    let data = await db.collection("post").find().toArray();



    return (
        <div className="list-bg">
            {data.map((item, i) =>
                <div className="list-item" key={i}>
                    <Link prefetch={false} href={'/detail/' + item._id}>
                        <h4>{item.title}</h4>
                    </Link>
                    <Link href={"/edit/" + item._id}>✍️</Link>
                    <p>{item.content}</p>

                </div>
            )}
        </div>
    );
};

export default List;
