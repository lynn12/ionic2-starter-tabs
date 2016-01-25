import {Page} from 'ionic-framework/ionic';
import {NavController, NavParams} from 'ionic-framework/ionic';
import {userView} from '../../pages/page1/view/view';
import {User} from '../../vo/User';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  public  users;
  public nav:NavController;
  constructor(nav: NavController) {
    this.users = users;
    this.nav= nav;
  }

  goToDetailPage(id) {
    var  user = this.getUser(id);
    this.nav.push(userView,user);

  }

  getUser(id:number) {
    var userTem:User ;
    for (var user in  users) {
      if (user.id==id) {
        userTem=user;
        break;
      }
    }
    return userTem;
  }
}

var users: User[] = [
  { "id":1, "name": "张三1" ,"des":"我是张三1","age":"1"},
  { "id":2, "name": "张三1" ,"des":"我是张三1","age":"1"},
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
