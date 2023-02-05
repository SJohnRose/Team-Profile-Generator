const EngineerClass = require('./../lib/Engineer');

describe('EngineerClass', () => {
  describe('Initialization', () => {
        it("should create an object with a 'name', 'id', 'email', 'github' provided when called with a 'new' keyword", () => {
            // Arrange
            const text1 = 'John';
            const text2 = 'JO11';
            const text3 = 'john@example.com';
            const text4 = 'john-git';

            // Act
            const obj = new EngineerClass(text1, text2, text3, text4);

            // Assert
            expect(obj.name).toEqual(text1);
            expect(obj.id).toEqual(text2);
            expect(obj.email).toEqual(text3);
            expect(obj.github).toEqual(text4);

        });
    });
});

