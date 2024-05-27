
using System;
using System.Collections.Generic;

public class Solution
{
    private static readonly string NOT_FOUND = "";

    public string KthDistinct(string[] input, int kthDistinctString)
    {
        var valueToFrequency = new Dictionary<string, int>();
        foreach (string current in input)
        {
            valueToFrequency.TryAdd(current, 0);
            ++valueToFrequency[current];
        }

        int index = 0;
        int distinctStrings = 0;
        for (int i = 0; i < input.Length && distinctStrings < kthDistinctString; ++i)
        {
            if (valueToFrequency[input[i]] == 1)
            {
                ++distinctStrings;
                index = i;
            }
        }

        return (distinctStrings == kthDistinctString) ? input[index] : NOT_FOUND;
    }
}
