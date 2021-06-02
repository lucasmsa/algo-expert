# O(nlogn) Time | O(n) Space -> Since sorted will return a new array
def sortedSquaredArray(array):
    return [pow(number, 2) for number in sorted(array, key=abs)]
