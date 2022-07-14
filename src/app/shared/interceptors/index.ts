import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from './jwt.interceptor';
import { ErrorInterceptor } from './error.interceptor';

export const httpInterceptorProviders =[
    {
        provide: HTTP_INTERCEPTORS,userClass:JwtInterceptor, multi:true
    },
    {
        provide: HTTP_INTERCEPTORS,userClass:ErrorInterceptor, multi:true
    },
]