const socket = io();
console.log("we are in script.js");

if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
    const {latitude , longitude} = position.coords;
    socket.emit("send-location",{latitude,longitude});
    },
    (err)=>{
        console.log(err);
    },
    {
        enableHighAccuracy : true,
        maximumAge : 0,
        timeout :5000
    }
)
}

const map = L.map("map").setView([0,0],16);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const markers ={};

socket.on("receive-location",(data)=>{
const {id, latitude , longitude} = data;
map.setView([latitude,longitude]);
if(markers[id]){
    markers[id].setLatLong([latitude,longitude]);
}
else{
    matchMedia[id]=L.marker([latitude,longitude]).addTo(map);
}

});