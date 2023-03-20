import { ReloadMessage, SerializedMessage } from './types';

export default class MessageInterpreter {
  private constructor() {}

  static send(message: ReloadMessage): SerializedMessage {
    return JSON.stringify(message);
  }
  static receive(serializedMessage: SerializedMessage): ReloadMessage {
    return JSON.parse(serializedMessage);
  }
}
