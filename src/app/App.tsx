import { Header } from 'widgets/Header';
import { MainLayout } from 'shared/layouts/MainLayout/MainLayout';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = (): JSX.Element => {
  return (
    <MainLayout HeaderElement={<Header />}>
      <AppRouter />
    </MainLayout>
  );
};
