// home.component.ts
import {
  Component,
  Injector,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { loadRemote as loadModuleRemote } from '@module-federation/enhanced/runtime';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Include CommonModule in imports
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('remoteContainer', { read: ViewContainerRef, static: true })
  remoteContainer!: ViewContainerRef;

  private subscriptions: Subscription[] = [];

  constructor(private injector: Injector) {}

  async ngAfterViewInit() {
    try {
      console.log('Attempting to load remote module...');

      const remoteModule = await loadModuleRemote<any>('modfed-mf/Component');

      console.log('Remote Module:', remoteModule);

      if (!remoteModule || !remoteModule.AppComponent) {
        throw new Error('Remote module or AppComponent not found.');
      }

      console.log('Remote AppComponent loaded:', remoteModule.AppComponent);

      const componentRef = this.remoteContainer.createComponent(
        remoteModule.AppComponent,
        {
          injector: this.injector,
        }
      );

      console.log('Remote component created:', componentRef);

      // Example: If remote component has inputs or outputs
      // componentRef.instance.someInput = 'Hello';
      // if (componentRef.instance.someOutput) {
      //   const sub = componentRef.instance.someOutput.subscribe((data: any) => {
      //     console.log('Output from remote component:', data);
      //   });
      //   this.subscriptions.push(sub);
      // }

    } catch (error) {
      console.error('Error loading remote component:', error);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
