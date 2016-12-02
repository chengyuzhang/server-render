/**
 * Created by Nelson on 16/10/27.
 */
var webpack=require('webpack');


//分离css文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Ext=new ExtractTextPlugin('css/[hash:6][name].css');

//文件压缩
var UglifyJsPlugin=new webpack.optimize.UglifyJsPlugin({compress:{warnings:false},minimize: true});

//生成html文件
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWeb=new HtmlWebpackPlugin({
    filename:'index.html',
    template:'template/index.html'
});

module.exports={
    entry:{
        app: './entryBuild.js'
    },
    output:{
        path:__dirname+'/dist/',
        filename:'js/[hash:6][name].js'
    },
    module:{
        loaders:[//添加各种处理loader
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.json$/, loader: 'json'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=images/[hash:6].[name].[ext]'},
            { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/, include: __dirname, query: {presets: [ 'react-hmre' ]}}
        ]
    },
    resolve:{//
        extensions:['','.js','.json']
    },
    plugins: [
        UglifyJsPlugin,
        HtmlWeb,
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
