import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private snackBar: MatSnackBar) { }

  success(mensagem) {
    this.abrirSnackBar(mensagem, ['success'])
  }

  info(mensagem) {
    this.abrirSnackBar(mensagem, ['info'])
  }

  warning(mensagem) {
    this.abrirSnackBar(mensagem, ['warning'])
  }

  error(mensagem) {
    this.abrirSnackBar(mensagem, ['error'])
  }


  private abrirSnackBar(mensagem: string, classes: string[]):void {
    const snackConfig = new MatSnackBarConfig();
    snackConfig.politeness = "assertive";
    snackConfig.duration = 5000;
    snackConfig.panelClass = classes;

    this.snackBar.open(mensagem, 'X', snackConfig);
  }
}
