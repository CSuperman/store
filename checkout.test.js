

import digitalCheckout from './Checkout';

test('checks price is less than the limit', () => {
    expect(digitalCheckout(price)).toBeLessThan(10000);
});
