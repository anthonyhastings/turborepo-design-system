import { renderHook } from '@testing-library/react-hooks';
import { usePrevious } from './usePrevious.js';

describe('#usePrevious', () => {
  it('1 + 1 = 2', () => {
    const { result, rerender } = renderHook(({ state }) => usePrevious(state), {
      initialProps: { state: 'hello' },
    });

    expect(result.current).toEqual('hello');

    rerender({ state: 'world' });
    expect(result.current).toEqual('hello');

    rerender({ state: 'foo' });
    expect(result.current).toEqual('world');
  });
});
