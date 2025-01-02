import {
  Component,
  Injector,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  OnDestroy,
  OnInit,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
// @ts-ignore because react is coming through MFE
import * as React from 'react';
// @ts-ignore because react is coming through MFE
import { createRoot, Root } from 'react-dom/client';
// @ts-ignore because react is coming through MFE
import * as React from 'react';
// @ts-ignore because react is coming through MFE
import { createRoot, Root } from 'react-dom/client';
import { loadRemoteModule as loadNativeRemote } from '@angular-architects/native-federation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnDestroy {
  @ViewChild('remoteContainer', { read: ViewContainerRef, static: true })
  remoteContainer!: ViewContainerRef;
  @ViewChild('reactContainer', { static: true }) containerRef!: ElementRef<HTMLDivElement>;
  private ReactComponent: any;
  private reactRoot!: Root;

  async ngOnInit() {
    try {
      // comes from the outside reop
      const module = await loadNativeRemote('mfe1', './routerComponent');
      console.log(123, module)
      this.ReactComponent = module.RouterComponent;
      console.log('Loaded React Component:', this.ReactComponent);

      if (this.ReactComponent) {
        this.reactRoot = createRoot(this.containerRef.nativeElement);
        this.reactRoot.render(React.createElement(this.ReactComponent, null));
        console.log('React component has been mounted using createRoot.');
      } else {
        console.error('ReactComponent is undefined.');
      }
    } catch (error) {
      console.error('Error loading React component:', error);
    }
  }

  ngOnDestroy() {
    if (this.reactRoot) {
      this.reactRoot.unmount();
      console.log('React component has been unmounted.');
    }
  }
}

//routerComponent