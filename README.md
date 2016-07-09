## NodeJS Workshop #2

### Base instructions
  * **If you did not finish** the exercises from the first NodeJS workshop, please complete these first.
  * Fork this repository and clone it in a new Cloud9 workspace.
  * All the work will be done in the `master` branch.

### Creating our own callback-receiving function (higher-order function)
  * Create a file called `request-as-json.js`
  * In it, create a function called `requestJson` that takes a URL and a callback function as parameters.
  * In your function, do the following:
    1. Using the `request` library, make a request to the URL that you were provided.
    2. When you receive the response:
      a. If there is an error, call the callback function and pass it the error as the first parameter
      b. If there is no error, move to step 3
    3. Use `JSON.parse` inside a try/catch block to parse the response:
      a. If there was an error parsing JSON, call the callback function and pass it the same error as the first parameter
      b. If there was no error parsing the JSON, call the callback function and pass it a `null` error as the first parameter, and the parsed response as the second parameter

### Initializing your project
  * Using `npm init`, initialize your project any way you like.
  * Add/commit/push the newly created `package.json` to Git

### Ignoring `node_modules`
  * Create a file at the root of your project called `.gitignore`
  * In this file, write one line that says `node_modules`, and save the file
  * Add and commit the `.gitignore` to Git

### Your first module!
  * Create a `library` directory at the root of your project
  * Inside this directory, create a file called `request-json.js`
  * In this file, copy your function `requestJson` from the previous exercise
  * Export your function from the module as the default export
  * Add/commit/push

### Using your first module
For the next exercise ("How's the weather?"), make sure to use your `requestJson` module instead of using the regular `request` module. As you do this, you may notice that your `requestJson` function stopped working since you put it in a separate file. Find out how and fix it :)

### How's the weather?
  * Go to [Forecast.io API](https://developer.forecast.io/) and read the documentation
  * Get yourself a free API key
  * Remember the Google Geocoding API from yesterday's workshop
  * Using both APIs, complete the following workflow:
    * Ask the user for their location
    * Retrieve the weather for the user's location
    * Display the current weather as well as the next 5 days weather in a nice way
    * **Hint**: to display the results in a nice way, a few NPM modules could be useful, including but not limited to:
      * `colors`
      * `cli-table`
      * `node-emoji`
  * Add/commit/push

### Synonyms/similar words/equivalent words/commensurate words
  * Go to [Big Huge Thesaurus](https://words.bighugelabs.com/api.php) and read the documentation for the API
  * Get yourself a free API key from their system
  * Using this API, we will create a NodeJS app for synonyms
  * **Creating the API**:
    * Create a file `library/synonyms.js`
    * In this file, create and export a **constructor function** called `SynonymAPI`. It takes an api key as parameter and sets it on the new object
    * In the prototype of `SynonymAPI`, add a function `getSynonyms`. It takes a word and a callback. It makes a request to the web api and gives back the results **as an object** to the callback function.
    * *If there was an error, it should be passed down to the callback*
  * **Creating the program**:
    * Create a file `get-synonyms.js` at the root of your project
    * Import your module and create an instance using your API key
    * Prompt the user for a word
    * Using your API, retrieve the synonyms/antonyms/etc. for the input word
    * If everything goes well, display all the results to the user in a nice way
    * **Hint**: to display the results in a nice way, a few NPM modules could be useful, including but not limited to:
      * `colors`
      * `cli-table`
      * `node-emoji`
  * Add/commit/push
