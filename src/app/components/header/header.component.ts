import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public showForm!: boolean;
  public subscription!: Subscription;

  constructor(private uiService: UIService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showForm = value));
  }

  ngOnInit(): void {}

  toggleAddTask(): void {
    this.uiService.toggleFormDisplay();
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
