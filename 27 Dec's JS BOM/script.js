var btn = document.getElementById("btn");

function onLocationSuccess(Location){
console.log("Location Retrieved Successfully");
console.log(Location.coords.latitude,Location.coords.longitude);
}

function onLocationFailure(err){
console.log("Location Retrival Failed",err);
}

function onLoacationListener(){
    navigator.geolocation.getCurrentPosition(onLocationSuccess,onLocationFailure);

}

btn.addEventListener("click",onLoacationListener);

