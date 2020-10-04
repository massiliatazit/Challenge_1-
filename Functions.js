// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/
 function Dice (){

    return Math.floor(Math.random()*6)+1

  }
  console.log(Dice())
/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/
 
const WhoIsBigger = function(x,y){

    if (x>y){
        return x;
    }else{
        return y;
    }
}

/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/

const SplitMe = function(S){

 return S.split(' ');

}

console.log('Ex3# ', SplitMe("I love coding"))

/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/

const DeleteOne = function(S,B){

    if (B === true){

        return S.slice(1,S.length)
    }else{

        return S.slice(0,-1)

    }
}
console.log('Ex4# ',DeleteOne('love',false))

/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/


const OnlyLetters = function(S){
    Num=['1','2','3','4','5','6','7','8','9']
    for (let i = 0; i< S.length; i++){
        if ( S.includes(Num[i])){

          S = S.replace(Num[i],'' )

        }
    

    }
    
    return S

}
console.log('Ex#5 ',OnlyLetters("I love 123 whatever"))

/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/

function IsThisAnEmail(email) {
   
    let valid = false;
  
    if (email.includes('@')){

    let prefix = email.substring(0, email.indexOf('@'))
        if( !(prefix.substring(0,'.'))|| (prefix.includes('..'))){

             valid = true;

            console.log('Your email is valid')

        }

    }
    else{
        valid = false;

        console.log('Your email is not valid')

    }

    return valid;
    
    
}
console.log('Ex6# ',IsThisAnEmail('massilia@hhh.com'))

/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/
function WhatDayIsIt(day) {

   
    switch(true){
        case day === 1:
            console.log('Day is: Monday')
            break
        case day === 2:
            console.log('Day is: Tuesday')
            break
        case day === 3:
            console.log('Day is: Wednesday')
            break
        case day === 4:
            console.log('Day is: Thursday')
            break
        case day === 5:
            console.log('Day is: Friday')
            break
        case day === 6:
            console.log('Day is: Saturday')
        case day === 0:
            console.log('Day is: Sunday')
        
        default :
        console.log('It is not a day of the week ')

    }
    return day;
}
console.log('Ex7# ',WhatDayIsIt(new Date().getDay()))

/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }

*/
function RollTheDices(n){
 
    let DiceObj = {}

    for (i=0; i<n; i++){
        
        let dice1 = Dice(n)
        let dice2 = Dice(n)
        DiceObj.sum = dice1+dice2;
    
        DiceObj.values = [dice1,dice2]
        //console.log(Dice(n))

    }

    return DiceObj;
}
    console.log('Ex8# ', RollTheDices(5))

/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/
function HowManyDays (Date2){

    const anyDate = new Date(2020, 1, 7);
    numberofdays = ((Math.abs(anyDate - Date2))/24 * 60 * 60 * 1000);
 return numberofdays


}
console.log(HowManyDays(new Date(1995,09,11)))
/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/
const IsTodayMyBDay = (todayDate) => {
   
    
if (( todayDate.getDate() == 11 )&& (todayDate.getMonth() == 12 )&& (todayDate.getFullYear() == 1995)){

    return  true;
}else

{
    return false;
}

}

console.log('Ex10# ',IsTodayMyBDay(new Date()))