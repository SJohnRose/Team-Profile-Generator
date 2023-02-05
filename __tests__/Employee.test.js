const EmployeeClass = require('./../lib/Employee');

describe('EmployeeClass', () => {
  describe('Initialization', () => {
        it("should create an object with a 'name', 'id' and 'email' provided when called with a 'new' keyword", () => {
            // Arrange
            const text1 = 'John';
            const text2 = 'JO11';
            const text3 = 'john@example.com';

            // Act
            const obj = new EmployeeClass(text1, text2, text3);

            // Assert
            expect(obj.name).toEqual(text1);
            expect(obj.id).toEqual(text2);
            expect(obj.email).toEqual(text3);

        });
    });
});