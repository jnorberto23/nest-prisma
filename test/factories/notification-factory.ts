import { Content } from '@application/entities/content';
import {
  NotificationProps,
  Notification,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitacao de amizade!'),
    recipientId: 'recipient-two',
    ...override,
  });
}
