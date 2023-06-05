import PocketBase from 'pocketbase' ;
export const pb = new PocketBase('http://127.0.0.1:8090');
import { type EventsResponse, type EventsRecord, type UsersRecord } from './pocketbase-types';


export async function getAllEvents() {
    /*const events = await pb.collection('events').getFullList<EventsResponse>();
    return events;*/
    return await pb.collection('events').getFullList<EventsResponse>({
      sort: 'created'
    });
}   

export async function createEvent(eventData: EventsRecord) {
  try {
    const response = await pb.collection('events').create(eventData);
    console.log('Événement créé avec succès', response);
    return response;
  } catch (error) {
    console.error('Erreur lors de la création de l\'événement', error);
    throw error;
  }
}


