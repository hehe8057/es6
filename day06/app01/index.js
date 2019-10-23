let axios = require("axios")
let qs = require("qs")

// 配置默认基路径
axios.defaults.baseURL = "http://127.0.0.1:6677";
// axios.defaults.baseURL = "http://134.175.100.63:6677";
axios.defaults.headers.common["Content-Type"] = "application/x-www-form-urlencoded"
axios.defaults.transformRequest = [(data)=>{
    return qs.stringify(data);
}]
// 拦截器
axios.interceptors.response.use(function(response){
    return response;
},function(error){
    // 当任何一个ajax请求出现异常的话都会打印错误信息！
    console.log("error!!!");
    return Promise.reject(error);
});

function saveCustomer(){
    let data = {
        realname:"张三004",
        telephone:"18812344321"
    }
    axios({
        url:"/customer/saveOrUpdate1",
        method:"post",
        data
    })
    .then((response)=>{
        console.log(response.data);
    })
}
function findAllCustomer(){
    axios({
        url:"/customer/findAll1",
        method:"get"
    })
    .then((response)=>{
        console.log("顾客信息",response.data);
    })
}
saveCustomer();
findAllCustomer();
