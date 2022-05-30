
console.log(";P")
var device;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
        device = "mobile";
        console.log("mobile");
        alert("MOBILE")
  }else{
    // false for not mobile device
       device = "computer";
        console.log("computer");
        alert("COMPUTER")
  }
  if (device == "mobile") {
    device.setAttribute('href', 'mobile.css');
  }
 