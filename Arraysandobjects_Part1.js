const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ];
  
// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, 
   and returns the object after deleting the property with that given name
*/

let user = {
    name: 'Mark',
    surname : 'szwarowski'  
}
function DeleteProp (obj,objName){

 if (obj.name === 'Mark' ){

    delete obj.name;
 }
 return obj
}
console.log ('Ex.11#\n ',DeleteProp(user,'user'))

/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/
function OlderMovie (){
   
 let oldestyear = movies[0].Year;

for (i=0;i<movies.length;i++){

 if (parseInt(movies[i].Year) < oldestyear){
  oldestyear = movies[i].Year

 }
 } return oldestyear
}

console.log('Ex.12#\n ',OlderMovie())

/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/

function CountMovies (){

    let numberofmovies = 0;
    for (i=0;i<movies.length;i++){

        if (movies[i].Type === 'movie'){
            numberofmovies +=1;      
          } 
    }
    return numberofmovies;
}
console.log('Ex.13#\n ',CountMovies())

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/
function OnlyTitles (){
  
  let Title_array=[]

for (i=0; i<movies.length; i++){
 
    Title_array.push(movies[i].Title)

  }
  return Title_array;
}

console.log('Ex.14#\n',OnlyTitles())

//Second method to create array of titles 
let Title_arr = movies.map(movies => movies.Title)

console.log(Title_arr)

/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/
const OnlyThisMillennium = function(){

  let moviemillinium= [];
  for (let i=0; i<movies.length; i++){
    if ( parseInt(movies[i].Year)>= 2000){
      
    moviemillinium.push(movies[i])
  }
 }return moviemillinium
}

console.log('Ex.15#\n ',OnlyThisMillennium())


/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID    
*/
const GetMovieById = function(ID){
  for (let i=0; i<movies.length; i++){
    if (ID === movies[i].imdbID){

      return (movies[i])

    }
  }
}

console.log('Ex.16#\n ',GetMovieById("tt2395427"))
/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/
//const SumYears =  function(){

  

//} 




/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/

const SearchMovie = function(str){
  let movie_serie = []
  
  for (let i=0; i<movies.length; i++){
    
    if (movies[i].Title.includes(str)){
      
      movie_serie.push(movies[i])
  }
 }
 return movie_serie;
}

console.log('Ex.18# \n',SearchMovie('Lord'))
/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/

const SearchAndDivide = function(str){
  let movies_sections = {}
  let av= []
  let others = []

  for (let i=0; i<movies.length; i++){
   
  if ((movies[i].Title).match(str)){

    av.push(movies[i].Title)
    movies_sections.match_movie = av
  }
    others.push(movies[i].Title)
    movies_sections.non_match = others
}
return movies_sections;
}
console.log('Ex.19# ',SearchAndDivide(/Avengers/gi))


/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/

let test = ['abc','def','ghk','lmn']
const Deletex = function(nmbr){

 for (let i=0; i<test.length; i++){
  if (i === nmbr){
    test.splice (nmbr,1)
  } 
 } return test;
}
console.log('Ex.20# ',Deletex(2))