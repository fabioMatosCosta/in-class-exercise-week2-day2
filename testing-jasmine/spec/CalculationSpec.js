describe("sum", function(){
    it("should be a function", function(){
        expect(typeof sum).toBe("function");
    });

    it("should have 2 arguments", function(){
        expect(sum.length).toEqual(2);
    });

    it("should return a number", function(){
        expect(typeof sum()).toBe("number");
    });

    it("should return the sum of the 2 arguments", function(){
        expect(sum(5,5)).toEqual(10);
        expect(sum(3,7)).toEqual(10);
        expect(sum(-1,1)).toEqual(0);
    });
});

describe("multiply", function(){
    it("should be a function", function(){
        expect(typeof multiply).toBe("function");
    });

    it("should have 2 arguments", function(){
        expect(multiply.length).toEqual(2);
    });

    it("should return the sum of the 2 arguments", function(){
        expect(multiply(5,5)).toEqual(25);
        expect(multiply(3,7)).toEqual(21);
        expect(multiply(-1,1)).toEqual(-1);
        expect(multiply(0,4)).toEqual(0);
        expect(multiply(0,-4)).toEqual(0);
    });
});