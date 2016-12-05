/**
 * Created by Nelson on 2016/11/28.
 */
const webpack=require('webpack');

//分离css文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//文件压缩
const UglifyJsPlugin=new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}});

module.exports={
    devtool: 'eval-source-map',//定位到错误信息位置
    entry:{
        app: './entry.js'
    },
    output:{
        path:__dirname+'/dist/',
        filename:'js/bundle.js',
        publicPath:'/dist/'
    },
    module:{
        perLoaders:[//perLoaders顾名思义就是在loaders执行之前处理的
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=[hash:8].[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname,
                query: {presets: [ 'react-hmre' ]}
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less']
            }
        ],
        loaders:[//添加各种处理loader
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=[hash:8].[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname,
                query: {presets: [ 'react-hmre' ]}
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less']
            }

        ],
        jshint: {//配置jshint的选项，支持es6的校验
            "esnext": true
        }
    },
    resolve:{//
        extensions:['','.js','.json']
    },

    plugins: [
        UglifyJsPlugin,
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
