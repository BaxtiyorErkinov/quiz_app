import React, { ChangeEvent, FormEvent } from 'react';

import TextField from '@/components/TextField';
import { Form, FormContainer } from './FormComponents';
import { FiLock } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';
import Button from '@/components/Button';
import Validator from '@/utils/ValidationForm';
import { Link } from 'react-router-dom';
import { IUser } from '@/models/IUser';

const initialState = {
  email: '',
  password: '',
};

const validator = new Validator({
  email: {
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

const Login: React.FC = () => {
  const [params, setParams] = React.useState(initialState);
  const [validations, setValidations] = React.useState(initialState);
  const [valid, errors] = validator.checkAgainstSchema(params);

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
      if (usersDB.length) {
        const res = usersDB.findIndex(
          (el) => el.email === params.email && el.password == params.password,
        );
        if (res > -1) {
          localStorage.setItem('user', JSON.stringify(usersDB[res]));
          alert('Success');
          return;
        }
        alert('please sign up!!!');
        return;
      }
      alert('please sign up!!!');
    }
  };

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
        <Button bgColor="#2dc653">SUBMIT</Button>
        <Link to="/signup">Sign Up</Link>
      </Form>
    </FormContainer>
  );
};

export default Login;
