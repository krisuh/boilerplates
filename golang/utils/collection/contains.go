package collection

func ContainsBy[T any](items []T, predicate Predicate[T]) bool {
	for _, item := range items {
		if predicate(item) {
			return true
		}
	}
	return false
}

func Contains[T comparable](items []T, a T) bool {
	for _, item := range items {
		if a == item {
			return true
		}
	}
	return false
}
