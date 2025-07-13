import { Component, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { DataService } from '../../../../shared-data/src/public-api'
import { Router, RouterModule } from '@angular/router'
import { User } from '../../../../shared-data/src/interfaces/User.interface'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  form: FormGroup

  constructor(
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    })
    this.form.get('email')?.valueChanges.subscribe(value => {
      if (value && /\s/.test(value)) {
        this.form
          .get('email')
          ?.setValue(value.replace(/\s+/g, ''), { emitEvent: false })
      }
    })
  }

  submit() {
    if (this.form.invalid) return
    const user = this.form.value

    this.dataService.addUser(user).subscribe({
      next: () => {
        this.resetForm(true)
      },
      error: err => {
        this.snackBar.open(
          err.message || 'Erro ao cadastrar usuário',
          'Fechar',
          {
            duration: 30000,
            panelClass: ['error-snackbar']
          }
        )
      }
    })
  }

  resetForm(isSubmit: boolean = false) {
    this.snackBar.open(
      isSubmit
        ? 'Usuário adicionado com sucesso'
        : 'Os dados do formulário foram limpos',
      'Fechar',
      {
        duration: 3000,
        panelClass: [isSubmit ? 'success-snackbar' : 'info-snackbar']
      }
    )
    this.form.reset()
  }
  goToUsersList() {
    this.router.navigate(['/sucesso'])
  }
}

