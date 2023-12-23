import { useEffect, useState } from "react";

export function SpanMove() {
    const makeSpan = () => {
        const temp = [];
        for (let i = 0; i < 15; i++) {
            temp[i] = <li key={i}>CELLTRION</li>
        }
        return temp;
    }

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="fbx" style={{ left: `-${scrollPosition}px` }}>
            <div className="tbx txt-ani1">
                <ul>
                    {makeSpan()}
                </ul>
                <ul>
                    {makeSpan()}
                </ul>
            </div>
        </div>
    );
}