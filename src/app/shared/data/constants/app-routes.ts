import { AvailableFor, NavbarRoute } from '../models';

export const APP_ROUTES: NavbarRoute[] = [
  {title: 'Админ', url: '/dashboard/public', icon: null, access: AvailableFor.ADMIN},
  {title: 'Модератор', url: '/dashboard/public', icon: null, access: AvailableFor.MODERATOR},
  {title: null, url: '/dashboard/public', icon: 'people', access: AvailableFor.USER},
  {title: null, url: '/dashboard/public', icon: 'public', access: AvailableFor.USER},
  {title: 'Блюда', icon: null, access: AvailableFor.USER, children: [
      {title: 'Список', url: '/dashboard/dishes/list', icon: 'list'},
      {title: 'Создать новое', url: '/dashboard/dishes/new', icon: 'playlist_add'},
    ]},
  {title: 'Подборки', icon: null, access: AvailableFor.USER, children: [
      {title: 'Список', url: '/dashboard/collections/list', icon: 'list'},
      {title: 'Создать новую', url: '/dashboard/collections/new', icon: 'playlist_add'},
    ]},
  {title: null, icon: 'person', access: AvailableFor.USER, children: [
      {title: 'Моя страница', url: '/dashboard/profile/:id', icon: 'person_outlined'},
      {title: 'Настройки', url: '/dashboard/profile/preferences', icon: 'settings'},
      {title: 'Статистика', url: '/dashboard/statistics/history', icon: 'equalizer'},
      {title: 'Инструкции', url: '/dashboard/profile/guides', icon: 'info_outlined'},
      {title: 'Выход', url: '/', icon: null}
    ]},
  {title: 'Вход', url: '/auth/login', icon: null, access: AvailableFor.GUEST},
  {title: 'Регистрация', url: '/auth/join', icon: null, access: AvailableFor.GUEST}
];
