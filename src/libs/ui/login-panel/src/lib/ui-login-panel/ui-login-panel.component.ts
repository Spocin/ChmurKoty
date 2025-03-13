import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Panel } from 'primeng/panel';
import { PrimeTemplate } from 'primeng/api';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Password } from 'primeng/password';
import { Button } from 'primeng/button';
import { LoginEvent } from '@chmur-koty/util-types';
import { Message } from 'primeng/message';

@Component({
  selector: 'lib-ui-login-panel',
  imports: [
    CommonModule,
    Panel,
    PrimeTemplate,
    NgOptimizedImage,
    FloatLabel,
    InputText,
    ReactiveFormsModule,
    Button,
    Password,
    Message,
  ],
  templateUrl: './ui-login-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLoginPanelComponent {
  public readonly authenticationState = input.required<boolean | undefined>();
  public readonly isLoggingIn$ = input.required<boolean>();

  public readonly loginEvent = output<LoginEvent>();

  private readonly fb = inject(NonNullableFormBuilder);

  protected form = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required]),
  });

  protected emitLoginEvent() {
    const { email, password } = this.form.controls;

    const loginEvent: LoginEvent = {
      email: email.value,
      password: password.value,
    };

    this.loginEvent.emit(loginEvent);
  }
}
