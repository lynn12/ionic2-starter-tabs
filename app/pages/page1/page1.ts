import {Inject} from 'angular2/core';
import {Page,NavController} from 'ionic-framework/ionic';
import {UserController} from '../../pages/page1/UserController';
import {UserService} from  '../../pages/page1/UserService';
@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  users;any;
  nav: any;
  userService = new UserService();
  userController = new UserController;
  constructor(@Inject(NavController) nav) {
    this.nav = nav;
    this.users = this.userService.getAllUser();
  }
}
