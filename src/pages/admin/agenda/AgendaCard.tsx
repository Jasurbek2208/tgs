import React, { useContext, useEffect, useState } from "react";

// Styles
import styled from "styled-components";
import { UsersStyled } from "../../../Components/usermain/UsersStyled";

// Components
import SearchInput from "../../../Components/searchinput/SerchInput";
import AddUserModalPosition from "../../../Components/MODAL/positionAddModal/AddUserModalPosition";

// Context & interface
import { MyContext } from "../../../context/Context";

// Loading
import Loader from "../../../Components/Loader/Loader";
import AddAgenda from "../../../Components/MODAL/addUserAgenda/AddAgenda";
import { IAgenda, ILoading } from "../../../interface/Interface";

function AgendaCard() {
  const { getAgenda, deleteAgenda, userAgenda} =useContext<IAgenda>(MyContext);
  const {loading} =useContext<ILoading>(MyContext);
  const [isopen, setisopen] = useState<boolean>(false);
  const [checkStore, setCheckStore] = useState<string[]>([]);

  // DELETE LOGICKASI....
  function checkedClick(id: string) {
    if (checkStore.includes(id)) {
      setCheckStore((p) => p.filter((i) => i !== id));
    } else {
      setCheckStore((p) => [...p, id]);
    }
  }

  function allChecked(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked){
      userAgenda?.data?.forEach((i:any) => {
        if (!checkStore.includes(i._id)) {
          setCheckStore((p) => [...p, i._id]);
        }
      });
    } else {
      setCheckStore([]);
    }
  }

  function deleteAgend() {
    if (deleteAgenda) {
      deleteAgenda({ ids: checkStore });
    }
  }
  // ========================================

  // get
  useEffect(() => {
      getAgenda();
  }, []);

  return (
    <UsersStyled2>
      <UsersStyled>
        <section className="user--card">
          <div className="first--div">
            <div className="tag--div">
              <h2>{checkStore.length} Users selected</h2>
            </div>
            <div className="icon--div">
              {checkStore.length > 0 ? (
                <div className="icon icon-icon1" onClick={deleteAgend}></div>
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
                <input type="checkbox" onChange={allChecked} />
                <p>Nomi</p>
              </div>
              <div className="expand">
                <p>Type</p>
              </div>
              <div className="expand">
                <p>Start</p>
              </div>
              <div className="expand">
                <p>End</p>
              </div>
              <div className="expand">
                <p>Duration</p>
              </div>
              <div className="expand">
                <p>Speaker</p>
              </div>
              <div className="expand">
                <p>Theme</p>
              </div>
            </div>
          </div>
        </section>
        {loading ? (
          <Loader />
        ) : (
          userAgenda?.data?.map((i: any) => (
            <div className="map" key={i._id}>
              <div className="fullName">
                <input
                  type="checkbox"
                  checked={checkStore.includes(i._id)}
                  onChange={() => checkedClick(i._id)}
                />
                <p>{i?.name.en}</p>
              </div>
              <div>
                <p>{i?.type}</p>
              </div>
              <div>
                <p>{i?.startTime}</p>
              </div>
              <div>
                <p>{i?.endTime}</p>
              </div>
              <div>
                <p>{i?.name.ru}</p>
              </div>
              <div>
                <p>{i?.name.uz}</p>
              </div>
              <div>
                <p>{i?.__v}</p>
              </div>
            </div>
          ))
        )}
      </UsersStyled>

      {isopen ? (
        <AddAgenda
          adduser={checkStore.length === 1 ? false : true}
          set={setisopen}
        />
      ) : null}
    </UsersStyled2>
  );
}

export default AgendaCard;

const UsersStyled2 = styled.div`
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
        font-weight: 500;
        font-size: 13px;
        max-width: 60px;
      }
    }
  }
`;
