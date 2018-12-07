import React, { PureComponent } from 'react';
import { Modal, Button, Text } from '@bpanel/bpanel-ui';

class TestModal extends PureComponent {
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
        <Button onClick={() => this.onClick()}>Show Modal</Button>
      </div>
    );
  }
}

export default TestModal