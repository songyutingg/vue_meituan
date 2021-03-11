module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/meituan',    //数据库地址
    notifyUrl: 'http://192.168.124.13:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'vue-songyt',   //七牛云bucket
    AccessKey: 'nUxFa2skCdlvDtNd4k9xczrk9-fRgGuXgmi9YbwD',   //七牛云accessKey
    SecretKey: '7dv8puBApbzPbsaxq7IMEJTkbQwjF6ti-q6HYXiJ',    //七牛云secretKey
    tencentkey: 'KKSBZ-SKMKU-BR2VF-4NIGY-UXS37-2CBKQ',        //腾讯位置secreKey
    tencentkey2: 'KKSBZ-SKMKU-BR2VF-4NIGY-UXS37-2CBKQ',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥
    
};


