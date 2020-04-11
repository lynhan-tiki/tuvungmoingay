import { useEffect, useState } from "react";

export default (() => {
    let cb = null;
    return (initTime, stop) => {
        const [count, setCount] = useState(initTime || 0);
        const reset = time => setCount(time);
        useEffect(() => {
            if (count === 0 && cb) {
                stop();
                clearTimeout(cb);
            }
            if (count > 0) {
                cb = setTimeout(() => {
                    setCount(count - 1);
                }, 1000);
            }
            return () => cb && clearTimeout(cb);
        }, [count]);
        return { count, reset };
    };
})();
