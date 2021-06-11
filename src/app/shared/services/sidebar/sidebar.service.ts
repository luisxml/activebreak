import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu = [
    {
      title: 'Inicio',
      icon: 'mdi mdi-home',
      url: '/inicio',
      subMenu: []
    },
    {
      title: 'Dashboard',
      icon: 'mdi mdi-chart-areaspline',
      url: '/dashboard',
      subMenu: []
    },
    {
      title: 'Notificaciones',
      icon: 'mdi mdi-message-text',
      url: '',
      subMenu: [
        {
          title: 'Recibidias',
          icon: '',
          url: '/notificaciones-recibidas'
        },
        {
          title: 'Pendientes',
          icon: '',
          url: '/notificaciones-pendientes'
        },
        {
          title: 'Leídas',
          icon: '',
          url: '/notificaciones-leidas'
        }
      ]
    },
    {
      title: 'Registro',
      icon: 'mdi mdi-card-plus',
      url: '',
      subMenu: [
        {
          title: 'Tipo Actividad',
          icon: '',
          url: '/tipo-actividad'
        },
        {
          title: 'Ejercicio',
          icon: '',
          url: '/ejercicio'
        },
        {
          title: 'Video',
          icon: '',
          url: '/video'
        }
      ]
    }
  ];

  constructor() { }
}
