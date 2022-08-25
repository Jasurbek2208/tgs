import React, { useState } from "react";
import styled from "styled-components";

interface IInput {
  placeholder: string;
  type?: string;
  onChange?: any;
  name: string;
  value?: string | number;
  setName?: React.Dispatch<any>;
  noClear?: boolean;
}

export default function Input({
  placeholder,
  onChange,
  name,
  value,
  setName,
  type = "text",
  noClear,
}: IInput) {
  function clearClicked(name: string) {
    if (setName) {
      setName((p: {}) => ({ ...p, [name]: "" }));
      // setName((p: {}) => console.log(p));
    }
  }
  return (
    <StyledInput>
      <div className="div">
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
        />
        {noClear ? null : (
          <div className="icon close" onClick={() => clearClicked(name)}></div>
        )}
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
