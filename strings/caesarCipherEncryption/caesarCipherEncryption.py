# O(n) time | O(n) space
def caesarCipherEncryptor(string, key):
  encrypted_string = []
  
  ALPHABET_START_CODE = 97
  ALPHABET_END_CODE = 122
  ALPHABET_SIZE = 26
  
  for e in string:
      
    new_letter_code = ord(e) + key
    
    if new_letter_code > ALPHABET_END_CODE:
      remainder = (new_letter_code - ALPHABET_START_CODE) % ALPHABET_SIZE
      encrypted_string.append(chr(ALPHABET_START_CODE + remainder))
      
    else:
      encrypted_string.append(chr(new_letter_code)) 
      
  return ''.join(encrypted_string)