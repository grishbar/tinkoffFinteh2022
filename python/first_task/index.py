input = [
    input(),
]

YES: str = 'YES'
NO: str = 'NO'


def get_is_hypothesis_right(first_number: int, second_number: int, numbers_amount: int) -> str:
    """
    Функция находит верна ли Васина гипотеза, о принципе формирования пришедших двух чисел
    :param first_number: первое число
    :param second_number: второе число
    :param numbers_amount: количество добавленных/вычтенных натуральных чисел
    :return: 'YES' или 'NO' в зависимости верна гипотеза или нет
    """
    if (numbers_amount == 0):
        return NO

    mystic_numbers_summ: int or float = (first_number - second_number) / 2

    if (mystic_numbers_summ < 1 or not mystic_numbers_summ.is_integer() or mystic_numbers_summ < numbers_amount):
        return NO

    return YES


# предпологаем, что все данные вводятся корректно, поэтому проверять их не будем
first_number, second_number, numbers_amount = list(map(int, input[0].split(' ')))
print(get_is_hypothesis_right(first_number, second_number, numbers_amount))
