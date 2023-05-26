package collection

type GroupFn[T any] func(item T) string

func GroupBy[T any](items []T, fn GroupFn[T]) map[string][]T {
	result := map[string][]T{}
	for _, v := range items {
		key := fn(v)
		g := getOrEmptyFromMap(result, key)
		g = append(g, v)
		result[key] = g
	}
	return result
}

func getOrEmptyFromMap[T any](m map[string][]T, key string) []T {
	if g, ok := m[key]; ok {
		return g
	}
	return []T{}
}
