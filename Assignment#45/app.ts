function carInfo(manufacturer: string, model: string, ...options: [string, any][]): { manufacturer: string, model: string, [key: string]: any } {
    const car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let option of options) {
        const [key, value] = option;
        car[key] = value;
    }

    return car;
}

const myCar = carInfo("Toyota", "Corolla", ["color", "blue"], ["year", 2024]);
console.log(myCar);
