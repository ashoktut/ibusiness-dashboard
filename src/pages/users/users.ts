import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Observable } from "rxjs";
import { Users } from "./users.model";
import { StorageProvider } from "../../providers/storage/storage";
import { AngularFireAuth } from "@angular/fire/auth";
import { LoginPage } from "../login/login";
import $ from "jquery";

@IonicPage()
@Component({
  selector: "page-users",
  templateUrl: "users.html"
})
export class UsersPage {
  users: Observable<Users[]>;
  selected_user: string = "retailers";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fireAuth: AngularFireAuth,
    private storage: StorageProvider
  ) {
    this.users = this.storage.users;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UsersPage");
  }

  logoutApp() {
    $(".tabbar").hide();

    this.fireAuth.auth.signOut().then(data => {
      this.navCtrl.setRoot(LoginPage);
    });
  }
}
