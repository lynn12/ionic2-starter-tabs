/**
 * Created by Administrator on 2016/1/25.
 */
import {Page} from 'ionic-framework/ionic';
import {NavController, NavParams} from 'ionic-framework/ionic';
import {User} from '../../../vo/User';

@Page({
    templateUrl: 'build/pages/page1/view/view.html',
})
export  class  userView {
    constructor(nav: NavController, params:NavParams) {
        this.user = params.data;
    }

}