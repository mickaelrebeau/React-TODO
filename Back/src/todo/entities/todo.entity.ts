/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

type Status = "todo" | "in progress" | "done";
type Priority = "low" | "medium" | "high";
type Label = "bug" | "feature" | "documentation";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    @ApiProperty({ example: 1, description: 'The id of the todo' })
    id: number;

    @Column()
    @ApiProperty({ example: "Test", description: 'The title of the todo' })
    title: string;

    @Column()
    @ApiProperty({ example: "Test", description: 'The description of the todo' })
    description: string;

    @Column({ default: "todo" })
    @ApiProperty({ example: "In progess", description: 'The status of the todo' })
    status: Status;

    @Column({ default: "feature" })
    @ApiProperty({ example: "bug", description: 'The label of the todo' })
    label: Label;

    @Column({ default: "medium" })
    @ApiProperty({ example: "medium", description: 'The priority of the todo' })
    priority: Priority;

    @Column({ nullable: true })
    @ApiProperty({ example: "2020-01-01", description: 'The deadline of the todo' })
    deadline: Date | null;
}