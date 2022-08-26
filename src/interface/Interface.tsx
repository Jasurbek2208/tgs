import { Dispatch, SetStateAction } from "react";
import { IData, IPosit } from "../context/Context";

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