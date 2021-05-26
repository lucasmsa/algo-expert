def kadanesAlgorithm(array):
    max_sub_array, current_max_sub_array = array[0], array[0]
    for idx in range(1, len(array)):
        current_max_sub_array = max(
            current_max_sub_array + array[idx], array[idx])
        max_sub_array = max(
            current_max_sub_array, max_sub_array)
    return max_sub_array