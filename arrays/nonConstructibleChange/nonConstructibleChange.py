def nonConstructibleChange(coins):
    coins.sort()
    minimum_change = 1
    for coin in coins:
        if coin <= minimum_change:
            minimum_change += coin

    return minimum_change


nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])
