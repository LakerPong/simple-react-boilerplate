# My React Boilerplate 

A very simple react boilerplate

### Quick start

1. Clone this repo using ```git clone https://github.com/LakerPong/simple-react-boilerplate.git```
2. Move to folder ```simple-react-boilerplate```
3. Run ```npm install```

Now you can start the example with commands:
* Run with development environment ```npm start```
* Run with production environment ```npm run start:production```

Remove example app ```npm run clean```

### Usage

Start coding
1. Client start with ```client/index.js```
2. Server start with ```server/index.js```

CSS - support CSS module and postCSS
1. Put your global CSS file in ```client/assets/css/```
2. Put your local CSS file with your components
3. Import CSS in your components
4. CSS files will be build and be put into ```server/public/build/css```

Image 
(if file size less than 25000bits, it will be transform as base64, you can set the details in webpack.config)
1. Put your images in ```client/assets/img/```
2. Import images in your components
3. Images will be build and be put into ```server/public/build/img```
