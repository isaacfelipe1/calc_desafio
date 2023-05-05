var divForm = document.getElementById("formContent")
var operacoes = ["soma", "subtração", "divisão", "multiplicação", "sair"]
var operacao = ""

telaInicial()

function telaInicial(){
  
  var htmlCode = ""
   
   htmlCode += `<h3>Entre com a operação:</h3>`
   htmlCode += `<label>Operações: <br></label><select id="selectOperacoes" place>`
   for (i in operacoes){
     htmlCode += `<option value="${operacoes[i]}">${operacoes[i]}</option>`  
   }
  htmlCode += `</select>`
  htmlCode += `<br><input type="submit" class="submitButton" onclick="telaValores()" value='Continuar'></b>`
  
  divForm.innerHTML = htmlCode
  
}

function telaValores(){
  var htmlCode = ""
  

  if (operacao === "") {
    operacao = document.getElementById("selectOperacoes").value
  }
  console.log(operacao)
  if (operacao === "sair"){
    htmlCode += `<p>Até a próxima</p>`
    
  }else{    
    htmlCode += `<h3>Entre com os 2 valores</h3>`
    htmlCode += `Valor 1: <br><input type="number" name = "num1" id="num1"></input>`
    htmlCode += `<br>Valor 2: <br><input type="number" name = "num2" id="num2"></input>`
    htmlCode += `<br><button type="submit" class="submitButton" onclick="telaFinal('${operacao}')">Continuar</button>`
    htmlCode += `<br><button type="submit" class="submitButton" onclick="mensagemSair()">Sair</button>`
  }
  divForm.innerHTML = htmlCode
}

function telaFinal(operacao){
   
  var htmlCode = ""
  var num1 = parseInt(document.getElementById("num1").value)
  var num2 = parseInt(document.getElementById("num2").value)
  
 
  
  if (isNaN(num1) || isNaN(num2)){ 
    var resultado = mensagemPreencherCampos()
  }else{
    var resultado = 0

    switch (operacao.toString()){
      case "soma":
        resultado = somar(num1, num2);
        
        break;

      case "subtração":
        resultado = subtrair(num1,num2);
        
        break;

      case "multiplicação":
        resultado = multiplicar(num1, num2);
        
        break;

      case "divisão":
        resultado = dividir(num1, num2);
        
        break;
        
      default:
        resultado = ("Ocorreu um erro, verifique o código na linha 40")
        
        break;
    }
  }
  telaValores()
  document.getElementById("resultado").innerHTML = `<p>${resultado}</p>`
  
}

function somar(num1, num2){
  var resultado = num1 + num2;
  return resultado
}

function subtrair(num1, num2){
  var resultado = num1 - num2;
  return resultado
}

function multiplicar(num1, num2){
  var resultado = num1 * num2;
  return resultado
}

function dividir(num1, num2){
  var resultado = 0
  
  if (num2 === 0){
    resultado = "Não é possível realizar divisões por 0"
  }else{
    resultado = num1 / num2;
  }
  
  return resultado
}

function cleanDivForm(){
  divForm.innerHTML = ""
}

function cleanResultado(){
  document.getElementById("resultado").innerHTML = ""
}

function mensagemPreencherCampos(){
  return `<p>Preencha os campos acima</p>`
}

function mensagemSair(){
  var htmlCode = ""
  
  htmlCode += `<p>Até a próxima</p>`
  
  cleanDivForm()
  cleanResultado()
  
  divForm.innerHTML = htmlCode
}