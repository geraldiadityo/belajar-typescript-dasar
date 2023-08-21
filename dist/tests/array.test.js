"use strict";
describe('Array', function () {
    it('should be array', function () {
        const names = ["geraldi", "kem", "roberto"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it('should support readonly array', function () {
        const hobbies = ["membaca", "menulis"];
        console.info(hobbies[0]);
        console.info(hobbies[1]);
    });
});
