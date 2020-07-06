var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event 
form.addEventListener('submit', addItem);
function addItem(e){
    e.preventDefault();
    // get input value 
    var newItem = document.getElementById('item').value;
    // create new li item 
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    // create delete button 
    var deleteBtn = document.createElement('button');
// add classes to delete btn 
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    // append btn to li
    li.appendChild(deleteBtn);
    // append li to list
    itemList.appendChild(li);
}

// #########################*******************     REMOVING ITEMS    ********************##################################
itemList.addEventListener('click', removeItem);
function removeItem(e){
        if(e.target.classList.contains('delete')){
            if(confirm("Are you sure?")){
                var li = e.target.parentElement;
                itemList.removeChild(li);
            }
        }
}
//*********************Filter********************************** */
var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }

    })
}