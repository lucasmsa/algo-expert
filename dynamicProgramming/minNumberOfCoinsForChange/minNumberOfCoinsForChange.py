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