import { Seller } from "../src/seller.interface";
import { Employee, Manager } from "../src/employee.interface";
describe('Interface Test', function() {
    it('should support in typescript', function() {
        const seller: Seller = {
            id:1,
            name: "geraldi",
            nib: "1234123",
            npwp: "1234555123"
        };

        console.info(seller);
    });

    it('should support function interface', function() {

        interface AddFunction {
            (value1: number, value2: number): number
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }

        expect(add(1,2)).toBe(3);
    });

    it('should support indexable interface', function() {
        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ["geraldi","adityo"];

        console.info(names[0]);
        console.info(names[1]);
    });

    it('should support dict indexable', function() {
        interface StringDictionary {
            [key: string]: string
        }

        const dict: StringDictionary = {
            "name":"geraldi",
            "country":"indonesia"
        };

        expect(dict['name']).toBe("geraldi");
        expect(dict['country']).toBe('indonesia');
    });

    it('should be extend interface', function(){

        const employee: Employee = {
            id: 1,
            name: "adityo",
            division:"IT"
        };

        console.info(employee);

        const manager: Manager = {
            id:2,
            name: "Geraldi",
            division: "IT",
            numberOfEmployee: 10
        };

        console.info(manager);
    });
});
