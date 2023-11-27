function area() {
    let side1 = parseInt(document.getElementById("side1").value);
    let side2 = parseInt(document.getElementById("side2").value);
    let side3 = parseInt(document.getElementById("side3").value);

    console.log(typeof(side1));
    let solution = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
     
    document.getElementById("display").innerHTML = area;
}