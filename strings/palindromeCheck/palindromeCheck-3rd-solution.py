# O(n) time | O(n) space -> (because of the call stack)
def isPalindrome(string):
	if len(string) <= 1:
		return True

	first = string[0]
	last = string[-1]
	
	return first == last and isPalindrome(string[1:-1])