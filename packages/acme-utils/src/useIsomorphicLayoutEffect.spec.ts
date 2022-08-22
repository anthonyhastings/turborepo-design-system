import React from 'react';

describe('#useIsomorphicLayoutEffect', () => {
  it('returns React.useLayoutEffect when window is defined', () => {
    const actualWindow = global.window;

    Object.defineProperty(global, 'window', {
      value: {},
      writable: true,
    });

    const { useIsomorphicLayoutEffect } = jest.requireActual(
      './useIsomorphicLayoutEffect'
    );

    Object.defineProperty(global, 'window', {
      value: actualWindow,
      writable: true,
    });

    expect(useIsomorphicLayoutEffect).toStrictEqual(React.useLayoutEffect);
  });

  it('returns a no-op when window is undefined', () => {
    const actualWindow = global.window;

    Object.defineProperty(global, 'window', {
      value: undefined,
      writable: true,
    });

    const { useIsomorphicLayoutEffect } = jest.requireActual(
      './useIsomorphicLayoutEffect'
    );

    Object.defineProperty(global, 'window', {
      value: actualWindow,
      writable: true,
    });

    expect(useIsomorphicLayoutEffect).not.toEqual(React.useLayoutEffect);
  });

  afterEach(() => {
    jest.resetModules();
  });
});
