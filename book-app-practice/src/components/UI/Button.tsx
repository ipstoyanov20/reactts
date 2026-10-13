import { Link } from 'react-router-dom';
import type { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  to?: string;
  textOnly?: boolean;
} & ComponentPropsWithoutRef<'button'> &
  ComponentPropsWithoutRef<'a'>;

const Button: React.FC<ButtonProps> = ({ to, textOnly, ...props }) => {

  const buttonClasses = `${textOnly ? 'button--text-only' : 'button'}`;


    if (to) {
        return (
            <Link to={to} className={buttonClasses} {...props}>
                {props.children}
            </Link>
        );
    }

    return (
        <button className={buttonClasses} {...props}>
            {props.children}
        </button>
    );
}

export default Button;