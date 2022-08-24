setInterval(async () => {
  let sum = 0;
  let num = await document.getElementById("num1").value;

  sum =
    Number(document.getElementById("num1").value) * 13.1 +
    Number(document.getElementById("num2").value) * 2.9 +
    Number(document.getElementById("num3").value) * 5.5  +
    Number(document.getElementById("num4").value) * 5.5 +
    Number(document.getElementById("num5").value) * 0.4 +
    Number(document.getElementById("num6").value) * 43.8 +
    Number(document.getElementById("num7").value) * 29.2 +
    Number(document.getElementById("num8").value) * 6.2 +
    Number(document.getElementById("num9").value) * 7.3 +
    Number(document.getElementById("num10").value) * 5.5 +
    Number(document.getElementById("num11").value) * 11.7 +
    Number(document.getElementById("num12").value) * 7.3 +
    Number(document.getElementById("num13").value) * 0.2 +
    Number(document.getElementById("num14").value) * 1.5 +
    Number(document.getElementById("num15").value) * 8.8 +
    Number(document.getElementById("num16").value) * 1 ;

  document.getElementById("result").innerHTML =
    "Total Wastage = " + sum + " Kg/year";
    document.getElementById("lifetime").innerHTML =
    "Which is " + sum*75 + " Kg/lifetime";
}, 100);
