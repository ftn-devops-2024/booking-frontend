import { HttpInterceptorFn } from '@angular/common/http';

export const interceptInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = sessionStorage.getItem('accessToken');

  const webSocketEndpoints = ['/review-ws', '/reservation-ws'];

  console.log('hereeeeeeeeeeee');
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

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
    withCredentials: true,
  });

  // Pass the cloned request with the updated header to the next handler
  return next(authReq);
};
