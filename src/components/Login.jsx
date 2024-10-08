import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import  {Home}  from "./page/home.jsx";

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
    <div className=" m-0 min-h-80 min-w-96  font-poppins box-border bg-neutral-100 p-4 rounded-xl border border-neutral-300">
      <form onSubmit={handleSubmit}>
        {/*
            onSubmit = onEnviar
            Toda vez que você enviar o formulario, 
            seja clicando no botão de "enviar" ou apertando enter, 
            ele vai charmar a função "handleSubmit"
        */}
        <h1 className=" font-bold text-center text-lg mt-6 ">
          Acesse o Sistema{" "}
        </h1>
        <div className="relative h-1/2 w-full my-6">
          <input
            className="p-1 rounded-xl w-full"
            type="text"
            placeholder="Usuário"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <FaUser className="absolute right-2 top-1/2 -translate-y-2 " />
        </div>

        <div className="relative h-1/2 w-full my-6">
          <input
            className="p-1 rounded-xl w-full flex-auto"
            type="password"
            placeholder="Senha"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <FaLock className="absolute right-2 top-1/2 -translate-y-2 " />
        </div>
        <div className="flex justify-between gap-6 text-xs text-blue-700 mt-2 mb-8">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a className="  hover:font-bold" href="#">
            Esqueceu a senha?
          </a>
        </div>
        <button className=" text-center border
         border-neutral-400 mt-2 rounded-xl 
         w-full h-1/2 hover:font-bold" >
          Entrar
        </button>
        <div className="flex justify-end gap-4 text-xs mt-4  mb-8  text-blue-700 ">
          Não tem uma conta?{" "}
          <a className="hover:font-bold "href={<Home/>}>
            Registrar
          </a>
        </div>
      </form>
    </div>
  );
};
