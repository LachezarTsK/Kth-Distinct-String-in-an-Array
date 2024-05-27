
/**
 * @param {string[]} input
 * @param {number} kthDistinctString
 * @return {string}
 */
var kthDistinct = function (input, kthDistinctString) {
    const NOT_FOUND = "";
    // Map<string, number>
    const valueToFrequency = new Map();
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
