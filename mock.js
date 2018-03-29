//引入模块
var Mock = require('mockjs')
var fs = require('fs')

//模拟数据
var data = Mock.mock({
    //4s店
    'cars|50': [
        {
            //id
            'id|+1':1000,
            //店名
            'storeName': '@cword(8,15)',
            //评分
            'score|5-6.1': 50,
            //地址
            'address': '@cword(10,20)',
            //折扣
            'discount|5': 50,
            //左侧图标
            'cart_img': '@image(75x75,@color)'
        }
    ],
    //头条内容
    'article_list|50': [
        {
            //id
            'id|+1': 1,
            //title 标题
            'title': '@cword(10,20)',
            //类型
            'type': '新闻',
            //浏览数量
            'view|5000-10000': 50,
            //auther
            'auther': '乐车邦',
            //预览图
            'preview_img': '@image(110x75, @color)'
        }
    ],
    //车主评价
    'evaluate|50': [
        {
            //id
            'id|+1': 500,
            //车主
            //头像
            'headPortrait': '@image(45x45,@color)',
            'nickName': '@cname(2,5)',
            //花费
            'costPrice|300-500':50,
            //省钱
            'savePrice|100-500':50,
            //车型
            'carType':'@cword(2,5)',
            //评价内容
            'content': '@cword(30,60)',
            //地址
            'shopName': '@cword(8,15)',
            //图片
            'imgs': '@image(110x110, @color)'
        }

    ]
})
//写入文件
fs.writeFile('data.json',JSON.stringify(data, null, 2), function(){
    console.log('文件写入成功!')
})

