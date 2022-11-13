

// task 5
// https://docs.google.com/document/d/1TPk3wqxDFi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit





// 1.(a) Print odd numbers in an array

(function(){
    var total =0;
    var value = [1,2,3,4,5,6,7,8,9,10,11,13,15,12,14,16];
    for(let i =0;i<value.length;i++){
        if(value[i]%2!==0){
            total=value[i];
    
            console.log(`Odd Numbers is ${total}`);
        }
    }
    })()
    //********************************************************************************************* */
    
    // 1.(b) Using Arrow function
    let arr =[1,2,3,4,5,6,7,8,9];
    let oddNum =(arr)=>{
     var result = arr.filter((Element)=>Element%2!==0)
     return result;
    }
    console.log(oddNum(arr));
    
    //***************************************************************************************** */
    // 2.(a)  Convert all the strings to title caps in a string array
            // using Arrow Function
    
    const str = "welcome back";
    const newStr = (str)=>{
    var result =   str.split(' ')
       .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
       .join(' ');
       return result;
    }
    console.log(newStr(str));
     
    //************************************************************************************** */
    // 2.(b) Nameless function.
    let fun = function(arr){
        var result = arr.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');
        return result;
    }
    console.log(fun("Hello Guys"));
    
//************************************************************************************** */
    //3.(a) Sum of all numbers in an array
    
    let total =(function(){
        var array =[1,2,3,4,5,6,7,8];
        var sum = array.reduce(function(a,b){
            return a+b;
    
        },0);
        console.log(sum);
    })();
//**********************************************************************************
    //3.(b) Sum of all numbers in an array

      let addition = (...arr)=>{
        console.log( arr.reduce((previous,curr)=>{
         let result = previous + curr;
        return result;
         })); 
        
      }
      addition(1,2,3,4,5,6,7,8,9,10);

    //******************************************************************************************* */
    
    
      // 4. (a) Return all the prime numbers in an array
    
    const primenumber =(function(){
    function checkPrime(number) {
              if (number <= 1) {
                return false;
              } else {
                for (let i = 2; i < number; i++) {
                  if (number % i == 0) {
                    return false;
                  }
                }
                return true;
              }
            }
            console.log(checkPrime(4));
        })();
    
    //************************************************************************************ */
     
      // 4. (b) Return all the prime numbers in an array

      let prime = (num)=>{
        if (num <= 1) {
            return false;
          } else {
            for (let i = 2; i < num; i++) {
              if (num % i == 0) {
                return false;
              }
            }
            return true;
          }
          
        }
     console.log(prime(2));

    //*********************************************************************************** */
    
    
    
    // 5.(a) Return all the palindromes in an array
    
     const palindrome=(arr)=>{
        
        for(let i=0;i<arr.length/2;i++){
            if(arr[i]!==arr[arr.length-i-1]){
                return false;
    
            }
        }
        return true;
    }
    console.log(palindrome("malayalam"));
    
  //********************************************************************************************************** */  

          // 5.(b) Return all the palindromes in an array
        let fun1 = function(...aar){
            for(let i=0;i<aar.length/2;i++){
                if(arr[i]!==aar[aar.length-i-1]){
                    return false;
                }
            }
            return true;
        }
        console.log(fun1("mother"));
    
    //************************************************************************************************************ */
    
    
    
    // 6(a)  Remove duplicates from an array
    
    
        var cites =["salem","chennai","chennai","tirupur","coimbatore"];
       
    var find =()=>{
        return unique = cites.filter(function(item,index){
            return cites.indexOf(item)==index
        })
    }
    console.log(find());
    
    //******************************************************************************************************* */

          //  7(a)  Return median of two sorted arrays of the same size.


          array1=[1,6];
          array2 =[5,10,2];

          let median = (array1,array2)=>{
            var arrayconcat =array1.concat(array2);
            console.log(arrayconcat);

             var arraysort =arrayconcat.sort((a,b)=>a-b);
             console.log(arraysort);

             var length = arraysort.length;
             console.log(length);

             if(length%2!=0){
              var result = arraysort[Math.floor(lenght/2)]
              console.log(result);
             }
             else{
              var result = Math.floor((arrraysort[length/2]+arraysort[length/2-1])/2);
              console.log(result);
             }
          }
          median(array1,array2);

    
    
    
    
    
    // let foo = function caps(str){
    //     const word = str.toLowercase();
    //     return str.charAt(0).toUppercase() + word.slice(1);
    // }
    // console.log(caps("guvi"));
    
    // function caps(str){
    //     return str.split('')
    //     .map((value)=>value[0].touppercase()+value.slice(1).tolowercase())
    //     .join('');
        
    // }
    
    // console.log(caps("guvi"));
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
