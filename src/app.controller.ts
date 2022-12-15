import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from '../src/infra/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './infra/create_notification_body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async createNotification(@Body() Body: CreateNotificationBody) {
    const { recipientId, content, category } = Body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
