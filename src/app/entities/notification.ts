/* eslint-disable prettier/prettier */
import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null; // O tipo "readAt" pode ser do tipo "Date", "undefined" e "null". Os tipos sempre poderão ser do tipo "undefined". O "undefined" quer dizer que não queremos passar nenhum valor para "readAt". O "null" que dizer que que passamos sim um "valor" para "readAt", mas é nulo. No undefined não estamos tecnicamente tirando o valor da informação, mas não estamos nem mencionando qual seria esse valor. Com o null estamos dizendo que esse atributo possui sim um valor, mas que nesse momento é um valor nulo.
  createAt: Date;
}

export class Notification {
  constructor(private props: Replace<NotificationProps, { createAt?: Date }>) {
    this.props = {
      ...props,
      createAt: props.createAt ?? new Date(),
    };
  }
  
  public get content(): Content {
    return this.props.content;
  }

  public set content(mensagem: Content) {
    this.props.content = mensagem;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(id: string) {
    this.props.recipientId = id;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get createAt(): Date {
    return this.props.createAt;
  }

  public set readAt(readtAt: Date | null | undefined){
    this.props.readAt = readtAt;
  }

  public get readAt(): Date | null | undefined{
    return this.props.readAt;
  }
}
