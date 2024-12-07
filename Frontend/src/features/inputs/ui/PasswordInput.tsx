import { Input, InputProps } from '@/shared/ui';
import clsx from 'clsx';
import { forwardRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
      <Input
        {...props}
        ref={ref}
        endContent={
          <button
            type="button"
            onClick={toggleVisibility}
            aria-label="toggle password visibility"
            className={clsx(
              'text-2xl duration-200 custom-outline rounded-md',
              props.isInvalid
                ? 'text-danger hover:text-danger-300'
                : ' text-foreground hover:text-foreground/80'
            )}
          >
            {isVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        }
        type={isVisible ? 'text' : 'password'}
      />
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
