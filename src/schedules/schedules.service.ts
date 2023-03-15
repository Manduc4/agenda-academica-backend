import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule, ScheduleDocument } from './entities/schedule.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose/dist/common';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectModel(Schedule.name) private scheduleModel: Model<ScheduleDocument>,
  ) {}

  create(createScheduleDto: CreateScheduleDto) {
    const subject = new this.scheduleModel(createScheduleDto);
    return subject.save();
  }

  findAll() {
    return this.scheduleModel.find();
  }

  findOne(id: string) {
    return this.scheduleModel.findById(id);
  }

  update(id: string, updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateScheduleDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.scheduleModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
