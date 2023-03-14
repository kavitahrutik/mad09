var mycache = "mycache";
var assests = [
"/",
"/my.html",
"/img/download.jpg",
"/js/start.js",
"/sw.js",
"/manifest.json",
];
async function fetchGH() {
    const response = await fetch('https://api.github.com/users/"username"',
    {
    headers: {
    'Authorization': 'enter your token',
    }
    })
    return await response.json()
    
    }
    self.addEventListener('install', _event => {
    console.log('inside the install', _event);
    });
    
    self.addEventListener('activate', _event => {
    console.log('inside the activate', _event);
    });
    self.addEventListener('fetch', async (_event) => {
    const res = await fetchGH();
    console.log("RES is: ",res);
    console.log('inside the fetched', _event);
    });