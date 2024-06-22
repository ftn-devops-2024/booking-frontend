import { HttpInterceptorFn } from '@angular/common/http';

export const interceptInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = sessionStorage.getItem('accessToken');

  const webSocketEndpoints = ['/review-ws', '/reservation-ws'];

  // Check if the request URL contains any of the WebSocket endpoint paths
  const isWebSocketRequest = webSocketEndpoints.some((endpoint) => {
    console.log(req.url);
    return req.url.includes(endpoint);
  });

  if (isWebSocketRequest) {
    // Bypass the interceptor for WebSocket requests
    console.log('bypass interceptor');
    return next(req);
  }

  let authReq;
  if (req.url.includes('uploadImage')) {
    authReq = req.clone({
      setHeaders: {
        Accept: 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      withCredentials: true,
    });
  } else {
    authReq = req.clone({
      setHeaders: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      withCredentials: true,
    });
  }

  return next(authReq);
};
