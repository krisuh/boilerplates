package collection

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestContainsBy(t *testing.T) {
	ar := []string{"a", "b", "c", "d"}
	result := ContainsBy(ar, func(item string) bool {
		return item == "a"
	})
	assert.True(t, result)
}

func TestContains(t *testing.T) {
	ar := []int{1, 2, 3, 4, 5, 6, 7, 99}
	result := Contains(ar, 99)
	assert.True(t, result)
	result2 := Contains(ar, 666)
	assert.False(t, result2)
	testData := []Person{
		{FirstName: "Erkki", LastName: "Hervanta", Age: 53},
		{FirstName: "Max", LastName: "Hervanta", Age: 13},
		{FirstName: "Max", LastName: "Power", Age: 76},
		{FirstName: "Liisa", LastName: "Power", Age: 33},
	}
	result3 := Contains(testData, Person{FirstName: "Erkki", LastName: "Hervanta", Age: 53})
	assert.True(t, result3)
}
