const content = document.querySelector('.content');
const list = document.querySelector('#itemList');

const plusButton = document.querySelector('#addButton');

plusButton.addEventListener('click', () =>{
    const newItem = document.createElement('li');

    const newInput = document.createElement('input');
    newInput.classList.add("inputList");
    newInput.textContent = "...";

    const newButton = document.createElement('button');
    newButton.classList.add("newButton");
    newButton.textContent = "✅";
    newButton.addEventListener('click', () => {
        const strikeElement = document.createElement('del');

        strikeElement.textContent = newInput.value;

        newItem.replaceChild(strikeElement, newInput);
        
        newButton.disabled = true;
        newButton.style.cssText = "filter: grayscale(0); font-size:24px; opacity:1;";
        newButton.textContent = "⭐";
    });
    
    newItem.appendChild(newButton);
    newItem.appendChild(newInput);
    list.append(newItem);
});

// Get the element by its ID
const dateDisplay = document.getElementById('dateDisplay');

// Get today's date
const today = new Date();

// Format the date as you like. This is a simple example:
if (today.getMonth() == 10) {
    
}
const formattedDate = `${today.getDate()}.${today.getMonth()+1}.${today.getFullYear()}`;

// Set the content of the element to the formatted date
dateDisplay.textContent = formattedDate;



