import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

// Context
import { IContext, MyContext } from "../../../context/Context";

// Components
import Botton from "../../addUserModal/botom/Botton";
import Input from "../../addUserModal/input/Input";
import Secect from "../../addUserModal/select/select2/Secect";

// Interfaces
export interface Field {
  id: number;
  name: string;
}
interface Adduser {
  adduser: boolean;
  set: Function;
  user?: {
    _id: string;
    name: {
      uz: string;
      ru: string;
      en: string;
    };
  };
}

export default function AddUserModalPosition({ adduser, set, user }: Adduser) {
  // Context imports
  const { postUsers, usersPut, userPosit, userField, getPosition, getFeild } =
    useContext<IContext>(MyContext);

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
      if (postUsers) {
        postUsers({ name });
      }
    } else {
      const _id = user?._id;
      if (usersPut) {
        usersPut({ _id, name });
      }
    }
    setName({
      uz: "",
      ru: "",
      en: "",
    });
    set(false);
  }

  useEffect(() => {
    if (getPosition) getPosition();
    if (getFeild) getFeild();
    if (!user?._id) return;
    setName(user.name);
  }, []);

  const options = [
    {
      id: 0,
      name: "new",
    },
    {
      id: 0,
      name: "old",
    },
  ];

  return (
    <Styledapp>
      <form action="">
        <h1>{adduser ? "Add user" : "Edit user"}</h1>
        <Secect options={options} />
        <Input
          placeholder="Full name *"
          onChange={onchange}
          name="uz"
          value={name.uz}
          setName={setName}
        />
        <Input
          placeholder="Phone number *"
          onChange={onchange}
          name="ru"
          value={name.ru}
          setName={setName}
        />
        <Secect usersDate={userField} />
        <Input
          placeholder="Brand"
          name="en"
          onChange={onchange}
          value={name.en}
          setName={setName}
        />
        <Input
          placeholder="Employee count"
          name="EmployeeCount"
          onChange={onchange}
          value={name.en}
          setName={setName}
        />
        <Secect usersDate={userPosit} />
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
