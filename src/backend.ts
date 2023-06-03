import pocketbase from 'pocketbase';
export const pb = new pocketbase('http://127.0.0.1:8090');
import { ArticlesResponse } from './pocketbase-types';


export async function allArticles(){
    const records = await pb.collection('articles').getFullList<ArticlesResponse>({'$autoCancel': false,});
    return records;
}