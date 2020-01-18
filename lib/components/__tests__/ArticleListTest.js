import React from 'react';
import ArticleList from '../ArticleList';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Article from '../Article';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' }
    }
  };

  Article.propTypes = {};

  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList {...testProps} />);

    expect(wrapper.find('ArticleContainer').length).toBe(2);

    expect(wrapper).toMatchSnapshot();
  });
});
