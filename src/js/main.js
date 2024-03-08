// let allNumbers = [];

// const processData = () => {
//   const numbers = allNumbers;

//   const max = Math.max(...numbers);
//   const min = Math.min(...numbers);
//   const increase = numbers.sort((a, b) => a - b);
//   const decrease = numbers.sort((a, b) => b - a);

//   let median;
//   const middle = Math.floor(numbers.length / 2);
//   if (numbers.length % 2 === 0) {
//     median = (numbers[middle - 1] + numbers[middle]) / 2;
//   } else {
//     median = numbers[middle];
//   }
//   const average = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;

//   console.log('Максимальне число:', max);
//   console.log('Мінімальне число:', min);
//   console.log('В порядку возрастання:', increase);
//   console.log('В порядку зменшення:', decrease);
//   console.log('Медіана:', median);
//   console.log('Середнє арифметичне:', average);

//   document.querySelector('.maxN').innerText = 'Максимальне число: ' + max.toString();
//   document.querySelector('.minN').innerText = 'Мінімальне число: ' + min.toString();
//   document.querySelector('.increaseN').innerText = 'В порядку возрастання: ' + increase.toString();
//   document.querySelector('.decreaseN').innerText = 'В порядку зменшення: ' + decrease.toString();
//   document.querySelector('.medianN').innerText = 'Медіана: ' + median.toString();
//   document.querySelector('.averageN').innerText = 'Середнє арифметичне: ' + average.toString();
// };

// const processFile = () => {
//   const input = document.getElementById('fileInput');
//   const file = input.files[0];

//   const CHUNK_SIZE = 663552;

//   const reader = new FileReader();
//   let currentPosition = 0;
//   let totalBytesRead = 0;

//   const readNextChunk = () => {
//     const blob = file.slice(currentPosition, currentPosition + CHUNK_SIZE);
//     reader.readAsText(blob);
//   };

//   reader.onload = function (event) {
//     const content = event.target.result;
//     const numbers = content.trim().split('\n').map(Number);

//     allNumbers = allNumbers.concat(numbers);

//     totalBytesRead += content.length;
//     console.log(`Прочитано ${totalBytesRead} байт з ${file.size} (${((totalBytesRead / file.size) * 100).toFixed(2)}%)`);

//     currentPosition += content.length;

//     if (currentPosition < file.size) {
//       readNextChunk();
//     }
//     else {
//       processData();
//     }
//   };
//   readNextChunk();
// };

// const button = document.getElementById('btn');
// button.addEventListener("click", processFile);




const processFile = () => {
  const input = document.getElementById('fileInput');
  const file = input.files[0];

  const CHUNK_SIZE = 800000;

  const reader = new FileReader();
  let currentPosition = 0;

  reader.onload = function (event) {
    const content = event.target.result;
    processData(content);

    currentPosition += content.length;

    if (currentPosition < file.size) {
      readNextChunk();
    }
  };

  const readNextChunk = () => {
    const blob = file.slice(currentPosition, currentPosition + CHUNK_SIZE);
    reader.readAsText(blob);
  };

  readNextChunk(); // Початок читання файлу
};

const processData = (content) => {
  const numbers = content.trim().split('\n').map(Number);

  console.log(numbers);

  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  const increase = numbers.slice().sort((a, b) => a - b);
  const decrease = numbers.slice().sort((a, b) => b - a);

  let median;
  const middle = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0) {
    median = (numbers[middle - 1] + numbers[middle]) / 2;
  } else {
    median = numbers[middle];
  }
  const average = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;

  console.log('Максимальне число:', max);
  console.log('Мінімальне число:', min);
  console.log('В порядку возрастання:', increase);
  console.log('В порядку зменшення:', decrease);
  console.log('Медіана:', median);
  console.log('Середнє арифметичне:', average);

  document.querySelector('.maxN').innerText = 'Максимальне число: ' + max.toString();
  document.querySelector('.minN').innerText = 'Мінімальне число: ' + min.toString();
  document.querySelector('.increaseN').innerText = 'В порядку возрастання: ' + increase.toString();
  document.querySelector('.decreaseN').innerText = 'В порядку зменшення: ' + decrease.toString();
  document.querySelector('.medianN').innerText = 'Медіана: ' + median.toString();
  document.querySelector('.averageN').innerText = 'Середнє арифметичне: ' + average.toString();
};

const button = document.getElementById('btn');
button.addEventListener("click", processFile);