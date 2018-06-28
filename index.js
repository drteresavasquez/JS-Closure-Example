console.log("object");

let itemText = [
    {
        'id': '#symptoms',
        'text': 'This is a place holder for symptom text stuff'
    },
    {
        'id': '#medications',
        'text': 'This is a place holder for symptom text stuff'
    }
]

function handleItem(id, text){
    let newElement, targetElement, currentAlert;

    currentAlert = document.querySelector('#currentAlert');

    if(currentAlert !== null){
        currentAlert.parentNode.removeChild(currentAlert);
    }

    newElement = document.createElement('div');
    newElement.id = 'currentAlert';
    newElement.className = 'alert alert-danger';
    newElement.innerHTML = text;

    targetElement = document.querySelector(id).parentNode;
    targetElement.insertBefore(newElement, targetElement.childNodes[2]);
}

function initItem(id, text){
    return function(){
        handleItem(id, text);
    }
}


function setupItem(){
    let DOMElement;
    for(let i = 0; i < itemText.length; i++){
        DOMElement = document.querySelector(itemText[i].id);
        DOMElement.addEventListener('focus', initItem(itemText[i].id, itemText[i].text))
    }
}

setupItem();