describe("Greet Model Test Suite ",function(){
   it("should do initcap of string",function(){
       var expectedResult = "Amit";
       var inputValue = "AMIT";
       var outputValue = initCap(inputValue);
       expect(outputValue).toBe(expectedResult);
   }) ;
     it("should not initcap of blank string",function(){
       var expectedResult = "string is blank";
       var inputValue = "";
       var outputValue = initCap(inputValue);
       expect(outputValue).toBe(expectedResult);
   }) ;
});