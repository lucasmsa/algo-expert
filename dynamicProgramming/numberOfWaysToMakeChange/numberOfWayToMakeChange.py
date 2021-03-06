def numberOfWaysToMakeChange(n: int, denoms: list) -> int:
    changes_list = [0]*(n + 1 if n != 0 else 1)
    changes_list[0] = 1
    if changes_list:
        for denom in denoms:
            if denom <= n:
                for change in range(denom, n + 1):
                    changes_list[change] += changes_list[change - denom]   
    return changes_list[-1]

numberOfWaysToMakeChange(10, [1, 3, 10, 25])