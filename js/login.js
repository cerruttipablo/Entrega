//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function irAInicio() {
   
   username = document.getElementById('usuario').value;
   pass = document.getElementById('contraseña').value;

   if (username != '' && pass != '') {
       window.location.assign('index.html');
   } else {
      document.getElementById('usuario').value = '';
      document.getElementById('contraseña').value = '';
   }
}



document.addEventListener("DOMContentLoaded", function(e){
 
});
