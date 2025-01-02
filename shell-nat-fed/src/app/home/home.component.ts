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

//@ts-ignore
import _ from 'lodash';

console.log('lodash', _.isString(123))
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent  {
 public get canIUseLodash(): boolean{
  return !!_.isString 
 }
}
