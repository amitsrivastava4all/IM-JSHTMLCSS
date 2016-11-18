window.addEventListener("load",init);
function init(){
    document.getElementById("add").addEventListener("click",addItem);
    document.getElementById("delete").addEventListener("click",deleteMarkRecords);
    document.getElementById("save").addEventListener("click",saveLocal);
    document.getElementById("load").addEventListener("click",loadLocal);
    document.getElementById("ajaxcall").addEventListener("click",ajaxCall);
    document.getElementById("sort").addEventListener("click",sortByPrice);
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


function updateCount(){
    document.getElementById("totalRecords").innerHTML="Total Records "+itemOperations.itemList.length;
    document.getElementById("markRecords").innerHTML="Mark "+itemOperations.countMarkUnMark(true);
    document.getElementById("unmarkRecords").innerHTML="UnMark "+itemOperations.countMarkUnMark(false);    
        
}

// To Print Single Item Object
function printItem(itemObject){
    var index = 0;
    var tbody = document.getElementById("itembody");
    var tr = tbody.insertRow();
    for(var key in itemObject){
        if(key=="isMarkForDeletion"){
            continue;
        }
        tr.insertCell(index).innerHTML=itemObject[key];
        index++;
    }
    tr.insertCell(index).appendChild(printOperations(itemObject));
    printAutoIncrement();
    document.getElementById("itemname").focus();
    //tr.insertCell(0).innerHTML = itemObject.id;
    //tr.insertCell(1).innerHTML = itemObject.name;
    updateCount();
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
    updateCount();
}
function deleteMarkRecords(){
    var itemArray = itemOperations.deleteMarked();
    printRecords(itemArray);
    
}
function printRecords(itemArray){
document.getElementById("itembody").innerHTML="";
    itemArray.forEach(printItem);
}

function loadLocal(){
    if(window.localStorage){
      if(localStorage.items) {
          var itemArray = JSON.parse(localStorage.items);
          itemOperations.itemList=itemArray;
          printRecords(itemOperations.itemList);
      } 
        else{
            alert("No Data Found in LocalStorage So Can't Load Anything...");
        }
    }
    else{
        alert("this feature is not there in your browser...."); 
    }
}

function saveLocal(){
    if(window.localStorage){
        var jsonString = JSON.stringify(itemOperations.itemList);
        localStorage.items =jsonString;
        Notification.requestPermission(function(){
        var n = new Notification("ITEM CRUD-Application : By Amit Srivastava", {
            body : "Hello User , Your Data is Save in Your Browser",
            icon : "../images/success.png"
        });
            
        //document.getElementById("audio").play();
        setTimeout(function(){
            n.close();
            //document.getElementById("audio").pause();
            //document.getElementById("audio").currentTime=0;
        },7000);

    });
        //alert("Record Save...");
    }
    else{
        alert("this feature is not there in your browser....");
    }
}

function ajaxCall(){
    var requestData = null;
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("get",urlConfig.itemURL,true);
    xmlHttpRequest.onreadystatechange=function(){
        console.log("Ready State is "+xmlHttpRequest.readyState);
        if(xmlHttpRequest.readyState==4 && xmlHttpRequest.status==200){
            localStorage.items= xmlHttpRequest.responseText;
            loadLocal();
        }
    }
    xmlHttpRequest.send(requestData);
}

function sortByPrice(){
    printRecords(itemOperations.sorting());
}