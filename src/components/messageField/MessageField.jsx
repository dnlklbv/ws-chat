import React from 'react';

import { TextComposer, Row, TextInput, SendButton } from '@livechat/ui-kit';

export const MessageField = () => (
  <TextComposer>
    <Row align="center">
      <TextInput fill />
      <SendButton fit />
    </Row>
  </TextComposer>
);
