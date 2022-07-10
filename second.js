let listValue = document.getElementById('listValue');
let addToList = document.getElementById('addToList');
let clearList = document.getElementById('clearList');

addToList.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    yourList.appendChild(paragraph);
    paragraph.classList.add('p-styling');
    paragraph.innerHTML = listValue.value;
    listValue.value = "";


    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration='line-through';
    });

    clearList.addEventListener('click', function(){
        yourList.removeChild(paragraph.firstChild);
    });
});