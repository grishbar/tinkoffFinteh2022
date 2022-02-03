input = [
    input(),
    input(),
    input(),
]


def get_minimum_jumps_amount(
    mountain_height: int,
    possible_jumps,
    possible_slides
) -> int:
    visited = {}

    def find_min_ways_from_index(start):
        min_jumps = float('inf')

        jump_len = possible_jumps[start]
        while(jump_len >= 0):
            jump_to = start - jump_len
            if (jump_to < 0):
                return 1

            slide_to = jump_to + possible_slides[jump_to]
            if (not visited.get(slide_to)):
                visited[slide_to] = float('inf')
                way = find_min_ways_from_index(slide_to)
                visited[slide_to] = way

            min_jumps = min(min_jumps, visited[slide_to])
            jump_len -= 1

        return min_jumps + 1

    ways = find_min_ways_from_index(mountain_height - 1)

    return ways if (ways < float('inf')) else - 1


# предпологаем, что все данные вводятся корректно, поэтому проверять их не будем
mountain_height = int(input[0])
possible_jumps = list(map(int, input[1].split(' ')))
possible_slides = list(map(int, input[2].split(' ')))
print(
    get_minimum_jumps_amount(mountain_height, possible_jumps, possible_slides)
)
