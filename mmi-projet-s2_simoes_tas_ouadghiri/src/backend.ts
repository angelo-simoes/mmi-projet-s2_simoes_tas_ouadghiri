import PocketBase from 'pocketbase' ;
export const pb = new PocketBase('http://127.0.0.1:8090');
import { type EventsResponse, type EventsRecord, type UsersRecord } from './pocketbase-types';


export async function getAllEvents() {
    /*const events = await pb.collection('events').getFullList<EventsResponse>();
    return events;*/
    return await pb.collection('events').getFullList<EventsResponse>({
      sort: 'date_start'
    });
} 

export async function getAllEventsBySport(sport: string) {
  return await pb.collection('events').getFullList<EventsResponse>({
    filter: `sport > '${sport}'`,
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

export async function deleteEvent(id: string) {
  try {
    const response = await pb.collection('events').delete(id);
    window.location.reload();
    console.log('Événement supprimer avec succès', response);
    return response;
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'événement', error);
    throw error;
  }
}

