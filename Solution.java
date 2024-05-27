
import java.util.HashMap;
import java.util.Map;

public class Solution {

    private static final String NOT_FOUND = "";

    public String kthDistinct(String[] input, int kthDistinctString) {
        Map<String, Integer> valueToFrequency = new HashMap<>();
        for (String current : input) {
            valueToFrequency.put(current, valueToFrequency.getOrDefault(current, 0) + 1);
        }

        int index = 0;
        int distinctStrings = 0;
        for (int i = 0; i < input.length && distinctStrings < kthDistinctString; ++i) {
            if (valueToFrequency.get(input[i]) == 1) {
                ++distinctStrings;
                index = i;
            }
        }

        return (distinctStrings == kthDistinctString) ? input[index] : NOT_FOUND;
    }
}
