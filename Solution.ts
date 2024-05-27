
function kthDistinct(input: string[], kthDistinctString: number): string {
    const NOT_FOUND = "";
    const valueToFrequency = new Map<string, number>();
    for (let current of input) {
        let value = valueToFrequency.get(current);
        valueToFrequency.set(current, (value ? value : 0) + 1);
    }

    let index = 0;
    let distinctStrings = 0;
    for (let i = 0; i < input.length && distinctStrings < kthDistinctString; ++i) {
        if (valueToFrequency.get(input[i]) === 1) {
            ++distinctStrings;
            index = i;
        }
    }

    return (distinctStrings === kthDistinctString) ? input[index] : NOT_FOUND;
};
