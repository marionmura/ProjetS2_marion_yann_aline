import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

export async function allArticles() {
    const records = await pb.collection('articles').getFullList();
    return records;
}