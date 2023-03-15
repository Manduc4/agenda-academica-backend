import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScheduleDocument = Schedule & Document;

@Schema()
export class Schedule {
  @Prop()
  subject: string;

  @Prop()
  dayOfWeek: string;

  @Prop()
  start: string;

  @Prop()
  end: string;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
