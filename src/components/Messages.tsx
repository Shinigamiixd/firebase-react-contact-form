import React, { useEffect, useState } from "react"
import db from "../services/firebase_config"
import { collection, getDocs } from "@firebase/firestore"

const Messages = () => {
    const [data, setData] = useState<Array<object>>([])

    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "messages"))
            const newData = querySnapshot.docs.map((doc) => doc.data())
            setData(newData)
        }

        getData()
    }, [])

    return (
        <div>
            {data.map((item: any, index: number) => (
                    <ul key={index}>
                        <li>{item.name}</li>
                        <li>{item.email}</li>
                        <li>{item.message}</li>
                    </ul>
                )
            )}
        </div>
    )
}

export default Messages
