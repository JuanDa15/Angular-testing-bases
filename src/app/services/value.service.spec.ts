import { TestBed } from '@angular/core/testing';
import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    // Arrange
    TestBed.configureTestingModule({
      providers: [ ValueService ]
    });
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('Test for get value and set value', () => {
    it("should be equal to 'my value'", () => {
      // Act
      let value: string = service.value;
      //Assert
      expect(value).toEqual('my value');
      service.value = 'Juan';
      value = service.value;
      expect(value).toEqual('Juan');
    });
    it("should be string type", () => {
      // Act
      let value: string = service.value;
      // Assert
      expect(value).toBeInstanceOf(String);
    });
  });


  describe('Test for promise',() => {
    it('should return a value from a promise', (doneFn) => {
      // Act
      service.getPromiseValue().then(
        value => {
          expect(value).toBe('my value');
          doneFn();
        }
      )
    })
    it('should return a value from a promise',async () => {
      // Act
      let value = await service.getPromiseValue();
      expect(value).toBe('my value');
    });
  })

  describe('Test for observable',() => {
    it('should return a value from an observable', () => {
      service.getObservableValue().subscribe((value) => {
        expect(value).toBe('of value');
      })
    });
  });

});
