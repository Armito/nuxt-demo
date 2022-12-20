const useCount = () => {
    const count = useState<number>('count', () => 0);

    const increment = (delta: number) => {
        count.value += delta || 1;
    };

    const decrement = (delta: number) => {
        count.value -= delta || 1;
    };

    return {
        count,
        increment,
        decrement,
    };
};

export { useCount };
