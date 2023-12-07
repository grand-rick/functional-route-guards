import { CanActivateFn } from '@angular/router';

export const productGuard: CanActivateFn = (route, state) => {
  return true;
};
