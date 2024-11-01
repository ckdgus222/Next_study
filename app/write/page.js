
const Write = ()=>{
    return(
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="글제목 입력"/>
                <input name="content"/>
                <button type={"submit"}>버튼</button>
            </form>
        </div>
    )
}

export default  Write