package datastructure

import "golang.org/x/exp/slices"

type Queue[T any] struct {
	Capacity int
	Size     int
	Items    []T
}

func NewQueue[T any](capacity int) *Queue[T] {
	return &Queue[T]{
		Capacity: capacity,
		Size:     0,
		Items:    make([]T, capacity),
	}
}

func (q *Queue[T]) Enqueue(item T) {
	q.Items = append(q.Items, item)
}

func (q *Queue[T]) Dequeue() *T {
	item := q.Items[0]
	q.Items = slices.Delete(q.Items, 0, 1)
	return &item
}
