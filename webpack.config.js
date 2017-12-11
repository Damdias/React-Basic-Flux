var webpack = require("webpack");

module.exports = {
    plugins: [
        
           new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
           }),
           
         ],
    entry:"./src/App.js",
     output:{
        path:__dirname,
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader'
            }
        ]
    }
    // externals: {
    //     jquery: 'jQuery'
    //   }
    
}