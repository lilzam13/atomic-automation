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
    secondaryAddress: faker.location.secondaryAddress(),
    city: faker.location.city(),
    state: faker.location.zipCode()
});
