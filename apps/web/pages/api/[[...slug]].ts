import type { NextApiRequest, NextApiResponse } from 'next';
import { createStrapi } from '@strapi/strapi';
import { join } from 'path';

let strapi: Awaited<ReturnType<typeof createStrapi>>;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!strapi) {
    const distDir = join(process.cwd(), '..', '..', 'cms', 'dist');
    strapi = await createStrapi({ distDir });
    await strapi.start();
  }

  return (strapi.server as any).handle(req, res);
}
