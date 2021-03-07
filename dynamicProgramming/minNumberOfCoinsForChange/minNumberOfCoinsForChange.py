# O(nd) Time | O(n) Space
def minNumberOfCoinsForChange(n, denoms):
    min_number_of_coins = [float('inf')]*(n + 1 if n != 0 else 1)
    min_number_of_coins[0] = 0
    for denom in denoms:
        if denom <= n:
            for idx in range(denom, n + 1):
                min_number_of_coins[idx] = min(min_number_of_coins[idx - denom] + 1, min_number_of_coins[idx])
    return min_number_of_coins[n] if min_number_of_coins[n] != float('inf') else -1


minNumberOfCoinsForChange(7, [1, 5, 10])

# [0, inf, inf, inf, inf, inf, inf, inf]
# [1, 1, 2, 3, 4, 5, 6, 7]
#           |  |
#       a[3 - 1] + 1 = 3
#              |
#          a[4 - 1] + 1 = 4

# [0, 1, 2, 3, 4, 1, 2, 3]
#                 |  |
#              min(a[5 - 5] + 1 = ->[1]<-, a[5 - 1] + 1 = [5])
#                    |
#                 min(a[6 - 5] + 1 = ->[2]<-, a[6 - 1] + 1 = 6)