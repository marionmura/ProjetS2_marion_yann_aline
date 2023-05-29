import { allArticles, allcarrousel } from "@/backend";

try {
    const records = await allArticles() ;
    console.log(JSON.stringify(records, null, 2)) ;
    } catch (e) {
    console.error(e) ;
}

try {
    const carrousel = await allcarrousel() ;
    console.log(JSON.stringify(carrousel, null, 2)) ;
    } catch (e) {
    console.error(e) ;
}