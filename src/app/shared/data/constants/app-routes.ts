import { AvailableFor, NavbarRoute } from '../models';

export const APP_ROUTES: NavbarRoute[] = [
  {id: 'admin', title: 'Админ', url: '/dashboard/public', icon: null, access: AvailableFor.ADMIN},
  {id: 'moder', title: 'Модератор', url: '/dashboard/public', icon: null, access: AvailableFor.MODERATOR},
  {id: 'public', title: null, url: '/dashboard/public', icon: 'public', access: AvailableFor.USER},
  {id: 'dishes', title: 'Блюда', icon: null, access: AvailableFor.USER, children: [
      {title: 'Список', url: '/dashboard/dishes/list', icon: 'list'},
      {title: 'Создать новое', url: '/dashboard/dishes/new', icon: 'playlist_add'},
  ]},
  {id: 'collections', title: 'Подборки', icon: null, access: AvailableFor.USER, children: [
      {title: 'Список', url: '/dashboard/collections', icon: 'list'},
      // @TODO 2 lvl Nested list of routes for user collections
      // {title: 'Моя коллекция', url: '/dashboard/collections/1', icon: 'people'},
      {title: 'Создать новую', url: '/dashboard/collection/new', icon: 'playlist_add'},
  ]},
  {id: 'person', title: null, icon: 'person', access: AvailableFor.USER, children: [
      {title: 'Моя страница', url: '/dashboard/profile/:id', icon: 'person_outlined'},
      {title: 'Настройки', url: '/dashboard/profile/preferences', icon: 'settings'},
      {title: 'Статистика', url: '/dashboard/statistics/history', icon: 'equalizer'},
      {title: 'Инструкции', url: '/dashboard/profile/guides', icon: 'info_outlined'},
      {title: 'Выход', url: '/', icon: 'exit_to_app'}
  ]},
  {id: 'login', title: 'Вход', url: '/auth/login', icon: null, access: AvailableFor.GUEST},
  {id: 'register', title: 'Регистрация', url: '/auth/join', icon: null, access: AvailableFor.GUEST}
];
