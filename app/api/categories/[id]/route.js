import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/* เปลี่ยนเฉพาะ PUT */
export async function PUT(
  req,
  { params }
) {
  try {
    // เปลี่ยนเป็น categoryId
    const { name } = await req.json()
    const category = await prisma.category.update({
      where: { id: Number(params.id) },
      data: { name},
    })
    return Response.json(category)
  } catch (error) {
    return new Response(error, {
      status: 500,
    })
  }
}

export async function DELETE(
  req,
  { params }
) {
  try {
    // เปลี่ยนเป็น categoryId
    const { name } = await req.json()
    const category = await prisma.category.delete({
      where: { id: Number(params.id) },
      data: { name},
    })
    return Response.json(category)
  } catch (error) {
    return new Response(error, {
      status: 500,
    })
  }
}