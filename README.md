# First Web App

This is an app created with the purpose of learning.

### Week 1

As of 04 August 2016, it receives a Github user name, and fetch the account's data from Github public API. The app stores part of that info at the local storage, and print the same information formated.

For this part I have used:  
* Jquery
* Closures
* Module Pattern
* API call

### Week 2

On 17 August 2016, I added Grunt to the project, to be able to preprocess Sass and Jade in a consistent way.

For this part I have used:  
* Grunt

### Week 3

As of 24 August 2016, the app has a back-end developped with Node.js. When the info is received from the Github API, the front-end app calls the back-end, passing the relevant data to the server, and then the server persist this data. The callback passed when calling the Github API has been changed to implement it as jQuery promises, and the calls to the server have been created using promises too. I have implemented two promises: promised returned by jQuery ajax methods, and promises returned by Deferred.promise().

For this part I have used:  
* Promises
* Node:
  * FileSystem
  * Path
* Express:
  * Middleware. Body-parser
