function Calculate() {
    let p = document.getElementById('amount').value;
    let t = document.getElementById('time').value;
    let r = document.getElementById('rate').value;

    let SI = (p * t * r) / 100;
    var year = new Date().getFullYear() + parseInt(t);

    document.getElementById('si').innerHTML = "The Total Simple Intrest Is: " + SI;
    document.getElementById('yea').innerHTML = "The Total Simple Intrest Is: " + year;
}