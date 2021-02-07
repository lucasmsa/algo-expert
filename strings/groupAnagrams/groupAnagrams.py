# O(w * n * log(n)) Time | O(w * n) Space
# Where (n) is the size of the longest word and (w) 
# is the amount of words in the original list 
def groupAnagrams(words):
	sorted_anagram_words = {}
	
	for idx, word in enumerate(words):
		sorted_word = ''.join(sorted(word))
		if sorted_word in sorted_anagram_words:
			sorted_anagram_words[sorted_word].append(word)
		else: 
			sorted_anagram_words[sorted_word] = [word]
		
	return list(sorted_anagram_words.values())