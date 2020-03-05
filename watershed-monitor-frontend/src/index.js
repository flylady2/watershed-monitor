// declaring variables to be used throughout
const BACKEND_URL = "http://localhost:3000"
let addObs = document.getElementById("add_obs")
let violations = document.getElementById("violations")
let bestPractices = document.getElementById("best_practices")
let waterData = document.getElementById("data")
let form = document.querySelector("header")
let submit = document.getElementById("submit_observation")



// initMap function is called in script tag on index.html: 
// Initiates rendering of the map on the DOM, and sets event listener for adding maps
function initMap() {
    form.style.display = "none";
    // placeholder for center of map for home view
    // let mapCenter =  { lat: 45, lng: -90} 
    let mapCenter =  { lat: 44.8007, lng: -73.100} 
    let map = new google.maps.Map(document.getElementById('map'), {zoom: 12, center: mapCenter});
    // code for adding center marker - don't need, but use for posting observation instance data
    // let marker = new google.maps.Marker({position: mapCenter, map: map});

    addObs.addEventListener('click', function() { 
        map.addListener('click', function(e) {
            console.log("clicked on map location for observation")
            placeMarker(e.latLng, map);

        });
    })
}

function placeMarker(latLng, map) {
    let marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    console.log("marker placed")
    let markerCoordinates = [marker.getPosition().lat(), marker.getPosition().lng()]
    showNewObservationForm(markerCoordinates)
  }

  function showNewObservationForm(markerCoordinates) {
      form.style.display = "block";
      console.log("new observation form displayed")

      submit.addEventListener('click', function () {
        event.preventDefault();

        let formData = {
            name: document.getElementById("form_name").value,
            description: document.getElementById("form_description").value,
            category_id: document.getElementById("category").value,
            latitude: markerCoordinates[0],
            longitude: markerCoordinates[1]
        }

    console.log(formData)
      form.style.display = "none";
      console.log("form disappears")
    
    
    })


    //   form.style.display = "none";
    // addMarkerToDatabase()
  }



  function addMarkerToDatabase() {
      console.log("add marker to database")

  }









// takes in argument of map and uses map.id in url for fetch
// function getViolationsOnMap(map) {
//     fetch(`${BACKEND_URL}/categories/1`)
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)
//         console.log(json.data.attributes.observations)
//         let observations = json.data.attributes.observations
//         observations.forEach(renderObservation)
//     })
// }
//   function renderObservation() {
//       console.log("render observation function")

//   }
        


//   fetch calls for various forms of json data _________________________________

// fetch(`${BACKEND_URL}/observations`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));

// fetch(`${BACKEND_URL}/observations/1`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));

// fetch(`${BACKEND_URL}/categories`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));