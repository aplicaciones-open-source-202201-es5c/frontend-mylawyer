import { TestBed } from '@angular/core/testing';
import {notificationsService} from "./notifications.service";


describe('notificationsService', () => {
  let service: notificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(notificationsService);
  });

  it('should create the app', () => {
    expect(service).toBeTruthy();
  });
});
