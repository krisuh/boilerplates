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

func FilterMap[T any, V any](items []T, predicate Predicate[T], mapper Mapper[T, V]) []V {
	result := []V{}
	for _, item := range items {
		if !predicate(item) {
			continue
		}
		result = append(result, mapper(item))
	}
	return result
}
