describe('Type Alias', function () {
    it('should be supported in typescript', function () {
        const category = {
            id: "1",
            name: "handphone"
        };
        const product = {
            id: "1",
            name: "Samsung S20",
            price: 2000000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
