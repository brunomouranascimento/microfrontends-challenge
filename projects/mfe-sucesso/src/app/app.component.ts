import { Component } from '@angular/core'
import { DataService } from '../../../../shared-data/src/lib/shared-data.service'
import { CommonModule } from '@angular/common'
import { User } from '../../../../shared-data/src/interfaces/User.interface'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { Router, RouterModule } from '@angular/router'

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, MatCardModule, MatDividerModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users: Array<User> = []

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(users => {
      if (users.length > 0) {
        this.users = users
      }
    })
  }
  backToRegister() {
    this.router.navigate(['/cadastro'])
  }
}

