
class Solution {

    companion object {
        const val NOT_FOUND = ""
    }

    fun kthDistinct(input: Array<String>, kthDistinctString: Int): String {
        val valueToFrequency = HashMap<String, Int>()
        for (current in input) {
            valueToFrequency[current] = valueToFrequency.getOrDefault(current, 0) + 1
        }

        var distinctStrings = 0
        for (i in input.indices) {
            if (valueToFrequency[input[i]] == 1) {
                ++distinctStrings
                if (distinctStrings == kthDistinctString) {
                    return input[i]
                }
            }
        }

        return NOT_FOUND
    }
}
