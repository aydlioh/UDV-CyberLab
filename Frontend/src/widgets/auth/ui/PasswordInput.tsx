import { Input } from '@nextui-org/react';
import { InputProps } from '@/shared/ui';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const PasswordInput = (props: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      {...props}
      endContent={
        <button
          type="button"
          onClick={toggleVisibility}
          aria-label="toggle password visibility"
        >
          {isVisible ? (
            <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <FaEye className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? 'text' : 'password'}
    />
  );
};
