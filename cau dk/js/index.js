// bai2
function bai2(n){
    var a =n;
    var b = 1;
    if(a>0){
        for(var i = 1; i<=a;i++){
            
            b = b *i;
          
        }
        return b;
    }
    
}
// vai1
function bai1(a,b){
    var a 
    if(typeof a== "number" && typeof b=="number"){
      a =  Math.max(a,b);
    }
  return a;
}
// bai4
user = {
    username: "username",
    password: "secret",
    confirm: "secret"
  }
  
function bai4(user){
    if(user.username == "" || user.username.length>=20 ){
       return("username rong va ten vuot qua 20");
    }
    else if(user.password > 6 && user.password <32){
        return("assword phải có độ dài từ 6 đến 32 ký tự");
    }
    else if(user.confirm != user.password){
        return("confirm phải giống password.")
    }
    else{
        return("dung qua")
    }
}
console.log(bai4(user))
// bai3
function bai3(){
    var a = []
    var arr=[5,2,3,7,8,9,6];
    for(var i = 0;i<arr.length;i++){
        if(arr[i]%2==0){
          a.push(arr[i]);  
        }
    }
    a.sort(function(a, b){return b-a});
    return a;
}