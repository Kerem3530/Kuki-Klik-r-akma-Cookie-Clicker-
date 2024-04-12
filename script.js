
var tiklamaSayisi = 0;
var b1f = 50;
var b2f = 100;
var b3f = 250;
var b4f = 500;
var b5f = 2500;
var tk = false;


function olasilik(s){
    return sonuc = Math.floor(Math.random() * s)
}

function k_tiklama(){
    tiklamaSayisi++;
    if(tk == false){
        document.querySelector(".kurabiye").style.bottom = "30px";
        tk = true;
    }

    else if(tk == true){
        document.querySelector(".kurabiye").style.bottom = "0px";
        tk = false;
    }

    document.querySelector(".k_yazi").innerHTML = tiklamaSayisi + " Tıklama!";
}

function bonus1t(){
    if(tiklamaSayisi >= b1f){
        olasilik(2)
        if(sonuc == 1){
            b1f *= 2;
            document.querySelector(".b1f").innerHTML = "Bonus 1 Fiyatı: " + b1f + " Tıklama";
            alert("+100 Tıklama Kazandın :)");
            tiklamaSayisi += 100;
            document.querySelector(".k_yazi").innerHTML = tiklamaSayisi + " Tıklama!";
        }

        else if (sonuc == 0 && tiklamaSayisi >= b1f*2){
            b1f *= 2;
            document.querySelector(".b1f").innerHTML = "Bonus 1 Fiyatı: " + b1f + " Tıklama";
            alert("-100 Tıklama Kaybettin :(");
            tiklamaSayisi -= 100;
            document.querySelector(".k_yazi").innerHTML = tiklamaSayisi + " Tıklama!";
        }

        else{
            alert("Yetersiz Bakiye Olduğu İçin Ceza Uygulanmadı :)")
            b1f *= 2;
            document.querySelector(".b1f").innerHTML = "Bonus 1 Fiyatı: " + b1f + " Tıklama";
        }
    }
}

function bonus2t(){
    if(tiklamaSayisi >= b2f){
        olasilik(2)
        if(sonuc == 1){
            b2f *= 2;
            document.querySelector(".b2f").innerHTML = "Bonus 2 Fiyatı: " + b2f + " Tıklama";
            alert("+200 Tıklama Kazandın :)");
            tiklamaSayisi += 200;
            document.querySelector(".k_yazi").innerHTML = tiklamaSayisi + " Tıklama!";
        }

        else if (sonuc == 0 && tiklamaSayisi >= b2f*2){
            b2f *= 2;
            document.querySelector(".b2f").innerHTML = "Bonus 2 Fiyatı: " + b2f + " Tıklama";
            alert("-200 Tıklama Kaybettin :(");
            tiklamaSayisi -= 200;
            document.querySelector(".k_yazi").innerHTML = tiklamaSayisi + " Tıklama!";
        }

        else{
            alert("Yetersiz Bakiye Olduğu İçin Ceza Uygulanmadı :)")
            b2f *= 3;
            document.querySelector(".b2f").innerHTML = "Bonus 2 Fiyatı: " + b2f + " Tıklama";
        }
    }
}

function bonus3t(){
    if(tiklamaSayisi >= b3f){
        olasilik(2)
        if(sonuc == 1){
            b3f *= 2;
            document.querySelector(".b3f").innerHTML = "Bonus 3 Fiyatı: " + b3f + " Tıklama";
            alert("+500 Tıklama Kazandın :)");
            tiklamaSayisi += 500;
            document.querySelector(".k_yazi").innerHTML = tiklamaSayisi + " Tıklama!";
        }

        else if (sonuc == 0 && tiklamaSayisi >= b3f*2){
            b3f *= 2;
            document.querySelector(".b3f").innerHTML = "Bonus 3 Fiyatı: " + b3f + " Tıklama";
            alert("-500 Tıklama Kaybettin :(");
            tiklamaSayisi -= 500;
            document.querySelector(".k_yazi").innerHTML = tiklamaSayisi + " Tıklama!";
        }

        else{
            alert("Yetersiz Bakiye Olduğu İçin Ceza Uygulanmadı :)")
            b3f *= 3;
            document.querySelector(".b3f").innerHTML = "Bonus 3 Fiyatı: " + b3f + " Tıklama";
        }
    }
}

function bonus4t(){
    if(tiklamaSayisi >= b4f){
        olasilik(2)
        if(sonuc == 1){
            b4f *= 2;
            document.querySelector(".b4f").innerHTML = "Bonus 4 Fiyatı: " + b4f + " Tıklama";
            alert("+1000 Tıklama Kazandın :)");
            tiklamaSayisi += 1000;
            document.querySelector(".k_yazi").innerHTML = tiklamaSayisi + " Tıklama!";
        }

        else if (sonuc == 0 && tiklamaSayisi >= b4f*2){
            b4f *= 2;
            document.querySelector(".b4f").innerHTML = "Bonus 4 Fiyatı: " + b4f + " Tıklama";
            alert("-1000 Tıklama Kaybettin :(");
            tiklamaSayisi -= 1000;
            document.querySelector(".k_yazi").innerHTML = tiklamaSayisi + " Tıklama!";
        }

        else{
            alert("Yetersiz Bakiye Olduğu İçin Ceza Uygulanmadı (Uygulanmış ta olabilir) :)")
            b4f *= 3;
            document.querySelector(".b4f").innerHTML = "Bonus 4 Fiyatı: " + b4f + " Tıklama";
        }
    }
}

function bonus5t(){
    if(tiklamaSayisi >= b5f){
        olasilik(2)
        if(sonuc == 1){
            b5f *= 2;
            document.querySelector(".b5f").innerHTML = "Bonus 5 Fiyatı: " + b5f + " Tıklama";
            alert("+5000 Tıklama Kazandın :)");
            tiklamaSayisi += 5000;
            document.querySelector(".k_yazi").innerHTML = tiklamaSayisi + " Tıklama!";
        }

        else if (sonuc == 0 && tiklamaSayisi >= b5f*2){
            b5f *= 2;
            document.querySelector(".b5f").innerHTML = "Bonus 5 Fiyatı: " + b5f + " Tıklama";
            alert("-5000 Tıklama Kaybettin :(");
            tiklamaSayisi -= 5000;
            document.querySelector(".k_yazi").innerHTML = tiklamaSayisi + " Tıklama!";
        }

        else{
            alert("Yetersiz Bakiye Olduğu İçin Ceza Uygulanmadı (Uygulanmış ta olabilir) :)")
            b5f *= 3;
            document.querySelector(".b5f").innerHTML = "Bonus 5 Fiyatı: " + b5f + " Tıklama";
        }
    }
}