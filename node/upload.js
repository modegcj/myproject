let OSS = require('ali-oss');
let client = new OSS({
    region:'banquet.oss-cn-hangzhou.aliyuncs.com',
    accessKeyId:'',
    accessKeySecret:'',
    bucket:'banquet'
});
async function list(){
    {
        let result = await client.list();
        console.log(result);
        if(result.isTruncated){
            let result = await client.list({
                marker: result.nextMarker
            });
        }
    }
}
list();