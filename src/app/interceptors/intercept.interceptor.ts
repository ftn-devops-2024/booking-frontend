import { HttpInterceptorFn } from '@angular/common/http';

export const interceptInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = sessionStorage.getItem('accessToken');

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    withCredentials:true
  });

  // Pass the cloned request with the updated header to the next handler
  return next(authReq);
};
