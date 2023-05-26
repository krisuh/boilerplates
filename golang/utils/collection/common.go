package collection

type Predicate[T any] func(item T) bool

type Mapper[T any, V any] func(item T) V
