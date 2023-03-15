import { Module } from '@nestjs/common';
import { SubjectsModule } from './subjects/subjects.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './notes/notes.module';
import { SchedulesModule } from './schedules/schedules.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://CaioManduca:Manducaomatadordorei07@agenda-academica.sr4mcvp.mongodb.net/main',
      // 'mongodb://mongo:EBVsZuIzsLlOdQqwMagD@containers-us-west-105.railway.app:7530/test',
    ),
    SubjectsModule,
    NotesModule,
    SchedulesModule,
  ],
})
export class AppModule {}
