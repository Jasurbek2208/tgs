import React, { useState } from "react";
import styled from "styled-components";

interface IInput {
  placeholder: string;
  onChange?: any;
  name?: string;
  value?: string;
  setName?: React.Dispatch<any>;
}

export default function Input({
  placeholder,
  onChange,
  name,
  value,
  setName,
}: IInput) {
  function clearClicked() {
    if (setName) {
      name === "uz"
        ? setName((p: {}) => ({ ...p, uz: "" }))
        : name === "ru"
        ? setName((p: {}) => ({ ...p, ru: "" }))
        : name === "EmployeeCount"
        ? setName((p: {}) => ({ ...p, "Employee count": "" }))
        : setName((p: {}) => ({ ...p, en: "" }));
    }
  }
  return (
    <StyledInput>
      <div className="div">
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
        />
        <div className="icon close" onClick={clearClicked}></div>
      </div>
    </StyledInput>
  );
}
const StyledInput = styled.div`
  .div {
    position: relative;
    .icon {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }
  }
  input {
    padding: 10px 12px;
    background: #f6f6f6;
    border-radius: 8px;
    width: 422px;
    border: none;

    &::placeholder {
      color: #343434;
    }

    &:focus {
      outline: none;
    }
  }
`;
