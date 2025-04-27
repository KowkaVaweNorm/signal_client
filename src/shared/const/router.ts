export enum AppRoutes {
  MAIN = 'main',
  CITY = 'city',
  BATTLE = 'battle',
  QUESTS = 'quests',
  SETTINGS = 'settings',
  ABOUT = 'about',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteCity = () => '/city';
export const getRouteBattle = () => '/battle';
export const getRouteQuests = () => '/quests';
export const getRouteSettings = () => '/settings';
export const getRouteAbout = () => '/about';
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteCity()]: AppRoutes.CITY,
  [getRouteBattle()]: AppRoutes.BATTLE,
  [getRouteQuests()]: AppRoutes.QUESTS,
  [getRouteSettings()]: AppRoutes.SETTINGS,
  [getRouteAbout()]: AppRoutes.ABOUT,
  [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
  [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};

export const isRouteValid = (path: string): boolean => {
  return Object.keys(AppRouteByPathPattern).includes(path);
};
