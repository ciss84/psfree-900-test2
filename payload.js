function ani2(){
 document.getElementById('notify').className = 'notification2'
 setTimeout(hide, 400)
}
function hide(){
 document.getElementById('notify').style.display = 'none'
}

function awaitpl(){
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#ebfa89>"+LoadedMSG+"</h1>"; }, 50);
      setTimeout(ani2, 4000);
}

function load_exploit(){  
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Loading Exfathax..Please Wait !!!</h1>'; }, 100);     
}

function load_exploit_done(){
    var firstscheck = localStorage.getItem("CheckBOX1")
    var secondscheck = localStorage.getItem("CheckBOX2")
    if (firstscheck == "true"){
        setTimeout(load_platinum, 100)
    }else if(secondscheck == "true") {
        setTimeout(load_goldhen24b, 100)
    }else {
        document.getElementById('notify').style.display = ''
        document.getElementById('notify').className = 'notification'
        document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Jailbreak Done, Now load HEN Manually!!!</h1>'   
        setTimeout(ani2, 4000);
    }
}
    
function autopl(){
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#ebfa89>"+LoadedMSG+"</h1>"; }, 100);
      setTimeout(ani2, 2000);
}

function load_bin(){
      LoadedMSG="Send A Payload To Port 9020 Now !!!";
      runBinLoader();
}

function load_platinum(){
      setTimeout(loader('platinumhen_2.6.5.bin'), 100);
}

function load_goldhen24b(){
      setTimeout(loader('goldhen_2.4b15.bin'), 100);
} 
     
function loader(PLfile){ 
      toogle_payload(PLfile); 
}

function loader2(PLfile){ 
      LoadedMSG=PLfile+" Loaded !!!";
}