export class FakeValueService {

  constructor() { }

  get value() {
    return 'fake value';
  }

  set value(value: string) {}

  getValue(): string { return 'fake value'; }
  getPromiseValue(): Promise<string>{
    return Promise.resolve('fake promise value');
  }
}
