import React from 'react'
import Botton from '../addUserModal/botom/Botton'
import Input from '../input/Input'

//
import { ModalStyled } from './ModalStyled'

export default function ModalCard() {
  return (
    <ModalStyled>
        <h1>Add user</h1>
        <form className='form--wrapper'>
            <Input/>
            <Input/>
            <Input/>
            <Botton/>
        </form>
    </ModalStyled>
  )
}
