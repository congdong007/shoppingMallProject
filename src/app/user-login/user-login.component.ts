
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent  implements OnInit {
  username:any
  password:any

  constructor(private nav:NavController,private http:HttpClient,private alert:AlertController) { }

  ngOnInit() {}

  doBack(){
    this.nav.back()
  }

  doLogin(){
    let url = "http://101.96.128.94:9999/data/user/register.php"
    let params = 'uname=$(this.username)&password=$(this.password)'
    let options= {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
      })
    }

    this.http.post(url,params,options).subscribe((res:any)=>{
      console.log(res)
      let code = res.code

      if(code == 200){
        this.alert.create({
          header:"Alert",
          message:"Congratulation,Login successful!",
          buttons:['Ok']
        }).then((res:any)=>res.present())
      }
      else{
        this.alert.create({
          header:"Alert",
          message:"Sorry,Login Failed!",
          buttons:['Ok']
        }).then((res:any)=>res.present())
      }
    })

  }

}
