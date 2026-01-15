function manipulateArray() {
  const outputDiv = document.getElementById("output");

  // Initial Promise (3 second delay)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })

  // First transformation: filter even numbers
  .then((arr) => {
    const evenNumbers = arr.filter(num => num % 2 === 0);

    return new Promise((resolve) => {
      setTimeout(() => {
        outputDiv.textContent = evenNumbers.join(",");
        resolve(evenNumbers);
      }, 1000);
    });
  })

  // Second transformation: multiply by 2
  .then((evenNumbers) => {
    const multiplied = evenNumbers.map(num => num * 2);

    return new Promise((resolve) => {
      setTimeout(() => {
        outputDiv.textContent = multiplied.join(",");
        resolve(multiplied);
      }, 2000);
    });
  });
}

// Call the function when the page loads
manipulateArray();
