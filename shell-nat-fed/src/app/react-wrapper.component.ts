import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { loadRemoteModule as loadNativeRemote } from '@angular-architects/native-federation';

@Component({
    selector: 'app-react-wrapper',
    template: `<div #reactContainer></div>`,
})
export class ReactWrapperComponent implements OnInit, OnDestroy {
    @ViewChild('reactContainer', { static: true }) containerRef!: ElementRef<HTMLDivElement>;
    private ReactComponent: any;

    async ngOnInit() {
        try {
            const module = await loadNativeRemote('mfe1', './component');
            this.ReactComponent = module.App;
            console.log(this.ReactComponent);
        } catch (error) {
            console.error('Error loading React component:', error);
        }
    }

    ngOnDestroy() {
        if (this.containerRef && this.ReactComponent) {
        }
    }
}
