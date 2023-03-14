if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register("/sw.js")
    .then((reg)=>console.log("registered",reg))
    .catch((err)=>console.log("err",err));
    } else {
    console.log('No service worker support in this browser');
    }