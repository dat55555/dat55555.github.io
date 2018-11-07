// bai1
function bai1(n){
    var a =1;
    for(i=1;i<=n;i++){
        a = a * i;
    }
    return a;
}
// bai2
function bai2(n){
    var a = '';
    for(var i=n.length-1;i>=0;i--){
            a = a + n[i];
    }
    return a;
}
// bai3
function bai3(n){
    var b = n;
    for(var i=0;i<9;i++){
        b += ("-"+n);
           }
         return b;
}
// bai5
function bai5(){
   var arr = [2,5,9];
    for(var i = 0; i < arr.length;i++){
        arr[i]=arr[i]*2;
    };
   return arr;
};