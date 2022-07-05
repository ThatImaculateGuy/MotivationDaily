

console.log("Hello world!")
var device;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
        device = "mobile";
        console.log("mobile");
  }else{
    // false for not mobile device
       device = "computer";
        console.log("computer");
  }
  if (device == "mobile") {
    device.setAttribute('href', 'mobile.css');
  }
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HT37PDMGHZ');