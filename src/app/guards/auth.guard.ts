import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import { jwtDecode } from "jwt-decode";

interface UserToken {
  sub: string;
  roles: string[];
  exp: number;
  iat: number;
  email: string;
}

export const authGuard: CanActivateFn = (route, state) => {

  console.log('tester');
  const router = inject(Router)
  const token = localStorage.getItem("ACCESS_TOKEN")

  hasClaim("admin");

  console.log('tester');

  if(localStorage.getItem("ACCESS_TOKEN") && hasClaim("admin")){
    return true;
  }
  if(localStorage.getItem("ACCESS_TOKEN") && !hasClaim("admin")){
    router.navigateByUrl('/category/create');
    return false;
  }
  router.navigateByUrl('/auth/login').then();
  return false;
};

const hasClaim = (userRoll: string): boolean => {
  if(localStorage.getItem('ACCESS_TOKEN')) {
    const decoded = jwtDecode(localStorage.getItem('ACCESS_TOKEN') as string);
    console.log(decoded);
    //schauen ob userRoll irgendwo in decoded.roles drin ist

    if((decoded as UserToken).roles.find(e => e === userRoll)) {
      return true;
    }
    return false;
  }
  return false;
}
