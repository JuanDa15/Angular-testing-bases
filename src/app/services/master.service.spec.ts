import { TestBed } from '@angular/core/testing';
import { FakeValueService } from './fake-value.service';
import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
  let masterService: MasterService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>;


  beforeEach(() =>  {
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);

    TestBed.configureTestingModule({
      providers: [
        MasterService,
        { provide: ValueService, useValue: spy }
      ]
    });
    masterService = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
  });

  it('should be create', () => {
    expect(masterService).toBeTruthy();
  });

  // it('should return my value from real service', () => {
  //   // MOCK value service
  //   let valueService: ValueService = new ValueService();
  //   let masterService: MasterService = new MasterService(valueService);
  //   expect(masterService.getValue()).toBe('my value');
  // });

  // it('should return other value from a fake service', () => {
  //   // Fake service
  //   let valueService = new FakeValueService();
  //   let masterService: MasterService = new MasterService(<ValueService>valueService);
  //   expect(masterService.getValue()).toBe('fake value');
  // });

  // it('should return other value from a fake object', () => {
  //   // Fake object
  //   const fake = { getValue: () => 'Fake from object' }
  //   let masterService: MasterService = new MasterService(fake as unknown as ValueService);
  //   expect(masterService.getValue()).toBe('Fake from object');
  // });

  // it('should call value from value service', () => {
  //   let valueServiceSpy: jasmine.SpyObj<ValueService> = jasmine.createSpyObj('ValueService',['getValue']);
  //   valueServiceSpy.getValue.and.returnValue('fake value');
  //   let masterService: MasterService = new MasterService(valueServiceSpy);
  //   expect(masterService.getValue()).toBe('fake value');
  //   expect(valueServiceSpy.getValue).toHaveBeenCalled();
  //   expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
  // });
  it('should call value from value service', () => {
    valueServiceSpy.getValue.and.returnValue('fake value');
    expect(masterService.getValue()).toBe('fake value');
    expect(valueServiceSpy.getValue).toHaveBeenCalled();
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
  });
});


// MOCKING
/**
 * Son objetos simulados (pseudo-objetos, mock object, objetos de pega) a los
 * que imitan el comportamiento de objetos reales de una forma controlada
 */
