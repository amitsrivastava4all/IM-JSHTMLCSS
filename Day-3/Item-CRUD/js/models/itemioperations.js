/*
CRUD for Item
*/
var itemOperations={
    itemNo: 1,
    itemList:[],
    addNewItem:function(name,desc,price,url,buydate,color){
        var itemObject = new Item(this.itemNo,name,desc,price,url,buydate,color);
        this.itemList.push(itemObject);
        this.itemNo++;
    },
    searchById:function(id){
       return this.itemList.filter(function(itemObject){
            return itemObject.id ==id;
        });
    },
    deleteMarked:function(){
        return this.itemList = this.itemList.filter(function(itemObject){
           return itemObject.isMarkForDeletion ==false; 
        });
    }
}