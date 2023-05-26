package collection

func Chunk[T any](items []T, size int) [][]T {
	result := [][]T{}
	temp := []T{}
	for _, item := range items {
		temp = append(temp, item)
		if len(temp)%size == 0 {
			result = append(result, temp)
			temp = []T{}
		}
	}
	if len(temp) > 0 {
		result = append(result, temp)
	}
	return result
}
