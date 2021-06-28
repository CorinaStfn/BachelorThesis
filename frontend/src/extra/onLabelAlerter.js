import {useEffect, useRef, useState} from "react";

export const useOnLabelAlerter = (value) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(value);

    const handleClickOnLabel = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisible(true);
            console.log(visible);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOnLabel, true);

        return () => {
            document.removeEventListener('click', handleClickOnLabel, true);
        };
    }, [ref]);

    return { visible, setVisible, ref };
};