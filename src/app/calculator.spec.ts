import { Calculator } from "./calculator";

describe('test for calculator', () => {
  describe('test for multiply', () => {
    it('#multiply should return a number', () => {
      // AAA: Arrange
      const calculator = new Calculator();
      // Act,
      const rta = calculator.multiply(3,3);
      // Assert
      expect(rta).toEqual(9);
    });
    it('#multiply should return a 0', () => {
      // AAA: Arrange
      const calculator = new Calculator();
      // Act,
      const rta = calculator.multiply(3,0);
      // Assert
      expect(rta).toEqual(0);
    });
  });
  describe('test for divide', () => {
    it('#divide should return a null', () => {
      // AAA: Arrange
      const calculator = new Calculator();
      // Act,
      const rta = calculator.divide(3,0);
      // Assert
      expect(rta).toBeNull();
    });
    it('#divide should return a number', () => {
      // AAA: Arrange
      const calculator = new Calculator();
      // Act,
      // Assert
      expect(calculator.divide(3,2)).toBe(1.5);
      expect(calculator.divide(10,2)).toBe(5);
    });
  })
  it('tests matchers', () => {
    let name = 'juanda';
    let name2;
    expect(name).toBeDefined();
    expect(name2).toBeUndefined();
    expect(1+2 === 3).toBeTruthy();
    expect(1+1 === 3).toBeFalsy();
    expect(5).toBeLessThan(10);
    expect(15).toBeGreaterThan(10);
  });
})
/**
 /Comunes
.toBe();
.not.toBe();
.toEqual();

//Veracidad
.toBeNull()
.toBeUndefined()
.toBeDefined()
.toBeUndefined()
.toBeTruthy()
.toBeFalsy()

//Numeros
.toBeGreaterThan(3);
.toBeGreaterThanOrEqual(3.5);
.toBeLessThan(5);
.toBeLessThanOrEqual(4.5);

//Numeros decimales
expect(0.3).toBeCloseTo(0.3)

//Strings
.not.toMatch(/I/);
.toMatch(/stop/);

//Arrays
.toContain('milk');

//Excepciones
myfunction.toThrow(Error);

*/


// ng test --no-watch --code-coverage: Generar un reporte de cobertura

// Add f at the beggining of a describe() => fdescribe() ejecuta unicamente el suite the test
// add x at the beggining of a describe() => xdescribe()
