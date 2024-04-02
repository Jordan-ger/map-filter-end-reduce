function swapFirstAndLastLetters(string) {
    return string.split(' ').map(word => {
      if (word.length <= 1) return word;
      return word.charAt(word.length - 1) + word.slice(1, -1) + word.charAt(0);
    }).join(' ');
  }
  