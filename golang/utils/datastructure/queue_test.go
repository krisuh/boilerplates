package datastructure

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestQueue(t *testing.T) {
	q := NewQueue[int](10)
	q.Enqueue(1)
	q.Enqueue(2)
	first, _ := q.Dequeue()
	second, _ := q.Dequeue()
	assert.Equal(t, 1, *first)
	assert.Equal(t, 2, *second)
}
