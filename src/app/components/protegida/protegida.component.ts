import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-protegida",
  templateUrl: "./protegida.component.html",
  styles: []
})
export class ProtegidaComponent implements OnInit {
  profile: any;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log(this.profile);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }
  }
}
