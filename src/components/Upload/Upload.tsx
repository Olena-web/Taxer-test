import React from 'react';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormInput } from '../../utils/Types';
import { setItemToLocalStorage } from '../LocalStorage/LocalStorage';

export const Upload = React.forwardRef<
  HTMLInputElement,
  { label: string } & ReturnType<UseFormRegister<FormInput>>
>(({ onBlur, label }, ref) => {
  const [image, setImage] = useState('');

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      const src = URL.createObjectURL(img);
      setItemToLocalStorage('certificate', src);
      setImage(URL.createObjectURL(img));
    }
  };

  return (
    <div data-testid="upload">
      <label>{label}</label>
      <input type="file" id="file" onChange={onImageChange} ref={ref} onBlur={onBlur} />
      {image && <img id="upload" src={image} alt='certificate' />}
    </div>
  );
});