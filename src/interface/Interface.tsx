import { Dispatch, SetStateAction } from "react";

export interface IAuth {
  auth?: {
    token: string;
    _id: number;
    phoneNumber: string;
    password: string;
    isAuth: boolean;
  };
}
export interface ILogin {
  backfon?: string;
  userLogin?: (value: IUser) => Promise<void>;
  user?: IUser;
}
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

// Login
export interface IContext {
  auth: {};
  setAuth: Dispatch<SetStateAction<{}>>;
  userLogin: () => Response;
}

// Agenda
export interface IAgenda {
  userAgenda: IPosit<IData>;
  setUserAgenda: Dispatch<SetStateAction<{}>>;
  getAgenda: () => Promise<void>;
  postAgenda: Function;
  deleteAgenda: Function;
}

// Field
export interface IField {
  getFeild: () => Promise<void>;
  userField: IPosit<IData>;
  postFeild: Function;
  deleteFeild: Function;
  PutFeild: Function;
}

// TICKETS
export interface ITickets {
  getTickets: () => Promise<void> | undefined;
  postTickets: Function;
  ticketsDelete: Function;
  tickets: any;
}

// Position
export interface IPosition {
  getPosition: () => Promise<void>;
  postPosition: Function;
  putPosition: Function;
  deletePosition: Function;
  userPosit: IPosit<IData>;
  setUserPosit: Dispatch<SetStateAction<{}>>;
}

// Speaker
export interface ISpeaker {
  SpeakerGet: () => Promise<void>;
  usersSpeaker: any;
  SpeakerPost: Function;
  SpeakerDelete: Function;
}

// Users
export interface IUsers {
  Getusers?: () => Promise<void>;
  users?: IPosit<IData>;
  postUsers?: Function;
  usersDelete?: Function;
  usersPut?: Function;
}

// Loading
export interface ILoading {
  loading?: boolean;
  addLoading?: boolean;
  setLoading?: Function;
}

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
