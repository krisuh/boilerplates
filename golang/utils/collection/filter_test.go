package collection

import (
	"log"
	"testing"
)

func TestFilter(t *testing.T) {
	items := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24}
	even := Filter(items, func(item int) bool {
		return item%2 == 0
	})
	if len(even) != 12 {
		log.Fatal("Not twelve")
	}
}
