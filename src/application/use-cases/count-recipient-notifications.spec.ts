import { makeNotification } from '@test/factories/notification-factory';
import { inMemoryNotificationsRepository } from '@test/repository/in-memory-notifications-repositories';
import { CountRecipientNotification } from './count-recipient-notifications';

describe('Count Notification', () => {
  it('should be able to count a notification', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-one' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-one' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-two' }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-one',
    });

    expect(count).toEqual(2);
  });
});
