
console.log(";P")
var device;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
        var device = "mobile";
        console.log("mobile");
  }else{
    // false for not mobile device
        var device = "computer";
        console.log("computer");
  }
  if (device == "mobile") {
    device.setAttribute('href', 'mobile.css');
  }
 