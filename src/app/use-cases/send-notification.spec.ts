/* eslint-disable prettier/prettier */
import { SendNotificationUseCase } from './send-notification-use-case';

describe('Send notification test', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotificationUseCase();

    const { notification } = await sendNotification.execute({
      recipientId: 'example-id',
      content: 'Testando o envio de notificação',
      category: 'testing'
    })
    expect(notification).toBeTruthy();
  });
});
