import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, concatMap, retryWhen } from "rxjs/operators";
import { ErrorCode } from "../enums/enums";
import { AlertifyService } from "./alertify.service";

@Injectable({
    providedIn: 'root'
})

export class HttpErrorInterspectorService implements HttpInterceptor{

    constructor(private alertify: AlertifyService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log("Http Request started");

        return next.handle(request)

            // Intercept observable streams
            .pipe(
                // Loop in flow to call API endpoint if server is down (0)
                retryWhen(error => this.retryRequest(error, 10)),
                catchError((error: HttpErrorResponse) => {
                    const errorMessage = this.setError(error);
                    console.log(error);
                    this.alertify.error(errorMessage);
                    return throwError(errorMessage);
                })
            );
    }

    // Retry request in case of error
    retryRequest(error: Observable<unknown>, retryCount: number) : Observable<unknown>
    {
      return error.pipe(
        concatMap((checkErr: HttpErrorResponse, count: number) => {

          if (count <= retryCount)
          {
            switch(checkErr.status)
            {
              case ErrorCode.serverDown :
                return of(checkErr);

              // case ErrorCode.unauthorized :
              //   return of(checkErr);
            }
          }

          return throwError(checkErr);
        })
      )
    }

    setError(error: HttpErrorResponse): string {
        let errorMessage = "Unknown error occured";

        if(error.error instanceof ErrorEvent) {
            //Client side error
            errorMessage = error.error.message;
        } else {
            //Server side error
            if (error.status !== 0){
                errorMessage = error.error.errorMessage;
            }
        }
        return errorMessage;
    }
 }
