describe('Function test', function(){
    it('should support function typescript', function(){
        
        // mengembalikan return berupa string
        function sayHello(name: string): string {
            return `Hello ${name}`
        }

        expect(sayHello('geraldi')).toBe('Hello geraldi');
        
        // tidak mengembalikan return apapun
        function printHello(name: string): void {
            console.info(name);
        }

        printHello('geraldi');
    });

    it('should be support function with default value', function() {
        
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`
        }

        expect(sayHello("Geraldi")).toBe('Hello Geraldi');
        expect(sayHello()).toBe("Hello Guest");
    });

    it('should be support rest parameter', function(){
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            
            return total;
        }
        
        expect(sum(1,2,3,4,5)).toBe(15);
    });

    it('should be support function optional parameter', function() {
        function sayHello(fistName: string, lastName?: string): string {
            if (lastName){
                return `Hello ${fistName} ${lastName}`
            } else {
                return `Hello ${fistName}`
            }
        }

        expect(sayHello("Geraldi","Adityo")).toBe("Hello Geraldi Adityo");
        expect(sayHello("Geraldi")).toBe("Hello Geraldi");
    });

    it('should support function as parameter', function(){
        
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        function toLower(name: string): string {
            return name.toLowerCase();

        }

        expect(sayHello("Geraldi", toUpper)).toBe("Hello GERALDI");
        expect(sayHello("Geraldi",toLower)).toBe("Hello geraldi");
    });
});