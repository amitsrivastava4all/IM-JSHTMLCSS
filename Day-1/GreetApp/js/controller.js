// Event Binding
//alert("I Will RUN When Head Start");
window.addEventListener("DOMContentLoaded",init);
function init(){
  //  alert(" I Will run when Window is Loaded..");
document.getElementById("greetbutton").addEventListener("click",sayWelcome);
}
function sayWelcome(){
        var firstName = initCap(document.getElementById("firstname").value);
        var lastName = initCap(document.getElementById("lastname").value);
        
        document.getElementById("output").innerHTML="Welcome "+firstName+" "+lastName;
        }