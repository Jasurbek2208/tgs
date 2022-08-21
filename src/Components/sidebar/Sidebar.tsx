import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

// user default Avatar icon
import userAvatar from "../../assets/img/userAvatarIcon.png";

export default function Sidebar() {
  const location: string = useLocation().pathname;
  const navigate = useNavigate();

  function pageOut() {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("ISAUTH");
    navigate("/login");
  }

  return (
    <StyledSidebar>
      <div className="userAvatar">
        <img src={userAvatar} alt="UserAvatar" />
      </div>
      <Link to="/fields">
        <div
          className={"icon__wrapper" + (location === "/fields" ? " On" : "")}
        >
          <div className="icon icon-fields"></div>
        </div>
      </Link>
      <Link to="/positions">
        <div
          className={"icon__wrapper" + (location === "/positions" ? " On" : "")}
        >
          <div className="icon icon-positions"></div>
        </div>
      </Link>
      <Link to="/users">
        <div className={"icon__wrapper" + (location === "/users" ? " On" : "")}>
          <div className="icon icon-users"></div>
        </div>
      </Link>
      <Link to="/settings">
        <div className={"icon__wrapper" + (location === "/settings" ? " On" : "")}>
          <div className="icon icon-settings"></div>
        </div>
      </Link>
      <div className="icon__wrapper out" onClick={pageOut}>
        <div className="icon icon-out"></div>
      </div>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  padding: 17px 14px;
  width: 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  position: fixed;
  background-color: #fff;

  .userAvatar {
    max-width: 58px;
    max-height: 58px;
    margin-bottom: 32px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .icon__wrapper {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;

    &.On {
      background: #e3ebff;
      border-radius: 16px;

      .icon {
        background-color: #3b72ff;
      }
    }

    &.out {
      position: absolute;
      bottom: 32px;
    }
  }
`;
