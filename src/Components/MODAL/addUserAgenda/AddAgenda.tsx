import { useContext, useState } from "react";
import styled from "styled-components";

import { IContext, MyContext } from "../../../context/Context";

import Botton from "../../addUserModal/botom/Botton";
import Input from "../../addUserModal/input/Input";
import Secect from "../../addUserModal/select/select2/Secect";

export interface Field {
  id: number;
  name: string;
}
interface Adduser {
  adduser: boolean;
  set: Function;
}
export default function AddAgenda({ adduser, set }: Adduser) {
  const { postAgenda, userAgenda } = useContext<IContext>(MyContext);

  const [name, setName] = useState({
    name: {
      uz: "",
      ru: "",
      en: "",
    },
    type: "",
    startTime: "",
    endTime: "",
  });

  function onchange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setName((p) => ({ ...p, [name]: value }));
  }
  function onchangeName(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setName((p: any) => ({
      ...p,
      name: { en: p.name.en, ru: p.name.ru, uz: p.name.uz, [name]: value },
    }));
  }

  function save() {
    if (postAgenda) {
      postAgenda({ name });
      console.log(name);
    }
    setName({
      name: {
        uz: "",
        ru: "",
        en: "",
      },
      type: "",
      startTime: "",
      endTime: "",
    });
    set(false);
  }

  return (
    <Styledapp>
      <form action="">
        <h1>{adduser ? "Add activity" : "Edit activity"}</h1>
        {/* <Secect options={}  /> */}
        <Input
          placeholder="Name in English * *"
          onChange={onchangeName}
          name="en"
          value={name.name.en}
          setName={setName}
        />
        <Input
          placeholder="Name in Russian * *"
          onChange={onchangeName}
          name="ru"
          value={name.name.ru}
          setName={setName}
        />
        <Input
          placeholder="Name in Uzbek *"
          name="uz"
          onChange={onchangeName}
          value={name.name.uz}
          setName={setName}
        />
        <Input
          placeholder="Start time *"
          name="startTime"
          onChange={onchange}
          value={name.startTime}
          setName={setName}
        />
        <Input
          placeholder="End time *"
          name="endTime"
          onChange={onchange}
          value={name.endTime}
          setName={setName}
        />
        <Input
          placeholder="Speaker"
          name="type"
          onChange={onchange}
          value={name.type}
          setName={setName}
        />
        <div className="buton">
          <Botton pe={false} typee="button" onclik={() => save()}>
            Save
          </Botton>
          <Botton typee="submit" pe={true} onclik={() => set(false)}>
            Cancel
          </Botton>
        </div>
      </form>
    </Styledapp>
  );
}

const Styledapp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  justify-content: flex-end;
  form {
    .buton {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    padding: 33px 23px;
    background: #ffffff;
    box-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    h1 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;
      font-size: 22px;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0em;
      margin-bottom: 39px;
    }
  }
`;
