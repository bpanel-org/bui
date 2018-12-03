import { SidebarNavItem } from '@bpanel/bpanel-ui';

import Bui from './Bui';

export const metadata = {
  name: 'ui',
  author: 'bcoin-org',
  pathName: 'bui',
  displayName: 'BUI',
  order: 0,
  icon: 'cubes',
  sidebar: true,
  version: require('../package.json').version,
};

export const decorateSidebar = (Sidebar, { React, PropTypes }) => {
  return class extends React.PureComponent {
    static displayName() {
      return 'testSidebar';
    }

    static get propTypes() {
      return {
        sidebarNavItems: PropTypes.array,
        location: PropTypes.shape({
          pathname: PropTypes.string
        })
      };
    }

    render() {
      const {
        sidebarNavItems: existingNavItems,
        location: { pathname = '' }
      } = this.props;

      let pluginIndex = existingNavItems.length;

      // app will order the nav items for us
      // want to find out what index it is at
      // so it can be replaced with our custom nav component
      // can also just append to end
      existingNavItems.forEach((item, index) => {
        if (item.name === metadata.name) pluginIndex = index;
      });

      const newNavItem = React.createElement(SidebarNavItem, {
        pathname,
        ...metadata
      });

      const _sidebarNavItems = existingNavItems
        .slice(0, pluginIndex)
        .concat(newNavItem, existingNavItems.slice(pluginIndex + 1));

      return <Sidebar {...this.props} sidebarNavItems={_sidebarNavItems} />;
    }
  };
};

export const decoratePanel = (Panel, { React, PropTypes }) => {
  return class DecoratedDashboard extends React.PureComponent {
    static displayName() {
      return 'bPanel UI';
    }

    static get propTypes() {
      return {
        customChildren: PropTypes.array
      };
    }

    render() {
      const { customChildren = [] } = this.props;
      return (
        <Panel
          {...this.props}
          customChildren={customChildren.concat({ Component: Bui, metadata })}
        />
      );
    }
  };
};
