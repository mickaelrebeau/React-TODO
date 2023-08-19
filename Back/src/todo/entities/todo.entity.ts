/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum Priority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high"
}

enum Label {
    BUG = "bug",
    FEATURE = "feature",
    DOCUMENTATION = "documentation"
}

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

    @Column({ default: false})
    @ApiProperty({ example: false, description: 'The status of the todo' })
    status: boolean;

    @Column({
        type: "enum",
        enum: Label,
        default: Label.FEATURE
    })
    @ApiProperty({ example: "bug", description: 'The label of the todo' })
    label: Label;

    @Column({
        type: "enum",
        enum: Priority,
        default: Priority.MEDIUM
    })
    @ApiProperty({ example: "medium", description: 'The priority of the todo' })
    priority: Priority;

    @Column({ nullable: true })
    @ApiProperty({ example: "2020-01-01", description: 'The deadline of the todo' })
    deadline: Date | null;
}