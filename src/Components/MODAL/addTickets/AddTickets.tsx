import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

// Context
import { MyContext } from "../../../context/Context";
import { IContext } from "../../../interface/Interface";

// Components
import Botton from "../../addUserModal/botom/Botton";
import Input from "../../addUserModal/input/Input";
import Secect from "../../addUserModal/select/select2/Secect";



export default function AddTickets({ adduser, set, user }: Adduser) {
  // Context imports
  const {postTickets} = useContext<IContext>(MyContext);

  const [name, setName] = useState({
    category: "",
    sector: "",
    row: "",
    seat: "",
    price: 1200,
  });

  function onchange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setName((p) => ({ ...p, [name]: value }));
  }
  console.log(name);
  function save() {
    if (postTickets) {
      let count = Number(name.price);
      console.log(typeof count, count);

      setName((p) => ({ ...p, price: count }));
      postTickets(name);
    }
    // setName({
    //   category: "",
    //   sector: "",
    //   row: "",
    //   seat: "",
    //   price: 1200,
    // });
    set(false);
  }

  const options: {}[] = [
    {
        id: 0,
        name: "vip",
    },
    {
        id: 0,
        name: "premium",
    },
    {
        id: 0,
        name: "business",
    },
    {
        id: 0,
        name: "econom",
    },
  ]


  useEffect(() => {
    if (!user?._id) return;
    setName(user);
  }, []);

  return (
    <Styledapp>
      <form action="">
        <h1>{adduser ? "Add user" : "Edit user"}</h1>
        <Secect placeholder="category" setName={setName} options={options} />
        <Input
          placeholder="Sector *"
          onChange={onchange}
          name="sector"
          value={name.sector}
          setName={setName}
        />
        <Input
          placeholder="Row *"
          name="row"
          onChange={onchange}
          value={name.row}
          setName={setName}
        />
        <Input
          placeholder="Seat *"
          name="seat"
          onChange={onchange}
          value={name.seat}
          setName={setName}
        />
        <Input
          placeholder="Narxi *"
          name="price"
          onChange={onchange}
          value={name.price}
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
