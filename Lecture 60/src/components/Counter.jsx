import { useState } from 'react'
export default function Counter({ printCountValue }) {
    // let result = useState(0);
    // let value = result[0];
    // let setValue = result[1]; 

    let [value, setValue] = useState(0)

    // let count = 0;
    // printCountValue(value)

    function increment() {
        // count++;

        // setValue(value + 1);
        // setValue(value + 1);
        // setValue(value + 1);

        setValue((prev) => prev + 1)
        printCountValue(++value)
        // setValue((prev) => prev + 1)
        // setValue((prev) => prev + 1)

        // setValue(value++);
        // setValue(value++);
        // setValue(value++);

        // setValue(++value);
        // setValue(++value);
        // setValue(++value);
    }
    function decrement() {
        // count--;
        // setValue(value--);
        setValue((prev) => prev - 1)
        printCountValue(--value)
    }
    return (
        <div>
            <h1>Counter</h1>
            <button onClick={increment}>+</button>
            <p>{value}</p>
            {/* <p>{count}</p> */}
            <button onClick={decrement}>-</button>
        </div>
    )
}
