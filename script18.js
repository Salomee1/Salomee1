const data = [123, "HeLLo", "WORLD", 3.14, "Python", true, null];

data.forEach(item => {
  if (typeof item === 'string') {
    const lowerCaseItem = item.toLowerCase();
    console.log(lowerCaseItem);
  }
});
