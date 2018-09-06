export const h1Code = `import { Header } from '@bpanel/bpanel-ui';

<Header type="h1">H1 tag</Header>
`;

export const h2Code = `import { Header } from '@bpanel/bpanel-ui';

<Header type="h2">H2 tag</Header>
`;

export const h3Code = `import { Header } from '@bpanel/bpanel-ui';

<Header type="h3">H3 tag</Header>
`;

export const h4Code = `import { Header } from '@bpanel/bpanel-ui';

<Header type="h4">H4 tag</Header>
`;

export const h5Code = `import { Header } from '@bpanel/bpanel-ui';

<Header type="h5">H5 tag</Header>
`;

export const h6Code = `import { Header } from '@bpanel/bpanel-ui';

<Header type="h6">H6 tag</Header>
`;

export const spanCode1 = `import { Text } from '@bpanel/bpanel-ui';

<Text>Text span Component</Text>
`;

export const spanCode2 = `import { Text } from '@bpanel/bpanel-ui';

<Text type="span">Text span Component</Text>
`;

export const pCode = `import { Text } from '@bpanel/bpanel-ui';

<Text type="p">Text p Component</Text>
`;

export const strongCode = `import { Text } from '@bpanel/bpanel-ui';

<Text type="strong">Text strong Component</Text>
`;

export const condensedCode0 = `import { Text } from '@bpanel/bpanel-ui';
  <Text type="condensed" condenseThreshold={50}>Text condensed Component</Text>
`;
export const condensedCode1 = `import { Text } from '@bpanel/bpanel-ui';
  <Text type="span">
    {'Bech32 : '}
    <Text type="condensed" condenseThreshold={40}>
      bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq
    </Text>
  </Text>
`;
export const condensedCode2 = `import { Text } from '@bpanel/bpanel-ui';
  <Text type="span">
    {'Bech32 : '}
    <Text type="condensed" copyIcon={true} prefix={6} suffix={0}>
      bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq
    </Text>
  </Text>
`;

export const linkCode = `import { Link } from '@bpanel/bpanel-ui';

<Link to="/wallets">Link Component.</Link>
`;

export const externalLinkCode = `import { Link } from '@bpanel/bpanel-ui';

<Link to="http://bcoin.io/">External Link to Bcoin.</Link>
`;

export const buttonPrimaryCode = `import { Button } from '@bpanel/bpanel-ui';

<Button type="primary">Primary Button Component</Button>
`;

export const buttonActionCode = `import { Button } from '@bpanel/bpanel-ui';

<Button type="action">Action Button Component</Button>
`;

export const loginFormCode = `import { Input } from '@bpanel/bpanel-ui';

<form>
  <Input
    type="text"
    name="text"
    placeholder="Text Input"
    style={{ marginBottom: '5px' }}
  />
  <Input
    type="password"
    name="password"
    placeholder="Add your password"
    style={{ marginBottom: '5px' }}
  />
  <Input
    type="submit"
    name="submit"
    value="Submit"
    style={{ marginBottom: '5px', marginRight: '5px' }}
  />
  <Input
    type="reset"
    name="reset"
    value="Reset"
    style={{ marginBottom: '5px', marginRight: '5px' }}
  />
</form>`;

export const radioFormCode = `import { Input } from '@bpanel/bpanel-ui';

<form>
  <Input type="radio" name="radio" value="yes" checked /> Yes<br />
  <Input type="radio" name="radio" value="no" /> No<br />
  <Input type="radio" name="radio" value="maybe" /> Maybe<br />
</form>`;

export const fileUploadCode = `import { Input } from '@bpanel/bpanel-ui';

<form>
  Upload a file<br />
  <Input type="file" name="file" />
</form>`;

export const tableCode = `import { Table } from '@bpanel/bpanel-ui';

<Table {...tableProps} />
`;

export const tabMenuCode = `import { TabMenu } from '@bpanel/bpanel-ui';

<TabMenu />
`;

export const nestedViewCode = `import { utils } from '@bpanel/bpanel-ui';
const { createNestedViews } = utils;
const childViews = [
  {
    path: \`\$\{match.url}/child-1\`,
    component: props => (<div className="child-1"><Header type="h3">Child 1</Header></div>)
  },
  {
    path: \`\$\{match.url}/child-2\`,
    component: props => (<div className="child-2"><Header type="h3">Child 2</Header></div>)
  }
];

// these are optional
const Home = () => (<div><Header type="h3">Home View</Header></div>);
const NotFound = () => (<div><Header type="h3">404</Header></div>);

const NestedViews = utils.createNestedViews(childViews, Home, NotFound);

const MyView = props => (
  <div>
    <Header type="h2">Child Views</Header>
    <Button type="primary">
      <Link to={\`\$\{props.match.url}\`}>"Home"</Link>
    </Button>

    <Button type="action" style={{ marginRight: '1rem' }}>
      <Link to={\`\$\{childViews[0].path}\`}>Child 1</Link>
    </Button>

    <Button type="action" style={{ marginRight: '1rem' }}>
      <Link to={\`\$\{childViews[1].path}\`}>Child 2</Link>
    </Button>

    <Button type="primary" style={{ marginRight: '1rem' }}>
      <Link to={\`\$\{props.match.url}/blah-blah-blah\`}>"Broken Link"</Link>
    </Button>

    <NestedViews match={props.match} />
  </div>
);
`;

export const dropdownCode = `import { Dropdown } from '@bpanel/bpanel-ui'

const opts = ['satoshi', 'vitalik', 'craig'];

const dropdown = props => (
  <div>
    <Dropdown options={opts} />
  </div>
);

`;
