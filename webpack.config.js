const path = require("path");

module.exports = {
    entry: "./src/js/main.jsx",
    output: {  path: path.join(__dirname, "dist/js/"), filename : 'out.js' },
    watch: true,
    module: {
        rules : [{
            test: /\.jsx$/,  exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ['es2015','stage-2', 'react'] }
        }]
    }
};
