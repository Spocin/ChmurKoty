import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Toast } from 'primeng/toast';

@Component({
  imports: [RouterModule, Toast],
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'ChmurKoty';
}
