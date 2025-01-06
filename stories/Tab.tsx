import React, {ComponentProps, ReactElement} from 'react';

import './button.css';

type TabSize = 'small' | 'medium' | 'large';

interface Props extends ComponentProps<'button'> {
  primary: boolean;
  backgroundColor: string;
  size: TabSize;
  label: string;
}

/** Primary UI component for user interaction */
export const Tab = ({ primary, backgroundColor, size, label, ...props }: Props): ReactElement => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor ? { backgroundColor } : {}}
      {...props}
    >
      {label}
    </button>
  );
};

Tab.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
