
import React,{useState,useContext,useEffect} from 'react'
import styled from 'styled-components'
import Loader from '../../../Components/Loader/Loader';
import SearchInput from '../../../Components/searchinput/SerchInput';
import { UsersStyled } from "../../../Components/usermain/UsersStyled";
import { IContext, IData } from '../../../context/Context';
import { MyContext } from '../../../context/Context';
export default function SpeakerCard() {
    const [checkStore, setCheckStore] = useState<string[]>([]);
    const [isopen, setisopen] = useState<boolean>(false);
    const {SpeakerGet,loading,usersSpeaker} = useContext<IContext>(MyContext);
    
  return (
    <StyledSpeaker>
        <UsersStyled>
        <section className="user--card">
          <div className="first--div">
            <div className="tag--div">
              <h2>{checkStore.length} Tickets selected</h2>
            </div>
            <div className="icon--div">
              {checkStore.length > 0 ? (
                <div className="icon icon-icon1"></div>
              ) : null}
              <div
                className={
                  "icon " +
                  (checkStore.length === 1 ? "icon-icon2" : "icon-addUser")
                }
                onClick={() => setisopen(true)}
              ></div>
              <div className="icon icon-icon3"></div>
              <div className="icon icon-icon4"></div>
              <div className="icon icon-icon5"></div>
            </div>
          </div>
          <div className="second--div">
            <SearchInput />
          </div>
          <div className="end--div">
            <div className="user-information">
              <div className="expand">
                <input type="checkbox"/>
                <p>Full name</p>
              </div>
            </div>
          </div>
        </section>
        {loading ? (
          <Loader />
        ) : (
          usersSpeaker?.data?.map((i: IData, idx: number) => (
            <div className="map" key={idx}>
              <div className="fullName">
                <input
                  type="checkbox"
                  checked={checkStore.includes(i._id)}
                />
                <p
                  onClick={() => {
                    setisopen(true);
                  }}
                >{i?.name.uz}</p>
              </div>
              <div className="date">
                <p>{i?.__v}</p>
              </div>
              <div className="soha">
                <p>{i?.name.ru}</p>
              </div>
              <div className="brand">
                <p>{i?.name.en}</p>
              </div>
            </div>
          ))
        )}
        </UsersStyled>
    </StyledSpeaker>
  )
}
const StyledSpeaker = styled.div`
    .map {
    padding: 13px 18px;
    display: flex;
    align-items: center;

    & > div {
      width: 200px;
      padding: 4px 0;

      &.fullName {
        display: flex;
        align-items: center;
        gap: 8px;

        p {
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          color: #181c25;
          margin: 0;
        }
      }

      &.lavozimi {
        display: flex;

        .banOrAcrive {
          cursor: pointer;
          padding: 2.5px 8px;
          background: rgba(255, 59, 59, 0.14);
          border-radius: 6px;
          font-weight: 600;
          font-size: 12px;
          line-height: 14px;
          color: #ff3b3b;
        }
      }

      p {
        margin: 0;
        color: #8992aa;
      }
    }
  }`
