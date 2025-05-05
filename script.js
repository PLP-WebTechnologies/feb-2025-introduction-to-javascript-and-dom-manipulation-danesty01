// Change text content dynamically
const changeTextBtn = document.getElementById('changeTextBtn');
const textElement = document.getElementById('text');

changeTextBtn.addEventListener('click', () => {
    textElement.textContent = 'The text has been changed dynamically!';
    textElement.classList.toggle('dynamic-text');
});

// Add or remove an element when a button is clicked
const addElementBtn = document.getElementById('addElementBtn');
const container = document.getElementById('container');

addElementBtn.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph added dynamically!';
    container.appendChild(newElement);
});

// Remove an element when a button is clicked
const removeElementBtn = document.getElementById('removeElementBtn');
const elementToRemove = document.getElementById('elementToRemove');

removeElementBtn.addEventListener('click', () => {
    if (elementToRemove) {
        elementToRemove.remove();
    } else {
        alert('Element already removed!');
    }
});

