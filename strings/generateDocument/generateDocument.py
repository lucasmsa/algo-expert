# O(m + n) Time | O(m) Space -> Where m is the size of the characters string and n is the size of the document
def generateDocument(characters, document):
    characters_frequencies = {}
    for character in characters:
        if character not in characters_frequencies:
            characters_frequencies[character] = 1
        else:
            characters_frequencies[character] += 1

    for character in document:
        if (character not in characters_frequencies) or (characters_frequencies[character] == 0):
            return False

        characters_frequencies[character] -= 1

    return True
