
const processFile = () => {
  const input = document.getElementById('fileInput');

  const file = input.files[0];

  const reader = new FileReader();
  reader.onload = function (event) {
    const content = event.target.result;
    const numbers = content.trim().split('\n').map(Number);

    console.log(numbers);

    function processData() {

      const max = Math.max(...numbers);
      const min = Math.min(...numbers);
      const increase = numbers.sort((a, b) => a - b);
      const decrease = numbers.sort((a, b) => b - a);

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
      console.log('В порядку возрастання:', decrease);
      console.log('Медіана:', median);
      console.log('Середнє арифметичне:', average);

      document.querySelector('.maxN').innerText = 'Максимальне число: ' + max.toString();
      document.querySelector('.minN').innerText = 'Мінімальне число: ' + min.toString();
      document.querySelector('.increaseN').innerText = 'В порядку возрастання: ' + increase.toString();
      document.querySelector('.decreaseN').innerText = 'В порядку возрастання: ' + decrease.toString();
      document.querySelector('.medianN').innerText = 'Медіана: ' + median.toString();
      document.querySelector('.averageN').innerText = 'Середнє арифметичне: ' + average.toString();
    };

    processData();

  };

  if (file instanceof Blob) {
    reader.readAsText(file);
  }
  else {
    console.error('Вибраний файл не є файлом');
  }
};

const button = document.getElementById('btn');
button.addEventListener("click", processFile);


