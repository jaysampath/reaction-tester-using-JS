          document.getElementById("startbutton").onclick = function(){
          document.getElementById("recordtime").innerHTML="0s";
          document.getElementById("printtime").innerHTML= "0s";
          document.getElementById("shape").style.visibility="initial";
              startgame();
              return;
          }
          
          function startgame(){
          var start = new Date().getTime();
          var recordtime=10000;

          function makeshapeAppear(){
              
              var top=Math.random()*400;
              var left=Math.random()*400;
              var width=Math.random()*200 +100;
              
              var color = '#' + Math.random().toString(16).substr(-6);
              
              if(Math.random()>0.5){
                document.getElementById("shape").style.borderRadius = "50%";
              }else{
                  document.getElementById("shape").style.borderRadius = "0%";
              }
              
              document.getElementById("shape").style.top = top+"px";
              document.getElementById("shape").style.left = left+"px";
              document.getElementById("shape").style.width = width+"px";
              document.getElementById("shape").style.height = width+"px";
              document.getElementById("shape").style.backgroundColor = color;
              
              document.getElementById("shape").style.display="block";
              
              start = new Date().getTime();
          }
          
          function apperafterdelay(){
             
          setTimeout(makeshapeAppear,Math.random()*2000);
          }
          apperafterdelay();
          
          document.getElementById("shape").onclick=function(){
              document.getElementById("shape").style.display="none";
              var end = new Date().getTime();
              var temp = get_time(start,end);
              document.getElementById("printtime").innerHTML= temp+"s";
            //  console.log(temp+" "+recordtime);
              if(temp<recordtime){
                  document.getElementById("recordtime").innerHTML=temp+"s";
                  recordtime=temp;
                  
              }
              apperafterdelay();
          }
          function get_time(a,b){
              return (b-a)/1000;
          }
              
          document.getElementById("stopbutton").onclick=function(){
              document.getElementById("shape").style.visibility="hidden";
              alert("Your Best Reaction: "+recordtime+" seconds.");
              apperafterdelay()
              return;
          }
              
          }