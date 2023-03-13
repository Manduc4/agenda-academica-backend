import { Module } from '@nestjs/common';
import { SubjectsModule } from './subjects/subjects.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [],
  providers: [],
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://CaioManduca:Manducaomatadordorei07@agenda-academica.sr4mcvp.mongodb.net/main',
    ),
    SubjectsModule,
  ],
})
export class AppModule {}
