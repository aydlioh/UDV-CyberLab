import { Input, InputProps } from '@/shared/ui';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

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
            <AiOutlineEyeInvisible className="text-2xl text-foreground pointer-events-none" />
          ) : (
            <AiOutlineEye className="text-2xl text-foreground pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? 'text' : 'password'}
    />
  );
};
