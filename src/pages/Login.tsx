import { api } from "../api/service";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import MyContext from "../context/loggedContext";
import { Md5 } from "md5-typescript";

type Inputs = {
  user_name: string;
  user_password: string;
};

export function Login() {
  const { state, setState } = useContext(MyContext);
  const [message, setMessage] = useState<String>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await api
        .get("users")
        .then((response) => response.data)
        .then((users) => {
          users.map(async (user: Inputs) => {
            console.log(user);
            if (
              user.user_name === data.user_name &&
              user.user_password === Md5.init(Md5.init(data.user_password))
            ) {
              setMessage("");
              setState(!state);
            } else {
              setMessage("Usuario ou senha invalidos");
              await new Promise((r) => setTimeout(r, 3000));
              setMessage("");
            }
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      {state === true && <Navigate to="/home" replace={true} />}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-start gap-5 h-auto px-6 py-16 rounded-lg shadow-2xl border"
      >
        <h1 className="font-bold text-2xl w-[300px] text-center">LOGIN</h1>
        <div>
          <fieldset className="border border-solid rounded-full border-slate-700 overflow-hidden w-[300px] ">
            <legend className="text-sm ml-1">
              <label htmlFor="user">login</label>
            </legend>
            <input
              type="text"
              id="user"
              placeholder="John Joe"
              {...register("user_name", { required: true })}
              defaultValue=""
              className="rounded-full bg-transparent outline-none pb-2 px-4 w-full"
            />
          </fieldset>
          <div className="h-[5px]">
            {errors.user_name && (
              <span className="text-sm text-red-800 font-bold p-0 m-0">
                *Campo obrigatório!
              </span>
            )}
          </div>
        </div>
        <div>
          <fieldset className="border border-solid rounded-full border-slate-700 overflow-hidden w-[300px] ">
            <legend className="text-sm ml-1">
              <label htmlFor="pass">senha</label>
            </legend>
            <input
              type="password"
              id="pass"
              placeholder="*********"
              {...register("user_password", { required: true })}
              className="rounded-full bg-transparent outline-none pb-2 px-4 w-full"
              defaultValue=""
            />
          </fieldset>
          <div className="h-[5px]">
            {errors.user_password && (
              <span className="text-sm text-red-800 font-bold">
                *Campo obrigatório!
              </span>
            )}
          </div>
        </div>
        <div className="w-[300px] text-center h-2 text-red-900 mb-3 font-semibold">
          {message}
        </div>
        <button
          type="submit"
          className="bg-slate-700 hover:bg-slate-800 transition-colors w-[300px] rounded-full py-3 text-white disabled:bg-slate-500 disabled:cursor-not-allowed"
        >
          Entrar
        </button>
        <div className="w-[300px] text-center h-2">
          <Link to="/forgotPass" className="underline">
            Esqueceu a senha?
          </Link>
        </div>
      </form>
    </div>
  );
}
