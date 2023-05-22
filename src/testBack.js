import { allArticles } from "@/backend";

try {
    const records = await allArticles() ;
    console.log(JSON.stringify(records, null, 2)) ;
    } catch (e) {
    console.error(e) ;
    }