import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app',
  template: `
    <my-header [subtitle]="true"></my-header>
  `,
  //tell angular we are using custom tags in this component
   directives: [HeaderComponent]
})
export class AppComponent {}
