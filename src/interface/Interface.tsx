import { Dispatch, SetStateAction } from "react";

export interface IContext {
  // Login
  auth?: {};
  setAuth?: Dispatch<SetStateAction<{}>>;
  userLogin?: () => Response;
  // Position
  getPosition?: () => Promise<void>;
  postPosition?: Function;
  putPosition?: Function;
  deletePosition?: Function;
  userPosit?: IPosit<IData>;
  setUserPosit?: Dispatch<SetStateAction<{}>>;
  // Field
  getFeild?: () => Promise<void>;
  userField?: IPosit<IData>;
  postFeild?: Function;
  deleteFeild?: Function;
  PutFeild?: Function;
  // Agenda
  userAgenda?: IPosit<IData>;
  setUserAgenda?: Dispatch<SetStateAction<{}>>;
  getAgenda?: () => Promise<void>;
  postAgenda?: Function;
  deleteAgenda?: Function;
  // Loading
  loading?: boolean;
  addLoading?: boolean;
  setLoading?: Function;
  // users
  Getusers?: () => Promise<void>;
  users?: IPosit<IData>;
  postUsers?: Function;
  usersDelete?: Function;
  usersPut?: Function;
  // Speaker
  SpeakerGet?: () => Promise<void>;
  usersSpeaker?: any;
  SpeakerPost?: Function;
  SpeakerDelete?: Function;
  // TICKETS
  getTickets?: () => Promise<void> | undefined;
  postTickets?: Function;
  ticketsDelete?: Function;
  tickets?: any;
}

//   export interface ITickets

// AUTH state interface
export interface IRes {
  data: {
    code: number;
    message: string;
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
export interface IPosit<T> {
  total: number;
  data: T[];
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
  type: string;
  startTime: string;
  endTime: string;
}
export interface Speaker {
  data: {
    _id: string;
    checked?: boolean;
    name: {
      uz: string;
      en: string;
      ru: string;
    };
    bio?: {
      uz: string;
      en: string;
      ru: string;
    };
    image?: string;
    __v?: number;
  };
}
export interface S {
  _id: string;
  checked?: boolean;
  name: {
    uz: string;
    en: string;
    ru: string;
  };
  bio?: {
    uz: string;
    en: string;
    ru: string;
  };
  image?: string;
  __v?: number;
}
export interface IUsers {
  _id?: string;
  phoneNumber?: string;
  fullName?: string;
  fieldId?: string;
  brand?: string;
  employeeCount?: number;
  positionId?: string;
  __v?: number;
}
