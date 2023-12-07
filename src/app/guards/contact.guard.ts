import { CanActivateFn } from '@angular/router';

export const contactGuard: CanActivateFn = (route, state) => {
  return window.confirm(
    'You have unsaved changes. Do you want to discard them?'
  );
};
