import { InputHTMLAttributes } from 'react';

import { c } from '@utils/class';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...otherProps }: InputProps) => {
  <div className="w-full my-1">
    <input
      className={c(
        'w-full caret-theme peer -ml-3 -mb-1 bg-transparent overflow-visible text-heading-medium indent-3 font-lora leading-[2.5] shadow-text focus:border-solid',
        className
      )}
      {...otherProps}
    />
    <div
      className={c(
        'relative w-full shadow-[0px_2px_5px_rgb(var(--color-shade))] h-[1px] bg-[linear-gradient(90deg,rgb(var(--color-theme)),rgb(var(--color-theme))_50%,transparent_50%,transparent_100%)] bg-[length:3px_2px]',
        'after:absolute after:left-0 after:top-0 after:w-0 after:h-full after:bg-theme after:transition-all after:duration-300 after:ease-out peer-focus:after:w-full'
      )}
    />
  </div>;
};

export default Input;
