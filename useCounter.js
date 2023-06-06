import { useState } from "react";

export const useCounter = (initialValue = 10) => {

    const [counter, setcounter] = useState(initialValue);

    const increment = (num = 1) => {
        setcounter(counter + num);
    }

    const decrement = (num = 1) => {
        if (counter > 0) {
            setcounter(counter - num);
        } 
        else {
            console.log("no paso");
        }
    }

    const reset = () => {
        setcounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset,

    };
};
