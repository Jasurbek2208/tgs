import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

//
import {MyContext } from "../../../context/Context";

//
import Loader from "../../../Components/Loader/Loader";
import SearchInput from "../../../Components/searchinput/SerchInput";
import { UsersStyled } from "../../../Components/usermain/UsersStyled";
import AddTickets from "../../../Components/MODAL/addTickets/AddTickets";
import { IContext, ITickets } from "../../../interface/Interface";

export const Tickets: React.FC = () => {
  const {getTickets, ticketsDelete, tickets } =useContext<ITickets>(MyContext);

  const [isopen, setisopen] = useState<boolean>(false);
  const [checkStore, setCheckStore] = useState<string[]>([]);

  const [curent, setCurent] = useState({
    fullName: "",
    phoneNumber: "",
    fieldId: "",
    brand: "",
    employeeCount: "",
    positionId: "",
  });

  // DELETE LOGICKASI....
  function checkedClick(id: string) {
    if (checkStore.includes(id)) {
      setCheckStore((p) => p.filter((i) => i !== id));
    } else {
      setCheckStore((p) => [...p, id]);
    }
  }

  function allChecked(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      tickets?.data?.forEach((i: IData) => {
        if (!checkStore.includes(i._id)) {
          setCheckStore((p) => [...p, i._id]);
        }
      });
    } else {
      setCheckStore([]);
    }
  }

  function deleteTickets() {
    if (ticketsDelete) {
      ticketsDelete({ ids: checkStore });
    }
  }
  // ========================================
  // get
  useEffect(() => {
      getTickets();
  }, []);

  useEffect(() => {
    if (checkStore.length === 0) {
      setCurent({
        fullName: "",
        phoneNumber: "",
        fieldId: "",
        brand: "",
        employeeCount: "",
        positionId: "",
      });
    }
  }, [checkStore]);

  return (
    <UsersStyled>
      <section className="user--card">
        <div className="first--div">
          <div className="tag--div">
            <h2>{checkStore.length} Users selected</h2>
          </div>
          <div className="icon--div">
            {checkStore.length > 0 ? (
              <div className="icon icon-icon1" onClick={deleteTickets}></div>
            ) : null}
            <div
              className={
                "icon " +
                (checkStore.length === 1 ? "icon-icon2" : "icon-addUser")
              }
              onClick={() => {
                setisopen(true);
              }}
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
              <input type="checkbox" onChange={allChecked} />
              <p>Kategoriya</p>
            </div>
            <div className="expand">
              <p>Sector</p>
            </div>
            <div className="expand">
              <p>Title</p>
            </div>
            <div className="expand">
              <p>Title</p>
            </div>
            <div className="expand">
              <p>Title</p>
            </div>
            <div className="expand">
              <p>Title</p>
            </div>
            <div className="expand">
              <p>Status</p>
            </div>
          </div>
        </div>
      </section>
      <StyledUserCard>
        {loading ? (
          <Loader />
        ) : (
          tickets?.data?.map((i: any) => (
            <div className="map" key={i._id}>
              <div className="fullName">
                <input
                  type="checkbox"
                  checked={checkStore.includes(i._id)}
                  onChange={() => {
                    checkedClick(i._id);
                    setCurent(i);
                  }}
                />
                <p
                  onClick={() => {
                    setisopen(true);
                    setCurent(i);
                  }}
                >
                  {i?.category}
                </p>
              </div>
              <div className="date">
                <p>{i?.sector}</p>
              </div>
              <div className="soha">
                <p>{i?.row}</p>
              </div>
              <div className="brand">
                <p style={{ marginLeft: "20px" }}>{i?.seat}</p>
              </div>
              <div className="brand">
                <p style={{ marginLeft: "20px" }}>{i?.price}</p>
              </div>
              <div className="brand">
                <p>{i?.__v}</p>
              </div>
              <div className="brand">
                <p>{i?._id}</p>
              </div>
            </div>
          ))
        )}
      </StyledUserCard>

      {/* USERS CARD */}

      {isopen ? (
        <AddTickets
          adduser={checkStore.length === 1 ? false : true}
          set={setisopen}
          user={curent}
        />
      ) : null}
    </UsersStyled>
  );
};

const StyledUserCard = styled.div`
  div {
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
        font-size: 13px;
        line-height: 15px;
      }
    }
  }
`;
