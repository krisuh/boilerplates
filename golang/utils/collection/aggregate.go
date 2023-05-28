package collection

func Reduce[T, V any](items []T, reducer Reducer[T, V], initial V) V {
	result := initial
	for _, item := range items {
		result = reducer(result, item)
	}
	return result
}
