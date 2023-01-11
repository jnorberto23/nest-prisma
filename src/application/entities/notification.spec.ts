import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitacao'),
      recipientId: 'bec443f9-4be2-4909-9b65-b546f91dc10d',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
