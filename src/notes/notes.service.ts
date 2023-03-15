import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note, NoteDocument } from './entities/note.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose/dist/common';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  create(createNoteDto: CreateNoteDto) {
    const Note = new this.noteModel(createNoteDto);
    return Note.save();
  }

  findAll() {
    return this.noteModel.find();
  }

  findOne(id: string) {
    return this.noteModel.findById(id);
  }

  update(id: string, updateNoteDto: UpdateNoteDto) {
    return this.noteModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateNoteDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.noteModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
