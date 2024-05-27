
package main

import "fmt"

func kthDistinct(input []string, kthDistinctString int) string {
	const NOT_FOUND = ""
	var valueToFrequency = map[string]int{}
	for _, current := range input {
		valueToFrequency[current]++
	}

	var distinctStrings = 0
	for i := range input {
		if valueToFrequency[input[i]] == 1 {
			distinctStrings++
			if distinctStrings == kthDistinctString {
				return input[i]
			}
		}
	}
	return NOT_FOUND
}
