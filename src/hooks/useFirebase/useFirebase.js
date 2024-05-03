import React, { useEffect, useState } from 'react'

export default function useFirebase(api) {

    const [firebaseApi, setFirebaseApi] = useState(api)
    const [firebaseObj, setFirebaseObj] = useState({})
    const [itemsArray, setItemsArray] = useState([])

    useEffect(() => {
        fetch(firebaseApi)
            .then(res => res.json())
            .then(data => setFirebaseObj(data))
    }, [])

    useEffect(() => {

        Object.entries(firebaseObj).forEach(item => {
            let newObj = { ...item[1], id: item[0] }
            setItemsArray(prevArray => [...prevArray, newObj])
        })

    }, [firebaseObj])

    return [itemsArray, setFirebaseApi]
}