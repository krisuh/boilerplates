package collection

func Filter[T any](items []T, predicate Predicate[T]) []T {
	result := []T{}
	for _, item := range items {
		if predicate(item) {
			result = append(result, item)
		}
	}
	return result
}
