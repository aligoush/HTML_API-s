if (window.File && window.FileReader && window.FileList && window.Blob) {
    
    function showFile() {
        var vid = document.getElementById("v");
        vid.onprogress = function() {
            alert("Cargando el video");
          };
       var vid = document.querySelector('video');
       var file = document.querySelector('input[type=file]').files[0];
       
       var reader = new FileReader();
       reader.onload = function (event) {
          vid.src = reader.result;
        }
       reader.readAsDataURL(file);
       console.log(file);
    }
 } else {
    alert("Tu navegador no soporta HTML5 File API");
 }
