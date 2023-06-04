import { allArticles } from "./backend.mjs";
import { oneIA } from "./backend.mjs";

// try {
//     const records = await allArticles() ;
//     console.log(JSON.stringify(records, null, 2)) ;
//     } catch (e) {
//     console.error(e) ;
// }

// try {
//     const carrousel = await allcarrousel() ;
//     console.log(JSON.stringify(carrousel, null, 2)) ;
//     } catch (e) {
//     console.error(e) ;
// }

try {
    const uneia = await oneIA('pnjfduacu9w76e0') ;
    console.log(JSON.stringify(uneia, null, 2)) ;
    } catch (e) {
    console.error(e) ;
}