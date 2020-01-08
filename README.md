The Pet Bay
=============================

## Intro

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

As assignment from SCC-0219 - Introduction to Web Development, at University of Sao Paulo, we're developing a web page for a ficticious Pet Shop. We named it to "The Pet Bay" and we're going to apply web technologies and concepts presented in our classes.

## Usage

The following instructions are passed considering `yarn` is properly installed and configured. You can also use `npm` to install and run scripts (see syntax changes).

* Open your terminal, navigate to the repository folder

* Install node_modules locally with
  *  `yarn install`

* Run the development server with
  * `yarn start` or with Docker `docker run --rm -it -p 3000:3000 -p 4000:4000 -v "$(pwd):/app" -w /app node:8 npm start`
  * If any errors occur, **webpack** should warn you in the terminal
  * If everything is OK, the server can be accessed at
    * `localhost:3000`

* Generate a production build with
  * `yarn build` or with Docker `docker build -t the-pet-bay .`
  * Access the application by running
    * `yarn serve` or with Docker `docker run --rm -it -p 5000:5000 the-pet-bay`
  * If everything is OK, the server can be accessed at
    * `localhost:5000`
  * That results in a minified and chunk-splitted bundle, which can be accessed in a more simple and performatic way
  * Production files are generated in **/build** directory

## Contributors

@santiagogustavo, @gugahoa & @lekonjak.

## License

