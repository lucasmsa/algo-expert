# O(n) Time | O(n) Space - Without Division
def arrayOfProducts(array):
  products_array = [1 for _element in range(len(array))]
  left_product = 1
  for idx in range(len(array)):
    products_array[idx] *= left_product
    left_product *= array[idx]
    
  right_product = 1 
  for idx in reversed(range(len(array))):
    products_array[idx] *= right_product
    right_product *= array[idx]
    
  return products_array

print(arrayOfProducts([5, 1, 4, 2])) # [8, 40, 10, 20]