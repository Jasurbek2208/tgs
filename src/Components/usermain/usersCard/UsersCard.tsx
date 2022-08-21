import { useContext, useEffect } from "react";
import styled from "styled-components";

//
import { IContext, MyContext } from "../../../context/Context";


export default function UsersCard() {
  const { userPosit } = useContext<IContext>(MyContext);

  return (
    <StyledUserCard>
    </StyledUserCard>
  );
}

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
        color: #8992AA;
      }
    }
  }
`;
