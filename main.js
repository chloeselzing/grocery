const form = document.getElementById('addForm');
const grocery = document.getElementById('grocery');
const filter = document.getElementById('filter');

form.addEventListener('submit',addItem)
grocery.addEventListener('click',removeItem)
filter.addEventListener('keyup',filterItems);


function addItem(e){

    e.preventDefault()

   const newGroceries = document.getElementById('new').value;

   const li = document.createElement('li');

   li.className = 'list-group-item';

   li.appendChild(document.createTextNode(newGroceries)).value;

   grocery.appendChild(li);
 
   const deleteBtn = document.createElement('button');

   deleteBtn.className = 'btn btn-danger me-md-2 delete';

   deleteBtn.type = 'button';

   li.style.display = 'flex';

   li.style.justifyContent = 'space-between';

   deleteBtn.appendChild(document.createTextNode('X'));

   li.appendChild(deleteBtn);

   grocery.appendChild(li);

}


function removeItem(e){
    if(e.target.classList.contains('delete')){
       if(confirm('Delete Permanently ?'));{
           let li = e.target.parentElement;
           grocery.removeChild(li);
       }

    }

};


function filterItems(e){
let text = e.target.value.toLowerCase()
let grocery = grocery.getElementByTagName('li')
Array.from(grocery).forEach(function(item){
let itemName = item.firstChild.textContent;
if(itemName.toLowerCase().indexOf(text) != -1){
    item.style.display = 'block';
}else{item.style.display = 'none';}
})
}


