//Adding a new item to the list of items
let li = $('<li></li>');
let inputValue = $('#input').val();

if (inputValue === '') {
    alert('You must write something!')
}else{
    let list = $('#list');
    $('#list').appendChild(li);
}