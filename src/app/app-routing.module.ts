import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Routes
const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./authentication/login/login.module').then( m => m.LoginModule)
    },
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canLoad: []
    },
    {
        path: '**',
        loadChildren: () => import('./component/pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule)
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot( routes, { useHash: true, relativeLinkResolution: 'legacy' } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
