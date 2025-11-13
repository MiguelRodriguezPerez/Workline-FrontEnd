import type { HttpInterceptorFn } from '@angular/common/http';

/* NOTA: Los interceptores se aplican de manera global a todas las solicitudes de un proyecto Angular.
Si quieres que determinadas solicitudes a endpoints no se vean afectados deberás declaralo explicítamente
en el interceptor. Ejemplo: 
intercept(req: HttpRequest<any>, next: HttpHandler) {
  if (req.url.includes('/public/')) {
      // No modificar esta request
      return next.handle(req);
  }
*/

export const sharedInterceptor: HttpInterceptorFn = (req, next) => {

  const updatedReq = req.clone({
    setHeaders: {
      'Content-Type':'application/json'
    },
    withCredentials: true
  })

  return next(updatedReq);
};
