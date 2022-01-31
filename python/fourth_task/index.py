input = [
    input(),
]


def ceil(number: int) -> int:
    return int(number) + 1 if number % 2 else 0


def get_possible_ways_amount(board_width: int, board_height: int) -> int:
    """
    Функция находит количество способов пройти через доску, из левой нижней клетки доски до правой верхней
    :param board_width: мультимножество чисел
    :param board_height: мультимножество чисел
    :return: число (int) - количество способов добраться конем до правого верхнего угла доски
    """
    diagonals_dict: dict[str, list[int]] = generate_diagonals()
    current_diagonal: list[int] = diagonals_dict.get(str(board_width + board_height))

    if (not current_diagonal):
        return 0

    offset: int = abs(board_width - board_height) // 2
    result_index: int = ceil(len(current_diagonal) / 2) - 1 + offset
    if (result_index >= len(current_diagonal) or result_index < 0):
        return 0

    return current_diagonal[result_index]


def generate_diagonals():
    """
    Cоздает словарь диагоналей на которые модет встать конь и массив с возможным количеством вариантов
    дойти в кажду точку этой диагонали
    :return: словарь - где ключ это число диагонали а значения, это список из
    возможных способов добраться до точек на этой диагонали
    """
    diagonals_dict: dict[str, list[int]] = {'2': [1]}

    for diagonal_number in range(5, 50, 3):
        prev_list: dict[str, list[int]] = diagonals_dict[str(diagonal_number - 3)]
        new_list: list[int] = []

        for i in range(0, len(prev_list) - 1, 1):
            new_list.append(prev_list[i] + prev_list[i + 1])
        diagonals_dict[str(diagonal_number)] = [1] + new_list + [1]

    return diagonals_dict


# предпологаем, что все данные вводятся корректно, поэтому проверять их не будем
board_width, board_height = list(map(int, input[0].split(' ')))
print(get_possible_ways_amount(board_width, board_height))
