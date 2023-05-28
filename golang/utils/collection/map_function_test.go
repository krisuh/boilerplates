package collection

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMapFunction(t *testing.T) {
	result := Map([]int{1, 2, 3, 4, 5, 6, 7, 8, 9}, func(item int) int {
		return item * 4
	})
	exp := []int{4, 8, 12, 16, 20, 24, 28, 32, 36}
	assert.Equal(t, exp, result)
}
