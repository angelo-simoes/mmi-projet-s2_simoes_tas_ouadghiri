import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090');


try { const records = await pb.collection('maison').getFullList() ;
       //console.table(records) ;
       console.log(JSON.stringify(records, null, 2)) ;

    } catch (e) {
        console.error(e) ;
    } 