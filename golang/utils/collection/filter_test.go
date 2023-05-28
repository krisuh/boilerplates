package collection

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFilter(t *testing.T) {
	items := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24}
	even := Filter(items, isEven)
	assert.Equal(t, 12, len(even))
	assert.Equal(t, []int{2,4,6,8,10,12,14,16,18,20,22,24}, even)
}

func TestFilterMap(t *testing.T) {
	items := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24}
	evenTripled := FilterMap(items, isEven, tripled)
	assert.Equal(t, 12, len(evenTripled))
	assert.Equal(t, []int{6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72}, evenTripled)
}

func isEven(item int) bool {
	return item%2 == 0
}

func tripled(item int) int {
	return item * 3
}