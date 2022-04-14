
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardComponent } from './cardComponent.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedGameName: string ="Mass Effect";
  let expectedYear: string = "2018";
  let expectedMain : string ="20.5";
  let expectedComp : string = "173";

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [CardComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    cardDe = fixture.debugElement.query(By.css('.card'));
    cardEl = cardDe.nativeElement;

    component.name= "Mass Effect"
    component.main = "20.5";
    component.year= "2018";
    component.comp="173";




    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });


  it('should display game name', () => {
    expect(cardEl.textContent).toContain(expectedGameName);
  });

  it('should display year', () => {
    expect(cardEl.textContent).toContain(expectedYear);
  });

  it('should display game name', () => {
    expect(cardEl.textContent).toContain(expectedGameName);
  });

  it('should display main hour', () => {
    expect(cardEl.textContent).toContain(expectedMain);
  });

  it('should display comp hour', () => {
    expect(cardEl.textContent).toContain(expectedComp);
  });




});