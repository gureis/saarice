<?php 
	//requer a classe de conexão
	require_once('db.class.php');

	$nome = $_POST['nome'];
	$sobrenome = $_POST['sobrenome'];
	$sexo = $_POST['sexo'];
	$cpf =  $_POST['cpf'];
	$rg = $_POST['rg'];
	$email = $_POST['email'];
	$senha = $_POST['senha'];
	$telefone = $_POST['telefone'];
	$nascimento = $_POST['nascimento'];
	$endereco = $_POST['endereco'];
	$cidade = $_POST['cidade'];
	$cep = $_POST['cep'];
	$estado = $_POST['estado'];

	$objDb = new db(); //recebe o db
	$link = $objDb->conecta_mysql(); // função de conexão bd

	$sql = " insert into usuarios(nome, sexo, cpf, rg, email, senha, telefone, nascimento, endereco, cidade, cep, estado) values ('', '', '', '', '', '', '', '', '', '', '', '')";

	//Exec query
	if (mysqli_query($link, $sql)){
		echo 'Usuário registrado com sucesso!';
	}else{
		echo 'Erro ao registrar o usuário!'
	}

 ?>