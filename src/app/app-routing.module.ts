import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doctor } from './model/doctor';
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/adminPage/dashboard/dashboard.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { EditDoctorComponent } from './pages/doctorPages/edit-doctor/edit-doctor.component';
import { ListDoctorsByDistricComponent } from './pages/doctorPages/list-doctors-by-distric/list-doctors-by-distric.component';
import { ListDoctorsByRankingComponent } from './pages/doctorPages/list-doctors-by-ranking/list-doctors-by-ranking.component';
import { ListDoctorsComponent } from './pages/doctorPages/list-doctors/list-doctors.component';
import { ViewDoctorComponent } from './pages/doctorPages/view-doctor/view-doctor.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },

  {
    path: 'admin', component: AdminComponent, children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'dashboard', redirectTo: ''
      },
      {
        path: 'doctor', component: DoctorComponent, children: [
          {
            path: 'list', component: ListDoctorsComponent
          },
          {
            path: 'list-by-district', component: ListDoctorsByDistricComponent
          },
          {
            path: 'list-by-ranking', component: ListDoctorsByRankingComponent
          },
          {
            path: 'perfil', component: ViewDoctorComponent
          },
          {
            path: 'edit', component: EditDoctorComponent
          }
          
        ]
      }
    ]
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
