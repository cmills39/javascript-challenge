//reference to the tbody
var tbody = document.querySelector("tbody");
var cityinput = document.querySelector("#datetime")
var LatInput = document.querySelector("#Latitude")
var LongInput = document.querySelector("#Longitude")
var aqiInput = document.querySelector("#AQI")
var DPInput = document.querySelector("#DominantPollutant")

//Copy of Data
var tableData=data;

//Build table
function handleSearchButtonClick( ) {
    var filterCity= cityinput.value.trim().toLowerCase();
    var filterLat= Latinput.value.trim().toLowerCase();
    var filterLong= Longinput.value.trim().toLowerCase();
    var filteraqi= aqiinput.value.trim().toLowerCase();
    var filterDP= DPinput.value.trim().toLowerCase();

    //filter on city
    if(filterCity !="") {
        tableData.filter= data.filter(function (address) {
            var addressDate
        }
    }

}

