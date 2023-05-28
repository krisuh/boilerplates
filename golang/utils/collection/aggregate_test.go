package collection

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestReduce(t *testing.T) {
	testData:= []int{1,2,3,4,5,6}
	result := Reduce(testData, sum, 0)
	assert.Equal(t, 21, result)
}

func TestReduceComplex(t *testing.T) {
	testData := []int{1,2,2,1,4,10,5,7,7,10,2,10}
	occurrences := Reduce(testData, countOccurrences, map[int]int{})
	assert.Equal(t, map[int]int{1: 2, 2: 3, 4: 1, 5: 1, 7: 2, 10: 3}, occurrences)
}

func countOccurrences(acc map[int]int, cur int) map[int]int {
	count, ok := acc[cur]
	if ok {
		acc[cur] = count + 1
	} else {
		acc[cur] = 1
	}
	return acc
}

func sum(acc, cur int) int {
	return acc + cur
}