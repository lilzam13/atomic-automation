import { Faker, en } from "@faker-js/faker";

const cleanPhone = (rawNumber) => {
    return rawNumber.replace(/(\s*(x|ext)\.?\s*\d+)?$/, '');
}

const customZipcodes = {
    location:{
        postcode_by_state:{
            CA:['90001', "90210", "94105"],
            TX: ["75009", "75001"],
            FL: ['32003'],
        }
    }
};

const faker = new Faker({
    locale: [en, customZipcodes]
});

export const userFactory = (state = faker.location.state({ abbreviated: true})) => ({ 
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: cleanPhone(faker.phone.number('##########')),
    email: faker.internet.email(),

    country: 'US',
    address: faker.location.streetAddress(),
    secondAddress: faker.location.secondaryAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode({ state: state})
});

export const membersFactory = (state = faker.location.state({ abbreviated: true})) => ({ 
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),

    country: 'US',
    address: faker.location.streetAddress(),
    secondAddress: faker.location.secondaryAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode({ state: state})
});

export const regAgentFactory = (state = faker.location.state({ abbreviated: true})) => ({ 
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),

    country: 'US',
    address: faker.location.streetAddress(),
    secondAddress: faker.location.secondaryAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode({ state: state})
});

export const billingFactory = (state = faker.location.state({ abbreviated: true })) => {
    const now = new Date();
    
    const futureYear = now.getFullYear() + faker.number.int({ min: 1, max: 4 });
    const futureMonth = faker.number.int({ min: 1, max: 12 });

    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),

        expiryMonth: futureMonth.toString().padStart(2, '0'),
        expiryYear: futureYear.toString(),

        cvv: faker.finance.creditCardCVV(),

        country: 'US',
        address: faker.location.streetAddress(),
        secondAddress: faker.location.secondaryAddress(),
        city: faker.location.city(),
        zipCode: faker.location.zipCode({ state })
    };
};