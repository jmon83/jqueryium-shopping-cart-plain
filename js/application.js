
var addItem = [];

function shop() {
    var inventory = {};
    inventory.price = document.getElementById('price').value;
    inventory.item = document.getElementById('item').value;
    addItem.push(inventory);

    var newDiv = document.createElement('div');
    newDiv.id = addItem.length;
    newDiv.classname = 'block';
    document.getElementById('theItems').appendChild(newDiv);

    var para = document.createElement("span");
    var node = document.createTextNode('Item: ' + inventory.item + ' |                    '); 
    para.appendChild(node);

    var element = document.getElementById(addItem.length);
    element.appendChild(para);

    para = document.createElement('span');
    node = document.createTextNode('Price:' + inventory.price);
    para.appendChild(node);

    element.appendChild(para); 

}