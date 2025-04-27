import { Explore } from 'pages/Explore';
import { type AppRoutesProps } from '@/shared/types/router';
import {
  AppRoutes,
  getRouteAbout,
  getRouteAdmin,
  getRouteExplore,
  getRouteForbidden,
  getRouteMain,
  getRouteSettings,
} from 'shared/const/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <>MainPage</>,
  },
  [AppRoutes.SETTINGS]: {
    path: getRouteSettings(),
    element: <>SettingPage</>,
    authOnly: true,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <>AboutPage</>,
  },

  [AppRoutes.ADMIN_PANEL]: {
    path: getRouteAdmin(),
    element: <>Admin page</>,
    authOnly: true,
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <>Forbidden</>,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <>Not Found page</>,
  },
  [AppRoutes.EXPLORE]: {
    path: getRouteExplore(),
    element: <Explore />,
  },
};
