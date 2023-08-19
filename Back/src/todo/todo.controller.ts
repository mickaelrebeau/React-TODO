/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Todo } from './entities/todo.entity';

@Controller('todos')
@ApiTags('todos')
export class TodoController {
    constructor(
        private readonly todoService: TodoService
    ) {}

    @Get()
    @ApiResponse({
        description: "Get all todos",
    })
    findAll(): Promise<Todo[]> {
        return this.todoService.findAll();      
    }

    @Get('/:id')
    @ApiResponse({
        description: "Get todo by id",
    })
    findOne(@Param('id') id: number): Promise<Todo | null> {
        return this.todoService.findOne(id);
    }

    @Post()
    @ApiResponse({
        description: "Create todo",
    })
    create(@Body() todo: Todo): Promise<Todo> {
        return this.todoService.create(todo);
    }

    @Put(':id')
    @ApiResponse({
        description: "Update todo",
    })
    update(@Param('id') id: number, @Body() todo: Todo): Promise<any> {
        return this.todoService.update(id, todo);
    }

    @Delete(':id')
    @ApiResponse({
        description: "Delete todo",
    })
    destroy(@Param('id') id: number): Promise<void> {
        return this.todoService.deleteOneById(id);
    }
}
