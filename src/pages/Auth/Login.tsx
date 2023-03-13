import React, { ChangeEvent } from 'react';

import TextField from '@/components/TextField';
import { Form, FormContainer } from './FormComponents';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';

import { MdMailOutline } from 'react-icons/md';
import { FiLock } from 'react-icons/fi';
import { useSignIn } from './hooks/useSignIn';

const Login: React.FC = () => {
  const { handleChange, handleSubmit, params, valid, validations } =
    useSignIn();

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
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
        <Button bgColor="#2dc653" disabled={!valid}>
          SUBMIT
        </Button>
        <Link to="/signup">Sign Up</Link>
      </Form>
    </FormContainer>
  );
};

export default Login;
