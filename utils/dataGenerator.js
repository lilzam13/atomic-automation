import { faker, Faker } from "@faker-js/faker";

const cleanPhone = (rawNumber) => {
    return rawNumber.replace(/(\s*(x|ext)\.?\s*\d+)?$/, '');
}
export const userFactory = (state = faker.location.state({ abbreviated: true})) => ({ 
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: cleanPhone(faker.phone.number('##########')),
    email: faker.internet.email(),

    country: 'US',
    address: faker.location.streetAddress(),
    secondAddress: faker.location.secondaryAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode()
});

export const membersFactory = (state = faker.location.state({ abbreviated: true})) => ({ 
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),

    country: 'US',
    address: faker.location.streetAddress(),
    secondAddress: faker.location.secondaryAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode()
});

export const regAgentFactory = (state = faker.location.state({ abbreviated: true})) => ({ 
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),

    country: 'US',
    address: faker.location.streetAddress(),
    secondAddress: faker.location.secondaryAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode()
});

export const billingFactory = (state = faker.location.state({ abbreviated: true})) => ({ 
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    expiryMonth: faker.date.month(),
    expiryYear: faker.date.future().getFullYear().toString(),
    cvv: faker.finance.creditCardCVV(),
    country: 'US',
    address: faker.location.streetAddress(),
    secondAddress: faker.location.secondaryAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode()
});