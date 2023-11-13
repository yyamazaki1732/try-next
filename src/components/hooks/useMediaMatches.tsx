import { useEffect, useState } from "react";

export default function useMediaMatches(BREAK_POINT: number, currentWidth: number) {
    const [mediaMatches, setMediaMatches] = useState(null);

    useEffect(() => {
        setMediaMatches(currentWidth >= BREAK_POINT ? true : false)
    })
    console.log("mediaMatches",mediaMatches)
    return mediaMatches;
}