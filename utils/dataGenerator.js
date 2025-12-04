import { Faker, en } from "@faker-js/faker";

const cleanPhone = (rawNumber) => {
    return rawNumber.replace(/(\s*(x|ext)\.?\s*\d+)?$/, '');
}

const customZipcodes = {
  location: {
    postcode_by_state: {
      CA: ['90001', "90210", "94105"],
      TX: ["73301", "75001"],
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
    zipCode: faker.location.zipCode({ state: state })
});

export const membersFactory = (state = faker.location.state({ abbreviated: true})) => ({ 
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    country: 'US',
    address: faker.location.streetAddress(),
    secondAddress: faker.location.secondaryAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode({ state: state })
});

export const regAgentFactory = (state = faker.location.state({ abbreviated: true})) => ({ 
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),

    country: 'US',
    address: faker.location.streetAddress(),
    secondAddress: faker.location.secondaryAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode({ state: state })
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
    zipCode: faker.location.zipCode({ state: state })
});