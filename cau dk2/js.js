
// bai3
function bai3(x){
    var kq;
    if(x>0 && x<3.9){
       kq = "diem f";
    }else if(x>=4 && x<5.4){
        kq = "diem d";
    } 
    else if(x>=5.5 && x<6.9){
        kq = "diem c";
    }
    else if(x>=7 && x<8.4){
        kq =" diem b";
    }
    else if(x>=8.5 && x<10){
        kq = "diem a";
    }
    return kq;
}
// bai2
function bai2(x){
    if (typeof x === 'string'){
        if(x.length<10){
            return x;
        }
        else{
            var a = x.slice(0,10) + '...';
            return a;
        }
    }
    else{
         var y = x.toString()
        if(y.length<10){
            return y;
        }
        else{
            var a = y.slice(0,10) + '...';
            return a;
        }
        
    }

}
// bai4
function bai4(x){
    switch(x){
        case "tq":
            return "Olá";  
            break;
        case "tbn":
            return "Hola";
            break;
            case "pl":
            return "hei"
    }
}
// bai1
function bai1(){
    var now = new Date();  
    var date = now.getDate(); 
    var month = now.getMonth() + 1; 
    var year = now.getFullYear();  
    var mua;
    if(month<=3){
        mua = "mua xuan"
    }
    else if(month<=6){
        mua="he"
    }
    else if(month<=10){
        mua="thu"
    }
    else{
        mua="dong"
    }
    console.log(date + " - " + month + " - " + mua + " - "+ year)
}