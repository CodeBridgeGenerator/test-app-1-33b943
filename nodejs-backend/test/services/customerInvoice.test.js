const assert = require('assert');
const app = require('../../src/app');

describe('\'customerInvoice\' service', () => {
  it('registered the service', () => {
    const service = app.service('customerInvoice');

    assert.ok(service, 'Registered the service (customerInvoice)');
  });
});
