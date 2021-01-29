var qarr=["Which of the following is the highest governing body of tennis?","Roger Federer has won how many Grand Slams?","Who is known as the king of clay?","Who has won the highest number of grand slams in women's tennis?","Where is the Wimbledon played?","On which turf is US Open played?","Who is the highest paid tennis player?","Who recently equalled the record for most grand slams?","Which is the first gland slam of the year?","Which grand slam was cancelled due to Covid-19?"];
    var ran=0;
    var score=0;
    var a1=[["ITF: International Tennis Federation","WTF: World Tennis Federation","WTA: World Tennis Authority","TAW: Tennis Association of the World"],["19","20","21","22"],["Rafael Nadal","Novak Djokovic","Pete Sampras","Roger Federer"],["Maria Sharapova","Victoria Azarenka","Naomi Osaka","Serena Williams"],["Washington","Melbourne","London","Barcelona"],["Hard","Clay","Grass","Wood"],["Serena Williams","Naomi Osaka","Roger Federer","Rafael Nadal"],["Roger Federer","Maria Sharapova","Novak Djokovic","Rafael Nadal"],["US Open","Australian Open","Wimbledon","French Open"],["US Open","Australian Open","Wimbledon","French Open"]];
    var ca=[0,1,0,3,2,0,2,3,1,2];
    var useresp=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
    var uans=false;
    var x=document.getElementsByClassName("i1");
    var y=document.getElementsByTagName("li");
    function fun2(){
    document.getElementsByClassName("q1")[0].value=qarr[ran];
    x[0].value=a1[ran][0];
    x[1].value=a1[ran][1];
    x[2].value=a1[ran][2];
    x[3].value=a1[ran][3];
    for(i=0;i<10;i++){
            y[i].style.cssText = "background-color:#011036;color:hsl(0, 0%, 49%);";
        }
    y[ran].style.cssText="background-color:rgb(0, 217, 255);color:#ffffff;";
    document.getElementById("score1").innerHTML="0/10";
    }
    function fun(inp){
        var i;
        for(i=0;i<4;i++){
            x[i].style.cssText = "border:5px solid #FFFFFF;box-shadow: 0 0 5px grey;";
        }
        x[inp].style.cssText = "border:5px solid #FFFFFF;outline:none;background-color:rgba(159, 210, 241, 0.3);";
        uans=inp;
    }
    function fun3(){
        if(uans==ca[ran]){
            x[uans].style.cssText="border:5px solid #FFFFFF;outline-style:solid;outline-color:green;outline-width:thin;background-color:rgba(0, 255, 76, 0.3);";
            score+=1;
            var out=score.toString()+"/10";
            document.getElementById("score1").innerHTML=out;
            useresp[ran]=uans;

        }
        else{
            x[uans].style.cssText="border:5px solid #FFFFFF;outline-style:solid;outline-color:red;outline-width:thin;background-color:rgba(255, 96, 96, 0.3);";
            useresp[ran]=uans;
        }
        
        x[0].style.pointerEvents = 'none';
        x[1].style.pointerEvents = 'none';
        x[2].style.pointerEvents = 'none';
        x[3].style.pointerEvents = 'none';
        setTimeout(fun4, 1000);
    }
    function fun4(){
        x[0].style.pointerEvents = 'auto';
        x[1].style.pointerEvents = 'auto';
        x[2].style.pointerEvents = 'auto';
        x[3].style.pointerEvents = 'auto';
        if(ran==9){
            var fin="Your final score is "+score.toString()
            alert(fin);
            window.location.reload();
            }
            else{
                ran+=1;
                document.getElementsByClassName("q1")[0].value=qarr[ran];
                x[0].value=a1[ran][0];
                x[1].value=a1[ran][1];
                x[2].value=a1[ran][2];
                x[3].value=a1[ran][3];
                if (useresp[ran]==-1){
                    x[0].style.pointerEvents = 'auto';
                    x[1].style.pointerEvents = 'auto';
                    x[2].style.pointerEvents = 'auto';
                    x[3].style.pointerEvents = 'auto';
                    document.getElementsByClassName("q1")[0].value=qarr[ran];
                    x[0].value=a1[ran][0];
                    x[1].value=a1[ran][1];
                    x[2].value=a1[ran][2];
                    x[3].value=a1[ran][3];
                    for(i=0;i<10;i++){
                    y[i].style.cssText = "background-color:#011036;color:hsl(0, 0%, 49%);";
                    }
                    y[ran].style.cssText="background-color:rgb(0, 217, 255);color:#ffffff;";
                    for(i=0;i<4;i++){
                    x[i].style.cssText = "border:5px solid #FFFFFF;box-shadow: 0 0 5px grey;";
                    }
                }
                else{
                    x[0].style.pointerEvents = 'none';
                    x[1].style.pointerEvents = 'none';
                    x[2].style.pointerEvents = 'none';
                    x[3].style.pointerEvents = 'none';
                    for(i=0;i<4;i++){
                        x[i].style.cssText = "border:5px solid #FFFFFF;box-shadow: 0 0 5px grey;";
                    }
                    for(i=0;i<10;i++){
                        y[i].style.cssText = "background-color:#011036;color:hsl(0, 0%, 49%);";
                    }
                    if(useresp[ran]==ca[ran]){
                        x[useresp[ran]].style.cssText="border:5px solid #FFFFFF;outline-style:solid;outline-color:green;outline-width:thin;background-color:rgba(0, 255, 76, 0.3);";
        
                    }
                    else{
                        x[useresp[ran]].style.cssText="border:5px solid #FFFFFF;outline-style:solid;outline-color:red;outline-width:thin;background-color:rgba(255, 96, 96, 0.3);";
                    }
        
        
                }
            }
    }
    function fun5(){
        ran-=1
        if(ran!=-1){
        document.getElementsByClassName("q1")[0].value=qarr[ran];
        x[0].value=a1[ran][0];
        x[1].value=a1[ran][1];
        x[2].value=a1[ran][2];
        x[3].value=a1[ran][3];
        if (useresp[ran]==-1){
            x[0].style.pointerEvents = 'auto';
            x[1].style.pointerEvents = 'auto';
            x[2].style.pointerEvents = 'auto';
            x[3].style.pointerEvents = 'auto';
            document.getElementsByClassName("q1")[0].value=qarr[ran];
            x[0].value=a1[ran][0];
            x[1].value=a1[ran][1];
            x[2].value=a1[ran][2];
            x[3].value=a1[ran][3];
            for(i=0;i<10;i++){
            y[i].style.cssText = "background-color:#011036;color:hsl(0, 0%, 49%);";
            }
            y[ran].style.cssText="background-color:rgb(0, 217, 255);color:#ffffff;";
            for(i=0;i<4;i++){
            x[i].style.cssText = "border:5px solid #FFFFFF;box-shadow: 0 0 5px grey;";
            }
        }
        else{
            x[0].style.pointerEvents = 'none';
            x[1].style.pointerEvents = 'none';
            x[2].style.pointerEvents = 'none';
            x[3].style.pointerEvents = 'none';
            for(i=0;i<4;i++){
                x[i].style.cssText = "border:5px solid #FFFFFF;box-shadow: 0 0 5px grey;";
            }
            for(i=0;i<10;i++){
                y[i].style.cssText = "background-color:#011036;color:hsl(0, 0%, 49%);";
            }
            if(useresp[ran]==ca[ran]){
                x[useresp[ran]].style.cssText="border:5px solid #FFFFFF;outline-style:solid;outline-color:green;outline-width:thin;background-color:rgba(0, 255, 76, 0.3);";

            }
            else{
                x[useresp[ran]].style.cssText="border:5px solid #FFFFFF;outline-style:solid;outline-color:red;outline-width:thin;background-color:rgba(255, 96, 96, 0.3);";
            }



        }
    }

    }