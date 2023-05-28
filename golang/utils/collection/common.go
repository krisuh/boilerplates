package collection

type Predicate[T any] func(item T) bool

type Mapper[T, V any] func(item T) V

type Reducer[T, V any] func(a V, b T) V
