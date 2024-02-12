import {useEffect, useState} from "react";
import {BinanceOneCryptoPairData} from "../../types/crypto-data.ts";

export const CryptoPrice = () => {
    const [data, setData] = useState<BinanceOneCryptoPairData[] | null>(null);
    const [pair, setPair] = useState<string>('')

    useEffect(() => {
        (async () => {
            const res = await fetch('https://api2.binance.com/api/v3/ticker/24hr');
            setData(await res.json());
        })();
    },[]);

    if (data === null) {
        return <p>Wczytywanie danych...</p>;
    }

    return <>
        <label>
            Wybierz parę kryptowalut: <br/>
            <select
                value={pair}
                onChange={event => setPair(event.target.value)}
            >

                {
                    data
                        .map(pair => (
                            <option
                                value={pair.symbol}
                                key={pair.symbol}
                            >
                                {pair.symbol}
                            </option>
                        ))
                }
            </select>
        </label>
    </>;
};
