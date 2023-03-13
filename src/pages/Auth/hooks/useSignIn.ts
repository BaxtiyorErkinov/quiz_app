import React from 'react';

import Validator from '@/utils/ValidationForm';
import { useNavigate } from 'react-router-dom';
import { IUser } from '@/models/IUser';
import axios from '@/lib/axios/auth';
import { AxiosError } from 'axios';
import { ISignInResponse } from '@/models/IAxios';

interface IUseSignInFn {
  handleSubmit: (e: React.SyntheticEvent) => void;
  handleChange: (key: keyof typeof initialState, value: string) => void;
  validations: typeof initialState;
  valid: boolean | object;
  params: typeof initialState;
}

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

export const useSignIn = (): IUseSignInFn => {
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

  const handleSignIn = async () => {
    try {
      const res = await axios.post<ISignInResponse>('api/Auth/login', params);
      if (res.status === 200) {
        localStorage.setItem('user', JSON.stringify(res.data));
        navigate('/');
      }
    } catch (err) {
      const errorMess = err as AxiosError;
      alert(errorMess.response?.data);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (valid) {
      handleSignIn();
    }
  };

  return {
    handleSubmit,
    handleChange,
    validations,
    valid,
    params,
  };
};
