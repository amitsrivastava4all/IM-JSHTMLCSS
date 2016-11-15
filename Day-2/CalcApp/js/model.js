/*
Contains the Logic
*/

var computeObject = {
    salary: 0,
    setSalary:function(salary){
        this.salary = salary;
    },
    hra:function(){
     return this.salary * 0.30;
    },
    da:function(){
        return this.salary * 0.20;
    },
    ta:function(){
        return this.salary * 0.10;
    },
    pf:function(){
        return 2000;
    },
    ns:function(){
        return this.salary + this.hra() + this.da() + this.ta() - this.pf();
    }
}

//function computeHRA(salary){
//    return salary *0.30;
//}
//
//function computeDA(salary){
//return salary *0.20;
//}
//
//function computeTA(salary){
//    return salary *0.10;
//}
//function computePF(){
//    return 2000;
//}
//function computeNetSalary(salary){
//    return salary + computeHRA(salary) + computeDA(salary) + computeTA(salary) - computePF();
//}