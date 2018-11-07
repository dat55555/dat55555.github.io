var arr= [
    {
        Cauhoi: "What does CSS stand for?",
        A:"Computer Style Sheets",
        B: "Colorful Style Sheets",
        C:"Creative Style Sheets",
        D:"Cascading Style Sheets",
        true: 'Computer Style Sheets'
    },
    {
        Cauhoi: "What is the correct HTML for referring to an external style sheet?",
        A:"<stylesheet>mystyle.css</stylesheet>",
        B:"aaaa",
        C:"style src",
        D:"style src",
        true: '<stylesheet>mystyle.css</stylesheet>'
    },
    {
        Cauhoi: "Where in an HTML document is the correct place to refer to an external style sheet?",
        A:"In the <body> section",
        B:"At the end of the document",
        C:"In the <head> section",
        true: 'In the <body> section'
    },
    {
        Cauhoi: "Which HTML tag is used to define an internal style sheet?",
        A:"script",
        B:"css",
        C:"style",
        true: 'script'
    },
        {
            Cauhoi:"Which HTML attribute is used to define inline styles?",
            A:"font",
            B:"styles",
            C:"class",
            D:"style",
            true: 'font'
        }
]
    var mhcauhoi= document.querySelectorAll('.change');
    var num=0;var dem=1;
    document.getElementById('mhcauhoi').innerHTML=arr[0].Cauhoi;
    document.getElementById('a').innerHTML=arr[0].A;
    document.getElementById('b').innerHTML=arr[0].B;
    document.getElementById('c').innerHTML=arr[0].C;
    document.getElementById('d').innerHTML=arr[0].D;
    for (var i=0; i<mhcauhoi.length ; i++){
		mhcauhoi[i].addEventListener('click', function(){
			num++;	
			if ( num<arr.length){
				if ( this.innerHTML==arr[num-1].true){ 
					dem++;
				};
				document.getElementById('mhcauhoi').innerHTML = arr[num].Cauhoi;
				document.getElementById('a').innerHTML = arr[num].A;
				document.getElementById('b').innerHTML = arr[num].B;
				document.getElementById('c').innerHTML = arr[num].C;
				document.getElementById('d').innerHTML = arr[num].D;
			}
			else if ( num==arr.length){ 
                if ( this.innerHTML==arr[num-1].true){
                     dem=dem+1;
                };
                document.getElementById('mhcauhoi').innerHTML= dem + '/5'
                if(dem>=5){
                    window.location.assign("index1.html")
                }
			}
		});
    };	
    
    // if (giatriinputUsername === mang.taikhoan && giatri mk === mang.mk) {
    //     chuyen den trnag gi 
    // } else {
    //     return thong BarProp. dkm m nhap sai mk or tk roi
    // }

    // = Gan:  var a  = 5;
    // == so sanh tuong duong:  5 == '5'; lay gia tri
    // ==== so sanh tuyet doi: 5 ==='5' ca gia tri va kieu du lieu

    // abc 
    // {{abc}} 
    