import { useState } from "react";
import styled from "styled-components";
import Botton from "../botom/Botton";
import Input from "../input/Input";
import Secect from "../select/select2/Secect";

export interface Field {
  id: number;
  name: string;
}

interface Adduser {
  adduser: boolean;
  set: Function;
}
export default function AddUserModal({ adduser, set }: Adduser) {
  const arr: Field[] = [
    {
      id: 1,
      name: "Fields",
    },
    {
      id: 2,
      name: "Positions",
    },
  ];

  const [name, setName] = useState({
    uz: "",
    ru: "",
    en: "",
  });

  return (
    <Styledapp>
      {adduser ? (
        <form>
          <h1>Add user</h1>
          <Input placeholder="Full name *" setName={setName} />
          <Input placeholder="Phone number *" setName={setName} />
          <Secect options={arr} />
          <Input placeholder="Brand" setName={setName} />
          <Input placeholder="Employee count" setName={setName} />
          {/* <Select /> */}
          <div className="buton">
            <Botton pe={false} typee="button">
              Save
            </Botton>
            <Botton typee="submit" pe={true} onclik={() => set(false)}>
              Cancel
            </Botton>
          </div>
        </form>
      ) : null}
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
