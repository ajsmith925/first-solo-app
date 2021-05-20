const path = require ('path')
 // required for css loader

module.exports={
   entry: './client/index.js',  // sets Webpack entry to this file
   output: {                    //creates the bundle.js in the path filepath and with the filename 'bundle.js'
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
   },
   devServer: {
      
      publicPath: '/build',
      compress: true,
      port:8080,
      proxy:{
         '/api': 'http://localhost:3000',
      }
   },
   // mode: process.env.NODE_env,
   mode: process.env.NODE_env, // 'mode' sets webpack to production mode (production =>gets uglified)
   module: {  //webpack only understands JS and JSON, need to import loaders (translaters) to understand other JS stuff (React, JSX, Typescript)
      rules: [
         { 
         test: /\.jsx?/, 
         exclude: /(node_modules|bower_components)/,
         use: {
         loader: 'babel-loader',
         options: {
            presets: ['@babel/preset-env','@babel/preset-react']
         }
         }
         },
        {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"], //order matters! It runs backwards from sass-loader -> css -> style loader
        }
       ]
   }
};