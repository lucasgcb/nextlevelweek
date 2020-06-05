# Backend


Technologies:
- Node.js
- TypeScript
- Multer
- celebrate
- Express
- @types/hapi__joi 
- Knex.js
- SQlite
- ESlint

### API Route Descriptions:

- `GET /points/{id}` - Return collection point information
- `GET /points?city={city}?uf={uf}?items={1,2,3,...}` - Return relevant collection points
- `POST /points` - Requires image, name, latitude, longitude, UF (state), City, Whatsapp number, e-mail and item IDs.
- `GET /items` - Return all recognized disposal items and their IDs

Features:

- Register Collection points
- List items for collection
- List collection points
- List a specific collection point

Noteworthy notes:

- Isomnia.rest -> API Designer/Previewing tool
- `npm install @types/express` - Typescript support for express

- `npx ts-node $target` - Execute target TypeScript

- `npx ts-node-dev $target` - Enables 'hot' development swaps
