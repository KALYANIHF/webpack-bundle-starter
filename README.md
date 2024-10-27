### using webpack to bundle up your application

- in this project we are using webpack to bundle up our application.
- we have use a multiple entry point for our application. which is the src folder with the file index.js

  - > one is index.js file
  - > other one is vendor.js file
  - > output folder is dev foler [conversionwise its name is dist but we have changed it to dev]

- we have used webpack.config.js file to configure webpack. after version 4.0.0 it is not mendatory to use a configaration file to configure the webpack but to make it totally custom it is a better choice. after that we have used webpack.prod.config.js file to configure webpack for production.

- we have used webpack-dev-server to run our application. this helps us to run our application without running the server. or restarting the server again and again.

in this project we have use loders and plugins to bundle up our application.

- loders:

  `babel-loader`  
  `css-loader`  
  `file-loader`  
  `html-loader`  
  `style-loader`  
  `url-loader`  
  `webpack-dev-server`  
  `webpack-merge`

- plugins:

  `clean-webpack-plugin`  
  `html-webpack-plugin`

**_to start the server and build the appliation use the following command_**

```
npm run build
```

---

last but not least

### **_Happy Coding_**
