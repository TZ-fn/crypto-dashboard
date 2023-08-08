import capitalise from './capitalise';

describe('capitalise', () => {
  it('capitalises different strings correctly', () => {
    expect(capitalise('asdf')).toBe('Asdf');

    expect(capitalise('ąsdf')).toBe('Ąsdf');

    expect(capitalise('~asdf')).toBe('~asdf');

    expect(capitalise('0asdf')).toBe('0asdf');

    expect(capitalise('Asdf')).toBe('Asdf');

    expect(capitalise('ASDF')).toBe('ASDF');
  });
});
