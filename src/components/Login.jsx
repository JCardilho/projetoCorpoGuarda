import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

export const Login = () => {
  const [username, setUsername] = useState("");
  // const [valorDaSuaVariavel, FunçãoQueVaiMudarOValorDaVariavel] = useState()

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // impedir que a página recarregue, pois toda vez que vc lança um formulario, ele muda de página
    alert(
      "Enviando dados:   " + username + "  parou no 36;37 do video " + password
    );
  };

  return (
    <div className=" m-0  font-poppins box-border bg-neutral-100 p-4 rounded-xl border border-neutral-300">
      <form onSubmit={handleSubmit}>
        {/*
            onSubmit = onEnviar
            Toda vez que você enviar o formulario, 
            seja clicando no botão de "enviar" ou apertando enter, 
            ele vai charmar a função "handleSubmit"
        */}
        <h1 className=" font-bold text-center text-lg  ">Acesse o Sistema </h1>
        <div className="relative h-1/2 w-1/2 my-6">
          <input className="p-1"           
            type="text"
            placeholder="Usuário"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <FaUser className="absolute right-1/2 top-1/2 -translate-y-2 translate-x-32" />
        </div>

        <div className="relative h-1/2 w-1/2 my-6">
          <input className="p-1"
            type="password"
            placeholder="Senha"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <FaLock className="absolute right-1/2 top-1/2 -translate-y-2 translate-x-32" />
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
