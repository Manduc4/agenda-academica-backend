import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {
  @Prop()
  name: string;

  @Prop()
  abbreviation: string;

  @Prop()
  professor: string;

  @Prop()
  maxCollegeFaults: string;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
