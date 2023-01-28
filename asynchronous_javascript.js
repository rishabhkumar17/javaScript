// Asynchronous code

// setInterval()
// clearInterval()
const myInterval = setInterval(() => console.log('Hello world'), 1000);

clearInterval(myInterval);

// setTimeout()
// clearTimeout()
const myTimeout = setTimeout(() => console.log('Hello world'), 5000);

clearTimeout(myTimeout);

// setTimeout(() => console.log('At the top'), 5000); // run asynchronously after 5 sec
//console.log('At the bottom'); // runs synchronously immediately
/* output -> 
    At the bottom
    At the top 
*/

// What is synchronous javascript
/* 
syncronous javascript is one in which the code
is executed line by line and their tasks are completed instantly. i.e. there is no time delay in the completion of the tasks for those lines 
of code.
*/
// synchronous JS example

// const functionOne = () => {
//   console.log('function one, part 1');

//   functionTwo();

//   console.log('function one, part 2');
// };

// const functionTwo = () => {
//   console.log('function two');
// };

// functionOne();
/* 
output -> 
    function one, part 1
    function two
    function one, part 2
*/

// What is Asynchronous javascript
/* 
asynchronous javascript is one in which some
lines of code take time to run. These tasks are
run in the background while the javascript engine
keeps executing other lines of code. 
When the result of asynchronous tasks gets
available, is then used in the program 
*/
// Asynchronous JS example

const functionOne = () => {
  console.log('function one, part 1'); // 1

  //   functionTwo();

  console.log('function one, part 2'); // 2
};

/* const functionTwo = () => {
  setTimeout(() => console.log('function two'), 2000); // waiting -> 3
}; */

functionOne();
/* 
output -> 
    function one, part 1
    function one, part 2
    function two
*/

// Data fetching

// API - Application programming interface
// An API, or application programming interface,
// is a set of defined rules that enable
// different applications to communicate with each other.

// const fetchUser = (username) => {
//   setTimeout(() => {
//     return { username };
//   }, 2000);
// };

// const user = fetchUser('Michael');
// console.log(user); // undefined

// callback funtion -> calls backs after a certain action
// happens after something is done

/* const fetchUser = (username, callback) => {
  console.log('fetching user...');

  setTimeout(() => {
    console.log('user fetched');

    callback({ username });
  }, 2000);
};

const fetchUserPhotos = (username, callback) => {
  console.log('fetching photos...');

  setTimeout(() => {
    console.log('photos fetched for ' + username);

    callback(['Photo 1', 'Photo 2']);
  }, 2000);
};

const fetchPhotoDetails = (photo, callback) => {
  console.log('fetching photo details...');

  setTimeout(() => {
    console.log('photo details fetched for ');

    callback('[Details]');
  }, 2000);
};

NOT USING THIS => callback hell
fetchUser('Michael', (user) => {
  console.log(user); // {username: 'Michael'}

  fetchUserPhotos(user.username, (photos) => {
    console.log(photos); // ['Photo 1', 'Photo 2']

    fetchPhotoDetails(photos[0], (photoDetail) => {
      console.log(photoDetail); // [Details]
    });
  });
}); */ // callback hell - violates DRY principle

// Promises
/* const fetchUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('user fetched');
      resolve({ username });
      reject('User not found');
    }, 2000);
  });
};

const fetchUserPhotos = (username) => {
  return new Promise((resolve, reject) => {
    console.log('fetching photos...');

    setTimeout(() => {
      console.log('photos fetched for ' + username);

      resolve(['Photo 1', 'Photo 2']);
    }, 2000);
  });
};

const fetchPhotoDetails = (photo) => {
  return new Promise((resolve, reject) => {
    console.log('fetching photo details...');

    setTimeout(() => {
      console.log('photo details of ' + photo);

      resolve('[Details]');
    }, 2000);
  });
};

fetchUser('Michael')
  .then((user) => fetchUserPhotos(user.username))
  .then((photos) => fetchPhotoDetails(photos[0]))
  .then((details) => console.log(details)); */

// Async Await
// async functions return promises
