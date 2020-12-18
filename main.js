
//check OOA and set amount to 0...I hope
function setToZero() {
     if (document.getElementById('ooa25').checked){
         document.getElementById('amount1').value = "";
         add();
     }
     if (document.getElementById('ooa26').checked){
        document.getElementById('amount2').value = "";
        add();
    }
    if (document.getElementById('ooa27').checked){
        document.getElementById('amount3').value = "";
        add();
    }
    if (document.getElementById('ooa28').checked){
        document.getElementById('amount4').value = "";
        add();
    }
    if (document.getElementById('ooa29').checked){
        document.getElementById('amount5').value = "";
        add();
    }
    if (document.getElementById('ooa30').checked){
        document.getElementById('amount6').value = "";
        add();
    }
    if (document.getElementById('ooa31').checked){
        document.getElementById('amount7').value = "";
        add();
    }
    if (document.getElementById('ooa32').checked){
        document.getElementById('amount8').value = "";
        add();
    }
    if (document.getElementById('ooa33').checked){
        document.getElementById('amount9').value = "";
        add();
    }
    if (document.getElementById('ooa34').checked){
        document.getElementById('amount10').value = "";
        add();
    }
    if (document.getElementById('ooa35').checked){
        document.getElementById('amount11').value = "";
        add();
    }
    if (document.getElementById('ooa36').checked){
        document.getElementById('amount12').value = "";
        add();
    }
    if (document.getElementById('ooa37').checked){
        document.getElementById('amount13').value = "";
        add();
    }
    if (document.getElementById('ooa38').checked){
        document.getElementById('amount14').value = "";
        add();
    }
    if (document.getElementById('ooa39').checked){
        document.getElementById('amount15').value = "";
        add();
    }
    if (document.getElementById('ooa40').checked){
        document.getElementById('amount16').value = "";
        add();
    }
    if (document.getElementById('ooa41').checked){
        document.getElementById('amount17').value = "";
        add();
    }
    if (document.getElementById('ooa42').checked){
        document.getElementById('amount18').value = "";
        add();
    }
    if (document.getElementById('ooa43').checked){
        document.getElementById('amount19').value = "";
        add();
    }
    if (document.getElementById('ooa44').checked){
        document.getElementById('amount20').value = "";
        add();
    }
    if (document.getElementById('ooa45').checked){
        document.getElementById('amount21').value = "";
        add();
    }
    if (document.getElementById('ooa46').checked){
        document.getElementById('amount22').value = "";
        add();
    }
    if (document.getElementById('ooa47').checked){
        document.getElementById('amount23').value = "";
        add();
    }
    if (document.getElementById('ooa48').checked){
        document.getElementById('amount24').value = "";
        add();
    }
}
//bills math
    function add() {
        //var amount1, amount2;

        amount1 = parseInt(document.getElementById('amount1').value);
        if (isNaN(amount1) == true) {
            amount1 = 0;
        }
        amount2 = parseInt(document.getElementById('amount2').value);
        if (isNaN(amount2) == true) {
            amount2 = 0;
        }
        amount3 = parseInt(document.getElementById('amount3').value);
        if (isNaN(amount3) == true) {
            amount3 = 0;
        }
        amount4 = parseInt(document.getElementById('amount4').value);
        if (isNaN(amount4) == true) {
            amount4 = 0;
        }
        amount5 = parseInt(document.getElementById('amount5').value);
        if (isNaN(amount5) == true) {
            amount5 = 0;
        }
        amount6 = parseInt(document.getElementById('amount6').value);
        if (isNaN(amount6) == true) {
            amount6 = 0;
        }
        amount7 = parseInt(document.getElementById('amount7').value);
        if (isNaN(amount7) == true) {
            amount7 = 0;
        }
        amount8 = parseInt(document.getElementById('amount8').value);
        if (isNaN(amount8) == true) {
            amount8 = 0;
        }
        amount9 = parseInt(document.getElementById('amount9').value);
        if (isNaN(amount9) == true) {
            amount9 = 0;
        }
        amount10 = parseInt(document.getElementById('amount10').value);
        if (isNaN(amount10) == true) {
            amount10 = 0;
        }
        amount11 = parseInt(document.getElementById('amount11').value);
        if (isNaN(amount11) == true) {
            amount11 = 0;
        }
        amount12 = parseInt(document.getElementById('amount12').value);
        if (isNaN(amount12) == true) {
            amount12 = 0;
        }
        amount13 = parseInt(document.getElementById('amount13').value);
        if (isNaN(amount13) == true) {
            amount13 = 0;
        }
        amount14 = parseInt(document.getElementById('amount14').value);
        if (isNaN(amount14) == true) {
            amount14 = 0;
        }
        amount15 = parseInt(document.getElementById('amount15').value);
        if (isNaN(amount15) == true) {
            amount15 = 0;
        }
        amount16 = parseInt(document.getElementById('amount16').value);
        if (isNaN(amount16) == true) {
            amount16 = 0;
        }
        amount17 = parseInt(document.getElementById('amount17').value);
        if (isNaN(amount17) == true) {
            amount17 = 0;
        }
        amount18 = parseInt(document.getElementById('amount18').value);
        if (isNaN(amount18) == true) {
            amount18 = 0;
        }
        amount19 = parseInt(document.getElementById('amount19').value);
        if (isNaN(amount19) == true) {
            amount19 = 0;
        }
        amount20 = parseInt(document.getElementById('amount20').value);
        if (isNaN(amount20) == true) {
            amount20 = 0;
        }
        amount21 = parseInt(document.getElementById('amount21').value);
        if (isNaN(amount21) == true) {
            amount21 = 0;
        }
        amount22 = parseInt(document.getElementById('amount22').value);
        if (isNaN(amount22) == true) {
            amount22 = 0;
        }
        amount23 = parseInt(document.getElementById('amount23').value);
        if (isNaN(amount23) == true) {
            amount23 = 0;
        }
        amount24 = parseInt(document.getElementById('amount24').value);
        if (isNaN(amount24) == true) {
            amount24 = 0;
        }
        document.getElementById('billsOneTotal').value = amount1+amount2+amount3
        +amount4+amount5+amount6+amount7+amount8+amount9+amount10+amount11;
        document.getElementById('billsTwoTotal').value = amount12+amount13
        +amount14+amount15+amount16+amount17+amount18+amount19+amount20+amount21+amount22+amount23+amount24;
    }

//save checkbox status
function save() {
    //paid checkboxes
        var checkbox1 = document.getElementById("paid1");
        localStorage.setItem("paid1", checkbox1.checked);
        var checkbox2 = document.getElementById("paid2");
        localStorage.setItem("paid2", checkbox2.checked);
        var checkbox3 = document.getElementById("paid3");
        localStorage.setItem("paid3", checkbox3.checked);
        var checkbox4 = document.getElementById("paid4");
        localStorage.setItem("paid4", checkbox4.checked);
        var checkbox5 = document.getElementById("paid5");
        localStorage.setItem("paid5", checkbox5.checked);
        var checkbox6 = document.getElementById("paid6");
        localStorage.setItem("paid6", checkbox6.checked);
        var checkbox7 = document.getElementById("paid7");
        localStorage.setItem("paid7", checkbox7.checked);
        var checkbox8 = document.getElementById("paid8");
        localStorage.setItem("paid8", checkbox8.checked);
        var checkbox9 = document.getElementById("paid9");
        localStorage.setItem("paid9", checkbox9.checked);
        var checkbox10 = document.getElementById("paid10");
        localStorage.setItem("paid10", checkbox10.checked);
        var checkbox11 = document.getElementById("paid11");
        localStorage.setItem("paid11", checkbox11.checked);
        var checkbox12 = document.getElementById("paid12");
        localStorage.setItem("paid12", checkbox12.checked);
        var checkbox13 = document.getElementById("paid13");
        localStorage.setItem("paid13", checkbox13.checked);
        var checkbox14 = document.getElementById("paid14");
        localStorage.setItem("paid14", checkbox14.checked);
        var checkbox15 = document.getElementById("paid15");
        localStorage.setItem("paid15", checkbox15.checked);
        var checkbox16 = document.getElementById("paid16");
        localStorage.setItem("paid16", checkbox16.checked);
        var checkbox17 = document.getElementById("paid17");
        localStorage.setItem("paid17", checkbox17.checked);
        var checkbox18 = document.getElementById("paid18");
        localStorage.setItem("paid18", checkbox18.checked);
        var checkbox19 = document.getElementById("paid19");
        localStorage.setItem("paid19", checkbox19.checked);
        var checkbox20 = document.getElementById("paid20");
        localStorage.setItem("paid20", checkbox20.checked);
        var checkbox21 = document.getElementById("paid21");
        localStorage.setItem("paid21", checkbox21.checked);
        var checkbox22 = document.getElementById("paid22");
        localStorage.setItem("paid22", checkbox22.checked);
        var checkbox23 = document.getElementById("paid23");
        localStorage.setItem("paid23", checkbox23.checked);
        var checkbox24 = document.getElementById("paid24");
        localStorage.setItem("paid24", checkbox24.checked);
    //Out of Account checkboxes
        var checkbox25 = document.getElementById("ooa25");
        localStorage.setItem("ooa25", checkbox25.checked);
        var checkbox26 = document.getElementById("ooa26");
        localStorage.setItem("ooa26", checkbox26.checked);
        var checkbox27 = document.getElementById("ooa27");
        localStorage.setItem("ooa27", checkbox27.checked);
        var checkbox28 = document.getElementById("ooa28");
        localStorage.setItem("ooa28", checkbox28.checked);
        var checkbox29 = document.getElementById("ooa29");
        localStorage.setItem("ooa29", checkbox29.checked);
        var checkbox30 = document.getElementById("ooa30");
        localStorage.setItem("ooa30", checkbox30.checked);
        var checkbox31 = document.getElementById("ooa31");
        localStorage.setItem("ooa31", checkbox31.checked);
        var checkbox32 = document.getElementById("ooa32");
        localStorage.setItem("ooa32", checkbox32.checked);
        var checkbox33 = document.getElementById("ooa33");
        localStorage.setItem("ooa33", checkbox33.checked);
        var checkbox34 = document.getElementById("ooa34");
        localStorage.setItem("ooa34", checkbox34.checked);
        var checkbox35 = document.getElementById("ooa35");
        localStorage.setItem("ooa35", checkbox35.checked);
        var checkbox36 = document.getElementById("ooa36");
        localStorage.setItem("ooa36", checkbox36.checked);
        var checkbox37 = document.getElementById("ooa37");
        localStorage.setItem("ooa37", checkbox37.checked);
        var checkbox38 = document.getElementById("ooa38");
        localStorage.setItem("ooa38", checkbox38.checked);
        var checkbox39 = document.getElementById("ooa39");
        localStorage.setItem("ooa39", checkbox39.checked);
        var checkbox40 = document.getElementById("ooa40");
        localStorage.setItem("ooa40", checkbox40.checked);
        var checkbox41 = document.getElementById("ooa41");
        localStorage.setItem("ooa41", checkbox41.checked);
        var checkbox42 = document.getElementById("ooa42");
        localStorage.setItem("ooa42", checkbox42.checked);
        var checkbox43 = document.getElementById("ooa43");
        localStorage.setItem("ooa43", checkbox43.checked);
        var checkbox44 = document.getElementById("ooa44");
        localStorage.setItem("ooa44", checkbox44.checked);
        var checkbox45 = document.getElementById("ooa45");
        localStorage.setItem("ooa45", checkbox45.checked);
        var checkbox46 = document.getElementById("ooa46");
        localStorage.setItem("ooa46", checkbox46.checked);
        var checkbox47 = document.getElementById("ooa47");
        localStorage.setItem("ooa47", checkbox47.checked);
        var checkbox48 = document.getElementById("ooa48");
        localStorage.setItem("ooa48", checkbox48.checked);
        //save dates
        var dateBox1 = document.getElementById("date1");
        localStorage["date1"] = dateBox1.value;
        var dateBox2 = document.getElementById("date2");
        localStorage["date2"] = dateBox2.value;
        var dateBox3 = document.getElementById("date3");
        localStorage["date3"] = dateBox3.value;
        var dateBox4 = document.getElementById("date4");
        localStorage["date4"] = dateBox4.value;
        var dateBox5 = document.getElementById("date5");
        localStorage["date5"] = dateBox5.value;
        var dateBox6 = document.getElementById("date6");
        localStorage["date6"] = dateBox6.value;
        var dateBox7 = document.getElementById("date7");
        localStorage["date7"] = dateBox7.value;
        var dateBox8 = document.getElementById("date8");
        localStorage["date8"] = dateBox8.value;
        var dateBox9 = document.getElementById("date9");
        localStorage["date9"] = dateBox9.value;
        var dateBox10 = document.getElementById("date10");
        localStorage["date10"] = dateBox10.value;
        var dateBox11 = document.getElementById("date11");
        localStorage["date11"] = dateBox11.value;
        var dateBox12 = document.getElementById("date12");
        localStorage["date12"] = dateBox12.value;
        var dateBox13 = document.getElementById("date13");
        localStorage["date13"] = dateBox13.value;
        var dateBox14 = document.getElementById("date14");
        localStorage["date14"] = dateBox14.value;
        var dateBox15 = document.getElementById("date15");
        localStorage["date15"] = dateBox15.value;
        var dateBox16 = document.getElementById("date16");
        localStorage["date16"] = dateBox16.value;
        var dateBox17 = document.getElementById("date17");
        localStorage["date17"] = dateBox17.value;
        var dateBox18 = document.getElementById("date18");
        localStorage["date18"] = dateBox18.value;
        var dateBox19 = document.getElementById("date19");
        localStorage["date19"] = dateBox19.value;
        var dateBox20 = document.getElementById("date20");
        localStorage["date20"] = dateBox20.value;
        var dateBox21 = document.getElementById("date21");
        localStorage["date21"] = dateBox21.value;
        var dateBox22 = document.getElementById("date22");
        localStorage["date22"] = dateBox22.value;
        var dateBox23 = document.getElementById("date23");
        localStorage["date23"] = dateBox23.value;
        var dateBox24 = document.getElementById("date24");
        localStorage["date24"] = dateBox24.value;
        //save notes to localstorage
        var noteBox1 = document.getElementById("notes1");
        localStorage["notes1"] = noteBox1.value;
        var noteBox2 = document.getElementById("notes2");
        localStorage["notes2"] = noteBox2.value;
        //save amounts to local storage
        var amtBox1 = document.getElementById("amount1");
        localStorage["amount1"] = amtBox1.value;
        var amtBox2 = document.getElementById("amount2");
        localStorage["amount2"] = amtBox2.value;
        var amtBox3 = document.getElementById("amount3");
        localStorage["amount3"] = amtBox3.value;
        var amtBox4 = document.getElementById("amount4");
        localStorage["amount4"] = amtBox4.value;
        var amtBox5 = document.getElementById("amount5");
        localStorage["amount5"] = amtBox5.value;
        var amtBox6 = document.getElementById("amount6");
        localStorage["amount6"] = amtBox6.value;
        var amtBox7 = document.getElementById("amount7");
        localStorage["amount7"] = amtBox7.value;
        var amtBox8 = document.getElementById("amount8");
        localStorage["amount8"] = amtBox8.value;
        var amtBox9 = document.getElementById("amount9");
        localStorage["amount9"] = amtBox9.value;
        var amtBox10 = document.getElementById("amount10");
        localStorage["amount10"] = amtBox10.value;
        var amtBox11 = document.getElementById("amount11");
        localStorage["amount11"] = amtBox11.value;
        var totalBox1 = document.getElementById("billsOneTotal");
        localStorage["billsOneTotal"] = totalBox1.value;
        var amtBox12 = document.getElementById("amount12");
        localStorage["amount12"] = amtBox12.value;
        var amtBox13 = document.getElementById("amount13");
        localStorage["amount13"] = amtBox13.value;
        var amtBox14 = document.getElementById("amount14");
        localStorage["amount14"] = amtBox14.value;
        var amtBox15 = document.getElementById("amount15");
        localStorage["amount15"] = amtBox15.value;
        var amtBox16 = document.getElementById("amount16");
        localStorage["amount16"] = amtBox16.value;
        var amtBox17 = document.getElementById("amount17");
        localStorage["amount17"] = amtBox17.value;
        var amtBox18 = document.getElementById("amount18");
        localStorage["amount18"] = amtBox18.value;
        var amtBox19 = document.getElementById("amount19");
        localStorage["amount19"] = amtBox19.value;
        var amtBox20 = document.getElementById("amount20");
        localStorage["amount20"] = amtBox20.value;
        var amtBox21 = document.getElementById("amount21");
        localStorage["amount21"] = amtBox21.value;
        var amtBox22 = document.getElementById("amount22");
        localStorage["amount22"] = amtBox22.value;
        var amtBox23 = document.getElementById("amount23");
        localStorage["amount23"] = amtBox23.value;
        var amtBox24 = document.getElementById("amount24");
        localStorage["amount24"] = amtBox24.value;
        var totalBox2 = document.getElementById("billsTwoTotal");
        localStorage["billsTwoTotal"] = totalBox2.value;
        var monthBox1 = document.getElementById("month1");
        localStorage["month1"] = monthBox1.value;
}
// load it back up when refreshed or reopened
//paid checkboxes
    var checked1 = JSON.parse(localStorage.getItem("paid1"));
    document.getElementById("paid1").checked = checked1;
    var checked2 = JSON.parse(localStorage.getItem("paid2"));
    document.getElementById("paid2").checked = checked2;
    var checked3 = JSON.parse(localStorage.getItem("paid3"));
    document.getElementById("paid3").checked = checked3;
    var checked4 = JSON.parse(localStorage.getItem("paid4"));
    document.getElementById("paid4").checked = checked4;
    var checked5 = JSON.parse(localStorage.getItem("paid5"));
    document.getElementById("paid5").checked = checked5;
    var checked6 = JSON.parse(localStorage.getItem("paid6"));
    document.getElementById("paid6").checked = checked6;
    var checked7 = JSON.parse(localStorage.getItem("paid7"));
    document.getElementById("paid7").checked = checked7;
    var checked8 = JSON.parse(localStorage.getItem("paid8"));
    document.getElementById("paid8").checked = checked8;
    var checked9 = JSON.parse(localStorage.getItem("paid9"));
    document.getElementById("paid9").checked = checked9;
    var checked10 = JSON.parse(localStorage.getItem("paid10"));
    document.getElementById("paid10").checked = checked10;
    var checked11 = JSON.parse(localStorage.getItem("paid11"));
    document.getElementById("paid11").checked = checked11;
    var checked12 = JSON.parse(localStorage.getItem("paid12"));
    document.getElementById("paid12").checked = checked12;
    var checked13 = JSON.parse(localStorage.getItem("paid13"));
    document.getElementById("paid13").checked = checked13;
    var checked14 = JSON.parse(localStorage.getItem("paid14"));
    document.getElementById("paid14").checked = checked14;
    var checked15 = JSON.parse(localStorage.getItem("paid15"));
    document.getElementById("paid15").checked = checked15;
    var checked16 = JSON.parse(localStorage.getItem("paid16"));
    document.getElementById("paid16").checked = checked16;
    var checked17 = JSON.parse(localStorage.getItem("paid17"));
    document.getElementById("paid17").checked = checked17;
    var checked18 = JSON.parse(localStorage.getItem("paid18"));
    document.getElementById("paid18").checked = checked18;
    var checked19 = JSON.parse(localStorage.getItem("paid19"));
    document.getElementById("paid19").checked = checked19;
    var checked20 = JSON.parse(localStorage.getItem("paid20"));
    document.getElementById("paid20").checked = checked20;
    var checked21 = JSON.parse(localStorage.getItem("paid21"));
    document.getElementById("paid21").checked = checked21;
    var checked22 = JSON.parse(localStorage.getItem("paid22"));
    document.getElementById("paid22").checked = checked22;
    var checked23 = JSON.parse(localStorage.getItem("paid23"));
    document.getElementById("paid23").checked = checked23;
    var checked24 = JSON.parse(localStorage.getItem("paid24"));
    document.getElementById("paid24").checked = checked24;
    //Out of Account checkboxes
    var checked25 = JSON.parse(localStorage.getItem("ooa25"));
    document.getElementById("ooa25").checked = checked25;
    var checked26 = JSON.parse(localStorage.getItem("ooa26"));
    document.getElementById("ooa26").checked = checked26;
    var checked27 = JSON.parse(localStorage.getItem("ooa27"));
    document.getElementById("ooa27").checked = checked27;
    var checked28 = JSON.parse(localStorage.getItem("ooa28"));
    document.getElementById("ooa28").checked = checked28;
    var checked29 = JSON.parse(localStorage.getItem("ooa29"));
    document.getElementById("ooa29").checked = checked29;
    var checked30 = JSON.parse(localStorage.getItem("ooa30"));
    document.getElementById("ooa30").checked = checked30;
    var checked31 = JSON.parse(localStorage.getItem("ooa31"));
    document.getElementById("ooa31").checked = checked31;
    var checked32 = JSON.parse(localStorage.getItem("ooa32"));
    document.getElementById("ooa32").checked = checked32;
    var checked33 = JSON.parse(localStorage.getItem("ooa33"));
    document.getElementById("ooa33").checked = checked33;
    var checked34 = JSON.parse(localStorage.getItem("ooa34"));
    document.getElementById("ooa34").checked = checked34;
    var checked35 = JSON.parse(localStorage.getItem("ooa35"));
    document.getElementById("ooa35").checked = checked35;
    var checked36 = JSON.parse(localStorage.getItem("ooa36"));
    document.getElementById("ooa36").checked = checked36;
    var checked37 = JSON.parse(localStorage.getItem("ooa37"));
    document.getElementById("ooa37").checked = checked37;
    var checked38 = JSON.parse(localStorage.getItem("ooa38"));
    document.getElementById("ooa38").checked = checked38;
    var checked39 = JSON.parse(localStorage.getItem("ooa39"));
    document.getElementById("ooa39").checked = checked39;
    var checked40 = JSON.parse(localStorage.getItem("ooa40"));
    document.getElementById("ooa40").checked = checked40;
    var checked41 = JSON.parse(localStorage.getItem("ooa41"));
    document.getElementById("ooa41").checked = checked41;
    var checked42 = JSON.parse(localStorage.getItem("ooa42"));
    document.getElementById("ooa42").checked = checked42;
    var checked43 = JSON.parse(localStorage.getItem("ooa43"));
    document.getElementById("ooa43").checked = checked43;
    var checked44 = JSON.parse(localStorage.getItem("ooa44"));
    document.getElementById("ooa44").checked = checked44;
    var checked45 = JSON.parse(localStorage.getItem("ooa45"));
    document.getElementById("ooa45").checked = checked45;
    var checked46 = JSON.parse(localStorage.getItem("ooa46"));
    document.getElementById("ooa46").checked = checked46;
    var checked47 = JSON.parse(localStorage.getItem("ooa47"));
    document.getElementById("ooa47").checked = checked47;
    var checked48 = JSON.parse(localStorage.getItem("ooa48"));
    document.getElementById("ooa48").checked = checked48;
    //return dates from local
    var dateBox1 = document.getElementById("date1");
    var dateBox1Setting = localStorage["date1"];
    if (dateBox1Setting == null) {
        dateBox1.value = "";
    } else {
        dateBox1.value = dateBox1Setting;
    }
    var dateBox2 = document.getElementById("date2");
    var dateBox2Setting = localStorage["date2"];
    if (dateBox2Setting == null) {
        dateBox2.value = "";
    } else {
        dateBox2.value = dateBox2Setting;
    }
    var dateBox3 = document.getElementById("date3");
    var dateBox3Setting = localStorage["date3"];
    if (dateBox3Setting == null) {
        dateBox3.value = "";
    } else {
        dateBox3.value = dateBox3Setting;
    }
    var dateBox4 = document.getElementById("date4");
    var dateBox4Setting = localStorage["date4"];
    if (dateBox4Setting == null) {
        dateBox4.value = "";
    } else {
        dateBox4.value = dateBox4Setting;
    }
    var dateBox5 = document.getElementById("date5");
    var dateBox5Setting = localStorage["date5"];
    if (dateBox5Setting == null) {
        dateBox5.value = "";
    } else {
        dateBox5.value = dateBox5Setting;
    }
    var dateBox6 = document.getElementById("date6");
    var dateBox6Setting = localStorage["date6"];
    if (dateBox6Setting == null) {
        dateBox6.value = "";
    } else {
        dateBox6.value = dateBox6Setting;
    }
    var dateBox7 = document.getElementById("date7");
    var dateBox7Setting = localStorage["date7"];
    if (dateBox7Setting == null) {
        dateBox7.value = "";
    } else {
        dateBox7.value = dateBox7Setting;
    }
    var dateBox8 = document.getElementById("date8");
    var dateBox8Setting = localStorage["date8"];
    if (dateBox8Setting == null) {
        dateBox8.value = "";
    } else {
        dateBox8.value = dateBox8Setting;
    }
    var dateBox9 = document.getElementById("date9");
    var dateBox9Setting = localStorage["date9"];
    if (dateBox9Setting == null) {
        dateBox9.value = "";
    } else {
        dateBox9.value = dateBox9Setting;
    }
    var dateBox10 = document.getElementById("date10");
    var dateBox10Setting = localStorage["date10"];
    if (dateBox10Setting == null) {
        dateBox10.value = "";
    } else {
        dateBox10.value = dateBox10Setting;
    }
    var dateBox11 = document.getElementById("date11");
    var dateBox11Setting = localStorage["date11"];
    if (dateBox11Setting == null) {
        dateBox11.value = "";
    } else {
        dateBox11.value = dateBox11Setting;
    }
    var dateBox12 = document.getElementById("date12");
    var dateBox12Setting = localStorage["date12"];
    if (dateBox12Setting == null) {
        dateBox12.value = "";
    } else {
        dateBox12.value = dateBox12Setting;
    }
    var dateBox13 = document.getElementById("date13");
    var dateBox13Setting = localStorage["date13"];
    if (dateBox13Setting == null) {
        dateBox13.value = "";
    } else {
        dateBox13.value = dateBox13Setting;
    }
    var dateBox14 = document.getElementById("date14");
    var dateBox14Setting = localStorage["date14"];
    if (dateBox14Setting == null) {
        dateBox14.value = "";
    } else {
        dateBox14.value = dateBox14Setting;
    }
    var dateBox15 = document.getElementById("date15");
    var dateBox15Setting = localStorage["date15"];
    if (dateBox15Setting == null) {
        dateBox15.value = "";
    } else {
        dateBox15.value = dateBox15Setting;
    }
    var dateBox16 = document.getElementById("date16");
    var dateBox16Setting = localStorage["date16"];
    if (dateBox16Setting == null) {
        dateBox16.value = "";
    } else {
        dateBox16.value = dateBox16Setting;
    }
    var dateBox17 = document.getElementById("date17");
    var dateBox17Setting = localStorage["date17"];
    if (dateBox17Setting == null) {
        dateBox17.value = "";
    } else {
        dateBox17.value = dateBox17Setting;
    }
    var dateBox18 = document.getElementById("date18");
    var dateBox18Setting = localStorage["date18"];
    if (dateBox18Setting == null) {
        dateBox18.value = "";
    } else {
        dateBox18.value = dateBox18Setting;
    }
    var dateBox19 = document.getElementById("date19");
    var dateBox19Setting = localStorage["date19"];
    if (dateBox19Setting == null) {
        dateBox19.value = "";
    } else {
        dateBox19.value = dateBox19Setting;
    }
    var dateBox20 = document.getElementById("date20");
    var dateBox20Setting = localStorage["date20"];
    if (dateBox20Setting == null) {
        dateBox20.value = "";
    } else {
        dateBox20.value = dateBox20Setting;
    }
    var dateBox21 = document.getElementById("date21");
    var dateBox21Setting = localStorage["date21"];
    if (dateBox21Setting == null) {
        dateBox21.value = "";
    } else {
        dateBox21.value = dateBox21Setting;
    }
    var dateBox22 = document.getElementById("date22");
    var dateBox22Setting = localStorage["date22"];
    if (dateBox22Setting == null) {
        dateBox22.value = "";
    } else {
        dateBox22.value = dateBox22Setting;
    }
    var dateBox23 = document.getElementById("date23");
    var dateBox23Setting = localStorage["date23"];
    if (dateBox23Setting == null) {
        dateBox23.value = "";
    } else {
        dateBox23.value = dateBox23Setting;
    }
    var dateBox24 = document.getElementById("date24");
    var dateBox24Setting = localStorage["date24"];
    if (dateBox24Setting == null) {
        dateBox24.value = "";
    } else {
        dateBox24.value = dateBox24Setting;
    }
    //show saved notes when refreshed or reopened
    var noteBox1 = document.getElementById("notes1");
    var noteBox1Setting = localStorage["notes1"];
    if (noteBox1Setting == null) {
        noteBox1.value = "";
    } else {
        noteBox1.value = noteBox1Setting;
    }
    var noteBox2 = document.getElementById("notes2");
    var noteBox2Setting = localStorage["notes2"];
    if (noteBox2Setting == null) {
        noteBox2.value = "";
    } else {
        noteBox2.value = noteBox2Setting;
    }
    //show amounts when refreshed or reopened
    var amtBox1 = document.getElementById("amount1");
    var amtBox1Setting = localStorage["amount1"];
    if (amtBox1Setting == null) {
        amtBox1.value = "";
    } else {
        amtBox1.value = amtBox1Setting;
    }
    var amtBox2 = document.getElementById("amount2");
    var amtBox2Setting = localStorage["amount2"];
    if (amtBox2Setting == null) {
        amtBox2.value = "";
    } else {
        amtBox2.value = amtBox2Setting;
    }
    var amtBox3 = document.getElementById("amount3");
    var amtBox3Setting = localStorage["amount3"];
    if (amtBox3Setting == null) {
        amtBox3.value = "";
    } else {
        amtBox3.value = amtBox3Setting;
    }
    var amtBox4 = document.getElementById("amount4");
    var amtBox4Setting = localStorage["amount4"];
    if (amtBox4Setting == null) {
        amtBox4.value = "";
    } else {
        amtBox4.value = amtBox4Setting;
    }
    var amtBox5 = document.getElementById("amount5");
    var amtBox5Setting = localStorage["amount5"];
    if (amtBox5Setting == null) {
        amtBox5.value = "";
    } else {
        amtBox5.value = amtBox5Setting;
    }
    var amtBox6 = document.getElementById("amount6");
    var amtBox6Setting = localStorage["amount6"];
    if (amtBox6Setting == null) {
        amtBox6.value = "";
    } else {
        amtBox6.value = amtBox6Setting;
    }
    var amtBox7 = document.getElementById("amount7");
    var amtBox7Setting = localStorage["amount7"];
    if (amtBox7Setting == null) {
        amtBox7.value = "";
    } else {
        amtBox7.value = amtBox7Setting;
    }
    var amtBox8 = document.getElementById("amount8");
    var amtBox8Setting = localStorage["amount8"];
    if (amtBox8Setting == null) {
        amtBox8.value = "";
    } else {
        amtBox8.value = amtBox8Setting;
    }
    var amtBox9 = document.getElementById("amount9");
    var amtBox9Setting = localStorage["amount9"];
    if (amtBox9Setting == null) {
        amtBox9.value = "";
    } else {
        amtBox9.value = amtBox9Setting;
    }
    var amtBox10 = document.getElementById("amount10");
    var amtBox10Setting = localStorage["amount10"];
    if (amtBox10Setting == null) {
        amtBox10.value = "";
    } else {
        amtBox10.value = amtBox10Setting;
    }
    var amtBox11 = document.getElementById("amount11");
    var amtBox11Setting = localStorage["amount11"];
    if (amtBox11Setting == null) {
        amtBox11.value = "";
    } else {
        amtBox11.value = amtBox11Setting;
    }
    var totalBox1 = document.getElementById("billsOneTotal");
    var totalBox1Setting = localStorage["billsOneTotal"];
    if (totalBox1Setting == null) {
        totalBox1.value = "";
    } else {
        totalBox1.value = totalBox1Setting;
    }   
    var amtBox12 = document.getElementById("amount12");
    var amtBox12Setting = localStorage["amount12"];
    if (amtBox12Setting == null) {
        amtBox12.value = "";
    } else {
        amtBox12.value = amtBox12Setting;
    }
    var amtBox13 = document.getElementById("amount13");
    var amtBox13Setting = localStorage["amount13"];
    if (amtBox13Setting == null) {
        amtBox13.value = "";
    } else {
        amtBox13.value = amtBox13Setting;
    }
    var amtBox14 = document.getElementById("amount14");
    var amtBox14Setting = localStorage["amount14"];
    if (amtBox14Setting == null) {
        amtBox14.value = "";
    } else {
        amtBox14.value = amtBox14Setting;
    }
    var amtBox15 = document.getElementById("amount15");
    var amtBox15Setting = localStorage["amount15"];
    if (amtBox15Setting == null) {
        amtBox15.value = "";
    } else {
        amtBox15.value = amtBox15Setting;
    }
    var amtBox16 = document.getElementById("amount16");
    var amtBox16Setting = localStorage["amount16"];
    if (amtBox16Setting == null) {
        amtBox16.value = "";
    } else {
        amtBox16.value = amtBox16Setting;
    }
    var amtBox17 = document.getElementById("amount17");
    var amtBox17Setting = localStorage["amount17"];
    if (amtBox17Setting == null) {
        amtBox17.value = "";
    } else {
        amtBox17.value = amtBox17Setting;
    }
    var amtBox18 = document.getElementById("amount18");
    var amtBox18Setting = localStorage["amount18"];
    if (amtBox18Setting == null) {
        amtBox18.value = "";
    } else {
        amtBox18.value = amtBox18Setting;
    }
    var amtBox19 = document.getElementById("amount19");
    var amtBox19Setting = localStorage["amount19"];
    if (amtBox19Setting == null) {
        amtBox19.value = "";
    } else {
        amtBox19.value = amtBox19Setting;
    }
    var amtBox20 = document.getElementById("amount20");
    var amtBox20Setting = localStorage["amount20"];
    if (amtBox20Setting == null) {
        amtBox20.value = "";
    } else {
        amtBox20.value = amtBox20Setting;
    }
    var amtBox21 = document.getElementById("amount21");
    var amtBox21Setting = localStorage["amount21"];
    if (amtBox21Setting == null) {
        amtBox21.value = "";
    } else {
        amtBox21.value = amtBox21Setting;
    }
    var amtBox22 = document.getElementById("amount22");
    var amtBox22Setting = localStorage["amount22"];
    if (amtBox22Setting == null) {
        amtBox22.value = "";
    } else {
        amtBox22.value = amtBox22Setting;
    }
    var amtBox23 = document.getElementById("amount23");
    var amtBox23Setting = localStorage["amount23"];
    if (amtBox23Setting == null) {
        amtBox23.value = "";
    } else {
        amtBox23.value = amtBox23Setting;
    }
    var amtBox24 = document.getElementById("amount24");
    var amtBox24Setting = localStorage["amount24"];
    if (amtBox24Setting == null) {
        amtBox24.value = "";
    } else {
        amtBox24.value = amtBox24Setting;
    }
    var totalBox2 = document.getElementById("billsTwoTotal");
    var totalBox2Setting = localStorage["billsTwoTotal"];
    if (totalBox2Setting == null) {
        totalBox2.value = "";
    } else {
        totalBox2.value = totalBox2Setting;
    }
    var monthBox1 = document.getElementById("month1");
    var monthBox1Setting = localStorage["month1"];
    if (monthBox1Setting == null) {
        monthBox1.value = "";
    } else {
        monthBox1.value = monthBox1Setting;
    }
