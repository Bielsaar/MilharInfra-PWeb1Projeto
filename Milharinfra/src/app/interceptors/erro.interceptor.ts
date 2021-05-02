import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {MensagemService} from "../shared/services/mensagemService/mensagem.service";
import {catchError} from "rxjs/operators";

@Injectable()
export class ErroInterceptor implements HttpInterceptor {

  constructor(private mensagemService: MensagemService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(
        err => this.trataRespostaErro(err)
      )
    );
  }

  private trataRespostaErro(resposta: object): Observable<HttpEvent<unknown>> {
    if (resposta instanceof HttpErrorResponse) {
      this.mensagemService.error(`Erro: ` + resposta.message);
    }

    return throwError(resposta);
  }
}
