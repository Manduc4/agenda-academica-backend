import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject, SubjectDocument } from './entities/subject.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose/dist/common';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectModel(Subject.name) private subjectModel: Model<SubjectDocument>,
  ) {}

  create(createSubjectDto: CreateSubjectDto) {
    const subject = new this.subjectModel(createSubjectDto);
    return subject.save();
  }

  findAll() {
    return this.subjectModel.find();
  }

  findOne(id: string) {
    return this.subjectModel.findById(id);
  }

  update(id: string, updateSubjectDto: UpdateSubjectDto) {
    return this.subjectModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateSubjectDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.subjectModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
