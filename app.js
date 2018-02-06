 function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
/*El elemento script carga la API desde la URL especificada. 
El parámetro callback ejecuta la función initMap cuando la API se carga por completo. 
El atributo async permite al navegador seguir procesando el resto de la página mientras se carga la API. 
El parámetro key contiene tu clave de API. 
No necesitas tu propia clave de API al probar este instructivo en JSFiddle. 
Consulta Paso 3: Obtener una clave de API para recibir instrucciones sobre cómo obtener tu propia clave 
de API posteriormente.*/