from math import ceil

def chunk(l: list, chunk_length: int):
    offset = 0
    offset_end = chunk_length
    result = []
    pages = ceil(len(l) / chunk_length)
    for _ in range(0, pages):
        t = l[offset:offset_end]
        result.append(t)
        offset += chunk_length
        offset_end += chunk_length
    return result

numbers = [x for x in range(0, 95)]
chunks = chunk(numbers, 10)
print(numbers)
print(chunks)