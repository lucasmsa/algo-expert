# O(n) Time | O(n) Space - With Division
def arrayOfProducts(array):
    all_numbers_product = 1
    zero_exists = False
    products_array = []
    for idx in range(len(array)):
        if array[idx] != 0: all_numbers_product *= array[idx]
        else:
            if zero_exists:
                products_array = [0 for _number in array]
                return products_array   
            zero_exists = True
            
    for idx in range(len(array)):
        if zero_exists:
            if array[idx] == 0:
                products_array.append(int(all_numbers_product))
            else:
                products_array.append(0)
        else:
            products_array.append(int(all_numbers_product/array[idx]))
               
    return products_array