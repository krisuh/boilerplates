package collection

func Map[T, V any](items []T, mapper Mapper[T, V]) []V {
	result := []V{}
	for _, item := range items {
		result = append(result, mapper(item))
	}
	return result
}
