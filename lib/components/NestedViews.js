import React from 'react';
import {
  Header,
  Text,
  Button,
  Link,
  utils
} from '@bpanel/bpanel-ui';

const Home = ({ location }) => (
  <div>
    <Header type="h3">Home View</Header>
    <Text type="p">This is the "home view" that shows when at the parent path</Text>
    <Text type ="p">Path: {location.pathname}</Text>
  </div>
);

const NotFound = ({ location }) => (
  <div>
    <Header type="h3">404</Header>
    <Text type="p">
    {`You can optionally have a 404 view when you've navigated to an unregistered view.`}
    </Text>
    <Text type ="p">Path: {location.pathname}</Text>
  </div>
);

const NestedViews = ({ match, location }) => {
  const childViews = [
    {
      path: `${match.url}/child-1`,
      component: props => (
        <div className="child-1">
          <Header type="h3">Child 1</Header>
          <Text type="p">This is a sample child view</Text>
          <Text type ="p">Path: {location.pathname}</Text>
        </div>
      )
    },
    {
      path: `${match.url}/child-2`,
      component: props => (
        <div className="child-2">
          <Header type="h3">Child 2</Header>
          <Text type="p">This is another sample child view</Text>
          <Text type ="p">Path: {location.pathname}</Text>
        </div>
      )
    }
  ];

  const Views = utils.createNestedViews(childViews, Home, NotFound);

  return (
    <div>
      <Text type="p">Notice that the url path in your browser will change as you click the links below</Text>
      <Button type="primary" style={{ marginRight: '1rem' }}>
        <Link to={`${match.url}`}>"Home"</Link>
      </Button>

      <Button type="action" style={{ marginRight: '1rem' }}>
        <Link to={`${childViews[0].path}`}>Child 1</Link>
      </Button>

      <Button type="action" style={{ marginRight: '1rem' }}>
        <Link to={`${childViews[1].path}`}>Child 2</Link>
      </Button>

      <Button type="primary" style={{ marginRight: '1rem' }}>
        <Link to={`${match.url}/blah-blah-blah`}>"Broken Link"</Link>
      </Button>

      <Views match={match} />
    </div>
  );
};

export default NestedViews;
