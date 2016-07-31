import { Component, Input } from '@angular/core';
export class Header {
  title: string;
  subtitle: {
    color: string,
    value: string
  };
}
@Component({
  selector: 'my-header',
  host: {
    class: 'header'
  },
  styles: [`
    .header__title {
      display: flex;
      flex-direction: row;
    }

    .header__title .space {
      flex: auto;
    }

    .header__title,
    .header__title > * {
      margin: 0;
      color: #333;
    }

    .header__subtitle {
      margin: 0;
    }

    .header__subtitle__settings {
      margin-top: 10px;
    }
  `],
  template: `
    <div class="header__title">
      <h1>{{ header.title }}</h1>
      <span class="space"></span>
      <button (click)=toggle()>
        Toggle subtitle
      </button>
    </div>

    <div class="header__subtitle"
          *ngIf="subtitle">

      <span [ngStyle]="{ color: header.subtitle.color }">
        {{ header.subtitle.value }}
      </span>

      <div class="header__subtitle__settings">
        <span>Text color:</span>
        <input type="text" name="color" [(ngModel)]="header.subtitle.color">
      </div>
    </div>
  `,
})
export class HeaderComponent {
  @Input()
  subtitle: boolean;

  header: Header;

  constructor() {
    this.subtitle = this.subtitle || false;
    this.header = {
      title: 'Angular2 Starter Kit',
      subtitle: {
        value: 'A better way to start your new Angular2 app',
        color: '#FFF'
      }
    };
  }

  toggle() {
    this.subtitle = !this.subtitle;
  }
};
