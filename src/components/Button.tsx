import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  placement: 'left' | 'right' | 'top' | 'bottom';
  activated: boolean;
}

export default function Button({
  placement,
  activated = false,
  onClick,
}: ButtonProps) {

  const placementClasses = {
    left: 'right-[110%] top-[20%]',
    right: 'left-[110%] top-[20%]',
    top: 'bottom-[110%] left-[20%]',
    bottom: 'top-[110%] left-[20%]',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'flex items-center justify-center absolute w-16 h-16  z-20' + ' ' +
        placementClasses[placement] + ' ' +
        'text-3xl font-medium text-white rounded cursor-pointer' + ' ' +
        'transition duration-300 ease-in-out' + ' ' +
        (activated ? ('bg-amber-500 hover:bg-amber-700') : ('bg-slate-600 hover:bg-slate-700'))
      }
    >
      ⬇ {activated ? 'ON' : 'OFF'}
    </button >
  );
}
