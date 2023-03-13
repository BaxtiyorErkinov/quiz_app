import axios from '@/lib/axios/auth';
import React from 'react';

import { useNavigate } from 'react-router-dom';

import Validator from '@/utils/ValidationForm';
import { IUser } from '@/models/IUser';
import { AxiosError } from 'axios';
import { ISignUpResponse } from '@/models/IAxios';

interface IUseRegisterFn {
  handleSubmit: (e: React.SyntheticEvent) => void;
  handleChange: (key: keyof typeof initialState, value: string) => void;
  validations: typeof initialState;
  valid: boolean | object;
  params: typeof initialState;
}

const initialState = {
  fullName: '',
  email: '',
  password: '',
};

const validator = new Validator({
  email: {
    type: 'string',
    maxLength: 60,
    minLength: 5,
  },
  fullName: {
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

export const useRegister = (): IUseRegisterFn => {
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

  const handleSignUp = async () => {
    try {
      const res = await axios.post<ISignUpResponse>(
        'api/Auth/register',
        params,
      );
      if (res.status === 201) {
        navigate('/signin');
      }
    } catch (err) {
      const errorMess = err as AxiosError;
      alert(errorMess.response?.data);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (valid) {
      handleSignUp();
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
