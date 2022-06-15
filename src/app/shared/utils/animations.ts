import { animate, query, style, transition, trigger } from '@angular/animations';

export const dashboardRouteAnimation = trigger('fade', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          maxWidth: '100%',
          position: 'absolute',
          top: '24px',
          bottom: '24px',
          left: '15px',
          right: '15px'
      })],
      { optional: true }
    ),
    query(
      ':leave',
      [
        style({ opacity: 1, maxWidth: '100%'}),
        animate('0.3s', style({ opacity: 0 })),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 })),
      ],
      { optional: true }
    ),
  ]),
]);
