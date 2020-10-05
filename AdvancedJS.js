
// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/

const HalfTree = function(height){

 let chr = '*';

 for (let i=1 ; i<=height;i++){

    console.log(chr.repeat(i))
}
}
HalfTree(8)

/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/

const Tree = function(height){

  let chr = '*';
  
  for (i=1 ; i<=height; i++){
     
      console.log(' '.repeat(height-i),chr.repeat((i*2)-1))

     }

}
 Tree(9)



/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/


function IsItPrime(nmbr){
 

  if ((nmbr>1 )&& (nmbr % 2 !== 0) || (nmbr === 2)) {

   
    console.log(nmbr,'is a prime number')
    return true;

  }
  else{

    
    console.log(nmbr, 'is not a prime number')
    return false 
  }

}

console.log(IsItPrime(4))






