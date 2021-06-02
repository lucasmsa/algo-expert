# O(nlog(n)) Time | O(1) Space
def tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest):
    redShirtSpeeds.sort()
    blueShirtSpeeds.sort(reverse=False if fastest else True)
    totalSpeed = 0

    for i in range(len(redShirtSpeeds)):
        totalSpeed += max(redShirtSpeeds[i], blueShirtSpeeds[-i - 1])

    return totalSpeed
