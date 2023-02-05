const ManagerClass = require('./../lib/Manager');

describe('ManagerClass', () => {
  describe('Initialization', () => {
        it("should create an object with a 'name', 'id', 'email' and 'officeNumber' provided when called with a 'new' keyword", () => {
            // Arrange
            const text1 = 'John';
            const text2 = 'JO11';
            const text3 = 'john@example.com';
            const num = 700;

            // Act
            const obj = new ManagerClass(text1, text2, text3, num);

            // Assert
            expect(obj.name).toEqual(text1);
            expect(obj.id).toEqual(text2);
            expect(obj.email).toEqual(text3);
            expect(obj.officeNumber).toEqual(num);

        });
    });
});