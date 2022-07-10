let addToList = document.getElementById('addToList');
let clearList = document.getElementById('clearList');
let listValue = document.getElementById('listValue');

addToList.addEventListener('click', function(){
    let paragraph = document.createElement('p'); // P adında element yaratır
    yourList.appendChild(paragraph); // P'yi div in içine ekler
    paragraph.classList.add('p-styling');
    paragraph.innerHTML = listValue.value; // Girilen değerle p yi eşitler
    listValue.value = ""; // Girilen değeri inputtan siler
    

    clearList.addEventListener('click', function(){
        yourList.removeChild(paragraph);
    });
   
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })

});
