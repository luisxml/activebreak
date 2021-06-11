import { Routes } from '@angular/router';


// Routes
export const homeRoutes: Routes = [
    {
        path: 'page-blank',
        loadChildren: () => import('./page-blank/page-blank.module').then( m => m.PageBlankModule)
    },
    {
        path: 'tema',
        loadChildren: () => import('./theme-setting/theme-setting.module').then( m => m.ThemeSettingModule)
    },
    {
        path: 'tema',
        loadChildren: () => import('./theme-setting/theme-setting.module').then( m => m.ThemeSettingModule)
    },
    {
        path: 'inicio',
        loadChildren: () => import('./home-page/home-page.module').then( m => m.HomePageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)
    },
    { 
        path: '', 
        redirectTo: 'inicio', 
        pathMatch: 'full'
    },
    
];


