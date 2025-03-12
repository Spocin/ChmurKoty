import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Panel } from 'primeng/panel';
import { PrimeTemplate } from 'primeng/api';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { PasswordDirective } from 'primeng/password';
import { Button } from 'primeng/button';

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
    PasswordDirective,
    Button,
  ],
  templateUrl: './ui-login-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLoginPanelComponent {
  private readonly fb = inject(NonNullableFormBuilder);

  protected form = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required]),
  });
}
