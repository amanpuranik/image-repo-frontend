import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

declare var require: any
const MockAPI= require('../MockAPI.js');

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('mockAPI ', () => {
    let mockAPI:any;
    let mockDB = 
    {
    images:[
      {
        name:"test_image.jpeg",
      },
      ]
    };

    beforeEach(()=>{
      mockAPI= new MockAPI(mockDB)
    })
  
    it("returns a 400 bad request status if the request is invalid",()=>{
      const mockApiCall=mockAPI.simulateAsyncCall({})
      return mockApiCall.then((response: { status: any; })=>{
        expect(response.status).toBe(400)
      })
    })




});
})
