import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from './login/services/login.service';
import { Store } from '@ngrx/store';
import { checkUserCredentials } from './shared/globalState/login/login.action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  loginService = inject(LoginService);
  store = inject(Store);

  protected readonly title = signal('Workline');

  ngOnInit(): void {
    this.store.dispatch(checkUserCredentials())
  }
}
