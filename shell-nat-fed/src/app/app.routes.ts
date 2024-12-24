import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WrapperComponent, WrapperConfig } from './wrapper/wrapper.component';
import { startsWith } from './shared/starts-with';
import { loadRemoteModule as loadNativeRemote } from '@angular-architects/native-federation';
import {ReactWrapperComponent } from './react-wrapper.component'
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },

  // MF-based Micro Frontend
  // NF-based Micro Frontend
  // NF-based Micro Frontend
  {
    path: 'react2',
    component: ReactWrapperComponent,
    // loadComponent: () => loadNativeRemote('mfe1', './component').then(m => {
    //   console.log(123, m.App);
    //   return m.App;
    // })
  },
  // Further frameworks and/or versions loaded via MF or NF as Web Components
  {
    path: 'react',
    component: WrapperComponent,
    data: {
      config: {
        kind: 'module',
        remoteName: 'react',
        exposedModule: 'web-components',
        elementName: 'react-element',
      } as WrapperConfig
    }
  },
  {
    path: 'svelte',
    component: WrapperComponent,
    data: {
      config: {
        kind: 'native',
        remoteName: 'svelte',
        exposedModule: './web-components',
        elementName: 'svelte-mfe',
      } as WrapperConfig
    }
  },

];
