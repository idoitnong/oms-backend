import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export const createProduct = async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  const { name, description } = req.body;

  const isExists = await prisma.product.findFirst({ where: { name } });

  if (isExists) {
    return res.status(409).json({ message: "The product name already exists." });
  }

  const result = await prisma.product.create({ data: { name, description } });
  return res.json({ data: result });
};
