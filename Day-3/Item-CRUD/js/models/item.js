/*
Function Constructor
*/
function Item(id,name,desc,price,url,buydate,color){
    this.id =id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.url = url;
    this.buydate = buydate;
    this.color= color;
    this.isMarkForDeletion = false;
}