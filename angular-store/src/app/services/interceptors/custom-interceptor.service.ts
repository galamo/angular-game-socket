import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"

@Injectable()
export class CustomInterceptorService implements HttpInterceptor {

    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //validate token..
        const token = localStorage.getItem("token");
        if (typeof token !== 'string') return;

        const newRequest = request.clone({
            // setHeaders: {
            //     "authorization": token
            // }
        });

        console.log(newRequest.headers.get("authorization"))
        return next.handle(newRequest).pipe(map(event => {
            if (event instanceof HttpResponse) {
                console.log("inside response interceptor...")
            }
            return event;
        }))
    }
}
