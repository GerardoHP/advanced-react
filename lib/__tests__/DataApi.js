import { data } from '../testData';
import StateApi from 'state-api';

const store = new StateApi(data);

describe('DataApi', () => {
  it('shouled expose articles as an object', () => {
    const { articles } = store.getState();
    const [{ id, title }] = data.articles;

    expect(articles).toHaveProperty(id);
    expect(articles[id].title).toBe(title);
  });

  it('shouled expose articles as an object', () => {
    const {authors} = store.getState();
    const [{ id, firstName }] = data.authors;

    expect(authors).toHaveProperty(id);
    expect(authors[id].firstName).toBe(firstName);
  });
});
