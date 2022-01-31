import math


input = [
    input(),
    input(),
]


def get_paint_buckets_amount(quantity: list[int]) -> int:
    """
    Функция находит минимальное число, чтобы сгенерировать последовательность которая не расстроить Петю
    исходя из переданного мультимножеста
    :param quantity: мультимножество чисел
    :return: число (int) - минимальное x нулевое, с которым Петя сможет проделать все необходимые операции и не
    расстроиться
    """
    minimal_x: int = 0
    quantity.sort(reverse=True)

    for quantity_item in quantity:
        minimal_x = math.ceil(math.sqrt(quantity_item + minimal_x))

    return minimal_x


# предпологаем, что все данные вводятся корректно, поэтому проверять их не будем
quantity = list(map(int, input[1].split(' ')))
print(get_paint_buckets_amount(quantity))
