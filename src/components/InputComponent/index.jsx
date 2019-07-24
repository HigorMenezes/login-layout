import React from 'react';

import { Container } from './styles';

const ButtonComponent = () => (
  <Container>
    <div className='input-container'>
      <input id='txtName' type='text' />
      <label for='name'>Name</label>
    </div>
  </Container>
);

export default ButtonComponent;
