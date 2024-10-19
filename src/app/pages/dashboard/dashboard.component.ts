import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { LoginService } from 'src/app/services/login.service';

interface Menu {
  title: string;
  icon: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  showFiller = true;
  @ViewChild('drawer') drawer: MatDrawer;

  menuList: Menu[] = [
    {
      title: 'Goto Super Admin',
      icon: 'domain',
    },
    {
      title: 'MySchool',
      icon: 'school',
    },
    {
      title: 'School Management',
      icon: 'group',
    },
    {
      title: 'Accademics',
      icon: 'book',
    },
  ];

  yearList: string[] = ['2024-2025', '2023-2024', '2022-2023'];

  constructor(private loginService: LoginService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  ngAfterViewInit() {}

  logout() {
    this.loginService.logout();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'full-screen-modal',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
