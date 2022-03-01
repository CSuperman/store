import digitalCheckout from './Checkout';

test('checks price is not undefined', () => {
    expect(digitalCheckout(title)).toBeDefined();
});

test('checks price is not 0', () => {
    expect(digitalCheckout(price)).not.toBe(0);
});

test('checks price is not undefined', () => {
    expect(digitalCheckout(price)).toBeDefined();
});
