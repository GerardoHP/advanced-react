import { data } from '../testData';
import DataApi from '../DataApi';

const api = new DataApi(data);

describe('DataApi', () => {
  it('shouled expose articles as an object', () => {
    const articles = api.getArticles();
    const [{ id, title }] = data.articles;

    expect(articles).toHaveProperty(id);
    expect(articles[id].title).toBe(title);
  });

  it('shouled expose articles as an object', () => {
    const authors = api.getAuthors();
    const [{ id, firstName }] = data.authors;

    expect(authors).toHaveProperty(id);
    expect(authors[id].firstName).toBe(firstName);
  });
});
