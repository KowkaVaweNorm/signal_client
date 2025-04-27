import type { ReactElement, ReactNode } from 'react';
import cls from './MainLayout.module.scss';

type TProps = {
  SidebarElement?: ReactElement;
  HeaderElement?: ReactElement;
  children: ReactNode;
};

export const MainLayout = (props: TProps) => {
  const { HeaderElement, SidebarElement, children } = props;

  return (
    <div className={cls.mainLayout}>
      {HeaderElement ? HeaderElement : null}
      <div className={cls.contentWrapper}>
        {SidebarElement ? (
          <aside className={cls.sidebar}>{SidebarElement}</aside>
        ) : null}
        <main className={cls.mainContent}>{children}</main>
      </div>
    </div>
  );
};
