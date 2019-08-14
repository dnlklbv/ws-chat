import React from 'react';
import { MessageList } from '@livechat/ui-kit';

const messages = [
  {
    from: 'Daniil',
    message: 'Hello world',
    id: '13as1d12e2',
    time: '1565789955204',
  },
  {
    from: 'Daniil',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    id: '13asd412e2',
    time: '1565789956204',
  },
  {
    from: 'User',
    message: 'Some text',
    id: '13asgd12e2',
    time: '1565789959204',
  },
  {
    from: 'Daniil',
    message: 'Hello world',
    id: '13asd120e2',
    time: '1565789965204',
  },
]

export const ChatField = () => (
  <MessageList>
  </MessageList>
)
