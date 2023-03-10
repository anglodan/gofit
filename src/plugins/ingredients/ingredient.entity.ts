import { DeepPartial, VendureEntity } from '@vendure/core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Ingredient extends VendureEntity {
    constructor(input?: DeepPartial<Ingredient>) {
        super(input);
    }

    @Column()
    name: string;

    @Column()
    calories: number;

    @Column()
    totalFat: number;

    @Column()
    saturatedFat: number;

    @Column()
    transFat: number;

    @Column()
    cholesterol: number;

    @Column()
    sodium: number;

    @Column()
    totalCarbs: number;

    @Column()
    fiber: number;

    @Column()
    totalSugars: number;

    @Column()
    addedSugars: number;

    @Column()
    protein: number;

    @Column()
    vitaminD: number;

    @Column()
    potassium: number;

    @Column()
    calcium: number;

    @Column()
    iron: number;
}