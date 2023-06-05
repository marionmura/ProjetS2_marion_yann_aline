import pocketbase from 'pocketbase';
import { ref } from 'vue';
import type{ ArticlesResponse } from './pocketbase-types';
export const pb = new pocketbase('http://127.0.0.1:8090');

// export const usepocketbase = () => {
//         let pb = ref(null);
//         pb.value = new pocketbase('http://127.0.0.1:8090');
//         return {
//             pb
//         }
// }

export async function allArticles(){
    const records = await pb.collection('articles').getFullList<ArticlesResponse>({
        '$autoCancel': false,
    });
    return records;
}

export async function allArticleFavori(){
    const favarticles =await pb.collection('articles').getFullList<ArticlesResponse>({filter : 'favori=True',
        '$autoCancel': false,
    })
    return favarticles;
}

export async function allArticleSave(){
    const savearticles =await pb.collection('articles').getFullList<ArticlesResponse>({filter : 'enregistrement=True',
        '$autoCancel': false,
    })
    return savearticles;
}

export async function oneIA(id:string){
    const oneia = await pb.collection('articles').getOne<ArticlesResponse>(id, {expand:'previewlien',
    '$autoCancel': false});
    return oneia;
}
// export async function allcarrousel(){
//     const carrousel =await pb.collection('carrousel').getFullList()
//     return carrousel;
// }