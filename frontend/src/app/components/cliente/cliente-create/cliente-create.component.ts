import { Cliente } from './../cliente.model';
import { Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente={
    name:'',
    email:'',
    cpf: ''
  }


  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createCliente(): void{
    this.clienteService.create(this.cliente).subscribe(() =>{
      this.clienteService.mensagem('Cadastrado com sucesso.')
      this.router.navigate(['/clientesrouter'])
    })
    
  }
  cancel(): void{
    this.router.navigate(['/clientesrouter'])
  }

}
