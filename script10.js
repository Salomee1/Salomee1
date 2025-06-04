function checkVowel() {
  const word = document.getElementById("wordInput").value.trim();

  if (word.length === 0) {
    document.getElementById("result").textContent = "Please enter a word.";
    return;
  }

  const firstLetter = word.charAt(0);
  const lowerFirst = firstLetter.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(lowerFirst)) {
    document.getElementById("result").textContent =
      `The word starts with a vowel, which is ${firstLetter.toUpperCase()}`;
  } else {
    document.getElementById("result").textContent =
      `The word does not start with a vowel, because it is ${firstLetter.toUpperCase()}`;
  }
}
