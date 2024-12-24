import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
// @ts-ignore because react is coming through MFE
import * as React from 'react';
// @ts-ignore because react is coming through MFE
import { createRoot, Root } from 'react-dom/client';
import { loadRemoteModule as loadNativeRemote } from '@angular-architects/native-federation';

@Component({
  selector: 'app-react-wrapper',
  template: `<div #reactContainer></div>`,
})
export class ReactWrapperComponent implements OnInit, OnDestroy {
  @ViewChild('reactContainer', { static: true }) containerRef!: ElementRef<HTMLDivElement>;
  private ReactComponent: any;
  private reactRoot!: Root;

  async ngOnInit() {
    try {
        // comes from the outside reop
      const module = await loadNativeRemote('mfe1', './component');
      this.ReactComponent = module.App;
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
