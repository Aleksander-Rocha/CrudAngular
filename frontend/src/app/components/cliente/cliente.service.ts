import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:3001/clientes"


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mensagem(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })

  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente)
  }

  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl)
  }

  readById(id: string): Observable<Cliente>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url)
  }

  update(cliente: Cliente): Observable<Cliente>{
    const url= `${this.baseUrl}/${cliente.id}`
    return this.http.put<Cliente>(url, cliente)
  }

  delete(id: number): Observable<Cliente>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Cliente>(url);
  }



}
