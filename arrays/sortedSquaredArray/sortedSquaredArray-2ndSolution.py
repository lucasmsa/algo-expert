# O(n) Time | O(n) Space
def sortedSquaredArray(array):
    negative_numbers_array, sorted_squared_array = [], []
    fetchNegativeArrayNumbers(0, array, negative_numbers_array)
    for element in array:
        while negative_numbers_array and element > negative_numbers_array[0]:
            sorted_squared_array.append(pow(negative_numbers_array.pop(0), 2))

        sorted_squared_array.append(pow(element, 2))

    checkRemainingNegativeNumbers(
        negative_numbers_array, sorted_squared_array)
    return sorted_squared_array


def fetchNegativeArrayNumbers(idx, array, negative_numbers_array):
    while array and array[idx] < 0:
        negative_numbers_array.insert(0, abs(array[idx]))
        array.pop(0)


def checkRemainingNegativeNumbers(negative_numbers_array, sortedSquaredArray):
    while negative_numbers_array:
        sortedSquaredArray.append(pow(negative_numbers_array.pop(0), 2))
