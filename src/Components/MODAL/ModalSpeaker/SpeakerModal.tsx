import React, { useContext, useState,useEffect } from "react";
import styled from "styled-components";
import { IContext, MyContext } from "../../../context/Context";

import Botton from "../../addUserModal/botom/Botton";
import Input from "../../addUserModal/input/Input";

export interface Field {
  id: number;
  name: string;
}
interface Speaker {
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
export default function SpeakerModal({ adduser, set,}: Speaker): JSX.Element {
  const { SpeakerPost, PutFeild,usersSpeaker  } = useContext<IContext>(MyContext);

  const [name , setname] = useState({
    uz: "",
    ru: "",
    en: "",
  })
  const [bio , setbio] = useState({
      uz: "",
      ru: "",
      en: "",
  })
  
  function SpeakerChange(e: React.ChangeEvent<HTMLInputElement>){
    const {name,value} = e.target;
    setname(p=>({...p,[name]:value}))
    console.log(name);
  }
  
  function Speakerbio(e: React.ChangeEvent<HTMLInputElement>){
    const {name,value} = e.target;
    setbio(p=>({...p,[name]:value}))
    console.log(name);
  }
  function save(){
    if(SpeakerPost){
    SpeakerPost({name,bio, image: "https:/skdsld"});
    set(false);
    }

  }
  return (
    <Styledapp>
      <form>
        <h1>{adduser ? "Add Speaker" : "Edit Speaker"}</h1>
        <Input
          placeholder="Name in English *"
          onChange={SpeakerChange}
          name="en"
          value={name.en}
        />
        <Input
          placeholder="Name in Russian *"
          onChange={SpeakerChange}
          name="ru"
          value={name.ru}
        />
        <Input
          placeholder="Name in Uzbek *"
          onChange={SpeakerChange}
          name="uz"
          
          value={name.uz}
        />
        
        <Input
          placeholder="Bio in English*"
          onChange={Speakerbio}
          name="en"
          value={bio.en}
        />
        <Input
          placeholder="Bio in Russian *"
          onChange={Speakerbio}
          name="ru"
          value={bio.ru}
        />
        <Input
          placeholder="Bio in Uzbek *"
          onChange={Speakerbio}
          name="uz"
          value={bio.uz}
        />
        <div className="buton">
            <Botton pe={false} typee="button" onclik={()=>{save()}} >  
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
