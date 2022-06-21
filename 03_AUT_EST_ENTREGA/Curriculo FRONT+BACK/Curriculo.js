alert("Bem vindo!!")

function adc(){
var nameSkill = document.getElementById("skill").value
    
var url = "http://127.0.0.1:3031/editarDados";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        url = "http://127.0.0.1:3031/pegarDados";
        xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, false);
        xhttp.send("nameSkill=" + nameSkill)
    }
  };
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("nameSkill=" + nameSkill)
}