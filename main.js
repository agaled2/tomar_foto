var reconocimientoDeVos = window.webkitSpeechRecognition;
var reconocimiento = new reconocimientoDeVos();
reconocimiento.lang = "es-MX";

function iniciar(){
  reconocimiento.start();
}

reconocimiento.onresult = function (resultado){
  console.log(resultado)
  textoDetectado = resultado.results[0][0].transcript;
  document.getElementById("textbox").value = textoDetectado;
  hablar(textoDetectado)
  if(textoDetectado.toLowerCase() == "hola"){
    Webcam.attach("#camara")
    hablar("cinco  cuatro tres  dos  uno")
    setTimeout(tomarFoto, 5000)
  }
}

function hablar(mensaje){


leeEnVozAlta = window.speechSynthesis;
  var lectura  = new SpeechSynthesisUtterance(mensaje)
  lectura.lang = "es-MX"
  leeEnVozAlta.speak(lectura);
}

Webcam.set({
  width:360,
  height:250,
  image_format:"png",
  png_quality:90
  
})

function tomarFoto(){
  Webcam.snap(function(foto){
  document.getElementById("resultado").innerHTML = '<img src="' + foto + '" id="fotos">'
    guardar();
})
}

function guardar(){
  descarga = document.getElementById("link");
    descarga.href = document.getElementById("fotos").src
      descarga.click();
}