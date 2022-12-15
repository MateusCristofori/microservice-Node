/* eslint-disable prettier/prettier */
import { Content } from './content';
import { Notification } from './notification';

describe('Create notification test', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova mensagem'),
      category: 'notification',
      recipientId: 'example-recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
