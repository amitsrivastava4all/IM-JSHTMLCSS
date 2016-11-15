/*
Glue B/w View and Model
*/

window.addEventListener("load",init);
function init(){
    document.getElementById("computeSalary").addEventListener("click",calculateSalary);
    document.getElementById("clear").addEventListener("click",clearData);

}

function validateSalary(salary){
    var errorMessage ="";
    var className = "";
    var validate = true;
     if(!salary || salary<0){
        errorMessage="Invalid Salary";
        className="error";
        validate = false; 
    }
    document.getElementById("errormsg").innerHTML=errorMessage;
    document.getElementById("errormsg").className=className;
    return validate;
}

function calculateSalary(){
var salary = parseInt(document.getElementById("salary").value);
    if(!validateSalary(salary)){
        return;
    }
//    if(!salary || salary<0){
//        document.getElementById("errormsg").innerHTML="Invalid Salary";
//        document.getElementById("errormsg").className="error";
//        return ;
//    }
//    var netSal = computeNetSalary(salary);
//    var hra = computeHRA(salary);
//    var da = computeDA(salary);
//    var ta = computeTA(salary);
//    var pf = computePF();
//    if(salary>0){
//        document.getElementById("errormsg").innerHTML="";
//        document.getElementById("errormsg").className="";
    document.getElementById("result").className="showit";
    computeObject.setSalary(salary);
    printDetails();
    //}
//    document.getElementById("ns").innerHTML=computeObject.ns();
//    document.getElementById("pf").innerHTML=computeObject.pf();
//    document.getElementById("hra").innerHTML=computeObject.hra();
//    document.getElementById("da").innerHTML=computeObject.da();
//    document.getElementById("ta").innerHTML=computeObject.ta();
    
    
}
function printDetails(){
    for(key in computeObject){
        if(key=="salary" || key=="setSalary"){
            continue;
        }
        document.getElementById(key).innerHTML=computeObject[key]();
}
}

function clearData(){
    var spans = document.getElementsByClassName("clearit");
   Array.prototype.forEach.apply(spans,[function(e){
       e.innerHTML="0";
}]);
    // console.log(spans);
//    for(var i = 0 ; i<spans.length; i++){
//        spans[i].innerHTML="0";
//    }
    document.getElementById("salary").value=0;
    document.getElementById("salary").focus();
}
