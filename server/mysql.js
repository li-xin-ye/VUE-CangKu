// 连接数据库
const mysql = require('mysql')

// 创建数据库连接
const client = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'cangku'
})

// 封装数据库操作语句
function sqlFun(sql,arr,callback){
  client.query(sql,arr,function(error,result){
    if(error){
      console.log('数据库语句错误');
      return;
    }
    callback(result)
  })
}

module.exports=sqlFun