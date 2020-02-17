import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class CustomInterceptorService implements HttpInterceptor {

    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        //validate token..
        const token = localStorage.getItem("token");
        if (typeof token !== 'string') return null;

        const newRequest = request.clone();
        newRequest.headers.set("authorization", "token123");
        console.log("interceptor is working...", newRequest)
        console.log(newRequest.headers.get("authorization"))
        return next.handle(newRequest);
    }
}
