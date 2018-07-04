import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';


describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
  });

  it('should increment the counter number by 1', () => {
    // Arrange
    const initialVal = component.counter;

    // Act
    component.increment();
    fixture.detectChanges();
    const newVal = component.counter;

    // Assert
    expect(newVal).toBeGreaterThan(initialVal);

  });

  it('should decrement the counter number by 1', () => {
    // Arrange
    const initialVal = component.counter;

    // Act
    component.decrement();
    fixture.detectChanges();
    const newVal = component.counter;

    // Assert
    expect(newVal).toBeLessThan(initialVal);

  });
  it('should display the counter number on the screen, after being incremented by 1', () => {
    component.increment();
    fixture.detectChanges();
    // Assert that the text on screen is of Number:2
    expect(htmlElement.textContent).toEqual('Number:2');
  });

  it('should display the counter number on the screen, after being decremented by 1', () => {
    component.decrement();
    fixture.detectChanges();
    // Assert that the text on screen is of Number:0
    expect(htmlElement.textContent).toEqual('Number:0');
  });

  it('should display the counter number of the counter', () => {
    // Assert that the text on screen is of Number:1
    expect(htmlElement.textContent).toEqual('Number:1');
  });
});
