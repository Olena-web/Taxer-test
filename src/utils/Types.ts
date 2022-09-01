import React, { Key } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

export interface CardProps {
    id: string | undefined;
    name: string;
   
  }
  export interface SubmitCardProps {
    [x: string]: Key | null | undefined;
    name: string;
    img: string;
    StartDate: string;
    EndDate: string;
  }
  export interface Storage {
    get: (key: string) => string | null;
    set: (key: string, value: string) => void;
    remove: (key: string) => void;
    clear: () => void;
    key: string;
    value: string | null;
  }
  export interface Input {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export enum Option {
    'business' = 'business',
    'hotel' = 'hotel',
    'transfer' = 'transfer',
  }
  export interface FormInput {
    name: string;
    address: string;
    phone: string;
    destination: string;
    mail: string;
    start: string;
    end: string;
    birthday: string;
    TextField: string;
    checkbox: boolean;
    option: Option;
    file: string;
    submit: boolean;
    errors: {
      name: string;
    };
  }
  export type InputProps = {
    label: Path<FormInput>;
    register: UseFormRegister<FormInput>;
    required: boolean;
  };