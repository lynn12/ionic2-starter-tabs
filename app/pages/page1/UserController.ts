/**
 * Created by Administrator on 2016/1/29.
 */
import {Component,Inject} from 'angular2/core';
import {NavController} from "ionic-framework/ionic";
import {UserView} from '../../pages/page1/view/view';
import {UserEdit} from '../../pages/page1/edit/edit';
import {User} from '../../vo/User';
import {UserService} from  '../../pages/page1/UserService';
export  class  UserController {
    nav = new NavController();
    user:User;
    userService = new UserService();
    constructor(@Inject(NavController) navController) {
        this.nav = navController;
    }
    toEdit(id) {
        var  user = this.userService.getUser(id);
        this.nav.push(UserEdit,user);
    }

    toDetail(id) {
        var  user = this.userService.getUser(id);
        this.nav.push(UserView, user);

    }

}


