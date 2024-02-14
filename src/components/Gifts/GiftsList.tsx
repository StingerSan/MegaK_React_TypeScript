import {useEffect, useState} from "react";
import {Gift} from "../../types/gifts.ts";
import { GiftsTable } from "./GiftsTable.tsx";

export const GiftsList = () => {
    const [giftsList, setGiftsList] = useState<Gift[] | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/gift');
            const data = await res.json();
            setGiftsList(data.giftsList);
        })()
    },[])

    if(giftsList === null) {
        return <p>Wczytowanie...</p>
    }

    return <>
        <h1>Gifts</h1>
        <GiftsTable gifts={giftsList}/>
    </>;
};
