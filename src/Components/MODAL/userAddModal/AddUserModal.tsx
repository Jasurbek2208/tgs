import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

// Context
import { MyContext } from "../../../context/Context";
import { IContext } from "../../../interface/Interface";

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
  user?: any;
}

export default function AddUserModalPosition({ adduser, set, user }: Adduser) {
  // Context imports
  const { postUsers, usersPut, userPosit, userField, getPosition, getFeild } =
    useContext<IContext>(MyContext);

  const [name, setName] = useState({
    fullName: "",
    phoneNumber: "",
    fieldId: "",
    brand: "",
    employeeCount: 1,
    positionId: "",
  });

  function onchange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setName((p:any) => ({ ...p, [name]: value }));
  }
  console.log(name);
  function save() {
    if (postUsers) {
      let count = Number(name.employeeCount);

      setName((p:any) => ({ ...p, employeeCount: count }));
      postUsers(name);
    }
    // const _id = user?._id;
    // if (usersPut) {
    //   usersPut({ _id, name });
    // }
    setName({
      fullName: "",
      phoneNumber: "",
      fieldId: "",
      brand: "",
      employeeCount: 1,
      positionId: "",
    });
    set(false);
  }

  useEffect(() => {
    if (getPosition) getPosition();
    if (getFeild) getFeild();
    if (!user?._id) return;
    setName(user);
  }, []);

  return (
    <Styledapp>
      <form action="">
        <h1>{adduser ? "Add user" : "Edit user"}</h1>
        <Input
          placeholder="Full name *"
          onChange={onchange}
          name="fullName"
          value={name.fullName}
          setName={setName}
        />
        <Input
          placeholder="Phone number *"
          onChange={onchange}
          name="phoneNumber"
          value={name.phoneNumber}
          setName={setName}
        />
        <Secect placeholder="Fields" usersDate={userField} setName={setName} />
        <Input
          placeholder="Brand"
          name="brand"
          onChange={onchange}
          value={name.brand}
          setName={setName}
        />
        <Input
          placeholder="Employee count"
          name="employeeCount"
          onChange={onchange}
          value={name.employeeCount}
          setName={setName}
        />
        <Secect
          placeholder="Positions"
          usersDate={userPosit}
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
