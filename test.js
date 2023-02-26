// let arrOfFriends=['John', 'James', 'Jane', 'Ratul'];
// const checkEvenLength = (arrOfFriends) => {
//     //write your code here
//       let newArray =[];
//       for(let friend of arrOfFriends){
//         if(friend.length % 2 ===0){
//             newArray.push(friend);
//         }
        
//       }
//       return newArray;
//     };

//     console.log(checkEvenLength(arrOfFriends));


// let array = [4,6,10,12];

// const calculate = (arrOfNumbers) => {
//     //write your code here
//       let total = 0;
//       for(let number of arrOfNumbers){
//         let square = number*number;
//         total+=square;
        
//       }
//       let average = total /arrOfNumbers.length;
//       return average;
//     };
//     console.log(calculate(array));



// let array = [
//   { name: 'John', age: 20 },
//   { name: 'Mary', age: 25 },
//   { name: 'Peter', age: 30 }
// ];

// const findNames = (arrOfObj) => {
//   //write your code here
//  //don't forget to return
// let nameArray= arrOfObj.map(n=>n.name);
// return nameArray;

//  };

//  console.log(findNames(array));



// let booksName =[
//   { 
//      title: 'To Kill a Mockingbird', 
//      author: 'Harper Lee', 
//      year: 1960 
//   },
                               
//  { 
//      title: 'Harry Potter and the Philosopher Stone', 
//      author: 'J.K. Rowling',
//      year: 1997 
//  },
                                                   
//  { 
//      title: 'The Hunger Games', 
//      author: 'Suzanne Collins', 
//      year: 2008
//   }
// ];

// const findBooks = (arrOfBooks) => {
//   //write your code here
//  //don't forget to return
//  let readBooks=[];
//   arrOfBooks.filter(b=>{
//     if(b.year>2000){
//       return readBooks.push(b);
//     }
//   })
//   return readBooks;
// };

// console.log(findBooks(booksName));

let arrOfMovies = [
  { 
    title: 'Star Wars', 
    director: 'George Lucas', 
    year: 1977 
  },
               
  { 
    title: 'The  Dark Knight', 
    director: 'Christopher Nolan', 
    year: 2008 
  }
];

const findTheMovie = (movieTitle, movieYear, arrOfMovies) =>{
  //write your code here
  //don't forget to write return

    arrOfMovies.find(m=>{
      if(m.title === movieTitle && m.year=== movieYear){
        // return m;
        console.log(m);
      }
    })
  };

 console.log(findTheMovie('Star Wars',1977,arrOfMovies));