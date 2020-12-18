//get amounts ids
function amountID(){
    let x = [];
    let prefix = "amount";
    for (i = 25; i <= 48; i++) {
        x.push(prefix+i);
    }
    return x;
}
//get paid ids
function paidID(){
    let x = [];
    let prefix = "paid"
    for (i = 25; i <= 48; i++) {
        x.push(prefix+i);
    }
    return x;
}
//get ooa ids
function ooaID(){
    let x = [];
    let prefix = "ooa";
    for (i = 25; i <= 48; i++) {
        x.push(prefix+i);     
    }    
    return x;
}
//get date ids
function dateID(){
    let x = [];
    let prefix = "date";
    for (i = 25; i <= 48; i++) {
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
        totalBox1 = document.getElementById("billsThreeTotal");
        localStorage["billsThreeTotal"] = totalBox1.value;
        totalBox2 = document.getElementById("billsFourTotal");
        localStorage["billsFourTotal"] = totalBox2.value;
        noteBox1 = document.getElementById("notes3");
        localStorage["notes3"] = noteBox1.value;
        noteBox2 = document.getElementById("notes4");
        localStorage["notes4"] = noteBox2.value;
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
        var totalBox1 = document.getElementById("billsThreeTotal");
        var totalBox1Setting = localStorage["billsThreeTotal"];
        if (totalBox1Setting == null) {
            totalBox1.value = "";
        } else {
            totalBox1.value = totalBox1Setting;
        }
        var totalBox2 = document.getElementById("billsFourTotal");
        var totalBox2Setting = localStorage["billsFourTotal"];
        if (totalBox2Setting == null) {
            totalBox2.value = "";
        } else {
            totalBox2.value = totalBox2Setting;
        }  
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
        amount25 = parseInt(document.getElementById("amount25").value);
        if (isNaN(amount25) == true) {
            amount25 = 0;
        }
        amount26 = parseInt(document.getElementById("amount26").value);
        if (isNaN(amount26) == true) {
            amount26 = 0;
        }
        amount27 = parseInt(document.getElementById("amount27").value);
        if (isNaN(amount27) == true) {
            amount27 = 0;
        }
        amount28 = parseInt(document.getElementById("amount28").value);
        if (isNaN(amount28) == true) {
            amount28 = 0;
        }
        amount29 = parseInt(document.getElementById("amount29").value);
        if (isNaN(amount29) == true) {
            amount29 = 0;
        }
        amount30 = parseInt(document.getElementById("amount30").value);
        if (isNaN(amount30) == true) {
            amount30 = 0;
        }
        amount31 = parseInt(document.getElementById("amount31").value);
        if (isNaN(amount31) == true) {
            amount31 = 0;
        }
        amount32 = parseInt(document.getElementById("amount32").value);
        if (isNaN(amount32) == true) {
            amount32 = 0;
        }
        amount33 = parseInt(document.getElementById("amount33").value);
        if (isNaN(amount33) == true) {
            amount33 = 0;
        }
        amount34 = parseInt(document.getElementById("amount34").value);
        if (isNaN(amount34) == true) {
            amount34 = 0;
        }
        amount35 = parseInt(document.getElementById("amount35").value);
        if (isNaN(amount35) == true) {
            amount35 = 0;
        }
        document.getElementById("billsThreeTotal").value = amount25+amount26+amount27
        +amount28+amount29+amount30+amount31+amount32+amount33+amount34+amount35;
}           
function add2(){
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
    document.getElementById('billsFourTotal').value = amount36+amount37
    +amount38+amount39+amount40+amount41+amount42+amount43+amount44+amount45+amount46+amount47+amount48;
}            