<?php
// //Criamos uma função que recebe um texto como parâmetro.
// function gravar($texto){
//     //Variável arquivo armazena o nome e extensão do arquivo.
//     $arquivo = "teste.txt";
     
//     //Variável $fp armazena a conexão com o arquivo e o tipo de ação.
//     $fp = fopen($arquivo, "a+");
 
//     //Escreve no arquivo aberto.
//     fwrite($fp, $texto);
     
//     //Fecha o arquivo.
//     fclose($fp);
// }
 
// $temp = filter_input(INPUT_GET, 'temp', FILTER_SANITIZE_NUMBER_FLOAT);
// $humid = filter_input(INPUT_GET, 'humid', FILTER_SANITIZE_NUMBER_FLOAT);
// if (is_null($temp) || is_null($humid) ) {
//   //Gravar log de erros
//   gravar("Dados inválidos");
// } 
 
//     echo "Inicio";

// 	gravar("Temp=".$temp."Hum=".$humid);
	
//     echo "fim";

$temp = $_GET['sensor'];
$humid = $_GET['sensor'];
if (is_null($temp) || is_null($humid) ) {
  //Gravar log de erros
  die("Dados inválidos: temp= ".$temp." hum= ".$humid);
} 
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "weather";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  //Gravar log de erros
  die("Não foi possível estabelecer conexão com o BD: " . $conn->connect_error);
} 
$sql = "INSERT INTO weather (wea_temp, wea_humid) VALUES ($temp,$humid)";

if (!$conn->query($sql)) {
  //Gravar log de erros
  die("Erro na gravação dos dados no BD");
}else{
	die("Dados gravados");
}
$conn->close();
?>


