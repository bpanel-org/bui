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

export const labelCodeStacked = `<Label
  text="My custom label"
  stacked
  description="optional description text to show under child components"
>
  <Input placeholder="my input field" />
</Label>
<br />`;

export const labelCode = `<Label
  text="My custom label"
  stacked={false}
  className="mb-3"
  textClasses="col"
  description="optional "
>
  <Input placeholder="my input field" />
</Label>`;

export const tableCode = `import { Table } from '@bpanel/bpanel-ui';

<Table {...tableProps} />
`;

export const selectableTableCode = `import { Table } from '@bpanel/bpanel-ui';

<Table {...tableProps} selectable/>
`;

export const tabMenuCode = `import { TabMenu } from '@bpanel/bpanel-ui';

<TabMenu tabs={[
  {header: 'Test', body:<div>hello world</div>},
  {header: 'Test 2', body:<div>hello world 2</div>}
]} />
`;

export const tabMenuCodeVertical = `import { TabMenu } from '@bpanel/bpanel-ui';

<TabMenu orientation="vertical" tabs={[
  {header: 'Test', body:<div>hello world</div>},
  {header: 'Test 2', body:<div>hello world 2</div>}
]} />
`

export const paperCode = `<Paper header="Paper Header">
  <Text type="p">child content</Text>
</Paper>`;

export const paperCodeError = `<Paper header="Paper Header w/ error diplay" type="error">
  <Text type="p">child content</Text>
</Paper>`;

export const nestedViewCode = `import { utils } from '@bpanel/bpanel-ui';
const { createNestedViews } = utils;
// note that this would be embedded in another component
// and "match" would come as a prop from React Router
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

const NestedViews = createNestedViews(childViews, Home, NotFound);

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

export const modalCode= `import { Modal } from '@bpanel/bpanel-ui'
class ModalContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  onClick() {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal
    })
  }

  render() {
    const { showModal } = this.state;
    return(
      <div>
        <Modal show={showModal} header="I am a modal header" footer="I am a modal footer" closeModal={() => this.onClick()}>
          <Text type="p">
            Modal content is passed normal React children, either text or a node
            Element is acceptable. Header and footer can also be strings or components.
          </Text>
        </Modal>
        <Text type="p">We handle the interactions outside of the modal, using state to determine whether to show the component</Text>
        <Button onClick={() => this.onClick()}>Show Modal!</Button>
      </div>
    );
  }
}`