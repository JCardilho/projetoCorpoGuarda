import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

export const Login = () => {
  const [username, setUsername] = useState("");
  // const [valorDaSuaVariavel, FunçãoQueVaiMudarOValorDaVariavel] = useState()

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // impedir que a página recarregue, pois toda vez que vc lança um formulario, ele muda de página
    alert("Enviando dados:   "+ username + "  parou no 26;23 do video "   + password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {/*
            onSubmit = onEnviar
            Toda vez que você enviar o formulario, 
            seja clicando no botão de "enviar" ou apertando enter, 
            ele vai charmar a função "handleSubmit"
        */}
        <h1>Acesse o Sistema </h1>
        <div>
          <input
            type="text"
            placeholder="Usuário"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <FaUser className="icon" />
        </div>
        
        <div>
          <input type="password" placeholder="Senha" 
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>
        <div className="signup-link">
          Não tem uma conta? <a href="#">Registrar</a>
        </div>
      </form>
    </div>
  );
};
