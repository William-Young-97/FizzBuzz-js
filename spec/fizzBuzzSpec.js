describe('FizzBuzz', () => {

  let fizzBuzz;

  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  describe('Multiples of 3', () => {
    it('Expects 3 to return Fizz', () => {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
  });

  describe('Multiples of 3', () => {
    it('Expects multiples of 5 to return Fizz', () => {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
  });

  describe('Multiples of 3 and 5', () => {
    it('Expects multiples of 3 and 5 to return FizzBuzz', () => {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');    
    });
  });

  describe('Any other number returns itseld', () => {
    it('Expects number to return itself', () => {
      expect(fizzBuzz.play(1)).toEqual(1);
    });    
  });
});