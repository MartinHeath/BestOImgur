# BestOImgur
A pre-assignment. A single pager showing imgurs top 100 images via search.
The original app would take keywords and render any matching images via the imgur server.

A premade tutorial was used as a base for most of the app. The base can be found here:
https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular

## Installation:

Download source files from github (link somewhere above).

Create the MongoDB database (use the server.json file as a guide. Current version uses mLab, but it will be shut down relatively soon).

Install dependencies:

```sh
npm install
```

### Run

Navigate to the root folder and simply type
```sh
Node server.js
```
//The application looks for existing ports and listens on them. If none are found, port 8080 is used.
The port can be altered in server.json.
Now simply navigate to http:\\localhost:[port]\ to begin.

## Features:

* **Search Imgurs top viral images**
* **One-pager site:** Only one page is used on the whole site.
* **Ajax/Jquery search:** The search function uses ajax and Jquery to dynamically generate searched images

## Issues:

In this section, I shall address the issues faced during development.

* **Search:** The searchbar currently only supports reading the input as a whole. Word-by-word search was attempted, but due to time constraints it was dropped.
* **Images:** Images retrieved from Imgur, which did not have an image type in the url were not rendered, as I knew not how.
* **Image server:** Only 60 image metadata files were retrieved. Not sure how to increase amount.
* **Gif's:** As not all .gif files had thumbnails, original files were used. This means they **ALL** load when added, causing longer load times.
* **Testing:** I was unable to run unit or API tests, as the methodology was unfamiliar to me. Due to time constraints, they were left out, but with enough time they are doable.

## Libraries

Bootstrap
jQuery
Node.js
Express.js
Mongoose.js

### Version
1.0



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [l1]: https://laravel.com/
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [Dillinger]: http://dillinger.io/
