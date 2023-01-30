import { inMemoryNotificationsRepository } from '../../../test/repository/in-memory-notifications-repositories';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);
    const { notification } = await sendNotification.execute({
      content: 'This is a Notification',
      category: 'Social',
      recipientId: 'Exemple-recipient-id',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
