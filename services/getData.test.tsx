/* eslint-disable no-undef */
import getData from './getData';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          mission_name: 'Test Mission1',
        },
        {
          mission_name: 'Test Mission2',
        },
      ]),
  })
);
describe('spacexdata api', () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  it('should fetch data from api', async () => {
    const data = await getData();

    expect(data).toHaveLength(2);
    expect(data[0].mission_name).toContain('Test Mission1');
    expect(data[1].mission_name).toContain('Test Mission2');
  });
});
