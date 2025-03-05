"use server";
import prisma from "./db";
import { createSelmSchema, CreateSelmType, SelmType } from "./types";

export async function createTask(
  values: CreateSelmType
): Promise<SelmType | null> {
  try {
    createSelmSchema.parse(values);
    const task: SelmType = await prisma.selm.create({
      data: {
        ...values,
      },
    });
    return task;
  } catch (error) {
    console.error(error);
    return null;
  }
}
