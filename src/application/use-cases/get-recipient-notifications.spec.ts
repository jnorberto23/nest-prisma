import { makeNotification } from '@test/factories/notification-factory';
import { inMemoryNotificationsRepository } from '@test/repository/in-memory-notifications-repositories';
import { GetRecipientNotification } from './get-recipient-notifications';

describe('Get Notification', () => {
  it('should be able to get a notification', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const getRecipientNotification = new GetRecipientNotification(
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

    const { notifications } = await getRecipientNotification.execute({
      recipientId: 'recipient-one',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-one' }),
        expect.objectContaining({ recipientId: 'recipient-one' }),
      ]),
    );
  });
});
