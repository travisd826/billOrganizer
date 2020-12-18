
//check OOA and set amount to 0...I hope
function setToZero() {
     if (document.getElementById('ooa49').checked){
         document.getElementById('amount25').value = "";
         add();
     }
     if (document.getElementById('ooa50').checked){
        document.getElementById('amount26').value = "";
        add();
    }
    if (document.getElementById('ooa51').checked){
        document.getElementById('amount27').value = "";
        add();
    }
    if (document.getElementById('ooa52').checked){
        document.getElementById('amount28').value = "";
        add();
    }
    if (document.getElementById('ooa53').checked){
        document.getElementById('amount29').value = "";
        add();
    }
    if (document.getElementById('ooa54').checked){
        document.getElementById('amount30').value = "";
        add();
    }
    if (document.getElementById('ooa55').checked){
        document.getElementById('amount31').value = "";
        add();
    }
    if (document.getElementById('ooa56').checked){
        document.getElementById('amount32').value = "";
        add();
    }
    if (document.getElementById('ooa57').checked){
        document.getElementById('amount33').value = "";
        add();
    }
    if (document.getElementById('ooa58').checked){
        document.getElementById('amount34').value = "";
        add();
    }
    if (document.getElementById('ooa59').checked){
        document.getElementById('amount35').value = "";
        add();
    }
    if (document.getElementById('ooa60').checked){
        document.getElementById('amount36').value = "";
        add();
    }
    if (document.getElementById('ooa61').checked){
        document.getElementById('amount37').value = "";
        add();
    }
    if (document.getElementById('ooa62').checked){
        document.getElementById('amount38').value = "";
        add();
    }
    if (document.getElementById('ooa63').checked){
        document.getElementById('amount39').value = "";
        add();
    }
    if (document.getElementById('ooa64').checked){
        document.getElementById('amount40').value = "";
        add();
    }
    if (document.getElementById('ooa65').checked){
        document.getElementById('amount41').value = "";
        add();
    }
    if (document.getElementById('ooa66').checked){
        document.getElementById('amount42').value = "";
        add();
    }
    if (document.getElementById('ooa67').checked){
        document.getElementById('amount43').value = "";
        add();
    }
    if (document.getElementById('ooa68').checked){
        document.getElementById('amount44').value = "";
        add();
    }
    if (document.getElementById('ooa69').checked){
        document.getElementById('amount45').value = "";
        add();
    }
    if (document.getElementById('ooa70').checked){
        document.getElementById('amount46').value = "";
        add();
    }
    if (document.getElementById('ooa71').checked){
        document.getElementById('amount47').value = "";
        add();
    }
    if (document.getElementById('ooa72').checked){
        document.getElementById('amount48').value = "";
        add();
    }
}
//bills math
    function add() {
        //var amount25, amount26;

        amount25 = parseInt(document.getElementById('amount25').value);
        if (isNaN(amount25) == true) {
            amount25 = 0;
        }
        amount26 = parseInt(document.getElementById('amount26').value);
        if (isNaN(amount26) == true) {
            amount26 = 0;
        }
        amount27 = parseInt(document.getElementById('amount27').value);
        if (isNaN(amount27) == true) {
            amount27 = 0;
        }
        amount28 = parseInt(document.getElementById('amount28').value);
        if (isNaN(amount28) == true) {
            amount28 = 0;
        }
        amount29 = parseInt(document.getElementById('amount29').value);
        if (isNaN(amount29) == true) {
            amount29 = 0;
        }
        amount30 = parseInt(document.getElementById('amount30').value);
        if (isNaN(amount30) == true) {
            amount30 = 0;
        }
        amount31 = parseInt(document.getElementById('amount31').value);
        if (isNaN(amount31) == true) {
            amount31 = 0;
        }
        amount32 = parseInt(document.getElementById('amount32').value);
        if (isNaN(amount32) == true) {
            amount32 = 0;
        }
        amount33 = parseInt(document.getElementById('amount33').value);
        if (isNaN(amount33) == true) {
            amount33 = 0;
        }
        amount34 = parseInt(document.getElementById('amount34').value);
        if (isNaN(amount34) == true) {
            amount34 = 0;
        }
        amount35 = parseInt(document.getElementById('amount35').value);
        if (isNaN(amount35) == true) {
            amount35 = 0;
        }
        amount36 = parseInt(document.getElementById('amount36').value);
        if (isNaN(amount36) == true) {
            amount36 = 0;
        }
        amount37 = parseInt(document.getElementById('amount37').value);
        if (isNaN(amount37) == true) {
            amount37 = 0;
        }
        amount38 = parseInt(document.getElementById('amount38').value);
        if (isNaN(amount38) == true) {
            amount38 = 0;
        }
        amount39 = parseInt(document.getElementById('amount39').value);
        if (isNaN(amount39) == true) {
            amount39 = 0;
        }
        amount40 = parseInt(document.getElementById('amount40').value);
        if (isNaN(amount40) == true) {
            amount40 = 0;
        }
        amount41 = parseInt(document.getElementById('amount41').value);
        if (isNaN(amount41) == true) {
            amount41 = 0;
        }
        amount42 = parseInt(document.getElementById('amount42').value);
        if (isNaN(amount42) == true) {
            amount42 = 0;
        }
        amount43 = parseInt(document.getElementById('amount43').value);
        if (isNaN(amount43) == true) {
            amount43 = 0;
        }
        amount44 = parseInt(document.getElementById('amount44').value);
        if (isNaN(amount44) == true) {
            amount44 = 0;
        }
        amount45 = parseInt(document.getElementById('amount45').value);
        if (isNaN(amount45) == true) {
            amount45 = 0;
        }
        amount46 = parseInt(document.getElementById('amount46').value);
        if (isNaN(amount46) == true) {
            amount46 = 0;
        }
        amount47 = parseInt(document.getElementById('amount47').value);
        if (isNaN(amount47) == true) {
            amount47 = 0;
        }
        amount48 = parseInt(document.getElementById('amount48').value);
        if (isNaN(amount48) == true) {
            amount48 = 0;
        }
        document.getElementById('billsThreeTotal').value = amount25+amount26+amount27
        +amount28+amount29+amount30+amount31+amount32+amount33+amount34+amount35;
        document.getElementById('billsFourTotal').value = amount36+amount37
        +amount38+amount39+amount40+amount41+amount42+amount43+amount44+amount45+amount46+amount47+amount48;
    }

//save checkbox status
function save() {
    //paid checkboxes
        var checkbox1 = document.getElementById("paid25");
        localStorage.setItem("paid25", checkbox1.checked);
        var checkbox2 = document.getElementById("paid26");
        localStorage.setItem("paid26", checkbox2.checked);
        var checkbox3 = document.getElementById("paid27");
        localStorage.setItem("paid27", checkbox3.checked);
        var checkbox4 = document.getElementById("paid28");
        localStorage.setItem("paid28", checkbox4.checked);
        var checkbox5 = document.getElementById("paid29");
        localStorage.setItem("paid29", checkbox5.checked);
        var checkbox6 = document.getElementById("paid30");
        localStorage.setItem("paid30", checkbox6.checked);
        var checkbox7 = document.getElementById("paid31");
        localStorage.setItem("paid31", checkbox7.checked);
        var checkbox8 = document.getElementById("paid32");
        localStorage.setItem("paid32", checkbox8.checked);
        var checkbox9 = document.getElementById("paid33");
        localStorage.setItem("paid33", checkbox9.checked);
        var checkbox10 = document.getElementById("paid34");
        localStorage.setItem("paid34", checkbox10.checked);
        var checkbox11 = document.getElementById("paid35");
        localStorage.setItem("paid35", checkbox11.checked);
        var checkbox12 = document.getElementById("paid36");
        localStorage.setItem("paid36", checkbox12.checked);
        var checkbox13 = document.getElementById("paid37");
        localStorage.setItem("paid37", checkbox13.checked);
        var checkbox14 = document.getElementById("paid38");
        localStorage.setItem("paid38", checkbox14.checked);
        var checkbox15 = document.getElementById("paid39");
        localStorage.setItem("paid39", checkbox15.checked);
        var checkbox16 = document.getElementById("paid40");
        localStorage.setItem("paid40", checkbox16.checked);
        var checkbox17 = document.getElementById("paid41");
        localStorage.setItem("paid41", checkbox17.checked);
        var checkbox18 = document.getElementById("paid42");
        localStorage.setItem("paid42", checkbox18.checked);
        var checkbox19 = document.getElementById("paid43");
        localStorage.setItem("paid43", checkbox19.checked);
        var checkbox20 = document.getElementById("paid44");
        localStorage.setItem("paid44", checkbox20.checked);
        var checkbox21 = document.getElementById("paid45");
        localStorage.setItem("paid45", checkbox21.checked);
        var checkbox22 = document.getElementById("paid46");
        localStorage.setItem("paid46", checkbox22.checked);
        var checkbox23 = document.getElementById("paid47");
        localStorage.setItem("paid47", checkbox23.checked);
        var checkbox24 = document.getElementById("paid48");
        localStorage.setItem("paid48", checkbox24.checked);
    //Out of Account checkboxes
        var checkbox25 = document.getElementById("ooa49");
        localStorage.setItem("ooa49", checkbox25.checked);
        var checkbox26 = document.getElementById("ooa50");
        localStorage.setItem("ooa50", checkbox26.checked);
        var checkbox27 = document.getElementById("ooa51");
        localStorage.setItem("ooa51", checkbox27.checked);
        var checkbox28 = document.getElementById("ooa52");
        localStorage.setItem("ooa52", checkbox28.checked);
        var checkbox29 = document.getElementById("ooa53");
        localStorage.setItem("ooa53", checkbox29.checked);
        var checkbox30 = document.getElementById("ooa54");
        localStorage.setItem("ooa54", checkbox30.checked);
        var checkbox31 = document.getElementById("ooa55");
        localStorage.setItem("ooa55", checkbox31.checked);
        var checkbox32 = document.getElementById("ooa56");
        localStorage.setItem("ooa56", checkbox32.checked);
        var checkbox33 = document.getElementById("ooa57");
        localStorage.setItem("ooa57", checkbox33.checked);
        var checkbox34 = document.getElementById("ooa58");
        localStorage.setItem("ooa58", checkbox34.checked);
        var checkbox35 = document.getElementById("ooa59");
        localStorage.setItem("ooa59", checkbox35.checked);
        var checkbox36 = document.getElementById("ooa60");
        localStorage.setItem("ooa60", checkbox36.checked);
        var checkbox37 = document.getElementById("ooa61");
        localStorage.setItem("ooa61", checkbox37.checked);
        var checkbox38 = document.getElementById("ooa62");
        localStorage.setItem("ooa62", checkbox38.checked);
        var checkbox39 = document.getElementById("ooa63");
        localStorage.setItem("ooa63", checkbox39.checked);
        var checkbox40 = document.getElementById("ooa64");
        localStorage.setItem("ooa64", checkbox40.checked);
        var checkbox41 = document.getElementById("ooa65");
        localStorage.setItem("ooa65", checkbox41.checked);
        var checkbox42 = document.getElementById("ooa66");
        localStorage.setItem("ooa66", checkbox42.checked);
        var checkbox43 = document.getElementById("ooa67");
        localStorage.setItem("ooa67", checkbox43.checked);
        var checkbox44 = document.getElementById("ooa68");
        localStorage.setItem("ooa68", checkbox44.checked);
        var checkbox45 = document.getElementById("ooa69");
        localStorage.setItem("ooa69", checkbox45.checked);
        var checkbox46 = document.getElementById("ooa70");
        localStorage.setItem("ooa70", checkbox46.checked);
        var checkbox47 = document.getElementById("ooa71");
        localStorage.setItem("ooa71", checkbox47.checked);
        var checkbox48 = document.getElementById("ooa72");
        localStorage.setItem("ooa72", checkbox48.checked);
        //save dates
        var dateBox1 = document.getElementById("date25");
        localStorage["date25"] = dateBox1.value;
        var dateBox2 = document.getElementById("date26");
        localStorage["date26"] = dateBox2.value;
        var dateBox3 = document.getElementById("date27");
        localStorage["date27"] = dateBox3.value;
        var dateBox4 = document.getElementById("date28");
        localStorage["date28"] = dateBox4.value;
        var dateBox5 = document.getElementById("date29");
        localStorage["date29"] = dateBox5.value;
        var dateBox6 = document.getElementById("date30");
        localStorage["date30"] = dateBox6.value;
        var dateBox7 = document.getElementById("date31");
        localStorage["date31"] = dateBox7.value;
        var dateBox8 = document.getElementById("date32");
        localStorage["date32"] = dateBox8.value;
        var dateBox9 = document.getElementById("date33");
        localStorage["date33"] = dateBox9.value;
        var dateBox10 = document.getElementById("date34");
        localStorage["date34"] = dateBox10.value;
        var dateBox11 = document.getElementById("date35");
        localStorage["date35"] = dateBox11.value;
        var dateBox12 = document.getElementById("date36");
        localStorage["date36"] = dateBox12.value;
        var dateBox13 = document.getElementById("date37");
        localStorage["date37"] = dateBox13.value;
        var dateBox14 = document.getElementById("date38");
        localStorage["date38"] = dateBox14.value;
        var dateBox15 = document.getElementById("date39");
        localStorage["date39"] = dateBox15.value;
        var dateBox16 = document.getElementById("date40");
        localStorage["date40"] = dateBox16.value;
        var dateBox17 = document.getElementById("date41");
        localStorage["date41"] = dateBox17.value;
        var dateBox18 = document.getElementById("date42");
        localStorage["date42"] = dateBox18.value;
        var dateBox19 = document.getElementById("date43");
        localStorage["date43"] = dateBox19.value;
        var dateBox20 = document.getElementById("date44");
        localStorage["date44"] = dateBox20.value;
        var dateBox21 = document.getElementById("date45");
        localStorage["date45"] = dateBox21.value;
        var dateBox22 = document.getElementById("date46");
        localStorage["date46"] = dateBox22.value;
        var dateBox23 = document.getElementById("date47");
        localStorage["date47"] = dateBox23.value;
        var dateBox24 = document.getElementById("date48");
        localStorage["date48"] = dateBox24.value;
        //save notes to localstorage
        var noteBox1 = document.getElementById("notes3");
        localStorage["notes3"] = noteBox1.value;
        var noteBox2 = document.getElementById("notes4");
        localStorage["notes4"] = noteBox2.value;
        //save amounts to local storage
        var amtBox1 = document.getElementById("amount25");
        localStorage["amount25"] = amtBox1.value;
        var amtBox2 = document.getElementById("amount26");
        localStorage["amount26"] = amtBox2.value;
        var amtBox3 = document.getElementById("amount27");
        localStorage["amount27"] = amtBox3.value;
        var amtBox4 = document.getElementById("amount28");
        localStorage["amount28"] = amtBox4.value;
        var amtBox5 = document.getElementById("amount29");
        localStorage["amount29"] = amtBox5.value;
        var amtBox6 = document.getElementById("amount30");
        localStorage["amount30"] = amtBox6.value;
        var amtBox7 = document.getElementById("amount31");
        localStorage["amount31"] = amtBox7.value;
        var amtBox8 = document.getElementById("amount32");
        localStorage["amount32"] = amtBox8.value;
        var amtBox9 = document.getElementById("amount33");
        localStorage["amount33"] = amtBox9.value;
        var amtBox10 = document.getElementById("amount34");
        localStorage["amount34"] = amtBox10.value;
        var amtBox11 = document.getElementById("amount35");
        localStorage["amount35"] = amtBox11.value;
        var totalBox1 = document.getElementById("billsThreeTotal");
        localStorage["billsThreeTotal"] = totalBox1.value;
        var amtBox12 = document.getElementById("amount36");
        localStorage["amount36"] = amtBox12.value;
        var amtBox13 = document.getElementById("amount37");
        localStorage["amount37"] = amtBox13.value;
        var amtBox14 = document.getElementById("amount38");
        localStorage["amount38"] = amtBox14.value;
        var amtBox15 = document.getElementById("amount39");
        localStorage["amount39"] = amtBox15.value;
        var amtBox16 = document.getElementById("amount40");
        localStorage["amount40"] = amtBox16.value;
        var amtBox17 = document.getElementById("amount41");
        localStorage["amount41"] = amtBox17.value;
        var amtBox18 = document.getElementById("amount42");
        localStorage["amount42"] = amtBox18.value;
        var amtBox19 = document.getElementById("amount43");
        localStorage["amount43"] = amtBox19.value;
        var amtBox20 = document.getElementById("amount44");
        localStorage["amount44"] = amtBox20.value;
        var amtBox21 = document.getElementById("amount45");
        localStorage["amount45"] = amtBox21.value;
        var amtBox22 = document.getElementById("amount46");
        localStorage["amount46"] = amtBox22.value;
        var amtBox23 = document.getElementById("amount47");
        localStorage["amount47"] = amtBox23.value;
        var amtBox24 = document.getElementById("amount48");
        localStorage["amount48"] = amtBox24.value;
        var totalBox2 = document.getElementById("billsFourTotal");
        localStorage["billsFourTotal"] = totalBox2.value;
        var monthBox1 = document.getElementById("month2");
        localStorage["month2"] = monthBox1.value;
}
// load it back up when refreshed or reopened
//paid checkboxes
    var checked1 = JSON.parse(localStorage.getItem("paid25"));
    document.getElementById("paid25").checked = checked1;
    var checked2 = JSON.parse(localStorage.getItem("paid26"));
    document.getElementById("paid26").checked = checked2;
    var checked3 = JSON.parse(localStorage.getItem("paid27"));
    document.getElementById("paid27").checked = checked3;
    var checked4 = JSON.parse(localStorage.getItem("paid28"));
    document.getElementById("paid28").checked = checked4;
    var checked5 = JSON.parse(localStorage.getItem("paid29"));
    document.getElementById("paid29").checked = checked5;
    var checked6 = JSON.parse(localStorage.getItem("paid30"));
    document.getElementById("paid30").checked = checked6;
    var checked7 = JSON.parse(localStorage.getItem("paid31"));
    document.getElementById("paid31").checked = checked7;
    var checked8 = JSON.parse(localStorage.getItem("paid32"));
    document.getElementById("paid32").checked = checked8;
    var checked9 = JSON.parse(localStorage.getItem("paid33"));
    document.getElementById("paid33").checked = checked9;
    var checked10 = JSON.parse(localStorage.getItem("paid34"));
    document.getElementById("paid34").checked = checked10;
    var checked11 = JSON.parse(localStorage.getItem("paid35"));
    document.getElementById("paid35").checked = checked11;
    var checked12 = JSON.parse(localStorage.getItem("paid36"));
    document.getElementById("paid36").checked = checked12;
    var checked13 = JSON.parse(localStorage.getItem("paid37"));
    document.getElementById("paid37").checked = checked13;
    var checked14 = JSON.parse(localStorage.getItem("paid38"));
    document.getElementById("paid38").checked = checked14;
    var checked15 = JSON.parse(localStorage.getItem("paid39"));
    document.getElementById("paid39").checked = checked15;
    var checked16 = JSON.parse(localStorage.getItem("paid40"));
    document.getElementById("paid40").checked = checked16;
    var checked17 = JSON.parse(localStorage.getItem("paid41"));
    document.getElementById("paid41").checked = checked17;
    var checked18 = JSON.parse(localStorage.getItem("paid42"));
    document.getElementById("paid42").checked = checked18;
    var checked19 = JSON.parse(localStorage.getItem("paid43"));
    document.getElementById("paid43").checked = checked19;
    var checked20 = JSON.parse(localStorage.getItem("paid44"));
    document.getElementById("paid44").checked = checked20;
    var checked21 = JSON.parse(localStorage.getItem("paid45"));
    document.getElementById("paid45").checked = checked21;
    var checked22 = JSON.parse(localStorage.getItem("paid46"));
    document.getElementById("paid46").checked = checked22;
    var checked23 = JSON.parse(localStorage.getItem("paid47"));
    document.getElementById("paid47").checked = checked23;
    var checked24 = JSON.parse(localStorage.getItem("paid48"));
    document.getElementById("paid48").checked = checked24;
    //Out of Account checkboxes
    var checked25 = JSON.parse(localStorage.getItem("ooa49"));
    document.getElementById("ooa49").checked = checked25;
    var checked26 = JSON.parse(localStorage.getItem("ooa50"));
    document.getElementById("ooa50").checked = checked26;
    var checked27 = JSON.parse(localStorage.getItem("ooa51"));
    document.getElementById("ooa51").checked = checked27;
    var checked28 = JSON.parse(localStorage.getItem("ooa52"));
    document.getElementById("ooa52").checked = checked28;
    var checked29 = JSON.parse(localStorage.getItem("ooa53"));
    document.getElementById("ooa53").checked = checked29;
    var checked30 = JSON.parse(localStorage.getItem("ooa54"));
    document.getElementById("ooa54").checked = checked30;
    var checked31 = JSON.parse(localStorage.getItem("ooa55"));
    document.getElementById("ooa55").checked = checked31;
    var checked32 = JSON.parse(localStorage.getItem("ooa56"));
    document.getElementById("ooa56").checked = checked32;
    var checked33 = JSON.parse(localStorage.getItem("ooa57"));
    document.getElementById("ooa57").checked = checked33;
    var checked34 = JSON.parse(localStorage.getItem("ooa58"));
    document.getElementById("ooa58").checked = checked34;
    var checked35 = JSON.parse(localStorage.getItem("ooa59"));
    document.getElementById("ooa59").checked = checked35;
    var checked36 = JSON.parse(localStorage.getItem("ooa60"));
    document.getElementById("ooa60").checked = checked36;
    var checked37 = JSON.parse(localStorage.getItem("ooa61"));
    document.getElementById("ooa61").checked = checked37;
    var checked38 = JSON.parse(localStorage.getItem("ooa62"));
    document.getElementById("ooa62").checked = checked38;
    var checked39 = JSON.parse(localStorage.getItem("ooa63"));
    document.getElementById("ooa63").checked = checked39;
    var checked40 = JSON.parse(localStorage.getItem("ooa64"));
    document.getElementById("ooa64").checked = checked40;
    var checked41 = JSON.parse(localStorage.getItem("ooa65"));
    document.getElementById("ooa65").checked = checked41;
    var checked42 = JSON.parse(localStorage.getItem("ooa66"));
    document.getElementById("ooa66").checked = checked42;
    var checked43 = JSON.parse(localStorage.getItem("ooa67"));
    document.getElementById("ooa67").checked = checked43;
    var checked44 = JSON.parse(localStorage.getItem("ooa68"));
    document.getElementById("ooa68").checked = checked44;
    var checked45 = JSON.parse(localStorage.getItem("ooa69"));
    document.getElementById("ooa69").checked = checked45;
    var checked46 = JSON.parse(localStorage.getItem("ooa70"));
    document.getElementById("ooa70").checked = checked46;
    var checked47 = JSON.parse(localStorage.getItem("ooa71"));
    document.getElementById("ooa71").checked = checked47;
    var checked48 = JSON.parse(localStorage.getItem("ooa72"));
    document.getElementById("ooa72").checked = checked48;
    //return dates from local
    var dateBox1 = document.getElementById("date25");
    var dateBox1Setting = localStorage["date25"];
    if (dateBox1Setting == null) {
        dateBox1.value = "";
    } else {
        dateBox1.value = dateBox1Setting;
    }
    var dateBox2 = document.getElementById("date26");
    var dateBox2Setting = localStorage["date26"];
    if (dateBox2Setting == null) {
        dateBox2.value = "";
    } else {
        dateBox2.value = dateBox2Setting;
    }
    var dateBox3 = document.getElementById("date27");
    var dateBox3Setting = localStorage["date27"];
    if (dateBox3Setting == null) {
        dateBox3.value = "";
    } else {
        dateBox3.value = dateBox3Setting;
    }
    var dateBox4 = document.getElementById("date28");
    var dateBox4Setting = localStorage["date28"];
    if (dateBox4Setting == null) {
        dateBox4.value = "";
    } else {
        dateBox4.value = dateBox4Setting;
    }
    var dateBox5 = document.getElementById("date29");
    var dateBox5Setting = localStorage["date29"];
    if (dateBox5Setting == null) {
        dateBox5.value = "";
    } else {
        dateBox5.value = dateBox5Setting;
    }
    var dateBox6 = document.getElementById("date30");
    var dateBox6Setting = localStorage["date30"];
    if (dateBox6Setting == null) {
        dateBox6.value = "";
    } else {
        dateBox6.value = dateBox6Setting;
    }
    var dateBox7 = document.getElementById("date31");
    var dateBox7Setting = localStorage["date31"];
    if (dateBox7Setting == null) {
        dateBox7.value = "";
    } else {
        dateBox7.value = dateBox7Setting;
    }
    var dateBox8 = document.getElementById("date32");
    var dateBox8Setting = localStorage["date32"];
    if (dateBox8Setting == null) {
        dateBox8.value = "";
    } else {
        dateBox8.value = dateBox8Setting;
    }
    var dateBox9 = document.getElementById("date33");
    var dateBox9Setting = localStorage["date33"];
    if (dateBox9Setting == null) {
        dateBox9.value = "";
    } else {
        dateBox9.value = dateBox9Setting;
    }
    var dateBox10 = document.getElementById("date34");
    var dateBox10Setting = localStorage["date34"];
    if (dateBox10Setting == null) {
        dateBox10.value = "";
    } else {
        dateBox10.value = dateBox10Setting;
    }
    var dateBox11 = document.getElementById("date35");
    var dateBox11Setting = localStorage["date35"];
    if (dateBox11Setting == null) {
        dateBox11.value = "";
    } else {
        dateBox11.value = dateBox11Setting;
    }
    var dateBox12 = document.getElementById("date36");
    var dateBox12Setting = localStorage["date36"];
    if (dateBox12Setting == null) {
        dateBox12.value = "";
    } else {
        dateBox12.value = dateBox12Setting;
    }
    var dateBox13 = document.getElementById("date37");
    var dateBox13Setting = localStorage["date37"];
    if (dateBox13Setting == null) {
        dateBox13.value = "";
    } else {
        dateBox13.value = dateBox13Setting;
    }
    var dateBox14 = document.getElementById("date38");
    var dateBox14Setting = localStorage["date38"];
    if (dateBox14Setting == null) {
        dateBox14.value = "";
    } else {
        dateBox14.value = dateBox14Setting;
    }
    var dateBox15 = document.getElementById("date39");
    var dateBox15Setting = localStorage["date39"];
    if (dateBox15Setting == null) {
        dateBox15.value = "";
    } else {
        dateBox15.value = dateBox15Setting;
    }
    var dateBox16 = document.getElementById("date40");
    var dateBox16Setting = localStorage["date40"];
    if (dateBox16Setting == null) {
        dateBox16.value = "";
    } else {
        dateBox16.value = dateBox16Setting;
    }
    var dateBox17 = document.getElementById("date41");
    var dateBox17Setting = localStorage["date41"];
    if (dateBox17Setting == null) {
        dateBox17.value = "";
    } else {
        dateBox17.value = dateBox17Setting;
    }
    var dateBox18 = document.getElementById("date42");
    var dateBox18Setting = localStorage["date42"];
    if (dateBox18Setting == null) {
        dateBox18.value = "";
    } else {
        dateBox18.value = dateBox18Setting;
    }
    var dateBox19 = document.getElementById("date43");
    var dateBox19Setting = localStorage["date43"];
    if (dateBox19Setting == null) {
        dateBox19.value = "";
    } else {
        dateBox19.value = dateBox19Setting;
    }
    var dateBox20 = document.getElementById("date44");
    var dateBox20Setting = localStorage["date44"];
    if (dateBox20Setting == null) {
        dateBox20.value = "";
    } else {
        dateBox20.value = dateBox20Setting;
    }
    var dateBox21 = document.getElementById("date45");
    var dateBox21Setting = localStorage["date45"];
    if (dateBox21Setting == null) {
        dateBox21.value = "";
    } else {
        dateBox21.value = dateBox21Setting;
    }
    var dateBox22 = document.getElementById("date46");
    var dateBox22Setting = localStorage["date46"];
    if (dateBox22Setting == null) {
        dateBox22.value = "";
    } else {
        dateBox22.value = dateBox22Setting;
    }
    var dateBox23 = document.getElementById("date47");
    var dateBox23Setting = localStorage["date47"];
    if (dateBox23Setting == null) {
        dateBox23.value = "";
    } else {
        dateBox23.value = dateBox23Setting;
    }
    var dateBox24 = document.getElementById("date48");
    var dateBox24Setting = localStorage["date48"];
    if (dateBox24Setting == null) {
        dateBox24.value = "";
    } else {
        dateBox24.value = dateBox24Setting;
    }
    //show saved notes when refreshed or reopened
    var noteBox1 = document.getElementById("notes3");
    var noteBox1Setting = localStorage["notes3"];
    if (noteBox1Setting == null) {
        noteBox1.value = "";
    } else {
        noteBox1.value = noteBox1Setting;
    }
    var noteBox2 = document.getElementById("notes4");
    var noteBox2Setting = localStorage["notes4"];
    if (noteBox2Setting == null) {
        noteBox2.value = "";
    } else {
        noteBox2.value = noteBox2Setting;
    }
    //show amounts when refreshed or reopened
    var amtBox1 = document.getElementById("amount25");
    var amtBox1Setting = localStorage["amount25"];
    if (amtBox1Setting == null) {
        amtBox1.value = "";
    } else {
        amtBox1.value = amtBox1Setting;
    }
    var amtBox2 = document.getElementById("amount26");
    var amtBox2Setting = localStorage["amount26"];
    if (amtBox2Setting == null) {
        amtBox2.value = "";
    } else {
        amtBox2.value = amtBox2Setting;
    }
    var amtBox3 = document.getElementById("amount27");
    var amtBox3Setting = localStorage["amount27"];
    if (amtBox3Setting == null) {
        amtBox3.value = "";
    } else {
        amtBox3.value = amtBox3Setting;
    }
    var amtBox4 = document.getElementById("amount28");
    var amtBox4Setting = localStorage["amount28"];
    if (amtBox4Setting == null) {
        amtBox4.value = "";
    } else {
        amtBox4.value = amtBox4Setting;
    }
    var amtBox5 = document.getElementById("amount29");
    var amtBox5Setting = localStorage["amount29"];
    if (amtBox5Setting == null) {
        amtBox5.value = "";
    } else {
        amtBox5.value = amtBox5Setting;
    }
    var amtBox6 = document.getElementById("amount30");
    var amtBox6Setting = localStorage["amount30"];
    if (amtBox6Setting == null) {
        amtBox6.value = "";
    } else {
        amtBox6.value = amtBox6Setting;
    }
    var amtBox7 = document.getElementById("amount31");
    var amtBox7Setting = localStorage["amount31"];
    if (amtBox7Setting == null) {
        amtBox7.value = "";
    } else {
        amtBox7.value = amtBox7Setting;
    }
    var amtBox8 = document.getElementById("amount32");
    var amtBox8Setting = localStorage["amount32"];
    if (amtBox8Setting == null) {
        amtBox8.value = "";
    } else {
        amtBox8.value = amtBox8Setting;
    }
    var amtBox9 = document.getElementById("amount33");
    var amtBox9Setting = localStorage["amount33"];
    if (amtBox9Setting == null) {
        amtBox9.value = "";
    } else {
        amtBox9.value = amtBox9Setting;
    }
    var amtBox10 = document.getElementById("amount34");
    var amtBox10Setting = localStorage["amount34"];
    if (amtBox10Setting == null) {
        amtBox10.value = "";
    } else {
        amtBox10.value = amtBox10Setting;
    }
    var amtBox11 = document.getElementById("amount35");
    var amtBox11Setting = localStorage["amount35"];
    if (amtBox11Setting == null) {
        amtBox11.value = "";
    } else {
        amtBox11.value = amtBox11Setting;
    }
    var totalBox1 = document.getElementById("billsThreeTotal");
    var totalBox1Setting = localStorage["billsThreeTotal"];
    if (totalBox1Setting == null) {
        totalBox1.value = "";
    } else {
        totalBox1.value = totalBox1Setting;
    }   
    var amtBox12 = document.getElementById("amount36");
    var amtBox12Setting = localStorage["amount36"];
    if (amtBox12Setting == null) {
        amtBox12.value = "";
    } else {
        amtBox12.value = amtBox12Setting;
    }
    var amtBox13 = document.getElementById("amount37");
    var amtBox13Setting = localStorage["amount37"];
    if (amtBox13Setting == null) {
        amtBox13.value = "";
    } else {
        amtBox13.value = amtBox13Setting;
    }
    var amtBox14 = document.getElementById("amount38");
    var amtBox14Setting = localStorage["amount38"];
    if (amtBox14Setting == null) {
        amtBox14.value = "";
    } else {
        amtBox14.value = amtBox14Setting;
    }
    var amtBox15 = document.getElementById("amount39");
    var amtBox15Setting = localStorage["amount39"];
    if (amtBox15Setting == null) {
        amtBox15.value = "";
    } else {
        amtBox15.value = amtBox15Setting;
    }
    var amtBox16 = document.getElementById("amount40");
    var amtBox16Setting = localStorage["amount40"];
    if (amtBox16Setting == null) {
        amtBox16.value = "";
    } else {
        amtBox16.value = amtBox16Setting;
    }
    var amtBox17 = document.getElementById("amount41");
    var amtBox17Setting = localStorage["amount41"];
    if (amtBox17Setting == null) {
        amtBox17.value = "";
    } else {
        amtBox17.value = amtBox17Setting;
    }
    var amtBox18 = document.getElementById("amount42");
    var amtBox18Setting = localStorage["amount42"];
    if (amtBox18Setting == null) {
        amtBox18.value = "";
    } else {
        amtBox18.value = amtBox18Setting;
    }
    var amtBox19 = document.getElementById("amount43");
    var amtBox19Setting = localStorage["amount43"];
    if (amtBox19Setting == null) {
        amtBox19.value = "";
    } else {
        amtBox19.value = amtBox19Setting;
    }
    var amtBox20 = document.getElementById("amount44");
    var amtBox20Setting = localStorage["amount44"];
    if (amtBox20Setting == null) {
        amtBox20.value = "";
    } else {
        amtBox20.value = amtBox20Setting;
    }
    var amtBox21 = document.getElementById("amount45");
    var amtBox21Setting = localStorage["amount45"];
    if (amtBox21Setting == null) {
        amtBox21.value = "";
    } else {
        amtBox21.value = amtBox21Setting;
    }
    var amtBox22 = document.getElementById("amount46");
    var amtBox22Setting = localStorage["amount46"];
    if (amtBox22Setting == null) {
        amtBox22.value = "";
    } else {
        amtBox22.value = amtBox22Setting;
    }
    var amtBox23 = document.getElementById("amount47");
    var amtBox23Setting = localStorage["amount47"];
    if (amtBox23Setting == null) {
        amtBox23.value = "";
    } else {
        amtBox23.value = amtBox23Setting;
    }
    var amtBox24 = document.getElementById("amount48");
    var amtBox24Setting = localStorage["amount48"];
    if (amtBox24Setting == null) {
        amtBox24.value = "";
    } else {
        amtBox24.value = amtBox24Setting;
    }
    var totalBox2 = document.getElementById("billsFourTotal");
    var totalBox2Setting = localStorage["billsFourTotal"];
    if (totalBox2Setting == null) {
        totalBox2.value = "";
    } else {
        totalBox2.value = totalBox2Setting;
    }
    var monthBox1 = document.getElementById("month2");
    var monthBox1Setting = localStorage["month2"];
    if (monthBox1Setting == null) {
        monthBox1.value = "";
    } else {
        monthBox1.value = monthBox1Setting;
    }
