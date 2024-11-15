import { c } from '@/utils/class';

type InputProps = {
  type: string;
  label?: string;
};

const Input = ({ type, label }: InputProps) => (
  <label
    className={c(
      'flex flex-col my-1 hover:cursor-pointer',
      type === 'submit' &&
        'rounded-2xl bg-chocolate text-cream p-2 px-16 font-garamond max-w-max'
    )}
  >
    {type === 'submit' ? (
      <input type={type} value={label} className="max-w-max" />
    ) : (
      <>
        {label}
        <input type={type} />
      </>
    )}
  </label>
);

export default Input;
