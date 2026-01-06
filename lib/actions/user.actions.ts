'use server';

import type { UserForNewsEmail } from "@/lib/types/user";
import { connectToDatabase } from "@/database/mongoose";

export const getAllUsersForNewsEmail = async (): Promise<UserForNewsEmail[]> => {
    try {
        const mongoose = await connectToDatabase();
        const db = mongoose.connection.db;
        if (!db) throw new Error('Mongoose connection not connected');

        const users = await db
            .collection('user')
            .find(
                { email: { $exists: true, $ne: null } },
                { projection: { _id: 1, id: 1, email: 1, name: 1 } }
            )
            .toArray();

        const result: UserForNewsEmail[] = users
            .filter((user) => user.email && user.name)
            .map((user) => ({
                id: user.id ?? user._id?.toString() ?? '',
                email: user.email,
                name: user.name,
            }));

        return result;
    } catch (e) {
        console.error('Error fetching users for news email:', e);
        return [];
    }
};
