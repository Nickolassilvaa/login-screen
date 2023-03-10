import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import MyContext from "../context/loggedContext";
import { Link, Navigate } from "react-router-dom";
import { Md5 } from "md5-typescript";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../api/service";
import LoadingSpin from "react-loading-spin";

const schema = z.object({
  user_name: z.string().min(1, "Campo Obrigatório"),
  user_password: z.string().min(1, "Campo Obrigatório"),
  user_passwordConfirm: z.string().min(1, "Campo Obrigatório"),
});

type InputsType = z.infer<typeof schema>;

type Inputs = {
  id?: number;
  user_name: string;
  user_password: string;
  user_passwordConfirm: string;
};

export function ForgotPass() {
  const { setState, state } = useContext(MyContext);
  const [message, setMessage] = useState<String>("");
  const [messagePass, setMessagePass] = useState<String>("");
  const [response, setResponse] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>({
    resolver: zodResolver(schema),
  });

  async function updateUser(data: Inputs) {
    api
      .put(`users/${data.id}`, {
        id: data.id,
        user_name: data.user_name,
        user_password: data.user_password,
      })
      .then(async () => {
        setMessage("Senha alterada com sucesso");
        await new Promise((r) => setTimeout(r, 5000));

        setResponse(!response);
      })
      .catch((e) => console.log(e));
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await api
        .get("users")
        .then((response) => response.data)
        .then((users) => {
          users.map((user: Inputs) => {
            if (user.user_name === data.user_name) {
              const passHash = Md5.init(Md5.init(data.user_password));
              const passHashConfirm = Md5.init(
                Md5.init(data.user_passwordConfirm)
              );

              if (passHash !== passHashConfirm) {
                setMessagePass("Senha diferente!");
                return;
              }

              if (user.user_password === passHash) {
                setMessage("Senha igual a anterior, tente outra!");
                return;
              }

              data = {
                ...user,
                user_password: Md5.init(Md5.init(data.user_password)),
              };

              updateUser(data);
            } else {
              setMessage("Usuário informado não existe!");
            }
          });
        })
        .catch((e) => console.log(e));
    } catch (error) {
      console.log(error);
    }
  };

  let storedArray = localStorage.getItem("oauth");
  const oauth = JSON.parse(storedArray!);

  if (oauth) {
    setState(!state);
  }
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      {state === true && <Navigate to="/home" replace={true} />}
      {response === true && <Navigate to="/login" replace={true} />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-start gap-5 h-auto px-6 py-16 rounded-lg shadow-2xl border"
      >
        <h1 className="font-bold text-2xl w-[300px] text-center">
          ALTERAR LOGIN
        </h1>
        <div>
          <fieldset className="border border-solid rounded-full border-slate-700 overflow-hidden w-[300px] ">
            <legend className="text-sm ml-1">
              <label htmlFor="user">nome</label>
            </legend>
            <input
              id="user"
              type="text"
              defaultValue=""
              placeholder="John Joe"
              {...register("user_name")}
              className="rounded-full bg-transparent outline-none pb-2 px-4 w-full"
            />
          </fieldset>
          <div className="h-[5px]">
            <span className="text-sm text-red-800 font-bold p-0 m-0">
              {errors?.user_name?.message}
            </span>
          </div>
        </div>
        <div>
          <fieldset className="border border-solid rounded-full border-slate-700 overflow-hidden w-[300px] ">
            <legend className="text-sm ml-1">
              <label htmlFor="pass">nova senha</label>
            </legend>
            <input
              id="pass"
              type="password"
              defaultValue=""
              placeholder="*********"
              {...register("user_password")}
              className="rounded-full bg-transparent outline-none pb-2 px-4 w-full"
            />
          </fieldset>
          <div className="h-[5px]">
            <span className="text-sm text-red-800 font-bold p-0 m-0">
              {errors?.user_password?.message}
            </span>
          </div>
        </div>
        <div>
          <fieldset className="border border-solid rounded-full border-slate-700 overflow-hidden w-[300px] ">
            <legend className="text-sm ml-1">
              <label htmlFor="pass">Confirmar senha</label>
            </legend>
            <input
              id="passConfirm"
              type="password"
              defaultValue=""
              placeholder="*********"
              {...register("user_passwordConfirm")}
              className="rounded-full bg-transparent outline-none pb-2 px-4 w-full"
            />
          </fieldset>
          <div className="h-[5px]">
            <span className="text-sm text-red-800 font-bold p-0 m-0">
              {errors.user_passwordConfirm
                ? errors?.user_passwordConfirm?.message
                : `${messagePass}`}
            </span>
          </div>
        </div>

        <div className="w-[300px] text-center h-2 mb-3 font-semibold">
          {message}
        </div>
        <button
          type="submit"
          className="bg-slate-700 hover:bg-slate-800 transition-colors w-[300px] rounded-full py-3 text-white disabled:bg-slate-500 disabled:cursor-not-allowed"
        >
          Alterar
        </button>
        <div className="w-[300px] text-center h-2">
          <Link to="/login" className="underline">
            Fazer login
          </Link>
        </div>
      </form>
    </div>
  );
}
