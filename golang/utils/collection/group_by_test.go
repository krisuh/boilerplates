package collection

import (
	"testing"
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
	if len(keys) < 3 {
		t.Error("Not enough groups")
	}
	if keys[0] != "Erkki" {
		t.Error("Erkki not found in Keys")
	}
	t.Log(byFirstName)
}

func gatherKeys[T any](m map[string][]T) []string {
	result := []string{}
	for k := range m {
		result = append(result, k)
	}
	return result
}
