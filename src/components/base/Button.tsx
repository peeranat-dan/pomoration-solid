import { A } from '@solidjs/router';
import type { Component } from 'solid-js';
import { createEffect, createSignal } from 'solid-js';

type ButtonVariants = 'primary' | 'secondary' | 'text';

type ButtonProps = {
  type?: ButtonVariants;
  children: any;
  onClick?: () => void;
  isBlock?: boolean;
  disabled?: boolean;
  class?: string;
  href?: string;
  target?: string;
  width?: string;
};

const textSize = 'font-sans text-base';

const padding = 'px-5 py-2';

const color = {
  primary: 'text-white',
  secondary: 'text-black',
  text: 'text-slate-700 hover:text-white dark:text-slate-200 dark:hover:text-white',
};

const backgroundColors = {
  primary: 'bg-primary-500 hover:bg-primary-600',
  secondary: 'bg-secondary-500 hover:bg-secondary-600',
  text: 'bg-light-button hover:bg-blue-500 dark:bg-gray-800 dark:hover:bg-blue-500',
};

const border = {
  primary: 'border-none',
  secondary: 'border-none',
  text: 'border-none',
};

const Button: Component<ButtonProps> = ({
  type = 'primary',
  children,
  onClick,
  class: solidClass = '',
  disabled = false,
  href,
  target,
  isBlock = true,
  width,
}) => {
  const disabledStyle = disabled
    ? 'opacity-50 cursor-not-allowed bg-gray-300 text-gray-400 border-none hover:bg-gray-300 hover:text-gray-400'
    : 'transition ease-in-out duration-200 hover:cursor-pointer';
  const [btnType, setBtnType] = createSignal(type);
  createEffect(() => setBtnType(type));
  let baseClasses = [
    // 'uppercase',
    'rounded-xl',
    textSize,
    border[btnType()],
    backgroundColors[btnType()],
    padding,
    disabledStyle,
    color[btnType()],
  ];

  if (solidClass) {
    baseClasses = [...baseClasses, ...solidClass.split(' ')];
  }
  if (isBlock) {
    baseClasses = [...baseClasses, 'block w-full'];
  }
  if (!!width) {
    baseClasses = [...baseClasses, width];
  }

  if (href) {
    let linkClasses = [
      ...baseClasses,
      'flex items-center justify-center whitespace-nowrap font-semibold',
    ];
    return (
      <A href={href} target={target} onClick={onClick} class={linkClasses.join(' ')}>
        {children}
      </A>
    );
  }

  return (
    <button onClick={onClick} class={baseClasses.join(' ')} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
