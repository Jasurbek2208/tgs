import React, { useState } from "react";
import styled from "styled-components";
import { IData, IPosit } from "../../../../context/Context";
import { Field } from "../../userAddModal/AddUserModal";

export interface SecectProps {
  options?: any;
  usersDate?: IPosit;
}

export default function Secect({ options, usersDate }: SecectProps) {
  const [assa, setassa] = useState(false);
  const [value, setvalue] = useState("");
  function d(name: string) {
    setvalue(name);
    setassa(false);
  }

  console.log(usersDate);

  return (
    <SelectStyled>
      <section
        className="select_heder"
        onClick={() => {
          setassa((p) => !p);
        }}
      >
        <div className="ch_heder">
          <p>{value || "tanlang"}</p>
          <i className="icon ccc"></i>
        </div>
      </section>
      {!assa ? (
        <section className="select_list">
          <ul>
            {options
              ? options?.map((i: Field) => {
                  <li key={i.id} onClick={() => d(i.name)}>
                    {i.name}asd
                  </li>;
                })
              : usersDate?.data?.map((i: IData) => {
                  <li key={i._id} onClick={() => d(i.name.uz)}>
                    {i.name.uz}
                  </li>;
                })}
          </ul>
        </section>
      ) : null}
    </SelectStyled>
  );
}
const SelectStyled = styled.div`
  position: relative;
  .select_heder {
    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      margin-bottom: 12px;
    }
    .ch_heder {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #f6f6f6;
      border-radius: 8px;
      padding: 10px 19px 10px 12px;
      cursor: pointer;
      p {
        margin: 0;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
      }
    }
  }
  .select_list {
    position: absolute;
    background: #f6f6f6;
    box-shadow: 0px 2px 25px rgba(187, 187, 187, 0.35);
    border-radius: 20px;
    width: 100%;
    z-index: 2;
    left: 0;
    bottom: 0;
    transform: translateY(calc(100% + 12px));
    max-height: 300px;
    overflow-y: auto;
    ul {
      padding: 20px;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 14px;
      li {
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        cursor: pointer;
        &:hover {
          color: royalblue;
        }
      }
    }
  }
`;
