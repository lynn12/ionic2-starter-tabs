/**
 * Created by Administrator on 2016/1/25.
 */
import {Inject } from 'angular2/core';
import {Page,NavController,NavParams} from 'ionic-framework/ionic';
import {User} from '../../../vo/User';

@Page({
    templateUrl: 'build/pages/page1/view/view.html',
})

export  class  UserView {
    user:User;
    constructor(@Inject(NavController)nav,@Inject(NavParams) params) {
        this.user = params.data;
    }

}