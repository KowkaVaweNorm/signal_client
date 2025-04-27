import clsx from 'clsx';
import cls from './Header.module.scss';

type TProps = {
  className?: string;
};

export const Header = (props: TProps) => {
  const { className } = props;
  return (
    <header className={clsx(className, cls.header)} id='header'>
    </header>
  );
};
