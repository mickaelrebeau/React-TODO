/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>,
    ) {}

    findAll(): Promise<Todo[]> {
        return this.todoRepository.find();
    }

    findOne(id: number): Promise<Todo | null> {
        return this.todoRepository.findOneBy({ id });
    }

    create(todo: Todo): Promise<Todo> {
        return this.todoRepository.save(todo);
    }

    update(id: number, todo: Todo): Promise<any> {
        return this.todoRepository.update(id, todo);
    }

    async deleteOneById(id: number): Promise<void> {
        await this.todoRepository.delete(id);
    }
}
