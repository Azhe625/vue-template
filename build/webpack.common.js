//为了区分开发环境和生产环境，这里是公用配置
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //自动更新html模板
const { CleanWebpackPlugin } =  require('clean-webpack-plugin') //自动清理插件
const VueLoaderPlugin = require('vue-loader/lib/plugin') //vue-loader依赖于此插件
module.exports = {
    entry: {
        app:'./src/main.js',
    },
    output: {
        filename: '[name].bundle.js',
        path:path.resolve(__dirname,'../dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Caching',
            template: './public/index.html'
        }),
        new VueLoaderPlugin() //vue loader需要引入此插件
    ],
    module:{
        rules:[
            {
                test: /.\js$/,
                loader: 'babel-loader',
                exclude: /node_modules/ //去除modules
            },
            {
                test:/\.css/, //匹配css结尾的文件，提供给两个loader
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/, //匹配图片文件
                use:[
                    {
                        loader: 'file-loader',
                        options:  {
                            outputPath: './image'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, //匹配字体文件
                use: [
                'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                'xml-loader'
                ]
            },
            {
                test: /\.vue$/, //匹配vue文件
                use: [
                    'vue-loader'
                ]
            }
        ]
    }
};