import { UserDocument, UserModel, IUser } from './users.types';

export async function findOneOrCreate(
    this: UserModel,
    user: IUser
): Promise<UserDocument> {
    const record = await this.findOne(user);
    if (record) {
        return record;
    } else {
        return this.create(user);
    }
}

export async function findByAge(
    this: UserModel,
    min?: number,
    max?: number
): Promise<UserDocument[]> {
    return this.find({ age: { $gte: min || 0, $lte: max || Infinity } });
}
