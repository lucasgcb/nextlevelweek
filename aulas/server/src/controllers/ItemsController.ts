import { Request, Response, request } from 'express';
import knex from '../database/connection';
const HOST = "192.168.0.35" // Encontrar automaticamente no futuro
class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                img_url: `http://${HOST}:3333/uploads/${item.image}`,
            };
        })
        return response.json(serializedItems);
    }
}

export default ItemsController