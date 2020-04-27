//为了区分开发环境和生产环境，这里是开发配置
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',//告诉服务器在哪查找文件
        hot:  true,//模块热替换,运行时更新模块,无需全部刷新
    }
})