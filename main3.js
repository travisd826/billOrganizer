//get amounts ids
function amountID(){
    let x = [];
    let prefix = "amount";
    for (i = 49; i <= 72; i++) {
        x.push(prefix+i);
    }
    return x;
}
//get paid ids
function paidID(){
    let x = [];
    let prefix = "paid"
    for (i = 49; i <= 72; i++) {
        x.push(prefix+i);
    }
    return x;
}
//get ooa ids
function ooaID(){
    let x = [];
    let prefix = "ooa";
    for (i = 49; i <= 72; i++) {
        x.push(prefix+i);     
    }    
    return x;
}
//get date ids
function dateID(){
    let x = [];
    let prefix = "date";
    for (i = 49; i <= 72; i++) {
        x.push(prefix+i);
    }
    return x;
}
//index array
const indArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
//save to storage
function save(){
    for(index = 0; index < indArr.length; index++) {
        amount1 = document.getElementById(amountID()[index]);
        localStorage[amountID()[index]] = amount1.value;
        checkbox = document.getElementById(paidID()[index]);
        localStorage.setItem(paidID()[index], checkbox.checked);
        checkbox2 = document.getElementById(ooaID()[index]);
        localStorage.setItem(ooaID()[index], checkbox2.checked);
        dateBox1 = document.getElementById(dateID()[index]);
        localStorage[dateID()[index]] = dateBox1.value;
        totalBox1 = document.getElementById("billsFiveTotal");
        localStorage["billsFiveTotal"] = totalBox1.value;
        totalBox2 = document.getElementById("billsSixTotal");
        localStorage["billsSixTotal"] = totalBox2.value;
        noteBox1 = document.getElementById("notes5");
        localStorage["notes5"] = noteBox1.value;
        noteBox2 = document.getElementById("notes6");
        localStorage["notes6"] = noteBox2.value;
    }
}
function loadUp(){
    for(index = 0; index < indArr.length; index++) {   
        amtBox1 = document.getElementById(amountID()[index]);
        amtBox1Setting = localStorage[amountID()[index]];
        if (amtBox1Setting == null) {
            amtBox1.value = "";
        } else {
            amtBox1.value = amtBox1Setting;
        }
        checked1 = JSON.parse(localStorage.getItem(paidID()[index]));
        document.getElementById(paidID()[index]).checked = checked1;
        checked2 = JSON.parse(localStorage.getItem(ooaID()[index]));
        document.getElementById(ooaID()[index]).checked = checked2;    
        dateBox1 = document.getElementById(dateID()[index]);
        dateBox1Setting = localStorage[dateID()[index]];
        if (dateBox1Setting == null) {
        dateBox1.value = "";
        } else {
        dateBox1.value = dateBox1Setting;
        }
        var totalBox1 = document.getElementById("billsFiveTotal");
        var totalBox1Setting = localStorage["billsFiveTotal"];
        if (totalBox1Setting == null) {
            totalBox1.value = "";
        } else {
            totalBox1.value = totalBox1Setting;
        }
        var totalBox2 = document.getElementById("billsSixTotal");
        var totalBox2Setting = localStorage["billsSixTotal"];
        if (totalBox2Setting == null) {
            totalBox2.value = "";
        } else {
            totalBox2.value = totalBox2Setting;
        }  
        var noteBox1 = document.getElementById("notes5");
        var noteBox1Setting = localStorage["notes5"];
        if (noteBox1Setting == null) {
            noteBox1.value = "";
        } else {
            noteBox1.value = noteBox1Setting;
        }
        var noteBox2 = document.getElementById("notes6");
        var noteBox2Setting = localStorage["notes6"];
        if (noteBox2Setting == null) {
            noteBox2.value = "";
        } else {
            noteBox2.value = noteBox2Setting;
        }
    }
}
function setToZero() {
    for(index = 0; index < indArr.length; index++) {
        if (document.getElementById(ooaID()[index]).checked){
            document.getElementById(amountID()[index]).value = "";
            add();
            add2();
        }
    }
}
//    bills math original
function add() {
        amount49 = parseInt(document.getElementById("amount49").value);
        if (isNaN(amount49) == true) {
            amount49 = 0;
        }
        amount50 = parseInt(document.getElementById("amount50").value);
        if (isNaN(amount50) == true) {
            amount50 = 0;
        }
        amount51 = parseInt(document.getElementById("amount51").value);
        if (isNaN(amount51) == true) {
            amount51 = 0;
        }
        amount52 = parseInt(document.getElementById("amount52").value);
        if (isNaN(amount52) == true) {
            amount52 = 0;
        }
        amount53 = parseInt(document.getElementById("amount53").value);
        if (isNaN(amount53) == true) {
            amount53 = 0;
        }
        amount54 = parseInt(document.getElementById("amount54").value);
        if (isNaN(amount54) == true) {
            amount54 = 0;
        }
        amount55 = parseInt(document.getElementById("amount55").value);
        if (isNaN(amount55) == true) {
            amount55 = 0;
        }
        amount56 = parseInt(document.getElementById("amount56").value);
        if (isNaN(amount56) == true) {
            amount56 = 0;
        }
        amount57 = parseInt(document.getElementById("amount57").value);
        if (isNaN(amount57) == true) {
            amount57 = 0;
        }
        amount58 = parseInt(document.getElementById("amount58").value);
        if (isNaN(amount58) == true) {
            amount58 = 0;
        }
        amount59 = parseInt(document.getElementById("amount59").value);
        if (isNaN(amount59) == true) {
            amount59 = 0;
        }
        document.getElementById("billsFiveTotal").value = amount49+amount50+amount51
        +amount52+amount53+amount54+amount55+amount56+amount57+amount58+amount59;
}
function add2(){        
    amount60 = parseInt(document.getElementById('amount60').value);
    if (isNaN(amount60) == true) {
        amount60 = 0;
    }
    amount61 = parseInt(document.getElementById('amount61').value);
    if (isNaN(amount61) == true) {
        amount61 = 0;
    }
    amount62 = parseInt(document.getElementById('amount62').value);
    if (isNaN(amount62) == true) {
        amount62 = 0;
    }
    amount63 = parseInt(document.getElementById('amount63').value);
    if (isNaN(amount63) == true) {
        amount63 = 0;
    }
    amount64 = parseInt(document.getElementById('amount64').value);
    if (isNaN(amount64) == true) {
        amount64 = 0;
    }
    amount65 = parseInt(document.getElementById('amount65').value);
    if (isNaN(amount65) == true) {
        amount65 = 0;
    }
    amount66 = parseInt(document.getElementById('amount66').value);
    if (isNaN(amount66) == true) {
        amount66 = 0;
    }
    amount67 = parseInt(document.getElementById('amount67').value);
    if (isNaN(amount67) == true) {
        amount67 = 0;
    }
    amount68 = parseInt(document.getElementById('amount68').value);
    if (isNaN(amount68) == true) {
        amount68 = 0;
    }
    amount69 = parseInt(document.getElementById('amount69').value);
    if (isNaN(amount69) == true) {
        amount69 = 0;
    }
    amount70 = parseInt(document.getElementById('amount70').value);
    if (isNaN(amount70) == true) {
        amount70 = 0;
    }
    amount71 = parseInt(document.getElementById('amount71').value);
    if (isNaN(amount71) == true) {
        amount71 = 0;
    }
    amount72 = parseInt(document.getElementById('amount72').value);
    if (isNaN(amount72) == true) {
        amount72 = 0;
    }
    document.getElementById('billsSixTotal').value = amount60+amount61
    +amount62+amount63+amount64+amount65+amount66+amount67+amount68+amount69+amount70+amount71+amount72;
}            