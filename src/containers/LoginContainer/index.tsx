import React from 'react';

import InputComponent from '../../components/InputComponent';

import { Container } from './styles';

const LoginContainer = () => (
  <Container>
    <div className='header'>
      <h1>Sign in</h1>
    </div>
    <div className='div-form'>
      <InputComponent />
      <InputComponent />
      <InputComponent />
    </div>
  </Container>
);

export default LoginContainer;
