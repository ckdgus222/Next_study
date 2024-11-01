'use client'

import {usePathname, useRouter, useSearchParams} from "next/navigation";

const DetailLink = ({data}) => {
    let router = useRouter()
    let a = usePathname()
    let c = useSearchParams()

    return (
        <button onClick={() => {
            router.refresh()
        }}>버튼</button>
    )
}

export default DetailLink
