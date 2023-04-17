import { DeepPartial, Product, VendureEntity } from '@vendure/core';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Ingredient extends VendureEntity {
    constructor(input?: DeepPartial<Ingredient>) {
        super(input);
    }

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column({ type: 'float' })
    calories: number;

    @Column({ type: 'float' })
    totalFat: number;

    @Column({ type: 'float' })
    saturatedFat: number;

    @Column({ type: 'float' })
    transFat: number;

    @Column({ type: 'float' })
    cholesterol: number;

    @Column({ type: 'float' })
    sodium: number;

    @Column({ type: 'float' })
    totalCarbs: number;

    @Column({ type: 'float' })
    fiber: number;

    @Column({ type: 'float' })
    totalSugars: number;

    @Column({ type: 'float' })
    addedSugars: number;

    @Column({ type: 'float' })
    protein: number;

    @Column({ type: 'float' })
    vitaminD: number;

    @Column({ type: 'float' })
    potassium: number;

    @Column({ type: 'float' })
    calcium: number;

    @Column({ type: 'float' })
    iron: number;

    @ManyToMany(type => Product)
    @JoinTable()
    products: Product[];
}