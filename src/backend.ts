import PocketBase from 'PocketBase';

export const pb = new PocketBase('http://127.0.0.1:8090');

export async function allArticles(){
    const records = await pb.collection('articles').getFullList();
    return records;
}

export async function allArticleFavori(){
    const favarticles =await pb.collection('articles').getFullList({filter : 'favori=True'})
    return favarticles;
}

export async function allArticleSave(){
    const savearticles =await pb.collection('articles').getFullList({filter : 'enregistrement=True'})
    return savearticles;
}

export async function allcarrousel(){
    const carrousel =await pb.collection('carrousel').getFullList()
    return carrousel;
}