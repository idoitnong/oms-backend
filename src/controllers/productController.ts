import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as z from "zod";

const productScheme = z.object({
  name: z.string().min(1, "Product name is required.").max(20, "Product names can be entered up to 20 characters."),
});

export const createProduct = async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  const { name, description } = req.body;

  try {
    productScheme.parse({ name });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(422).json({ message: err.issues[0].message });
    }
  }

  const isExists = await prisma.product.findFirst({ where: { name } });

  if (isExists) {
    return res.status(409).json({ message: "The product name already exists." });
  }

  const result = await prisma.product.create({ data: { name, description } });
  return res.json({ data: result });
};
