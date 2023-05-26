package collection

import "testing"

func TestChunk(t *testing.T) {
	items := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24}
	result := Chunk(items, 5)
	if len(result) != 5 {
		t.Fatal("Not enough chunks")
	}
}
