function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}
var cc = myform.cardcode;
for (var i in ['input', 'change', 'blur', 'keyup']) {
    cc.addEventListener('input', formatCardCode, false);
}
function formatCardCode() {
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}
function cardNumberValidator() {
    let numberId = document.getElementById("creditCardField").value;
    if(numberId.charAt(0) == 4) {
        document.getElementById("visa-logo").style.display = "block";
        document.getElementById("mc-logo").style.display = "none";
        document.getElementById("number-error").style.display = "none";
    } else if (numberId.charAt(0) == 5) {
        document.getElementById("mc-logo").style.display = "block";
        document.getElementById("visa-logo").style.display = "none";
        document.getElementById("number-error").style.display = "none";
    } else if (numberId == 0) {
        document.getElementById("mc-logo").style.display = "none";
        document.getElementById("visa-logo").style.display = "none";
        document.getElementById("number-error").style.display = "none";
    } else {
        document.getElementById("number-error").style.display = "block";
        document.getElementById("mc-logo").style.display = "none";
        document.getElementById("visa-logo").style.display = "none";
    }
}