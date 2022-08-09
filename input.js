function myFunction() {
    var a,b,c,d,e,f,g,h,i,j,k;

     a = document.getElementById("com111").value; b = document.getElementById("com112").value;
     c = document.getElementById("com113").value; d = document.getElementById("com114").value;
     e = document.getElementById("com115").value; f = document.getElementById("mth111").value;
     g = document.getElementById("sta112").value; h = document.getElementById("gns101").value;
     i = document.getElementById("gns127").value; j = document.getElementById("gns113").value;
     k = document.getElementById("eed116").value;

    var scores = [];
    var aa = scores.push(a, b, c, d, e, f, g, h, i, j, k,);
    var bb = scores.toString();
    //      111111
    var cc = scores.filter(myfunction1);
    var cgp = 4.0;
    function myfunction1(value) {
        return value >= 75;
    }
    //      22222222
    var dd = scores.filter(myfunction2);
    var dgp = 3.50;
    function myfunction2(value) {
        return value >= 70 && value <= 74;
    }
    //      3333333
    var ee = scores.filter(myfunction3);
    var egp = 3.25;
    function myfunction3(value) {
        return value >= 65 && value <= 69;
    }
    //      4444444
    var ff = scores.filter(myfunction4);
    var fgp = 3.00;
    function myfunction4(value) {
        return value >= 60 && value <= 64;
    }
    //      555555
    var gg = scores.filter(myfunction5);
    var ggp = 2.75;
    function myfunction5(value) {
        return value >= 55 && value <= 59;
    }
    //      66666
    var hh = scores.filter(myfunction6);
    var hgp = 2.50;
    function myfunction6(value) {
        return value >= 50 && value <= 54;
    }
    //      777777
    var ii = scores.filter(myfunction7);
    var igp = 2.25;
    function myfunction7(value) {
        return value >= 45 && value <= 49;
    }
    //      888888
    var jj = scores.filter(myfunction8);
    var jgp = 2.00;
    function myfunction8(value) {
        return value >= 40 && value <= 44;
    }
    //      9999
    var kk = scores.filter(myfunction9);
    var kgp = 1.50;
    function myfunction9(value) {
        return value >= 30 && value <= 39;
    }
    //      100000
    var ll = scores.filter(myfunction10);
    var lgp = 1.00;
    function myfunction10(value) {
        return value >= 20 && value <= 29;
    }
    //      1111111
    var mm = scores.filter(myfunction11);
    var mgp = 0.00;
    function myfunction11(value) {
        return value >= 00 && value <= 19;
    }
    //WEIGHT CALCULATION FOR COM111

    var valuea = a;
    var weighta;
    var unita = 3;
    var gra;
    if (valuea >= 75) {
        weighta = unita * cgp; gra = 'a'
    }
    if (valuea >= 70 && valuea <= 74) {
        weighta = unita * dgp; gra = 'ab'
    }
    if (valuea >= 65 && valuea <= 69) {
        weighta = unita * egp; gra = 'b'
    }
    if (valuea >= 60 && valuea <= 64) {
        weighta = unita * fgp; gra = 'bc'
    }
    if (valuea >= 55 && valuea <= 59) {
        weighta = unita * ggp; gra = 'c'
    }
    if (valuea >= 50 && valuea <= 54) {
        weighta = unita * hgp; gra = 'cd'
    }
    if (valuea >= 45 && valuea <= 49) {
        weighta = unita * igp; gra = 'd'
    }
    if (valuea >= 40 && valuea <= 44) {
        weighta = unita * jgp; gra = 'e'
    }
    if (valuea >= 30 && valuea <= 39) {
        weighta = unita * kgp; gra = 'f1'
    }
    if (valuea >= 20 && valuea <= 29) {
        weighta = unita * lgp; gra = 'f2'
    }
    if (valuea >= 00 && valuea <= 19) {
        weighta = unita * mgp; gra = 'f3'
    }
    

    //WEIGHT CALCULATION FOR COM112

    var valueb = b;
    var weightb;
    var unitb = 3
    var grb;
    if (valueb >= 75) {
        weightb = unitb * cgp; grb = 'a'
    }
    if (valueb >= 70 && valueb <= 74) {
        weightb = unitb * dgp; grb = 'ab'
    }
    if (valueb >= 65 && valueb <= 69) {
        weightb = unitb * egp; grb = 'b'
    }
    if (valueb >= 60 && valueb <= 64) {
        weightb = unitb * fgp; grb = 'bc'
    }
    if (valueb >= 55 && valueb <= 59) {
        weightb = unitb * ggp; grb = 'c'
    }
    if (valueb >= 50 && valueb <= 54) {
        weightb = unitb * hgp; grb = 'cd'
    }
    if (valueb >= 45 && valueb <= 49) {
        weightb = unitb * igp; grb = 'd'
    }
    if (valueb >= 40 && valueb <= 44) {
        weightb = unitb * jgp; grb = 'e'
    }
    if (valueb >= 30 && valueb <= 39) {
        weightb = unitb * kgp; grb = 'f1'
    }
    if (valueb >= 20 && valueb <= 29) {
        weightb = unitb * lgp; grb = 'f2'
    }
    if (valueb >= 00 && valueb <= 19) {
        weightb = unitb * mgp; grb = 'f3'
    }
    //WEIGHT CALCULATION FOR COM113

    var valuec = c;
    var weightc;
    var unitc = 4;
    var grc;
    if (valuec >= 75) {
        weightc = unitc * cgp; grc = 'a'
    }
    if (valuec >= 70 && valuec <= 74) {
        weightc = unitc * dgp; grc = 'ab'
    }
    if (valuec >= 65 && valuec <= 69) {
        weightc = unitc * egp; grc = 'b'
    }
    if (valuec >= 60 && valuec <= 64) {
        weightc = unitc * fgp; grc = 'bc'
    }
    if (valuec >= 55 && valuec <= 59) {
        weightc = unitc * ggp; grc = 'c'
    }
    if (valuec >= 50 && valuec <= 54) {
        weightc = unitc * hgp; grc = 'cd'
    }
    if (valuec >= 45 && valuec <= 49) {
        weightc = unitc * igp; grc = 'd'
    }
    if (valuec >= 40 && valuec <= 44) {
        weightc = unitc * jgp; grc = 'e'
    }
    if (valuec >= 30 && valuec <= 39) {
        weightc = unitc * kgp; grc = 'f1'
    }
    if (valuec >= 20 && valuec <= 29) {
        weightc = unitc * lgp; grc = 'f2'
    }
    if (valuec >= 00 && valuec <= 19) {
        weightc = unitc * mgp; grc = 'f3'
    }

    //WEIGHT CALCULATION FOR COM1114

    var valued = d;
    var weightd;
    var unitd = 2;
    var grd;
    if (valued >= 75) {
        weightd = unitd * cgp; grd = 'a'
    }
    if (valued >= 70 && valued <= 74) {
        weightd = unitd * dgp; grd = 'ab'
    }
    if (valued >= 65 && valued <= 69) {
        weightd = unitd * egp; grd = 'b'
    }
    if (valued >= 60 && valued <= 64) {
        weightd = unitd * fgp; grd = 'bc'
    }
    if (valued >= 55 && valued <= 59) {
        weightd = unitd * ggp; grd = 'c'
    }
    if (valued >= 50 && valued <= 54) {
        weightd = unitd * hgp; grd = 'cd'
    }
    if (valued >= 45 && valued <= 49) {
        weightd = unitd * igp; grd = 'd'
    }
    if (valued >= 40 && valued <= 44) {
        weightd = unitd * jgp; grd = 'e'
    }
    if (valued >= 30 && valued <= 39) {
        weightd = unitd * kgp; grd = 'f1'
    }
    if (valued >= 20 && valued <= 29) {
        weightd = unitd * lgp; grd = 'f2'
    }
    if (valued >= 00 && valued <= 19) {
        weightd = unitd * mgp; grd = 'f3'
    }
    //WEIGHT CALCULATION FOR COM115

    var valuee = e;
    var weighte;
    var unite = 3;
    var gre;
    if (valuee >= 75) {
        weighte = unite * cgp; gre = 'a'
    }
    if (valuee >= 70 && valuee <= 74) {
        weighte = unite * dgp; gre = 'ab'
    }
    if (valuee >= 65 && valuee <= 69) {
        weighte = unite * egp; gre = 'b'
    }
    if (valuee >= 60 && valuee <= 64) {
        weighte = unite * fgp; gre = 'bc'
    }
    if (valuee >= 55 && valuee <= 59) {
        weighte = unite * ggp; gre = 'c'
    }
    if (valuee >= 50 && valuee <= 54) {
        weighte = unite * hgp; gre = 'cd'
    }
    if (valuee >= 45 && valuee <= 49) {
        weighte = unite * igp; gre = 'd'
    }
    if (valuee >= 40 && valuee <= 44) {
        weighte = unite * jgp; gre = 'e'
    }
    if (valuee >= 30 && valuee <= 39) {
        weighte = unite * kgp; gre = 'f1'
    }
    if (valuee >= 20 && valuee <= 29) {
        weighte = unite * lgp; gre = 'f2'
    }
    if (valuee >= 00 && valuee <= 19) {
        weighte = unite * mgp; gre = 'f3'
    }
        //WEIGHT CALCULATION FOR MTH111

    var valuef = f;
    var weightf;
    var unitf = 2;
    var grf;
    if (valuef >= 75) {
        weightf = unitf * cgp; grf = 'a'
    }
    if (valuef >= 70 && valuef <= 74) {
        weightf = unitf * dgp; grf = 'ab'
    }
    if (valuef >= 65 && valuef <= 69) {
        weightf = unitf * egp; grf = 'b'
    }
    if (valuef >= 60 && valuef <= 64) {
        weightf = unitf * fgp; grf = 'bc'
    }
    if (valuef >= 55 && valuef <= 59) {
        weightf = unitf * ggp; grf = 'c'
    }
    if (valuef >= 50 && valuef <= 54) {
        weightf = unitf * hgp; grf = 'cd'
    }
    if (valuef >= 45 && valuef <= 49) {
        weightf = unitf * igp; grf = 'd'
    }
    if (valuef >= 40 && valuef <= 44) {
        weightf = unitf * jgp; grf = 'e'
    }
    if (valuef >= 30 && valuef <= 39) {
        weightf = unitf * kgp; grf = 'f1'
    }
    if (valuef >= 20 && valuef <= 29) {
        weightf = unitf * lgp; grf = 'f2'
    }
    if (valuef >= 00 && valuef <= 19) {
        weightf = unitf * mgp; grf = 'f3'
    }
        //WEIGHT CALCULATION FOR STA112

    var valueg = g;
    var weightg;
    var unitg = 2;
    var grg;
    if (valueg >= 75) {
        weightg = unitg * cgp; grg = 'a'
    }
    if (valueg >= 70 && valueg <= 74) {
        weightg = unitg * dgp; grg = 'ab'
    }
    if (valueg >= 65 && valueg <= 69) {
        weightg = unitg * egp; grg = 'b'
    }
    if (valueg >= 60 && valueg <= 64) {
        weightg = unitg * fgp; grg = 'bc'
    }
    if (valueg >= 55 && valueg <= 59) {
        weightg = unitg * ggp; grg = 'c'
    }
    if (valueg >= 50 && valueg <= 54) {
        weightg = unitg * hgp; grg = 'cd'
    }
    if (valueg >= 45 && valueg <= 49) {
        weightg = unitg * igp; grg = 'd'
    }
    if (valueg >= 40 && valueg <= 44) {
        weightg = unitg * jgp; grg = 'e'
    }
    if (valueg >= 30 && valueg <= 39) {
        weightg = unitg * kgp; grg = 'f1'
    }
    if (valueg >= 20 && valueg <= 29) {
        weightg = unitg * lgp; grg = 'f2'
    }
    if (valueg >= 00 && valueg <= 19) {
        weightg = unitg * mgp; grg = 'f3'
    }
        //WEIGHT CALCULATION FOR GNS101

    var valueh = h;
    var weighth;
    var unith = 2;
    var grh;
    if (valueh >= 75) {
        weighth = unith * cgp; grh = 'a'
    }
    if (valueh >= 70 && valueh <= 74) {
        weighth = unith * dgp; grh = 'ab'
    }
    if (valueh >= 65 && valueh <= 69) {
        weighth = unith * egp; grh = 'b'
    }
    if (valueh >= 60 && valueh <= 64) {
        weighth = unith * fgp; grh = 'bc'
    }
    if (valueh >= 55 && valueh <= 59) {
        weighth = unith * ggp; grh = 'c'
    }
    if (valueh >= 50 && valueh <= 54) {
        weighth = unith * hgp; grh = 'cd'
    }
    if (valueh >= 45 && valueh <= 49) {
        weighth = unith * igp; grh = 'd'
    }
    if (valueh >= 40 && valueh <= 44) {
        weighth = unith * jgp; grh = 'e'
    }
    if (valueh >= 30 && valueh <= 39) {
        weighth = unith * kgp; grh = 'f1'
    }
    if (valueh >= 20 && valueh <= 29) {
        weighth = unith * lgp; grh = 'f2'
    }
    if (valueh >= 00 && valueh <= 19) {
        weighth = unith * mgp; grh = 'f3'
    }
        //WEIGHT CALCULATION FOR GNS127

    var valuei = i;
    var weighti;
    var uniti = 2;
    var gri;
    if (valuei >= 75) {
        weighti = uniti * cgp; gri = 'a'
    }
    if (valuei >= 70 && valuei <= 74) {
        weighti = uniti * dgp; gri = 'ab'
    }
    if (valuei >= 65 && valuei <= 69) {
        weighti = uniti * egp; gri = 'b'
    }
    if (valuei >= 60 && valuei <= 64) {
        weighti = uniti * fgp; gri = 'bc'
    }
    if (valuei >= 55 && valuei <= 59) {
        weighti = uniti * ggp; gri = 'c'
    }
    if (valuei >= 50 && valuei <= 54) {
        weighti = uniti * hgp; gri = 'cd'
    }
    if (valuei >= 45 && valuei <= 49) {
        weighti = uniti * igp; gri = 'd'
    }
    if (valuei >= 40 && valuei <= 44) {
        weighti = uniti * jgp; gri = 'e'
    }
    if (valuei >= 30 && valuei <= 39) {
        weighti = uniti * kgp; gri = 'f1'
    }
    if (valuei >= 20 && valuei <= 29) {
        weighti = uniti * lgp; gri = 'f2'
    }
    if (valuei >= 00 && valuei <= 19) {
        weighti = uniti * mgp; gri = 'f3'
    }
        //WEIGHT CALCULATION FOR GNS113

    var valuej = j;
    var weightj;
    var unitj = 2;
    var grj;
    if (valuej >= 75) {
        weightj = unitj * cgp; grj = 'a'
    }
    if (valuej >= 70 && valuej <= 74) {
        weightj = unitj * dgp; grj = 'ab'
    }
    if (valuej >= 65 && valuej <= 69) {
        weightj = unitj * egp; grj = 'b'
    }
    if (valuej >= 60 && valuej <= 64) {
        weightj = unitj * fgp; grj = 'bc'
    }
    if (valuej >= 55 && valuej <= 59) {
        weightj = unitj * ggp; grj = 'c'
    }
    if (valuej >= 50 && valuej <= 54) {
        weightj = unitj * hgp; grj = 'cd'
    }
    if (valuej >= 45 && valuej <= 49) {
        weightj = unitj * igp; grj = 'd'
    }
    if (valuej >= 40 && valuej <= 44) {
        weightj = unitj * jgp; grj = 'e'
    }
    if (valuej >= 30 && valuej <= 39) {
        weightj = unitj * kgp; grj = 'f1'
    }
    if (valuej >= 20 && valuej <= 29) {
        weightj = unitj * lgp; grj = 'f2'
    }
    if (valuej >= 00 && valuej <= 19) {
        weightj = unitj * mgp; grj = 'f3'
    }
        //WEIGHT CALCULATION FOR EED

    var valuek = k;
    var weightk;
    var unitk = 2;
    var grk;
    if (valuek >= 75) {
        weightk = unitk * cgp; grk= 'a'
    }
    if (valuek >= 70 && valuek <= 74) {
        weightk = unitk * dgp; grk= 'ab'
    }
    if (valuek >= 65 && valuek <= 69) {
        weightk = unitk * egp; grk= 'b'
    }
    if (valuek >= 60 && valuek <= 64) {
        weightk = unitk * fgp; grk= 'bc'
    }
    if (valuek >= 55 && valuek <= 59) {
        weightk = unitk * ggp; grk= 'c'
    }
    if (valuek >= 50 && valuek <= 54) {
        weightk = unitk * hgp; grk= 'cd'
    }
    if (valuek >= 45 && valuek <= 49) {
        weightk = unitk * igp; grk= 'd'
    }
    if (valuek >= 40 && valuek <= 44) {
        weightk = unitk * jgp; grk= 'e'
    }
    if (valuek >= 30 && valuek <= 39) {
        weightk = unitk * kgp; grk= 'f1'
    }
    if (valuek >= 20 && valuek <= 29) {
        weightk = unitk * lgp; grk= 'f2'
    }
    if (valuek >= 00 && valuek <= 19) {
        weightk = unitk * mgp; grk= 'f3'
    }
        //MAIN CALCULATION

        var yomis, williams,olaiya,total_u,gpa, og, ok;
        total_u = 27.00
        yomis = [weighta,weightb,weightc,weightd,weighte,weightf,weightg,weighth,weighti,weightj,weightk];
        williams = yomis[0]+yomis[1]+yomis[2]+yomis[3]+yomis[4]+yomis[5]+yomis[6]+yomis[7]+yomis[8]+yomis[9]+yomis[10]; 
        ok = yomis.reduceRight(funcc);
        function funcc(value, total){
            return value + total}
        gpa = ok/total_u;
        localStorage.setItem("Total_gpa",gpa.toFixed(2));

        var gp1 ,gp2 ,gp3 ,gp4, gp5, gp6, gp7, gp8, gp9, gp10, gp11;
        gp1 = yomis[0]/3; gp2 = yomis[1]/3; gp3 = yomis[2]/4; gp4 = yomis[3]/2; gp5 = yomis[4]/3; 
        gp6 = yomis[5]/2; gp7 = yomis[6]/2; gp8 = yomis[7]/2; gp9 = yomis[8]/2; gp10 = yomis[9]/2;
        gp11 = yomis[10]/2;    
        
        localStorage.setItem("gp1",gp1); localStorage.setItem("gp2",gp2); 
        localStorage.setItem("gp3",gp3); 
        localStorage.setItem("gp4",gp4); localStorage.setItem("gp5",gp5);
        localStorage.setItem("gp6",gp6); localStorage.setItem("gp7",gp7);
        localStorage.setItem("gp8",gp8);localStorage.setItem("gp9",gp9);
        localStorage.setItem("gp10",gp10);localStorage.setItem("gp11",gp11);

        localStorage.setItem("gr1",gra.toUpperCase()); localStorage.setItem("gr2",grb.toUpperCase()); 
        localStorage.setItem("gr3",grc.toUpperCase()); 
        localStorage.setItem("gr4",grd.toUpperCase()); localStorage.setItem("gr5",gre.toUpperCase());
        localStorage.setItem("gr6",grf.toUpperCase()); localStorage.setItem("gr7",grg.toUpperCase());
        localStorage.setItem("gr8",grh.toUpperCase());localStorage.setItem("gr9",gri.toUpperCase());
        localStorage.setItem("gr10",grj.toUpperCase());localStorage.setItem("gr11",grk.toUpperCase());      
}
function sub(){
    a = document.getElementById("surname").value;
    b = document.getElementById("name").value;
    localStorage.setItem("SURNAME",a);
    localStorage.setItem("NAME",b);
}

function result(){
    var a,b,c,d,e,f,g,h,i,j,k,total_gp;
    a = gp1.innerHTML = localStorage.getItem("gp1");
    b = gp2.innerHTML = localStorage.getItem("gp2");
    c = gp3.innerHTML = localStorage.getItem("gp3");
    d = gp4.innerHTML = localStorage.getItem("gp4");
    e = gp5.innerHTML = localStorage.getItem("gp5");
    f = gp6.innerHTML = localStorage.getItem("gp6");
    g = gp7.innerHTML = localStorage.getItem("gp7");
    h = gp8.innerHTML = localStorage.getItem("gp8");
    i = gp9.innerHTML = localStorage.getItem("gp9");
    j = gp10.innerHTML = localStorage.getItem("gp10");
    k = gp11.innerHTML = localStorage.getItem("gp11");

     gr1.innerHTML = localStorage.getItem("gr1");
     gr2.innerHTML = localStorage.getItem("gr2");
     gr3.innerHTML = localStorage.getItem("gr3");
     gr4.innerHTML = localStorage.getItem("gr4");
     gr5.innerHTML = localStorage.getItem("gr5");
     gr6.innerHTML = localStorage.getItem("gr6");
     gr7.innerHTML = localStorage.getItem("gr7");
     gr8.innerHTML = localStorage.getItem("gr8");
     gr9.innerHTML = localStorage.getItem("gr9");
     gr10.innerHTML = localStorage.getItem("gr10");
     gr11.innerHTML = localStorage.getItem("gr11");

    
    ft1.style.width = a*50+'px';ft2.style.width = b*50+'px';
    ft3.style.width = c*50+'px';ft4.style.width = d*50+'px';
    ft5.style.width = e*50+'px';ft6.style.width = f*50+'px';
    ft7.style.width = g*50+'px';ft8.style.width = h*50+'px';
    ft9.style.width = i*50+'px';ft10.style.width = j*50+'px';
    ft11.style.width = k*50+'px';

    var per,per2,mgr,foot33;
    foot33 = foot3.innerHTML = localStorage.getItem("Total_gpa");
    per = foot33*25;
    localStorage.setItem("per2",per);
    per2 = foot1.innerHTML = parseInt(per)+'%';
    
    
    if (foot33 >= 4) {
        mgr = 'a'
    }
    if (foot33 >= 3.5 &&  foot33 < 4) {
         mgr= 'ab'
    }
    if (foot33 >= 3.25 &&  foot33 < 3.5) {
        mgr= 'b'
    }
    if (foot33 >= 3.0 &&  foot33 < 3.25) {
        mgr= 'bc'
    }
    if (foot33 >= 2.75 &&  foot33 < 3.0) {
        mgr= 'c'
    }
    if (foot33 >= 2.50 &&  foot33 < 2.75) {
        mgr= 'cd'
    }
    if (foot33 >= 2.25 &&  foot33 < 2.50) {
        mgr= 'd'
    }
    if (foot33 >= 2.0 &&  foot33 < 2.25) {
        mgr= 'e'
    }
    if (foot33 >= 1.50 &&  foot33 < 2.0) {
        mgr= 'f1'
    }
    if (foot33 >= 1.00 &&  foot33 < 1.50) {
        mgr= 'f2'
    }
    if (foot33 >= 0.00 &&  foot33 < 1) {
        mgr= 'f3'

}  
foot2.innerHTML = mgr.toUpperCase();
}
function main_result(){
    inner1.innerHTML = localStorage.getItem("Total_gpa");
    inner2.innerHTML = parseInt(localStorage.getItem("per2"))+'%';
    cn.innerHTML = "11";
    var a = localStorage.getItem("SURNAME");
    var b = localStorage.getItem("NAME");
    var c = a + " " + b;
    document.getElementById("user_name").innerHTML = c.toUpperCase();
}

function myfunc3(){
    var a, b, c, d,e,l;
    a = localStorage.getItem("SURNAME");
    b = localStorage.getItem("NAME");
    c = localStorage.getItem("Total_gpa");
    d = localStorage.getItem("per2");
    if (a == ' ' && b == ' '){alert('null')}
    else{
    document.getElementById("surname").innerHTML = " "+ a.toUpperCase();
    document.getElementById("name").innerHTML = " "+ b.toUpperCase();
    if(c == null ){document.getElementById("mm").innerHTML = "Student GPA: <a href='input.html'>Pls input scores first</a>";
                  document.getElementById("nn").innerHTML = "Student Percentage: <a href='input.html'>Pls input scores first</a>";}
    else{
    document.getElementById("gpa").innerHTML = " "+ c;
    document.getElementById("per").innerHTML = " "+ d+"%"; 
}}}
function reset3(){
    alert("Rest Completed")
    localStorage.removeItem("SURNAME");
    localStorage.removeItem("NAME");
    localStorage.removeItem("Total_gpa");
    localStorage.removeItem("per2");
}

   



