import { Usuario } from "src/app/core/models/Usuario";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Login } from "src/app/core/models/Login";

export const USER_MOCK: Usuario = {
    id: 1,
    firstName: 'Johanna',
    lastName: 'Herrera',
    email: 'johanna@mail.com',
    password: '123456',
    token: 'hjsdfJHFDSAFMsaDsan12sdanjjadashj3FDBEWH',
    rol: 'admin'
}
  
export class AuthServiceMock {
  
  private authUser$ = new BehaviorSubject<Usuario | null>(null);

  login(formValue: Login): void {
    this.authUser$.next(USER_MOCK);
  }

  verificarToken(): Observable<boolean> {
    return of(true);
  }

  register(user: Usuario): void {
    console.log('Prueba de usuario registrado')
  }
}