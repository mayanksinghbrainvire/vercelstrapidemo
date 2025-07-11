import { createStrapi } from '@strapi/strapi';
import type { IncomingMessage, ServerResponse } from 'http';

let strapi: any;

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (!strapi) {
    strapi = await createStrapi();
    await strapi.start();
  }

  return strapi.server.app(req, res);
}
