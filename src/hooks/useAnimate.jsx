import { useEffect, useState } from "react";

const useAnimate = (min, max) => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = (e) => {
            const { body, documentElement } = e.target;
            const sd = Math.max(body.scrollTop, documentElement.scrollTop);
            const sp =
                (sd /
                    (documentElement.scrollHeight -
                        documentElement.clientHeight)) *
                100;
            if (sp >= min && sp <= max) {
                setScrollPercent(sp);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollPercent, min, max]);

    return { scrollPercent };
};

export default useAnimate;
