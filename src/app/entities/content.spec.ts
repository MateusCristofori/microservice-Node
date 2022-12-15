/* eslint-disable prettier/prettier */
import { Content } from './content';


describe('Notification content test', () => {
  it('should be able to create a notification content', () => {
    expect(() => new Content('Você recebeu uma notificação')).toBeTruthy();
  });
  
  it('should be not to create a notification content with less then 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });
  
  it('should be not to create a notification content with more then 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
