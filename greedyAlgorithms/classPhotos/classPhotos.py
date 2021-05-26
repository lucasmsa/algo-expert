# O(nlog(n)) Time | O(1) Space
def classPhotos(redShirtHeights, blueShirtHeights):
    redShirtHeights.sort()
    blueShirtHeights.sort()

    tallestStudents = "RED" if max(
        redShirtHeights[0], blueShirtHeights[0]) == redShirtHeights[0] else "BLUE"

    for idx in range(len(redShirtHeights)):
        if tallestStudents == "RED" and redShirtHeights[idx] <= blueShirtHeights[idx] \
                or tallestStudents == "BLUE" and blueShirtHeights[idx] <= redShirtHeights[idx]:
            return False
    return True
