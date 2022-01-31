input = [
    input(),
]


def get_paint_buckets_amount(rectangle_width: int, rectangle_height: int) -> int:
    """
    Функция находит количество ведер краски которое понадобится, чтобы закрасить квадратами весь данный прямоугольний
    :param rectangle_width: ширина прямоугольника
    :param rectangle_height: высота прямоугольника
    :return: число (int) - количество ведер краски
    """
    big_side: int = max(rectangle_width, rectangle_height)
    small_side: int = min(rectangle_width, rectangle_height)
    buckets_amount: int = big_side // small_side

    while (not big_side % small_side == 0):
        current_square_width = big_side // small_side * small_side
        big_side -= current_square_width

        temp_side = small_side
        small_side = big_side
        big_side = temp_side

        buckets_amount += big_side // small_side

    return buckets_amount


# предпологаем, что все данные вводятся корректно, поэтому проверять их не будем
rectangle_width, rectangle_height = list(map(int, input[0].split(' ')))
print(get_paint_buckets_amount(rectangle_width, rectangle_height))
