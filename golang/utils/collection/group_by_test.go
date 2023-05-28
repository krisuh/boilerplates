package collection

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

type Person struct {
	FirstName string
	LastName  string
	Age       int
}

func TestGroupBy(t *testing.T) {
	testData := []Person{
		{FirstName: "Erkki", LastName: "Hervanta", Age: 53},
		{FirstName: "Max", LastName: "Hervanta", Age: 13},
		{FirstName: "Max", LastName: "Power", Age: 76},
		{FirstName: "Liisa", LastName: "Power", Age: 33},
	}
	byFirstName := GroupBy(testData, func(p Person) string {
		return p.FirstName
	})
	keys := gatherKeys(byFirstName)
	assert.Equal(t, []string{"Erkki", "Max", "Liisa"}, keys)
	erkki := byFirstName["Erkki"]
	max := byFirstName["Max"]
	liisa := byFirstName["Liisa"]
	assert.Equal(t, 1, len(erkki))
	assert.Equal(t, 2, len(max))
	assert.Equal(t, 1, len(liisa))
	t.Log(byFirstName)
}

func gatherKeys[T any](m map[string][]T) []string {
	result := []string{}
	for k := range m {
		result = append(result, k)
	}
	return result
}
