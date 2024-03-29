import {useEffect, useRef, useState} from "react";

export const useOutsideAlerter = (value) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(value);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [ref]);

    return { visible, setVisible, ref };
};