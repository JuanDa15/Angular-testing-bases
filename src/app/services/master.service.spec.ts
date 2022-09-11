import { FakeValueService } from './fake-value.service';
import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
  let service: MasterService;

  it('should return my value from real service', () => {
    // MOCK value service
    let valueService: ValueService = new ValueService();
    let masterService: MasterService = new MasterService(valueService);
    expect(masterService.getValue()).toBe('my value');
  });

  it('should return other value from a fake service', () => {
    // Fake service
    let valueService = new FakeValueService();
    let masterService: MasterService = new MasterService(<ValueService>valueService);
    expect(masterService.getValue()).toBe('fake value');
  });

  it('should return other value from a fake object', () => {
    // Fake object
    const fake = { getValue: () => 'Fake from object' }
    let masterService: MasterService = new MasterService(fake as unknown as ValueService);
    expect(masterService.getValue()).toBe('Fake from object');
  });

  it('should call value from value service', () => {
    let valueServiceSpy: jasmine.SpyObj<ValueService> = jasmine.createSpyObj('ValueService',['getValue']);
    valueServiceSpy.getValue.and.returnValue('fake value');
    let masterService: MasterService = new MasterService(valueServiceSpy);
    expect(masterService.getValue()).toBe('fake value');
    expect(valueServiceSpy.getValue).toHaveBeenCalled();
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
    expect(valueServiceSpy.getValue).
  });
});


// MOCKING
/**
 * Son objetos simulados (pseudo-objetos, mock object, objetos de pega) a los
 * que imitan el comportamiento de objetos reales de una forma controlada
 */
