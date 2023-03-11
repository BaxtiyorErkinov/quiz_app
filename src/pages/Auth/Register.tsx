import React, { ChangeEvent } from 'react';

import TextField from '@/components/TextField';
import { Form, FormContainer } from './FormComponents';
import Button from '@/components/Button';
import { Link, useNavigate } from 'react-router-dom';

import { FiLock } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';

import Validator from '@/utils/ValidationForm';
import { IUser } from '@/models/IUser';

const initialState = {
  username: '',
  email: '',
  password: '',
};

const validator = new Validator({
  email: {
    type: 'string',
    maxLength: 60,
    minLength: 5,
  },
  username: {
    type: 'string',
    maxLength: 60,
    minLength: 5,
  },
  password: {
    type: 'string',
    maxLength: 60,
    minLength: 5,
  },
});

const Register: React.FC = () => {
  const [params, setParams] = React.useState(initialState);
  const [validations, setValidations] = React.useState(initialState);
  const [valid, errors] = validator.checkAgainstSchema(params);
  const navigate = useNavigate();

  const handleChange = (key: keyof typeof initialState, value: string) => {
    const [, error] = validator.check(key, value);
    console.log(error);

    setValidations((state) => ({ ...state, [key]: error }));

    setParams((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (valid) {
      const usersDB = JSON.parse(
        localStorage.getItem('usersDB') || '[]',
      ) as IUser[];

      localStorage.setItem('user', JSON.stringify(params));
      if (usersDB.length) {
        const res = [...usersDB, params];
        localStorage.setItem('usersDB', JSON.stringify([...usersDB, params]));
        return;
      }

      localStorage.setItem('usersDB', JSON.stringify([params]));
      navigate('/');
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <TextField
          type="text"
          value={params.username}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange('username', e.target.value)
          }
          placeholder="Username"
          icon={<AiOutlineUser />}
          error={!!validations.username}
          helperText={validations.username}
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
          bgColor="#2dc653"
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
