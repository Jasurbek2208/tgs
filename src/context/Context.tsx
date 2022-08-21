import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";
import { myAxios } from "../service/axios/index";

export const MyContext = createContext({});

//

export interface IContext {
  auth?: {};
  setAuth?: Dispatch<SetStateAction<{}>>;
  userLogin?: () => Response;
  getPosition?: () => Promise<void>;
  postPosition?: Function;
  deletePosition?: Function;
  userPosit?: IPosit;
  setUserPosit?: Dispatch<SetStateAction<{}>>;
  getFeild?: () => Promise<void>;
  userField?: IPosit;
  postFeild?: Function;
  deleteFeild?: Function;
  loading?: boolean;
  addLoading?: boolean;
  setLoading?: Function;
}

// Dispatch<SetStateAction<IState>>

// AUTH state interface
export interface IRes {
  data: {
    code: number;
    data: {
      password: string;
      phoneNumber: string;
      token: string;
      _id: string;
      isAuth: boolean;
    };
  };
}

// Login interface
export interface IUser {
  password: string;
  phoneNumber: string;
}

// Position interface
export interface IPosit {
  total: number;
  data: IData[];
}
export interface IData {
  _id: string;
  checked?: boolean;
  name: {
    uz: string;
    en: string;
    ru: string;
  };
  __v: number;
}

const LoginContext: FC<{ children?: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  // AUTH state
  const [auth, setAuth] = useState({
    token: "",
    _id: "",
    phoneNumber: "",
    password: "",
    isAuth: false,
  });

  // POSITION REQUEST INTERFACE
  const [userPosit, setUserPosit] = useState<IPosit[]>([]);
  const [userField, setUserField] = useState<IPosit[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // AUTH STATE SUCSESS SET
  function sucsess(res: IRes) {
    setAuth((p) => ({
      ...p,
      token: res.data.data.token,
      _id: res.data.data._id,
      phoneNumber: res.data.data.phoneNumber,
      password: res.data.data.password,
      isAuth: true,
    }));
    localStorage.setItem("TOKEN", res.data.data.token);
    localStorage.setItem("ISAUTH", "true");
  }

  // LOGIN ========================
  async function userLogin(user: IUser) {
    try {
      const res: IRes = await myAxios.post("/login", user);
      sucsess(res);
      navigate("/users");
    } catch (error) {
      console.log(error);
      console.log("Ishlamadiii");
    }
  }
  //  ==========================================

  // FIELD CRUD FUNCTIONS ======================

  // POSITION GET STATE SUCSESS SET
  function sucsessPosit(res: IPosit[]) {
    setUserPosit(res);
  }

  // POSITIONS GET
  async function getPosition() {
    setLoading(true);
    try {
      const res = await myAxios.get("/position");
      if (res?.data) sucsessPosit(res.data.data);
    } catch (error) {
      console.log("Ishlamadi Position !");
    } finally {
      setLoading(false);
    }
  }
  // position DELETE
  async function deletePosition(ids: {}) {
    try {
      const res = await myAxios.delete("/position", { data: ids });
      getPosition();
    } catch (error) {
      console.log("Delete Position ishlamadi !");
    }
  }

  // position POST
  async function postPosition(name: {}) {
    setLoading(true);
    try {
      const res = await myAxios.post("/position", name);
      getPosition();
    } catch (error) {
      console.log("Post Position ishlamadi !");
    } finally {
      setLoading(false);
    }
  }
  // ===============================================

  // FIELD CRUD FUNCTIONS ======================
  // Feild POST
  async function postFeild(name: {}) {
    setLoading(true);
    try {
      const res = await myAxios.post("/field", name);
      getFeild();
    } catch (error) {
      console.log("Post Position ishlamadi !");
    } finally {
      setLoading(false);
    }
  }
  // Feild GET
  async function getFeild() {
    setLoading(true);
    try {
      const res = await myAxios.get("/field");
      if (res?.data) sucsessField(res.data.data);
    } catch (error) {
      console.log("Ishlamadi Feild !");
    } finally {
      setLoading(false);
    }
  }

  // Feild DELETE
  async function deleteFeild(ids: {}) {
    try {
      const res = await myAxios.delete("/field", { data: ids });
      getFeild();
    } catch (error) {
      console.log("Delete  ishlamadi !");
    }
  }

  function sucsessField(res: IPosit[]) {
    setUserField(res);
  }
  // ===============================================

  return (
    <MyContext.Provider
      value={{
        auth,
        setAuth,
        userLogin,
        userPosit,
        setUserPosit,
        getPosition,
        postPosition,
        deletePosition,
        postFeild,
        getFeild,
        userField,
        deleteFeild,
        loading,
        // addLoading,
        setLoading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default LoginContext;