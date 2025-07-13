import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'
import { User } from '../interfaces/User.interface'

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly apiUrl = 'http://localhost:3000/users'

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
  }

  userAlreadyExists(email: string): Observable<boolean> {
    return this.http
      .get<User[]>(this.apiUrl)
      .pipe(map(users => users.some(user => user.email === email)))
  }

  addUser(user: User): Observable<User | string> {
    if (!user.name || !user.email) {
      return of('Nome e e-mail são obrigatórios')
    }
    return this.http.get<User[]>(this.apiUrl).pipe(
      switchMap(users => {
        if (users.some(u => u.email === user.email)) {
          throw new Error('Já existe um usuário com este e-mail')
        } else {
          const maxId = users.reduce(
            (max, u) => (u.id && u.id > max ? u.id : max),
            0
          )
          const newUser = { ...user, id: Number(maxId + 1) }
          return this.http.post<User>(this.apiUrl, newUser)
        }
      })
    )
  }
}

