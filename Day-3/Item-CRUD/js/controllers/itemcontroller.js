window.addEventListener("load",init);
function init(){
    document.getElementById("add").addEventListener("click",addItem);
    document.getElementById("delete").addEventListener("click",deleteMarkRecords);
}

function addItem(){
    var name = document.getElementById("itemname").value;
    var descr = document.getElementById("itemdesc").value;
    var price = document.getElementById("itemprice").value;
    var url = document.getElementById("itemurl").value;
    var buydate =document.getElementById("buydate").value;
    var color = document.getElementById("itemcolor").value;
    itemOperations.addNewItem(name,descr,price,url,buydate,color);
    var lastAddedObject = itemOperations.itemList[itemOperations.itemList.length-1];
    printItem(lastAddedObject);
}

// To Print Single Item Object
function printItem(itemObject){
    var index = 0;
    var tbody = document.getElementById("itembody");
    var tr = tbody.insertRow();
    for(var key in itemObject){
        tr.insertCell(index).innerHTML=itemObject[key];
        index++;
    }
    tr.insertCell(index).appendChild(printOperations(itemObject));
    printAutoIncrement();
    document.getElementById("itemname").focus();
    //tr.insertCell(0).innerHTML = itemObject.id;
    //tr.insertCell(1).innerHTML = itemObject.name;
    
}

function printAutoIncrement(){
    document.getElementById("itemNo").innerHTML=itemOperations.itemNo;
}

function printOperations(itemObject){
    var image = document.createElement("img");
    image.setAttribute("itemno",itemObject.id);
    image.addEventListener("click",toggleImage); // Binding the toggleImage function with click event on image
    image.src="../images/success.png";
    return image;
}

function toggleImage(){
    //console.log("ItemNo is ",this.getAttribute("itemno"));
    var id = this.getAttribute("itemno");
    var itemObject = itemOperations.searchById(id)[0];
    itemObject.isMarkForDeletion = !itemObject.isMarkForDeletion;
    this.src = itemObject.isMarkForDeletion?"../images/delete.png":"../images/success.png";
}
function deleteMarkRecords(){
    var itemArray = itemOperations.deleteMarked();
    printRecords(itemArray);
    
}
function printRecords(itemArray){
document.getElementById("itembody").innerHTML="";
    itemArray.forEach(printItem);
}
