import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  placement: 'left' | 'right' | 'above' | 'below';
  activated: boolean;
}

export default function Button({
  placement,
  activated = false,
  onClick,
}: ButtonProps) {

  const placementClasses = {
    left: 'right-[110%] bottom-[10%]',
    right: 'left-[110%] top-[10%]',
    above: 'bottom-[110%] left-[10%]',
    below: 'top-[110%] right-[10%]',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'flex items-center justify-center absolute w-16 h-16  z-20' + ' ' +
        placementClasses[placement] + ' ' +
        'text-2xl font-medium text-white rounded cursor-pointer' + ' ' +
        'transition duration-300 ease-in-out' + ' ' +
        (activated ? ('bg-amber-500 hover:bg-amber-700') : ('bg-slate-600 hover:bg-slate-700'))
      }
      data-placement={placement}
    >
      {activated ? 'ON' : 'OFF'}
    </button >
  );
}
