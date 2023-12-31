function newItem() {
    //Adding a new item to the list of items
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!')
    } else {
        $('#list').append(li);
    }

    //Crossing out an item from the list of items
    li.on('dblclick', crossOut);
    function crossOut() {
        li.toggleClass('strike');
    }

    //Adding the delete button "x"
    let crossOutButton = $('<crossOutButton></crossOutButton>')
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    //Adding class "delete" (display:none) from css
    crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
        li.addClass('delete');
    }
    //Reordering items
    $('#list').sortable();
}
