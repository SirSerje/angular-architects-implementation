import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WrapperComponent, WrapperConfig } from './wrapper/wrapper.component';
import { startsWith } from './shared/starts-with';
import { loadRemote as loadModuleRemote } from '@module-federation/enhanced/runtime';
import { loadRemoteModule as loadNativeRemote } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },

  // MF-based Micro Frontend
  // NF-based Micro Frontend
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

];
