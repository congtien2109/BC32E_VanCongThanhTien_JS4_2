// BAI TAP 4

document.getElementById("btnTomorrow").onclick = function() {
  var day = parseInt(document.getElementById("day").value)
    var month = parseInt(document.getElementById("month").value)
    var year = parseInt(document.getElementById("year").value)
    var ketQua = "";
  switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
      ketQua = day > 0 && day < 31 ? day + 1 + "/" + month + "/" + year : 31 == day ? "1/" + (month + 1) + "/" + year : "Ngày không xác định";
      break;
  case 2:
      ketQua = day > 0 && day < 28 ? day + 1 + "/" + month + "/" + year : 28 == day ? "1/" + (month + 1) + "/" + year : "Ngày không xác định";
      break;
  case 4:
  case 6:
  case 9:
  case 11:
      ketQua = day > 0 && day < 30 ? day + 1 + "/" + month + "/" + year : 30 == day ? "1/" + (month + 1) + "/" + year : "Ngày không xác định";
      break;
  case 12:
      ketQua = day > 0 && day < 31 ? day + 1 + "/" + month + "/" + year : 31 == day ? "1/1/" + (year + 1) : "Ngày không xác định";
      break;
  default:
      ketQua = "Tháng không xác định"
  }
  document.getElementById("date").innerHTML = ketQua;
};
document.getElementById("btnYesterday").onclick = function() {
    var day = parseInt(document.getElementById("day").value)
      var month = parseInt(document.getElementById("month").value)
      , year = parseInt(document.getElementById("year").value)
      var ketQua = "";
    switch (month) {
    case 1:
        ketQua = day > 1 && day <= 31 ? day - 1 + "/" + month + "/" + year : 1 == day ? "31/12/" + (year - 1) : "Ngày không xác định";
        break;
    case 2:
        ketQua = day > 1 && day <= 28 ? day - 1 + "/" + month + "/" + year : 1 == day ? "31/" + (month - 1) + "/" + year : "Ngày không xác định";
        break;
    case 3:
        ketQua = day > 1 && day < 31 ? day - 1 + "/" + month + "/" + year : 1 == day ? NaN + (month - 1) + "/" + year : "Ngày không xác định";
        break;
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        ketQua = day > 1 && day < 31 ? day - 1 + "/" + month + "/" + year : 1 == day ? "30/" + (month - 1) + "/" + year : "Ngày không xác định";
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        ketQua = day > 1 && day <= 30 ? day - 1 + "/" + month + "/" + year : 1 == day ? "31/" + (month - 1) + "/" + year : "Ngày không xác định"
    }
    document.getElementById("date").innerHTML = ketQua;
};
//Bai Tap 6
document.getElementById("btnTinhNgay").onclick = function() {
  var month = parseInt(document.getElementById("month1").value)
  var year = parseInt(document.getElementById("year1").value)
    var a = !1
    var b = 0;
  switch ((year % 4 == 0 && year % 100 != 0 || year % 400 == 0) && (b = !0),
  month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
      b = 31;
      break;
  case 4:
  case 6:
  case 9:
  case 11:
      b = 30;
      break;
  case 2:
      b = a ? 29 : 28;
      break;
  default:
      b = 0
  }
  document.getElementById("tinhNgay").innerHTML = "Tháng " + month + " năm " + year + " có " + b + " ngày"
};

// BAI TAP 7
document.getElementById("btnDocSo").addEventListener("click", function() {
  var e = document.getElementById("so3Chu").value
    var t = Math.floor(e / 100)
    var n = Math.floor(e % 100 / 10)
    var ketQua = "";
  switch (t) {
  case 1:
      ketQua += "một trăm ";
      break;
  case 2:
      ketQua += "hai trăm ";
      break;
  case 3:
      ketQua += "ba trăm ";
      break;
  case 4:
      ketQua += "bốn trăm ";
      break;
  case 5:
      ketQua += "năm trăm ";
      break;
  case 6:
      ketQua += "sáu trăm ";
      break;
  case 7:
      ketQua += "bảy trăm ";
      break;
  case 8:
      ketQua += "tám trăm ";
      break;
  case 9:
      ketQua += "chín trăm ";
      break;
  default:
      alert("số hàng trăm không xác định được")
  }
  switch (n) {
  case 1:
      ketQua += "một mươi ";
      break;
  case 2:
      ketQua += "hai mươi ";
      break;
  case 3:
      ketQua += "ba mươi ";
      break;
  case 4:
      ketQua += "bốn mươi ";
      break;
  case 5:
      ketQua += "năm mươi ";
      break;
  case 6:
      ketQua += "sáu mươi ";
      break;
  case 7:
      ketQua += "bảy mươi ";
      break;
  case 8:
      ketQua += "tám mươi ";
      break;
  case 9:
      ketQua += "chín mươi ";
      break;
  default:
      alert("Số hàng chục không xác định được")
  }
  switch (e % 100 % 10) {
  case 1:
      ketQua += "một";
      break;
  case 2:
      ketQua += "hai";
      break;
  case 3:
      ketQua += "ba";
      break;
  case 4:
      ketQua += "bốn";
      break;
  case 5:
      ketQua += "năm";
      break;
  case 6:
      ketQua += "sáu";
      break;
  case 7:
      ketQua += "bảy";
      break;
  case 8:
      ketQua += "tám";
      break;
  case 9:
      ketQua += "chín";
      break;
  default:
      alert("Số hàng đơn vị không xác định được.")
  }
  document.getElementById("docSo").innerHTML = ketQua
}),

// BAI TAP 8

document.getElementById("btnTim").addEventListener("click", function() {
  var e = document.getElementById("Name1").value
    , t = document.getElementById("X1").value
    , n = document.getElementById("Y1").value
    , a = document.getElementById("Name2").value
    , c = document.getElementById("X2").value
    , u = document.getElementById("Y2").value
    , m = document.getElementById("Name3").value
    , d = document.getElementById("X3").value
    , o = document.getElementById("Y3").value
    , l = document.getElementById("X4").value
    , r = document.getElementById("Y4").value
    , s = Math.pow(l - t, 2) + Math.pow(r - n, 2)
    , i = Math.sqrt(s);
  console.log(i);
  var g = Math.pow(l - c, 2) + Math.pow(r - u, 2)
    , h = Math.sqrt(g);
  console.log(h);
  var y = Math.pow(l - d, 2) + Math.pow(r - o, 2)
    , k = Math.sqrt(y);
  console.log(k);
  var b = "";
  b = i > h && i > k ? e : h > i && h > k ? a : m,
  document.getElementById("tim").innerHTML = "Sinh viên xa trường nhất: " + b
});



