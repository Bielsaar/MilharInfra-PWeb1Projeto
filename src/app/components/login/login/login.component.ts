import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../shared/model/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  usuario: Usuario;
  constructor() { }

  ngOnInit(): void {
  }

  verificarLogin() {

  }
}
