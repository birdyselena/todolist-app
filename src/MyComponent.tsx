import React, {useState} from 'react';
import {Button, Flex} from "@mantine/core";


const MyComponent: React.FC = () => {
    const [count, setCount] = useState(0);

    // Function to increment the count
    const increment = () => setCount(count + 1);

    // Function to decrement the count
    const decrement = () => setCount(count - 1);

    const reset = () => setCount(0);

    return <Flex

        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
    >   <h2>Counter: {count}</h2>
        <Button variant="filled" color="rgba(93, 223, 232, 1)" radius="lg" onClick={increment}>add</Button>
        <Button variant="filled" color="rgba(40, 172, 224, 1)" radius="lg" onClick={decrement}>minus</Button>
        <Button variant="light" color="rgba(40, 96, 224, 1)" radius="lg" onClick={reset}>reset</Button>
    </Flex>;
};


export default MyComponent