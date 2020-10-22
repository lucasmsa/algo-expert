def longestPeak(array):
  longest = 0
  i = 1
  
  while i < len(array) - 1:
    if (array[i - 1] < array[i]) and (array[i + 1] < array[i]):
      lower_bound, upper_bound = i - 1, i + 1
      possible_solution = 3
      
      while lower_bound - 1 >= 0 and (array[lower_bound - 1] < array[lower_bound]): 
        possible_solution += 1
        lower_bound -= 1
        
      while upper_bound + 1 <= len(array) - 1 and (array[upper_bound + 1] < array[upper_bound]): 
        possible_solution += 1
        upper_bound += 1
        
      if possible_solution > longest: longest = possible_solution
    
    i += 1
  
  return longest