
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
noff: faker.date.past(""),
invoicetype: faker.date.past(""),
invoicedateandtime: faker.date.past(""),
suppliername: faker.date.past(""),
suppliertin: faker.date.past(""),
identifiertype: faker.date.past(""),
identifiernumber: faker.date.past(""),
suppliermsiccode: faker.date.past(""),
supplierbusinessactivitydescription: faker.date.past(""),
thefirstsuppliercontactnumber: faker.date.past(""),
suppliercontactnumber: faker.date.past(""),
countryname: faker.date.past(""),
statename: faker.date.past(""),
cityname: faker.date.past(""),
supplieradressline0: faker.date.past(""),
buyername: faker.date.past(""),
buyercountryname: faker.date.past(""),
buyerstatename: faker.date.past(""),
buyercityname: faker.date.past(""),
buyeraddressline0: faker.date.past(""),
thefirstbuyercontactnumber: faker.date.past(""),
buyercontactnumber: faker.date.past(""),
invoicecurrency: faker.date.past(""),
invoicelineclassification: faker.date.past(""),
productname: faker.date.past(""),
unitprice: faker.date.past(""),
subtotal: faker.date.past(""),
totalexcludingtax: faker.date.past(""),
taxtype: faker.date.past(""),
taxamount: faker.date.past(""),
totaltaxamountpertaxtype: faker.date.past(""),
additionalfeedescription: faker.date.past(""),
totaltaxamount: faker.date.past(""),
totalincludingtax: faker.date.past(""),
totalpayableamount: faker.date.past(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
