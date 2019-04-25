import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

import BaseEntity from './BaseEntity';

@Entity()
export default class <%= options.model %> extends BaseEntity {

  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  name: string;

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

}
