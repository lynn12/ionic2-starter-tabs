import {Inject} from 'angular2/core';
import {Page,NavController} from 'ionic-framework/ionic';
import {UserView} from '../../pages/page1/view/view';
import {User} from '../../vo/User';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  users;any;
  nav: any;
  constructor(@Inject(NavController) nav) {
    this.nav = nav;
    this.users = usersData;
  }

  goToDetailPage(id) {
    var  user = this.getUser(id);
    this.nav.push(UserView, user);

  }

  getUser(id:number) {

    var userResult:User ;
    var users  = usersData;
    for (var i = 0;i < users.length; i++) {
      if (users[i].id==id) {
        userResult=users[i];
        break;
      }
    }
    return userResult;
  }
}

var usersData: User[] = [
  { "id":1, "name": "张san " ,"des":"我是zhangsan","age":"1"},
  { "id":2, "name": "zhangsna " ,"des":"我是张三1","age":"1"},
  { "id":3, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":4, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":5, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":6, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":7, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":8, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":9, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":10, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":11, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":12, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":13, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":14, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":15, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":16, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":17, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":18, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":19, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":20, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":21, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":22, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":23, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":24, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":25, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":26, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":27, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":28, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":29, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":30, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":31, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":32, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":33, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":34, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":35, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":36, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":37, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":38, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":39, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":40, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":41, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":42, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":43, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":44, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":45, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":46, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":47, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":48, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":49, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":50, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":51, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":52, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":53, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":54, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":55, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":56, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":57, "name": "张三1" ,"des":"我是张三1","age":"1"},
];
