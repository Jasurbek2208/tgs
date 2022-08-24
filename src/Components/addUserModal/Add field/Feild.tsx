import React, { useContext, useState,useEffect } from "react";
import styled from "styled-components";
import { IContext, MyContext } from "../../../context/Context";

import Botton from "../botom/Botton";
import Input from "../input/Input";

export interface Field {
  id: number;
  name: string;
}
interface Fields {
  adduser: boolean;
  set: Function;
  user?: {
    _id: string;
    name: {
      uz: string;
      ru: string;
      en: string;
    }
  };
}
export default function Feild({ adduser, set,user }: Fields): JSX.Element {
  const { postFeild, PutFeild  } = useContext<IContext>(MyContext);
  useEffect(() => {
    if(!user?._id) return
    setName(user.name);
  }, [user]);
  
  const [name, setName] = useState({
    uz: "",
    ru: "",
    en: "",
  });

  function onchange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setName((p) => ({ ...p, [name]: value }));
  }

  function save() {
    if (user?.name?.uz === "") {
      if (postFeild) {
        postFeild({ name });
      }
    } else {
      let _id = user?._id;
      if (PutFeild) {
        PutFeild({_id, name});
      } 
    }

    setName({
      uz: "",
      ru: "",
      en: "",
    });
    set(false);
  }

  return (
    <Styledapp>
      <form>
        <h1>{adduser ? "Add field" : "Edit field"}</h1>
        <Input
          placeholder="Name in English *"
          onChange={onchange}
          name="uz"
          value={name.uz}
          setName={setName}
        />
        <Input
          placeholder="Name in Russian *"
          onChange={onchange}
          name="ru"
          value={name.ru}
          setName={setName}
        />
        <Input
          placeholder="Name in Uzbek *"
          onChange={onchange}
          name="en"
          value={name.en}
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
  position: absolute;
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
    background: #fff;
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
