/* eslint-disable prettier/prettier */
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notification-repository';

export interface SendNoificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification
}

export class SendNotificationUseCase {

  constructor(private readonly repository: NotificationsRepository) {}


  async execute(request: SendNoificationRequest): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content), 
      category
    });

    await this.repository.create(notification);


    return {
      notification,
      
    };
  }
}
