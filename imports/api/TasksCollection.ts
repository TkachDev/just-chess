import { Mongo } from 'meteor/mongo';

export interface ITask {
  _id: string;
  text: string;
  createdAt: Date;
  isChecked?: boolean;
}


export const TasksCollection = new Mongo.Collection<ITask>('tasks');