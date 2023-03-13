import React, { ChangeEvent } from 'react';

import TextField from '@/components/TextField';
import { Form, FormContainer } from './FormComponents';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';

import { FiLock } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { useRegister } from './hooks/useRegister';
import { useTheme } from 'styled-components';
import { Theme } from '@/theme/default';

const Register: React.FC = () => {
  const { handleChange, handleSubmit, params, valid, validations } =
    useRegister();
  const { colors } = useTheme();

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <TextField
          type="text"
          value={params.fullName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange('fullName', e.target.value)
          }
          placeholder="Username"
          icon={<AiOutlineUser />}
          error={!!validations.fullName}
          helperText={validations.fullName}
        />
        <TextField
          type="email"
          value={params.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange('email', e.target.value)
          }
          placeholder="Email"
          icon={<MdMailOutline />}
          error={!!validations.email}
          helperText={validations.email}
        />
        <TextField
          type="password"
          value={params.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange('password', e.target.value)
          }
          placeholder="Password"
          icon={<FiLock />}
          error={!!validations.password}
          helperText={validations.password}
        />
        <Button
          bgColor={colors.green}
          disabled={!valid}
          onClick={() => console.log('1')}>
          SUBMIT
        </Button>
        <Link to="/signin">Sign In</Link>
      </Form>
    </FormContainer>
  );
};

export default Register;
