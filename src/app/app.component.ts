import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { TestModule } from './test/test.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HelloComponent, TestModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app-ng18';
}
