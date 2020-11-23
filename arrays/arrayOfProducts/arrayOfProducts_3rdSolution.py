# O(n^2) Time | O(n) Space - Without Division
def arrayOfProducts(array): 
    products_array = []
    for i in range(len(array)):
      product = 1
      for j in range(len(array)):
        if j != i: product *= array[j]
      products_array.append(product)
    return products_array