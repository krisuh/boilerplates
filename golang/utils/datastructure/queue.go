package datastructure

import (
	"errors"

	"golang.org/x/exp/slices"
)

type Queue[T any] struct {
	Capacity int
	Size     int
	Items    []T
}

func NewQueue[T any](capacity int) *Queue[T] {
	return &Queue[T]{
		Capacity: capacity,
		Size:     0,
		Items:    make([]T, 0),
	}
}

func (q *Queue[T]) Enqueue(item T) error {
	if q.Size < q.Capacity {
		q.Items = append(q.Items, item)
		q.Size = len(q.Items)
		return nil
	}
	return errors.New("atempted to add to a full queue")
}

func (q *Queue[T]) Dequeue() (*T, error) {
	if q.Size > 0 {
		item := q.Items[0]
		q.Items = slices.Delete(q.Items, 0, 1)
		q.Size = len(q.Items)
		return &item, nil
	}
	return nil, errors.New("attempted to dequeue an empty queue")
}
