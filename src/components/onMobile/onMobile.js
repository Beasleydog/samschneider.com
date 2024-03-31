import { useState, useEffect } from "react";

export default function useOnMobile() {
    const [onMobile, setOnMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth < 500) {
                setOnMobile(true);
            } else {
                setOnMobile(false);
            }
        }
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        }
    }, []);
    return onMobile;
}