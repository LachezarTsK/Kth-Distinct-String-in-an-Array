
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {

    inline static const string NOT_FOUND = "";

public:
    string kthDistinct(const vector<string>& input, int kthDistinctString) const {
        unordered_map<string, int> valueToFrequency;
        for (const auto& current : input) {
            ++valueToFrequency[current];
        }

        size_t index = 0;
        int distinctStrings = 0;
        for (size_t i = 0; i < input.size() && distinctStrings < kthDistinctString; ++i) {
            if (valueToFrequency[input[i]] == 1) {
                ++distinctStrings;
                index = i;
            }
        }

        return (distinctStrings == kthDistinctString) ? input[index] : NOT_FOUND;
    }
};
