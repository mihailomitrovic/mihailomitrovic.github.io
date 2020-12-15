function proveri(email){
    if (email.search("@")==-1) {
        return false;
    }
    return true;
}

function newsletter(){

    var text = document.getElementById("news1");
    var email = text.value;
    
    if(email=="") alert("Email ne sme da bude prazan. Pokušajte ponovo.");
    else{
        if (proveri(email)) {
            alert("Uspešno ste se prijavili.");
            text.value="";
            }
        else alert("Email mora da sadrzi @ simbol. Pokušajte ponovo.");
    }
        
}

function pitanje(){
    var ime=document.getElementById("r1").value;
    var email=document.getElementById("r2").value;
    var kom=document.getElementById("r3").value;
    var error=""
    var ne=document.getElementById("poseta1");
    var mozda=document.getElementById("poseta2");
    var da=document.getElementById("poseta3");


    if (ime=="") {
        error +="Ime ne sme da bude prazno.\n";
    }

    if(email=="") error +="Email ne sme da bude prazan.\n";
    else{
        if (!proveri(email)) {
            error +="Email mora da sadrži @ simbol.\n";
        }   
    }
    if (kom=="") {
        error +="Komentar ne sme da bude prazan.\n";
                
    }
    if (ne.checked==false && mozda.checked==false && da.checked==false) {
        error+="Niste ništa čekirali.\n";
    }
    
    if(error!="") alert(error);
    else {
        document.getElementById("r1").value = "";
        document.getElementById("r2").value = "";
        document.getElementById("r3").value = "";
        var date = new Date();
        var mesec = date.getMonth()+1;
        alert("Vaša recenzija je primljena.\nDatum prijema: "+date.getDate()+"."+mesec+"."+date.getFullYear());
    }
}

function fejs(){
    window.open("https://www.facebook.com","_blank");
}

function ig(){
    window.open("https://www.instagram.com","_blank");
}