import {render, screen} from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
  test('render posts if request successed', async () => {
    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {id: 'p1', title: 'First Post'}
      ]
    })

    render(<Async/>)

    // find return a promise
    const items = await screen.findAllByRole('listitem');

    expect(items).not.toHaveLength(0)
  })
});