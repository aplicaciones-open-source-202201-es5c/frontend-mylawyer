import { TestBed } from '@angular/core/testing';
import {AppointmentsService} from "./appointments.service";
import {Appointment} from "../model/appointment";


describe('AppointmentService', () => {

  let service: AppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentsService);
  });

  it('should create the app', () => {
    expect(service).toBeTruthy();
  });

});
