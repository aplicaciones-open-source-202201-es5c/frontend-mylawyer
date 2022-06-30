import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-my-lawyer-navigation',
  templateUrl: './my-lawyer-navigation.component.html',
  styleUrls: ['./my-lawyer-navigation.component.css']
})
export class MyLawyerNavigationComponent {
  notifications=[]
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private route: Router) {}
    /*{
    this.notificationService.getAllForClient(this.getCurrentUserID()).subscribe((response: any) =>{
      this.notifications = response;
    })
    return this.notifications.length
  }*/
  getCurrentUserID() {
    let currentUserString=localStorage.getItem('currentUser');
    if(currentUserString){
      console.log(`current user: ${currentUserString}`);
      let currentUser=(JSON.parse(currentUserString));
      return currentUser.id;
    }else return null;
  }
  getCurrentUserEmail() {
    let currentUserString=localStorage.getItem('currentUser');
    if(currentUserString){
      console.log(`current user: ${currentUserString}`);
      let currentUser=(JSON.parse(currentUserString));
      return currentUser.email;
    }else return null;
  }
  getCurrentUserRole() {
    let currentUsertype=localStorage.getItem('currentUser');
    if(currentUsertype){
      let currentUser=(JSON.parse(currentUsertype));
      if (currentUser.role==="lawyer"){return true}else {return false}
    }else return null;
  }
  getCurrentUserName() {
    let currentUserString=localStorage.getItem('currentUser');
    if(currentUserString){
      console.log(`current user: ${currentUserString}`);
      let currentUser=(JSON.parse(currentUserString));
      return currentUser.name;
    }else return null;
  }

  signOut() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    this.route.navigate(['signIn']).then();
  }
}
