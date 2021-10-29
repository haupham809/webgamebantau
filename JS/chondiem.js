
var huong="up";
var loaitau=5;
var tau5=[]
var tau4=[]
var tau3=[]
var tau2=[]
var vitriban={}
var vitribanmay={}
var lanban=0;
var diem=0;
var diemmay=0;
var zzz=0;
var chonhuong = document.getElementsByClassName("huong");
          	// Lặp và gán sự kiện
           	for (var i = 0; i < chonhuong.length; i++){
				chonhuong[i].onclick = function()
                {
                    $(".huong").css("background","white");
                    $(this).css("background","blue");
                  	huong=$(this).data("name");
                    
                     
                };
            }       

$(document).ready(function(){

    $(".start").click(function(){
        $(this).css("display","none");
        $(".startgame").css("display","block");
        $(".khunggame").css("display","block");
        chonhuong = document.getElementsByClassName("huong");
                $(chonhuong[0]).css("background","blue");  
                nguoichoi = document.getElementById("game_content");  
                $(nguoichoi).text("Người chơi vui lòng chọn  tọa độ của tàu")    

    
    });
    $(".khunggame div").hover(function () {
           
        var x=$(this).data("x");
        var y=$(this).data("y");
        
        hoverdiem(x,y);
        
         
     });
 $(".khunggame div").click(function () {
     
   toadomay();
    var x=$(this).data("x");
    var y=$(this).data("y");
      startgame();
     clickdiem(x,y);
     csstau();
   
     
 } );
    
    
    
   

})

function startgame(){
       
    if(tau5.length ==0&& lanban==0){
    $(".loaitau h1").text("chon toa do tau 1 diem");
    loaitau=5;
    
    }
    else if(tau4.length ==0&& lanban==0){
        $(".loaitau h1").text("chon toa do tau 2 diem");
        loaitau=4;
        savejsontau5();
       
    }
    
    else if(tau3.length==0&& lanban==0){
        $(".loaitau h1").text("chon toa do tau 3 diem");
        loaitau=3
        savejsontau4();
      
        
    }
    
    else if(tau3.length == 3&& lanban==0){
      
        $(".loaitau h1").text("chon toa do tau 3 diem");
        loaitau=3;
        
   
       
    }
   
    else if(tau2.length==0){
        $(".loaitau h1").text("chon toa do tau 5 diem");
        loaitau=2;
        savejsontau3();
       
        
    
        
    }
    else if(loaitau==2&& lanban==0){
      
        loaitau=0;
        savejsontau2();
        maychon();

       
        
    
    }
    else if(loaitau==0&& lanban==1){
       zzz=0;
        maychon();

       
        
    
    }
    else if(loaitau==0&& lanban==2){
        zzz=0;
        maychon();

       
        
    
    }
    else if(loaitau==0&& lanban==3){
        zzz=0;
        maychon();

       
        
    
    }
    else if(loaitau==0&& lanban==4){
        zzz=0;
        maychon();

       
        
    
    }
    else {

        
    nguoichoi = document.getElementById("game_content");  
    $(nguoichoi).text("Đã hết số lược bắn ")    
        $(".choilai").css("display","block")
        var txt;
        if(diemmay>diem){
            txt='Bạn đã thua '
        }
        else if(diemmay<diem) {
            txt='Bạn đã thắng  '
        }
    
        else if(diemmay==diem) {
            txt='Bạn đã hòa  '
        }
    var r = confirm(txt+"\nBan co muon choi lai không !");
    if (r == true) {
        $(".choilai").trigger('click');
     
    } else {
    
    
    }



    }

    
    
   
    




}



function adddiem(x,y){
    if(loaitau == 5){

        tau5.push({x:x,y:y})
       
    }
    else if(loaitau==4 ){
        tau4.push({x:x,y:y})
        
    }
    else if(loaitau==3){
        tau3.push({x:x,y:y})
       
    }
    else if(loaitau==2 ){
        tau2.push({x:x,y:y})
        
    }

}

function kiemtradiem(x ,y,t5,t4,t3,t2){
   
    for(var i=0;i<t5.length;i++){
       if(t5[i].x==x && t5[i].y==y) return 1;
    }
    for(var i=0;i<t4.length;i++){
        if(t4[i].x==x && t4[i].y==y) return 2;
    }
    for(var i=0;i<t3.length;i++){
        if(t3[i].x==x && t3[i].y==y) return 3;
    }
    for(var i=0;i<t2.length;i++){
        if(t2[i].x==x && t2[i].y==y) return 5;
    }
return 0;

}
 
function csstau(){
    for(var i=1;i<=10;i++){
        for(var j=1;j<=10;j++){
            $("."+i+"_"+j).css("background-image"," url(./img/diem.png)")
        
        
        }
    }
    for(var i=0;i<tau5.length;i++){
        $("."+tau5[i].x+"_"+tau5[i].y).css("background-image"," url(./img/trai.png)")
    }
    for(var i=0;i<tau4.length;i++){
        $("."+tau4[i].x+"_"+tau4[i].y).css("background-image"," url(./img/trai.png)")
    }
    for(var i=0;i<tau3.length;i++){
        $("."+tau3[i].x+"_"+tau3[i].y).css("background-image"," url(./img/trai.png)")
    }
    for(var i=0;i<tau2.length;i++){
        $("."+tau2[i].x+"_"+tau2[i].y).css("background-image"," url(./img/trai.png)")
    }
}
function clickdiem(x,y){
    $(".khunggame div").css("border","1px solid #dddddd")
    if(huong=="up"){
        var z=0;
        for(var i=0; i<loaitau; i++){
            if(y-i<=0){
                z=z+1;
                break;
            }
            if(kiemtradiem(x,y-i,tau5,tau4,tau3,tau2)!=0){
                z=z+1;
                break;
            }
        }
        if(z==0){

     
        for(var i=0; i<loaitau; i++){
           adddiem(x,y-i,loaitau)
          
        }  

     }

        
       
       
    }
    else if(huong=="left"){

        var z=0;
        for(var i=0; i<loaitau; i++){
            if(x-i<=0){
                z=z+1;
                break;
            } if(kiemtradiem(x-i,y,tau5,tau4,tau3,tau2)!=0){
                z=z+1;
                break;
            }
        }
        if(z==0){
        for(var i=0; i<loaitau; i++){
            
            adddiem(x-i,y,loaitau)
            
        }
    }
       
       
    }
    else if(huong=="right"){

        var z=0;
        for(var i=0; i<loaitau; i++){
            if(x+i>10){
                z=z+1;
                break;
            } if(kiemtradiem(x+1,y,tau5,tau4,tau3,tau2)!=0){
                z=z+1;
                break;
            }
        }
        if(z==0){
        for(var i=0; i<loaitau; i++){
           
            adddiem(x+i,y,loaitau)
            
        }
    }
        
       
    }
    else if(huong=="down"){
        var z=0;
        for(var i=0; i<loaitau; i++){
            if(y+i>10){
                z=z+1;
                break;
            }
            if(kiemtradiem(x,y+i,tau5,tau4,tau3,tau2)!=0){
                z=z+1;
                break;
                
            }
        }
        if(z==0){
        for(var i=0; i<loaitau; i++){
            adddiem(x,y+i,loaitau)
            
        }
    }
        
       
    }
    


}
function timesleep(millis){
    
     var date = new Date();
     var curDate = null;
     do { curDate = new Date(); }
     while(curDate-date < millis);
}
//giao dien di chuyển chọn diểm tàu
function hoverdiem(x,y){
   
    if(tau5.length ==0&& lanban==0){
        $(".loaitau h1").text("chon toa do tau 1 diem");
        loaitau=5;
        
        }
        else if(tau4.length ==0&& lanban==0){
            $(".loaitau h1").text("chon toa do tau 2 diem");
            loaitau=4;
           
        }
        
        else if(tau3.length==0&& lanban==0){
            $(".loaitau h1").text("chon toa do tau 3 diem");
            loaitau=3
          
            
        }
        
        else if(tau3.length == 3&& lanban==0){
          
            $(".loaitau h1").text("chon toa do tau 3 diem");
            loaitau=3;
            
       
           
        }
       
        else if(tau2.length==0){
            $(".loaitau h1").text("chon toa do tau 5 diem");
            loaitau=2;
           
            
        
            
        }
    $(".khunggame div").css("border","1px solid #dddddd")
    if(huong=="up"){
        for(var i=0; i<loaitau; i++){
           

            $("."+x+"_"+(y-i)).css("border","1px solid red");
        }
       
    }
    else if(huong=="left"){
        for(var i=0; i<loaitau; i++){

            $("."+(x-i)+"_"+y).css("border","1px solid red");
        }
       
    }
    else if(huong=="right"){
        for(var i=0; i<loaitau; i++){

            $("."+(x+i)+"_"+y).css("border","1px solid red");
        }
       
    }
    else if(huong=="down"){
        for(var i=0; i<loaitau; i++){

            $("."+x+"_"+(y+i)).css("border","1px solid red");
        }
       
    }



}



//luu vi tri tau 5 
function savejsontau5(){
   
   const data = [];
   
//     const myRequest = new Request('http://localhost:3000/tau5');
//     fetch(myRequest
//     )
//     .then(response => response.text())
//     .then(data1=>{
//        var s= JSON.parse(data1)
//        for(var i =0 ;i<s.vitri.length;i++){
//         data.push( s.vitri[i] ) 
//        }

//        for(var i =0 ;i<tau5.length;i++){
          
       
//             data.push( tau5[i] )

//         }
       
//        fetch(myRequest,
//         { method: 'POST', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body:JSON.stringify({vitri:data} )
//     ,
// }
//     )
//     .then(response => response.text())
    

//     })


const myRequest = new Request('https://617b551ad842cf001711be43.mockapi.io/api/tau5');
   

       for(var i =0 ;i<tau5.length;i++){
          
       
            data.push( tau5[i] )

        }
       
       fetch(myRequest,
        { method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({"vitri":data })
    ,
}
    )
    .then(response => response.text())
    



    timesleep(200)
   return data;
 
}

//luu vi tri tau 4
function savejsontau4(){
   
    const data = [];
    
//      const myRequest = new Request('http://localhost:3000/tau4');
//      fetch(myRequest
//      )
//      .then(response => response.text())
//      .then(data1=>{
//         var s= JSON.parse(data1)
//         for(var i =0 ;i<s.vitri.length;i++){
//          data.push( s.vitri[i] ) 
//         }
 
//         for(var i =0 ;i<tau4.length;i++){
           
//              data.push( tau4[i] )
 
//          }
        
//         fetch(myRequest,
//          { method: 'POST', // or 'PUT'
//      headers: {
//        'Content-Type': 'application/json',
//      },
//      body:JSON.stringify({vitri:data} )
//      ,
//  }
//      )
//      .then(response => response.text())
     
 
//      })


const myRequest = new Request('https://617b551ad842cf001711be43.mockapi.io/api/tau4');
   

       for(var i =0 ;i<tau4.length;i++){
          
       
            data.push( tau4[i] )

        }
       
       fetch(myRequest,
        { method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({"vitri":data })
    ,
}
    )
    .then(response => response.text())
    



     timesleep(200)
     return data;
  
 }
//luu vi tri tau 3
 function savejsontau3(){
   
    const data = [];
    
//      const myRequest = new Request('http://localhost:3000/tau3');
//      fetch(myRequest
//      )
//      .then(response => response.text())
//      .then(data1=>{
//         var s= JSON.parse(data1)
//         for(var i =0 ;i<s.vitri.length;i++){
//          data.push( s.vitri[i] ) 
//         }
 
//         for(var i =0 ;i<tau3.length;i++){
           
       
//              data.push( tau3[i] )
 
//          }
        
//         fetch(myRequest,
//          { method: 'POST', // or 'PUT'
//      headers: {
//        'Content-Type': 'application/json',
//      },
//      body:JSON.stringify({vitri:data} )
//      ,
//  }
//      )
//      .then(response => response.text())
     
 
//      })

const myRequest = new Request('https://617b551ad842cf001711be43.mockapi.io/api/tau3');
   

       for(var i =0 ;i<tau3.length;i++){
          
       
            data.push( tau3[i] )

        }
       
       fetch(myRequest,
        { method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({"vitri":data })
    ,
}
    )
    .then(response => response.text())
    



     timesleep(200)
     return data;
  
 }
//luu vi tri tau2
 function savejsontau2(){
   
    const data = [];
    
//      const myRequest = new Request('http://localhost:3000/tau2');
//      fetch(myRequest
//      )
//      .then(response => response.text())
//      .then(data1=>{
//         var s= JSON.parse(data1)
//         for(var i =0 ;i<s.vitri.length;i++){
//          data.push( s.vitri[i] ) 
//         }
 
//         for(var i =0 ;i<tau2.length;i++){
           
//              data.push( tau2[i] )
 
//          }
        
//         fetch(myRequest,
//          { method: 'POST', // or 'PUT'
//      headers: {
//        'Content-Type': 'application/json',
//      },
//      body:JSON.stringify({vitri:data} )
//      ,
//  }
//      )
//      .then(response => response.text())
     
 
//      })

const myRequest = new Request('https://617b551ad842cf001711be43.mockapi.io/api/tau2');
   

       for(var i =0 ;i<tau2.length;i++){
          
       
            data.push( tau2[i] )

        }
       
       fetch(myRequest,
        { method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({"vitri":data })
    ,
}
    )
    .then(response => response.text())
    





     timesleep(200)
     return data;
  
 }
 //luu vi tri diem ban
 function savejsonvitri(){
   
    const data = [];
    
     const myRequest = new Request('http://localhost:3000/vitri');
     fetch(myRequest
     )
     .then(response => response.text())
     .then(data1=>{
        var s= JSON.parse(data1)
        for(var i =0 ;i<s.vitri.length;i++){
         data.push( s.vitri[i] ) 
        }
 
                data.push( vitriban )
            
 
     
        fetch(myRequest,
         { method: 'POST', // or 'PUT'
     headers: {
       'Content-Type': 'application/json',
     },
     body:JSON.stringify({"vitri":data } )
     ,
 }
     )
     .then(response => response.text())
     
 
     })
     timesleep(200)
     return data;
  
 }

 var selectdata = [];
//lay toa do tau 5
  function selectjsontau5(){
  
    selectdata.splice(0,selectdata.length)

    
    //  const myRequest = new Request('http://localhost:3000/tau5');


   
    //  fetch(myRequest
    //  )
    //  .then(response => response.text())
    //  .then(data1=>{
    //      var a=[]

    //     var s= JSON.parse(data1)
    //     for(var i =0 ;i<s.vitri.length;i++){
    //         selectdata.push( s.vitri[i] ) 
    //     }
    //     for(var i =0 ;i<selectdata.length;i++){
    //         var z=0;
    //         for(var j =0 ;j<selectdata.length;j++){
    //             if(selectdata[i].x==selectdata[j].x&&selectdata[i].y==selectdata[j].y){

    //                 z++;
    //             }


    //         }
    //         a.push(z)
    //     }

    //     var max = a.reduce(function(a, b) {
    //         return Math.max(a, b);
    //     }, 0);
       
    //     return vitribanmay={x:selectdata[a.indexOf(max)].x,y:selectdata[a.indexOf(max)].y}
        

        
        
 
    //  })

   
     

    const myRequest = new Request('https://617b551ad842cf001711be43.mockapi.io/api/tau5');


   
    fetch(myRequest
    )
    .then(response => response.text())
    .then(data1=>{
        var a=[]

       var s= JSON.parse(data1)
       for(var i =0 ;i<s.length;i++){
           for(var j=0;j<5;j++){
            selectdata.push( s[i].vitri[j] )
           
           }
          
       }



       for(var i =0 ;i<selectdata.length;i++){
           var z=0;
           for(var j =0 ;j<selectdata.length;j++){
               if(selectdata[i].x==selectdata[j].x&&selectdata[i].y==selectdata[j].y){

                   z++;
               }


           }
           a.push(z)
       }

       var max = a.reduce(function(a, b) {
           return Math.max(a, b);
       }, 0);

       return vitribanmay={x:selectdata[a.indexOf(max)].x,y:selectdata[a.indexOf(max)].y}
       

       
       

    })

   
     
     
  
 }
 
 //lay toa do tau 4
 function selectjsontau4(){
    
    selectdata.splice(0,selectdata.length)
     
    //   const myRequest = new Request('http://localhost:3000/tau4');
    //   fetch(myRequest
    //   )
    //   .then(response => response.text())
    //   .then(data1=>{
    //     var a=[]

    //     var s= JSON.parse(data1)
    //     for(var i =0 ;i<s.vitri.length;i++){
    //         selectdata.push( s.vitri[i] ) 
    //     }
    //     for(var i =0 ;i<selectdata.length;i++){
    //         var z=0;
    //         for(var j =0 ;j<selectdata.length;j++){
    //             if(selectdata[i].x==selectdata[j].x&&selectdata[i].y==selectdata[j].y){

    //                 z++;
    //             }


    //         }
    //         a.push(z)
    //     }

    //     var max = a.reduce(function(a, b) {
    //         return Math.max(a, b);
    //     }, 0);
       
    //     return vitribanmay={x:selectdata[a.indexOf(max)].x,y:selectdata[a.indexOf(max)].y}
  
         
  
    //   })


      const myRequest = new Request('https://617b551ad842cf001711be43.mockapi.io/api/tau4');
      fetch(myRequest
      )
      .then(response => response.text())
      .then(data1=>{
        var a=[]

        var s= JSON.parse(data1)
        for(var i =0 ;i<s.length;i++){
            for(var j=0;j<4;j++){
             selectdata.push( s[i].vitri[j] )
            
            }
           
        }
        for(var i =0 ;i<selectdata.length;i++){
            var z=0;
            for(var j =0 ;j<selectdata.length;j++){
                if(selectdata[i].x==selectdata[j].x&&selectdata[i].y==selectdata[j].y){

                    z++;
                }


            }
            a.push(z)
        }

        var max = a.reduce(function(a, b) {
            return Math.max(a, b);
        }, 0);
       
        return vitribanmay={x:selectdata[a.indexOf(max)].x,y:selectdata[a.indexOf(max)].y}
  
         
  
      })


   
  }
 //lay toa do tau 3
  function selectjsontau3(){
    
    selectdata.splice(0,selectdata.length)
     
    //   const myRequest = new Request('http://localhost:3000/tau3');
    //   fetch(myRequest
    //   )
    //   .then(response => response.text())
    //   .then(data1=>{
    //     var a=[]

    //     var s= JSON.parse(data1)
    //     for(var i =0 ;i<s.vitri.length;i++){
    //         selectdata.push( s.vitri[i] ) 
    //     }
    //     for(var i =0 ;i<selectdata.length;i++){
    //         var z=0;
    //         for(var j =0 ;j<selectdata.length;j++){
    //             if(selectdata[i].x==selectdata[j].x&&selectdata[i].y==selectdata[j].y){

    //                 z++;
    //             }


    //         }
    //         a.push(z)
    //     }

    //     var max = a.reduce(function(a, b) {
    //         return Math.max(a, b);
    //     }, 0);
    //     var max2=0;
    //     for(var i=max-1;i>0;i--){
    //         if(a.indexOf(i)!=-1){
    //             max2=i;
    //             break;

    //         }


    //     }
    //     if(lanban==2){

    //         return vitribanmay={x:selectdata[a.indexOf(max)].x,y:selectdata[a.indexOf(max)].y}
    //     }
    //     else {
    //         return vitribanmay={x:selectdata[a.indexOf(max2)].x,y:selectdata[a.indexOf(max2)].y}

    //     }


       
    //   })
     

    const myRequest = new Request('https://617b551ad842cf001711be43.mockapi.io/api/tau3');
      fetch(myRequest
      )
      .then(response => response.text())
      .then(data1=>{
        var a=[]

        var s= JSON.parse(data1)
        for(var i =0 ;i<s.length;i++){
            for(var j=0;j<3;j++){
             selectdata.push( s[i].vitri[j] )
            
            }
           
        }
        for(var i =0 ;i<selectdata.length;i++){
            var z=0;
            for(var j =0 ;j<selectdata.length;j++){
                if(selectdata[i].x==selectdata[j].x&&selectdata[i].y==selectdata[j].y){

                    z++;
                }


            }
            a.push(z)
        }

        var max = a.reduce(function(a, b) {
            return Math.max(a, b);
        }, 0);
        var max2=0;
        for(var i=max-1;i>0;i--){
            if(a.indexOf(i)!=-1){
                max2=i;
                break;

            }


        }
        if(lanban==2){

            return vitribanmay={x:selectdata[a.indexOf(max)].x,y:selectdata[a.indexOf(max)].y}
        }
        else {
            return vitribanmay={x:selectdata[a.indexOf(max2)].x,y:selectdata[a.indexOf(max2)].y}

        }


       
      })
     
      
   
  }
 //lay toa do tau 2
  function selectjsontau2(){
    
    selectdata.splice(0,selectdata.length)
     
    //   const myRequest = new Request('http://localhost:3000/tau2');
    //   fetch(myRequest
    //   )
    //   .then(response => response.text())
    //   .then(data1=>{
    //     var a=[]

    //     var s= JSON.parse(data1)
    //     for(var i =0 ;i<s.vitri.length;i++){
    //         selectdata.push( s.vitri[i] ) 
    //     }
    //     for(var i =0 ;i<selectdata.length;i++){
    //         var z=0;
    //         for(var j =0 ;j<selectdata.length;j++){
    //             if(selectdata[i].x==selectdata[j].x&&selectdata[i].y==selectdata[j].y){

    //                 z++;
    //             }


    //         }
    //         a.push(z)
    //     }

    //     var max = a.reduce(function(a, b) {
    //         return Math.max(a, b);
    //     }, 0);
    //     console.log(vitribanmay)
    //     return vitribanmay={x:selectdata[a.indexOf(max)].x,y:selectdata[a.indexOf(max)].y}
  
    //   })


    const myRequest = new Request('https://617b551ad842cf001711be43.mockapi.io/api/tau2');
    fetch(myRequest
    )
    .then(response => response.text())
    .then(data1=>{
      var a=[]

      var s= JSON.parse(data1)
      for(var i =0 ;i<s.length;i++){
        for(var j=0;j<2;j++){
         selectdata.push( s[i].vitri[j] )
        
        }
       
    }
      for(var i =0 ;i<selectdata.length;i++){
          var z=0;
          for(var j =0 ;j<selectdata.length;j++){
              if(selectdata[i].x==selectdata[j].x&&selectdata[i].y==selectdata[j].y){

                  z++;
              }


          }
          a.push(z)
      }

      var max = a.reduce(function(a, b) {
          return Math.max(a, b);
      }, 0);
      console.log(vitribanmay)
      return vitribanmay={x:selectdata[a.indexOf(max)].x,y:selectdata[a.indexOf(max)].y}

    })
      
      
   
  }
  //lay toa do vi tri ban
  function selectjsonvitri(){
    
    selectdata.splice(0,selectdata.length)
     
      const myRequest = new Request('http://localhost:3000/vitri');
      fetch(myRequest
      )
      .then(response => response.text())
      .then(data1=>{
         var s= JSON.parse(data1)
         for(var i =0 ;i<s.vitri.length;i++){
             var x=s.vitri[i].x;
             var x=s.vitri[i].y;
            selectdata.push( {x:x,y:y} ) 
         } }
      )
      
      return selectdata;
   
  }

tau5may=[]
tau4may=[]
tau3may=[]
tau2may=[]


function maychon(){
   
    //chon toa do tau 5  
    if(lanban==0){

        nguoichoi = document.getElementById("game_content");  
        $(nguoichoi).text("máy đang chọn tọa độ")    
        $(".startgame").css("display","none");

        var random=Math.floor(Math.random() * 9);
        if(random==0){
        tau5may.push({x:1,y:6})
        tau5may.push({x:2,y:1})
        tau5may.push({x:3,y:1})
        tau5may.push({x:4,y:1})
        tau5may.push({x:5,y:1})
        // chon toa do tau 4
        tau4may.push({x:10,y:7})
        tau4may.push({x:10,y:8})
        tau4may.push({x:10,y:9})
        tau4may.push({x:10,y:10})
        // chon toa do tau 3
        tau3may.push({x:6,y:5})
        tau3may.push({x:6,y:6})
        tau3may.push({x:6,y:7})
        tau3may.push({x:2,y:6})
        tau3may.push({x:3,y:6})
        tau3may.push({x:4,y:6})
        //chon toa do tau 2
        tau2may.push({x:1,y:9})
        tau2may.push({x:1,y:10})
    }
    else if(random==1){
        tau5may.push({x:1,y:5})
        tau5may.push({x:2,y:5})
        tau5may.push({x:3,y:5})
        tau5may.push({x:4,y:5})
        tau5may.push({x:5,y:5})
        // chon toa do tau 4
        tau4may.push({x:6,y:7})
        tau4may.push({x:6,y:8})
        tau4may.push({x:6,y:9})
        tau4may.push({x:6,y:10})
        // chon toa do tau 3
        tau3may.push({x:10,y:5})
        tau3may.push({x:10,y:6})
        tau3may.push({x:10,y:7})
        tau3may.push({x:2,y:1})
        tau3may.push({x:3,y:1})
        tau3may.push({x:4,y:1})
        //chon toa do tau 2
        tau2may.push({x:5,y:9})
        tau2may.push({x:5,y:10})
    }
    else if(random==2){
        tau5may.push({x:1,y:10})
        tau5may.push({x:2,y:10})
        tau5may.push({x:3,y:10})
        tau5may.push({x:4,y:10})
        tau5may.push({x:5,y:10})
        // chon toa do tau 4
        tau4may.push({x:10,y:7})
        tau4may.push({x:10,y:8})
        tau4may.push({x:10,y:9})
        tau4may.push({x:10,y:10})
        // chon toa do tau 3
        tau3may.push({x:3,y:5})
        tau3may.push({x:3,y:6})
        tau3may.push({x:3,y:7})
        tau3may.push({x:2,y:6})
        tau3may.push({x:3,y:6})
        tau3may.push({x:4,y:6})
        //chon toa do tau 2
        tau2may.push({x:5,y:1})
        tau2may.push({x:6,y:1})
    }
    else if(random==3){
        tau5may.push({x:1,y:1})
        tau5may.push({x:1,y:2})
        tau5may.push({x:1,y:3})
        tau5may.push({x:1,y:4})
        tau5may.push({x:1,y:5})
        // chon toa do tau 4
        tau4may.push({x:4,y:5})
        tau4may.push({x:5,y:5})
        tau4may.push({x:6,y:5})
        tau4may.push({x:7,y:5})
        // chon toa do tau 3
        tau3may.push({x:4,y:7})
        tau3may.push({x:4,y:8})
        tau3may.push({x:4,y:9})
        tau3may.push({x:10,y:1})
        tau3may.push({x:10,y:2})
        tau3may.push({x:10,y:3})
        //chon toa do tau 2
        tau2may.push({x:10,y:9})
        tau2may.push({x:10,y:10})
    }
    else if(random==4){
        tau5may.push({x:1,y:3})
        tau5may.push({x:2,y:3})
        tau5may.push({x:3,y:3})
        tau5may.push({x:4,y:3})
        tau5may.push({x:5,y:3})
        // chon toa do tau 4
        tau4may.push({x:10,y:7})
        tau4may.push({x:10,y:8})
        tau4may.push({x:10,y:9})
        tau4may.push({x:10,y:10})
        // chon toa do tau 3
        tau3may.push({x:8,y:5})
        tau3may.push({x:8,y:6})
        tau3may.push({x:8,y:7})
        tau3may.push({x:2,y:6})
        tau3may.push({x:3,y:6})
        tau3may.push({x:4,y:6})
        //chon toa do tau 2
        tau2may.push({x:8,y:5})
        tau2may.push({x:8,y:6})
    }
    else if(random==5){
        tau5may.push({x:1,y:3})
        tau5may.push({x:2,y:3})
        tau5may.push({x:3,y:3})
        tau5may.push({x:4,y:3})
        tau5may.push({x:5,y:3})
        // chon toa do tau 4
        tau4may.push({x:10,y:7})
        tau4may.push({x:10,y:8})
        tau4may.push({x:10,y:9})
        tau4may.push({x:10,y:10})
        // chon toa do tau 3
        tau3may.push({x:7,y:5})
        tau3may.push({x:7,y:6})
        tau3may.push({x:7,y:7})
        tau3may.push({x:2,y:1})
        tau3may.push({x:3,y:1})
        tau3may.push({x:4,y:1})
        //chon toa do tau 2
        tau2may.push({x:10,y:1})
        tau2may.push({x:10,y:2})
    }
    else if(random==6){
        tau5may.push({x:3,y:7})
        tau5may.push({x:3,y:8})
        tau5may.push({x:3,y:9})
        tau5may.push({x:3,y:10})
        tau5may.push({x:3,y:6})
        // chon toa do tau 4
        tau4may.push({x:2,y:7})
        tau4may.push({x:2,y:8})
        tau4may.push({x:2,y:9})
        tau4may.push({x:2,y:10})
        // chon toa do tau 3
        tau3may.push({x:4,y:3})
        tau3may.push({x:4,y:4})
        tau3may.push({x:4,y:5})
        tau3may.push({x:10,y:7})
        tau3may.push({x:10,y:8})
        tau3may.push({x:10,y:9})
        //chon toa do tau 2
        tau2may.push({x:10,y:3})
        tau2may.push({x:10,y:4})
    }
    else if(random==7){
        tau5may.push({x:3,y:10})
        tau5may.push({x:4,y:10})
        tau5may.push({x:5,y:10})
        tau5may.push({x:6,y:10})
        tau5may.push({x:7,y:10})
        // chon toa do tau 4
        tau4may.push({x:2,y:7})
        tau4may.push({x:2,y:8})
        tau4may.push({x:2,y:9})
        tau4may.push({x:2,y:10})
        // chon toa do tau 3
        tau3may.push({x:7,y:5})
        tau3may.push({x:8,y:5})
        tau3may.push({x:9,y:5})
        tau3may.push({x:1,y:1})
        tau3may.push({x:1,y:2})
        tau3may.push({x:1,y:3})
        //chon toa do tau 2
        tau2may.push({x:6,y:7})
        tau2may.push({x:7,y:7})
    }
    else if(random==8){
        tau5may.push({x:1,y:4})
        tau5may.push({x:2,y:4})
        tau5may.push({x:3,y:4})
        tau5may.push({x:4,y:4})
        tau5may.push({x:5,y:4})
        // chon toa do tau 4
        tau4may.push({x:1,y:7})
        tau4may.push({x:1,y:8})
        tau4may.push({x:1,y:9})
        tau4may.push({x:1,y:10})
        // chon toa do tau 3
        tau3may.push({x:6,y:5})
        tau3may.push({x:6,y:6})
        tau3may.push({x:6,y:7})
        tau3may.push({x:2,y:10})
        tau3may.push({x:3,y:10})
        tau3may.push({x:4,y:10})
        //chon toa do tau 2
        tau2may.push({x:10,y:9})
        tau2may.push({x:10,y:10})
    }else if(random==9){
        tau5may.push({x:3,y:10})
        tau5may.push({x:4,y:10})
        tau5may.push({x:5,y:10})
        tau5may.push({x:6,y:10})
        tau5may.push({x:7,y:10})
        // chon toa do tau 4
        tau4may.push({x:2,y:7})
        tau4may.push({x:2,y:8})
        tau4may.push({x:2,y:9})
        tau4may.push({x:2,y:10})
        // chon toa do tau 3
        tau3may.push({x:6,y:5})
        tau3may.push({x:6,y:6})
        tau3may.push({x:6,y:7})
        tau3may.push({x:10,y:6})
        tau3may.push({x:9,y:6})
        tau3may.push({x:8,y:6})
        //chon toa do tau 2
        tau2may.push({x:1,y:1})
        tau2may.push({x:1,y:2})
    }

    console.log(tau5may)
    console.log(tau4may)
    console.log(tau3may)
    console.log(tau2may)


    }
  
   $(".diem").css("display","block");
   $(".diemmay").css("display","block");
  
    chontoadoban();

    
   

}
 function toadomay(){
     vitribanmay={}
     if(lanban==0){
        console.log("lan ban 1")
        selectjsontau5()
     }
     else if(lanban==1){

        console.log("lan ban 2")
        selectjsontau4()
     }
     else if(lanban==2){
        console.log("lan ban 3")
        selectjsontau3()
     }
     else if(lanban==3){
        console.log("lan ban 4")
        selectjsontau3()
     }
     else if(lanban==4){
        console.log("lan ban 5")
        selectjsontau2()
     }


 }



function kiemtranguoi(){

    

    
    if(kiemtradiem(vitriban.x,vitriban.y,tau5may,tau4may,tau3may,tau2may)==1){
        tau5may.splice(0,tau5may.length)
        diem=diem+1;
        alert("ban được 1 điểm từ tọa độ vừa chọn ")
        $(".diem").text("điểm :"+diem);

    }
    else if(kiemtradiem(vitriban.x,vitriban.y,tau5may,tau4may,tau3may,tau2may)==2){
        tau4may.splice(0,tau4may.length)
        diem=diem+2;
        alert("ban được 2 điểm từ tọa độ vừa chọn ")
        $(".diem").text("điểm :"+diem);
    }
    else if(kiemtradiem(vitriban.x,vitriban.y,tau5may,tau4may,tau3may,tau2may)==3){
        tau3may.splice(0,tau3may.length)
        diem=diem+3;
        alert("ban được 3 điểm từ tọa độ vừa chọn ")
        $(".diem").text("điểm :"+diem);
    }
    else if(kiemtradiem(vitriban.x,vitriban.y,tau5may,tau4may,tau3may,tau2may)==5){
        tau2may.splice(0,tau2may.length)
        diem=diem+5;
        alert("ban được 5 điểm từ tọa độ vừa chọn ")
        $(".diem").text("điểm :"+diem);
    }
    else if(kiemtradiem(vitriban.x,vitriban.y,tau5may,tau4may,tau3may,tau2may)==0) {
        alert("tọa do ban chon không có co tau")
        $(".diem").text("điểm :"+diem);
    }

    nguoichoi = document.getElementById("game_content");  
        $(nguoichoi).text("máy đang chọn tọa độ bắn ")    
 
}

function kiemtramay(){

//may ban
if(kiemtradiem(vitribanmay.x,vitribanmay.y,tau5,tau4,tau3,tau2)==1){
    tau5.splice(0,tau5.length)
    diemmay=diemmay+1;
    alert("may được 1 điểm từ tọa độ vừa chọn ")
    $(".diemmay").text("điểm máy :"+diemmay);

}
else if(kiemtradiem(vitribanmay.x,vitribanmay.y,tau5,tau4,tau3,tau2)==2){
    tau4.splice(0,tau4.length)
    diemmay=diemmay+2;
    alert("may được 2 điểm từ tọa độ vừa chọn ")
    $(".diemmay").text("điểm máy :"+diemmay);
}
else if(kiemtradiem(vitribanmay.x,vitribanmay.y,tau5,tau4,tau3,tau2)==3){
    for(var i=0;i<tau3.length;i++){
if(vitribanmay.x==tau3[i].x&& vitribanmay.y==tau3[i].y){

    if(i<3){

        tau3.splice(0,3)
        
    }
    else {
        tau3.splice(3,tau3.length)

    }

}

    }
    diemmay=diemmay+3;
        alert("may được 3 điểm từ tọa độ vừa chọn ")
        $(".diemmay").text("điểm máy :"+diemmay);
   
}
else if(kiemtradiem(vitribanmay.x,vitribanmay.y,tau5,tau4,tau3,tau2)==5){
    tau2.splice(0,tau2.length)
    diemmay=diemmay+5;
    alert("may được 5 điểm từ tọa độ vừa chọn ")
    $(".diemmay").text("điểm máy :"+diemmay);
}
else if(kiemtradiem(vitribanmay.x,vitribanmay.y,tau5,tau4,tau3,tau2)==0) {
    alert("tọa do may chon không có co tau")
    $(".diemmay").text("điểm máy :"+diemmay);
}
nguoichoi = document.getElementById("game_content");  
        $(nguoichoi).text("Vui lòng chọn tọa độ bắn chọn tọa độ bắn ")    


}


function jquery(){
    $("#game").css("display","block");
    $(".hidevitriban").css("display","none");
   

}
//bat dau choi game
function chontoadoban(){

   

        $("#game").css("display","none");
        $(".hidevitriban").css("display","block");
    
   

}
$(".choilai").click(function(){
   
    
     vitriban={}
     vitribanmay={}
     lanban=0;
     diem=0;
     diemmay=0;
     zzz=0;

    $(this).css("display","none");
    
    tau5.splice(0,tau5.length)
    tau4.splice(0,tau4.length)
    tau3.splice(0,tau3.length)
    tau2.splice(0,tau2.length)

    tau5may.splice(0,tau5may.length)
    tau4may.splice(0,tau4may.length)
    tau3may.splice(0,tau3may.length)
    tau2may.splice(0,tau2may.length)

    
    $(".startgame").css("display","block");
    $(".khunggame").css("display","block");
    chonhuong = document.getElementsByClassName("huong");
            $(chonhuong[0]).css("background","blue");  
            nguoichoi = document.getElementById("game_content");  
            $(nguoichoi).text("Người chơi vui lòng chọn  tọa độ của tàu")   
    
csstau();
$(".diem").css("display","none");
$(".diemmay").css("display","none");

    





})

$(".chontoado div").hover(function () {
           
    var x=$(this).data("x");
    var y=$(this).data("y");
    
    hoverdiemban(x,y);
    
     
 });

 function hoverdiemban(x,y){
    $(".chontoado div").css("border","1px solid #dddddd")
    $("#"+x+"_"+(y)).css("border","1px solid red");
       
      
 }



$(".chontoado div").click(function () {
    
        if(zzz==0){
    
        var x=$(this).data("x");
        var y=$(this).data("y");
        vitriban={x:x,y:y};
    
        kiemtranguoi()
       
                $.when(jquery()).then(function(){
                    
                    
                    if(zzz==0){
                    zzz++;
                    lanban++;
                    console.log(lanban)
                        if(vitribanmay.x>0& vitribanmay.y>0){
                            
                        }
                        else {
                            console.log("undefined")
                            var xmay=Math.floor(Math.random() * 9)+1;
                            var ymay=Math.floor(Math.random() * 9)+1;
                            vitribanmay={x:xmay,y:ymay}
                            
                        }
                        console.log(vitribanmay)
                        console.log("z="+zzz )
                        timesleep(3000)
                         kiemtramay()
                            csstau();
                       
            
                        }
                        
               


            
            
                });
            
    
        
    }
        
        });

  
