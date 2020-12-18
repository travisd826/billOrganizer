//get amounts ids
function amountID(){
    let x = [];
    let prefix = "amount";
    for (i = 145; i <= 168; i++) {
        x.push(prefix+i);
    }
    return x;
}
//get paid ids
function paidID(){
    let x = [];
    let prefix = "paid"
    for (i = 145; i <= 168; i++) {
        x.push(prefix+i);
    }
    return x;
}
//get ooa ids
function ooaID(){
    let x = [];
    let prefix = "ooa";
    for (i = 145; i <= 168; i++) {
        x.push(prefix+i);     
    }    
    return x;
}
//get date ids
function dateID(){
    let x = [];
    let prefix = "date";
    for (i = 145; i <= 168; i++) {
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
        totalBox1 = document.getElementById("bills13Total");
        localStorage["bills13Total"] = totalBox1.value;
        totalBox2 = document.getElementById("bills14Total");
        localStorage["bills14Total"] = totalBox2.value;
        noteBox1 = document.getElementById("notes13");
        localStorage["notes13"] = noteBox1.value;
        noteBox2 = document.getElementById("notes14");
        localStorage["notes14"] = noteBox2.value;
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
        var totalBox1 = document.getElementById("bills13Total");
        var totalBox1Setting = localStorage["bills13Total"];
        if (totalBox1Setting == null) {
            totalBox1.value = "";
        } else {
            totalBox1.value = totalBox1Setting;
        }
        var totalBox2 = document.getElementById("bills14Total");
        var totalBox2Setting = localStorage["bills14Total"];
        if (totalBox2Setting == null) {
            totalBox2.value = "";
        } else {
            totalBox2.value = totalBox2Setting;
        }  
        var noteBox1 = document.getElementById("notes13");
        var noteBox1Setting = localStorage["notes13"];
        if (noteBox1Setting == null) {
            noteBox1.value = "";
        } else {
            noteBox1.value = noteBox1Setting;
        }
        var noteBox2 = document.getElementById("notes14");
        var noteBox2Setting = localStorage["notes14"];
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
        amount1 = parseInt(document.getElementById("amount145").value);
        if (isNaN(amount1) == true) {
            amount1 = 0;
        }
        amount2 = parseInt(document.getElementById("amount146").value);
        if (isNaN(amount2) == true) {
            amount2 = 0;
        }
        amount3 = parseInt(document.getElementById("amount147").value);
        if (isNaN(amount3) == true) {
            amount3 = 0;
        }
        amount4 = parseInt(document.getElementById("amount148").value);
        if (isNaN(amount4) == true) {
            amount4 = 0;
        }
        amount5 = parseInt(document.getElementById("amount149").value);
        if (isNaN(amount5) == true) {
            amount5 = 0;
        }
        amount6 = parseInt(document.getElementById("amount150").value);
        if (isNaN(amount6) == true) {
            amount6 = 0;
        }
        amount7 = parseInt(document.getElementById("amount151").value);
        if (isNaN(amount7) == true) {
            amount7 = 0;
        }
        amount8 = parseInt(document.getElementById("amount152").value);
        if (isNaN(amount8) == true) {
            amount8 = 0;
        }
        amount9 = parseInt(document.getElementById("amount153").value);
        if (isNaN(amount9) == true) {
            amount9 = 0;
        }
        amount10 = parseInt(document.getElementById("amount154").value);
        if (isNaN(amount10) == true) {
            amount10 = 0;
        }
        amount11 = parseInt(document.getElementById("amount155").value);
        if (isNaN(amount11) == true) {
            amount11 = 0;
        }
        document.getElementById("bills13Total").value = amount1+amount2+amount3
        +amount4+amount5+amount6+amount7+amount8+amount9+amount10+amount11;
}           
function add2(){
    amount12 = parseInt(document.getElementById('amount156').value);
    if (isNaN(amount12) == true) {
        amount12 = 0;
    }
    amount13 = parseInt(document.getElementById('amount157').value);
    if (isNaN(amount13) == true) {
        amount13 = 0;
    }
    amount14 = parseInt(document.getElementById('amount158').value);
    if (isNaN(amount14) == true) {
        amount14 = 0;
    }
    amount15 = parseInt(document.getElementById('amount159').value);
    if (isNaN(amount15) == true) {
        amount15 = 0;
    }
    amount16 = parseInt(document.getElementById('amount160').value);
    if (isNaN(amount16) == true) {
        amount16 = 0;
    }
    amount17 = parseInt(document.getElementById('amount161').value);
    if (isNaN(amount17) == true) {
        amount17 = 0;
    }
    amount18 = parseInt(document.getElementById('amount162').value);
    if (isNaN(amount18) == true) {
        amount18 = 0;
    }
    amount19 = parseInt(document.getElementById('amount163').value);
    if (isNaN(amount19) == true) {
        amount19 = 0;
    }
    amount20 = parseInt(document.getElementById('amount164').value);
    if (isNaN(amount20) == true) {
        amount20 = 0;
    }
    amount21 = parseInt(document.getElementById('amount165').value);
    if (isNaN(amount21) == true) {
        amount21 = 0;
    }
    amount22 = parseInt(document.getElementById('amount166').value);
    if (isNaN(amount22) == true) {
        amount22 = 0;
    }
    amount23 = parseInt(document.getElementById('amount167').value);
    if (isNaN(amount23) == true) {
        amount23 = 0;
    }
    amount24 = parseInt(document.getElementById('amount168').value);
    if (isNaN(amount24) == true) {
        amount24 = 0;
    }
    document.getElementById('bills14Total').value = amount12+amount13
    +amount14+amount15+amount16+amount17+amount18+amount19+amount20+amount21+amount22+amount23+amount24;
}            