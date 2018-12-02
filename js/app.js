const squareClassName = 'square';
const squareColors = [
  'Red', 'Lime', 'HotPink', 'Cyan', 'Yellow', 'Magenta', 'Blue', 'Navy',  'Chocolate', 'Maroon', 'Fuchsia', 'Black'
];
const maxSquareCount = 10;

function randomInteger(max) {
  const rand = Math.random() * (max + 1);
  return Math.floor(rand);
}

const createSquare = (maxTop, maxLeft) => {
  let square = document.createElement('div');
  square.classList.add(squareClassName);
  square.style.top = randomInteger(maxTop) + 'px';
  square.style.left = randomInteger(maxLeft) + 'px';
  square.style.backgroundColor = squareColors[randomInteger(squareColors.length - 1)];
  return square;
};

window.onload = function() {
  const root = document.getElementById('root');
  const rootHeight = root.offsetHeight;
  const rootWidth = root.offsetWidth;
  const maxTop = rootHeight <= rootWidth
    ? rootHeight - rootHeight * 0.2
    : rootHeight - rootWidth * 0.2;

  const maxLeft = rootWidth <= rootHeight
    ? rootWidth - rootWidth * 0.2
    : rootWidth - rootHeight * 0.2;
  let squareCounter = 0;

  setInterval(function(){
    const currentSquare = createSquare(maxTop, maxLeft);
    root.appendChild(currentSquare);
    squareCounter++;
    if (squareCounter >= maxSquareCount) {
      root.innerHTML = '';
      squareCounter = 0;
      alert("You loose!!!!!");
    }
  }, 1000);

  root.addEventListener('click', function({ target }) {
    if (target.className === squareClassName) {
      root.removeChild(target);
      squareCounter--;
    }
  });
};