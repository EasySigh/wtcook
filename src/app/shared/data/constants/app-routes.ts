import { RIGHTS as access } from '~/app/shared/data/models/user';

export const APP_ROUTES: any[] = [
  {label: 'Админ', routerLink: '/dashboard/public', icon: '', role: access.admin},
  {label: 'Модератор', routerLink: '/dashboard/public', icon: '', role: access.moderator},
  {label: 'Сообщество', routerLink: '/dashboard/public', icon: '', role: access.user},
  {label: 'Блюда', icon: '', role: access.user, items: [
      {label: 'Список', routerLink: '/dashboard/dishes/list', icon: ''},
      {label: 'Создать новое', routerLink: '/dashboard/dishes/new', icon: ''},
    ]},
  {label: 'Подборки', icon: '', role: access.user, items: [
      {label: 'Список', routerLink: '/dashboard/collections/list', icon: ''},
      {label: 'Создать новую', routerLink: '/dashboard/collections/new', icon: ''},
    ]},
  {label: 'Профиль', icon: '', role: access.user, items: [
      {label: 'Моя страница', routerLink: '/dashboard/profile/:id', icon: ''},
      {label: 'Настройки', routerLink: '/dashboard/profile/preferences', icon: ''},
      {label: 'Статистика', routerLink: '/dashboard/statistics/history', icon: ''},
      {label: 'Инструкции', routerLink: '/dashboard/profile/guides', icon: ''},
      {label: 'Выход', routerLink: '/', icon: ''}
    ]},
  {label: 'Вход', routerLink: '/auth/login', icon: '', role: access.guest},
  {label: 'Регистрация', routerLink: '/auth/join', icon: '', role: access.guest}
];
