
/* Ex.A
   Create a variable test that contains a string
*/
const test = 'Wohooo';

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/
const sum = 10 + 20;
/* 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/

    const Rand= Math.floor(Math.random()*20) ;
    console.log('Ex.C# ', Rand)



/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/
const Me = {
    Name :'Massilia',
    Surname : 'Tazit',
    Age : '25'


}

/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/
delete Me.Age;
/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/
 Me.skills = ['Python','Java','C#','SQL', 'C++', 'JavaScript']
 //console.log('Ex.F# ', Me)
 

/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/

Me.skills.pop();
console.log('Ex.F# ', Me.skills)

