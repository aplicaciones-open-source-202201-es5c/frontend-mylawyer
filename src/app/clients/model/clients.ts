import {Appointment} from "../../appointments/model/appointment"


export interface Clients{
  id:number,
  name:string,
  address: string,
  age:number,
  email:string,
  password:String
}

export interface AppointmentsClient extends Appointment{
 client:Clients;
}
