# node-workshop-2
## NodeJS Workshop #2

### Base instructions
  * **If you did not finish** the exercises from the functions/objects workshop, or the first NodeJS workshop, please complete these first.
  * Fork this repository and clone it in a new Cloud9 workspace.
  * All the work will be done in the `master` branch.

### Creating our own callback-receiving functions (higher-order functions)
  * Create a file called `cps.js` where all your code will be
  * Create a function called `firstChar` that takes a string and "returns" the first character of the string **after one second**.
  * **NOTE**: You won't be allowed to use the `return` keyword, because you'll only be "returning" in the callback to `setTimeout`, *way after your function has finished executing*.
  * Create a function called `lastChar` that takes a string and "returns" the last character of the string after one second.
  * Create a function called `getFirstAndLast` that takes a string and "returns" the first+last character of the string. Your function should use `firstChar` and `lastChar` to do its work. I should be able to call your function like this:
```javascript
  getFirstAndLast("hello", function(firstLast) {
    console.log(firstLast); // should output "ho"
  }); 
```
  * Add/commit/push
  * Create a pull request. This PR will contain ALL the work for this workshop, so give it a nice title instead of the default commit text!
  * Make sure to **commit often** from here on, so we can check your work!
  
  
### Initializing your project
  * Using `npm init`, initialize your project any way you like.
  * Add/commit/push the newly created `package.json` to Git
  
### Ignoring `node_modules`
  * Using the `nano` text editor, create a file at the root of your project called `.gitignore`
  * In this file, write one line that says `node_modules`, and save the file
  * Add/commit the `.gitignore` to Git
  * From here on out, you don't *need* to use the command-line to do file/directory manipulations :)
  
### Your first module!
  * Create a `library` directory at the root of your project
  * Inside this directory, create a file called `fortune.js`
  * In this file, create a module that exposes one `getFortune` function
  * When the `getFortune` function is called, it should return a random fortune, similarly to the `fortune` cmd-line utility
  * Add/commit/push
  
### Using your first module
  * At the root of the project, create a file called `fortune-teller.js`
  * In this file, load your `fortune` module that you created in the previous step
  * Using the module, make your program output a random fortune to the command-line
  * Run your program from the command line with `node fortune-teller.js`
  * **Add/commit**
  * Read about [`process.argv`](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
  * Run your program from the command line with `node fortune-teller.js 5`
  * Try to get that last `5` command-line argument from the `process.argv` array
  * Using this argument, output the number of fortunes requested by the user
  * Add/commit/push
  
### First web server
  * Using the example code from the morning's demo, create and run a small web server that answers "Hello World" in a file called `server.js`
  * Run your web server and make sure it is working
  * Add/commit/push

### Delayed web server
  * Using the example code from the morning's demo, create and run a small web server that answers "Hello World" **after 10 seconds** using `setTimeout` in a file called `server-delayed.js`
  * Run your web server
  * Make one request to your web server and notice it takes 10 seconds before you get a response
  * While one of your requests is waiting, open another tab and make multiple requests
  * Notice that all your requests are being responded to 10 seconds after they were done
  * This means that the web server was able to receive all your requests, even as it was waiting to answer other ones in the `setTimeout`
  * Add/commit/push

### Unusable web server
  * Using the example code from the morning's demo, create and run a small web server that answers "Hello World" **after 10 seconds** in a file called `unusable-server.js`
  * Instead of using `setTimeout` as you did in the previous example, use the following code ** without callbacks **
```javascript
  var start = new Date().getTime();
  while (new Date().getTime() - start < 10000);
  // INSERT YOUR res.writeHead / res.end lines after this line
```
  * What we are doing here is simulating a **blocking `setTimeout`**. Instead of using the non-blocking `setTimeout`, we are using a loop that just checks the current time, and the loop stops running after 10 seconds have passed.
  * This is similar to the `while(true);` loop we saw earlier, except that it *does* end at some point.
  * Make one request to your web server and notice it takes 10 seconds before you get a response
  * While one of your requests is waiting, open another tab and make multiple requests
  * Notice that all your requests are **NOT** being responded to 10 seconds after they were done
  * This means that while your web server was in the `while` loop for the first request, it was **NOT** able to even receive your other requests
  * Add/commit/push
  
### Fortune server
  * Using the example code from the morning's demo, create and run a small web server that outputs a random fortune.
  * Save it in a file called `fortune-server.js`
  * Add/commit/push
  
### Tell the user their location
  * Using the example code from the morning's demo, create and run a small web server that responds differently to each URL being passed.
  * This webserver should run inside `location-server.js`
  * The web server should examine the URL, and geocode it with Google's service
  * Before using Google's geocoding service, you will need to [get an API key for Google Geocoding](https://developers.google.com/maps/documentation/geocoding/get-api-key). This is something that we often have to do when consuming external services
  * Once you have your API key, use Google's Geocoding service inside your request handler to figure out the latitude and longitude of the location that was passed to you in the URL
  * Output it to the user as you wish
  * Add/commit/push

### Upgrading the web server
  * Use the code you wrote previously in `location-server.js`, and save it to `cached-location-server.js`
  * Currently, if we get multiple requests for the same city, we will be making one request to Google for each request being made to us
  * One thing we often do as developers is save results we were given from external APIs, to avoid overloading them
  * In this upgraded version, we are going to save every request we make to Google, in case we get the same request one more time
  * Figure out the best way to save the data you get from Google inside a variable
  * When you give back the response to the user, let them know whether this is a **fresh** response or a **cached response**
  
### Synonym server
  * Create a web server in a file called `synonym-server.js`
  * Go to [Big Huge Thesaurus](https://words.bighugelabs.com/api.php) and read the documentation for the API
  * Get yourself a free API key from their system
  * Using this API key, make your web server respond to requests by URL. Extract the world from the URL, and output a list of synonyms to the user in a nice text format.
  * Add/commit/push
  
### Location server challenge!!!
  * So far, the web servers we created have been outputting text to the user. Since HTML is just text, we should be able to output HTML to the user
  * Show this to yourself by taking one of the servers you created previously, and instead of returning "Hello World", return the string `<h1>Hello World</h1>`
  * Read the documentation for [Google Static Maps API](https://developers.google.com/maps/documentation/static-maps/intro)
  * Get an API key for this service
  * Copy your upgraded location server to a file called `location-image-server.js`
  * Using the documentation, figure out how to build an image URL that will be centered around the latitude/longitude you have found
  * Instead of outputting the location to the user, output an `<img>` tag whose `src` parameter will be the URL you just built
