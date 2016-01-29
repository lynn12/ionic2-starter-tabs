/**
 * Created by Administrator on 2016/1/29.
 */
import {Component} from "angular2/core";
import {NavController} from "ionic-framework/ionic";
import {User} from '../../vo/User';
@Component()
class  UserController {
    nav:NavController;
    user:User;
    constructor(navController:NavController) {
        this.nav = navController;
    }
    goEdit(id) {
        this.nav.push(edit,user);
    }

}
