
const select = document.querySelector('select');
const container = document.querySelector('.container');

select.addEventListener('change', () => {
  const choice = select.value;

  switch(choice) {
    case 'black':
      update('black','white');
      break;
    case 'white':
      update('white','black');
      break;
    case 'purple':
      update('purple','white');
      break;
    case 'yellow':
      update('yellow','darkgray');
      break;
    case 'psychedelic':
      update('lime','purple');
      break;
  }
});

function update(bgColor, textColor) {
  container.style.backgroundColor = bgColor;
  container.style.color = textColor;
  secondSection.style.color = textColor;
  secondSection.style.backgroundColor = bgColor; 
  lastSection.style.color = textColor;
  lastSection.style.backgroundColor = bgColor; 
}

const secondSection = document.querySelector('.second__section');
const lastSection = document.querySelector('.last__section');

