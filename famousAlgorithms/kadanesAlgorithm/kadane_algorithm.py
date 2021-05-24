def kadanesAlgorithm(array):
    max_sub_array_at_idx, current_max_sub_array = array[0], array[0]
    for idx in range(1, len(array)):
        max_sub_array_at_idx = max(
            array[idx], max_sub_array_at_idx + array[idx])
        current_max_sub_array = max(
            max_sub_array_at_idx, current_max_sub_array)
    return max_sub_array_at_idx
