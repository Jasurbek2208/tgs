import React from "react";
import styled from "styled-components";
import Botton from "../../Components/addUserModal/botom/Botton";
import Input from "../../Components/addUserModal/input/Input";
export default function Settings() {
  return (
    <StyledSettings>
      <main>
        <section>
          <Input placeholder="Youtube link in English*" />
          <Input placeholder="Youtube in Russian *" />
          <Input placeholder="Youtube in Uzbek *" />
        </section>
        <section>
          <Input placeholder="Local in English*" />
          <Input placeholder="Local in Russian *" />
          <Input placeholder="Local in Uzbek *" />
          <div className="botom_settings">
            <Botton typee="button">Save</Botton>
            <Botton typee="button" pe={true}>Cancel</Botton>
          </div>
        </section>
      </main>
    </StyledSettings>
  );
}
const StyledSettings = styled.div`
  height: 100vh;
  background-color: #f8f8f8;
  padding: 36px 38px;
  main {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    background: #ffffff;
    box-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
        padding: 28px 39px 46px 19px;
        max-width: max-content;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .botom_settings {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
