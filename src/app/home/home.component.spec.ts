import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


declare var require: any
//const MockAPI= require('../MockAPI.js');

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });




  it('should create', () => {
    expect(component).toBeTruthy();
  });


  fdescribe('homecomponent ', () => {

    beforeEach(()=>{
    })
  
    it("should populate imgage url upon method call",()=>{
      component.getImage2();
      expect(component.imageUrl).toBeDefined

    })

    it("should populate imgage file upon method call",()=>{
      component.onFileSelected(event);
      expect(component.imageFile).toBeDefined

    })

});
})
