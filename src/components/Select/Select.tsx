import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormInput } from '../../utils/Types';
//import { getItemFromLocalStorage } from '../LocalStorage/LocalStorage';

//const data = getItemFromLocalStorage('name') as unknown as { name: string };

import {data} from './data';
export const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<FormInput>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>
      {label}
      <select name={name} id="destination" ref={ref} onChange={onChange} onBlur={onBlur}>
        {data.map((item, index) => (
          <option value={item.name} key={index}>
            {item.name}
          </option>
        ))}
      </select>
    </label>
  </>
));