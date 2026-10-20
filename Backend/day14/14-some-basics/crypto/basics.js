  //CRYPTO
  
  const crypto = require('crypto');
//UUID = universally unique identifier
//    const id =crypto.randomUUID()
  // generate a random id that we can use to identify a user or a session. This is useful for creating unique identifiers for objects in our application. for expample user id, session id, etc. 
    // console.log(id)

//======== RANDOMBYTES===========

// const token = crypto.radomBytes(16)

// generates 16 cryptographically secure random raw bytes (returned as a Node.js Buffer containing raw binary numbers)

//.toString('hex') converts those raw binary bytes into a human-readable text string encoding.


//Hexadecimal (Hex) is a base-16 numbering system used to represent raw binary data as readable characters.

// 1 Byte = 2 Hex characters.
// console.log(token)

// const token2 = crypto.randomBytes(16).toString('hex');
// console.log(token2);

//======== HASHING===========
//one-way hashing is a process of taking an input (or 'message') and returning a fixed-size string of bytes. 
//  const text = 'Hello, world!'; //input message
// const hash = crypto.createHash('sha256').update(text).digest('hex'); 

//sha256 is a hashing algorithm that takes an input and returns a fixed-size string of bytes. 
// //update the hash with the input message
 //digest the hash to get the final output
// console.log(hash)


//======== HMAC (Hash-based Message Authentication Code) ===========
//It’s a way to prove two things about a message:
//. 1.The message was not changed (integrity)
//. 2.It came from someone who knows the secret key (authenticity)

// Imagine you and your friend share a secret password. You send a letter, and at the bottom you write a special stamp that you can only make using the letter’s text and the secret password.

//When your friend receives it, they make the same stamp using the same password. If the stamps match, the //letter is real and untouched. If someone changed even one word, the stamp won’t match.




// ========PATH MODULES===========

//path.join() is used to join multiple path segments into a single path. uses the appropriate separator for the operating system (e.g., / for Unix, \ for Windows)

const path = require('path');
const root = process.cwd();

// process.cwd() returns the current working directory of the Node.js process. 

console.log('Root directory:', root);

//=====BUFFERS===========

//Buffers are used to store binary data. 
const buf = Buffer.from("Node")

buf.toString()          // "Node"  (back to text)
buf.length              // 4 (bytes)
Buffer.alloc(10)        // empty buffer of 10 bytes

//=====URl MODULES===========

console.log(apiUrl.protocol)   // "https:"
console.log(apiUrl.hostname)   // "api.acedevhub.com"
console.log(apiUrl.pathname)   // "/users"
console.log(apiUrl.search)     // "?page=2&limit=10"
console.log(apiUrl.searchParams.get("page"))    // "2"
console.log(apiUrl.searchParams.get("limit"))   // "10"