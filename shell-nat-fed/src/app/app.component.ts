import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { initWrapperConfig, WrapperComponent, WrapperConfig } from "./wrapper/wrapper.component";
import { loadRemoteModule as loadNativeRemote } from '@angular-architects/native-federation';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, WrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
public conf: any = {}
 }
