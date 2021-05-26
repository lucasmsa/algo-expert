def classPhotos(redShirtHeights, blueShirtHeights):
    redShirtHeights.sort()
    blueShirtHeights.sort()
    if redShirtHeights[0] == blueShirtHeights[0]:
        return False
    else:
        tallestStudents = "RED" if max(
            redShirtHeights[0], blueShirtHeights[0]) == redShirtHeights[0] else "BLUE"

        for idx in range(1, len(redShirtHeights)):
            if tallestStudents == "RED" and redShirtHeights[idx] <= blueShirtHeights[idx] \
                    or tallestStudents == "BLUE" and blueShirtHeights[idx] <= redShirtHeights[idx]:
                return False
    return True


print(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]))
