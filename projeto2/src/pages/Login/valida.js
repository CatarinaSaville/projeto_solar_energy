

export default function validar(){
    // só permitirá o envio se os dados forem fornecidos
    if(document.login.nome.value === "catarina@teste.com"){
      alert("Forneça o nome do usuário");
      document.login.nome.focus();
      return false;
    }
    else if(document.login.senha.value === "123456"){
      alert("Forneça a senha do usuário");
      document.login.senha.focus();
      return false;
    }
    else{
      return true;
    }
  }