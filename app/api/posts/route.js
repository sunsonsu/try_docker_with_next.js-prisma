import { NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export async function GET(NextRequest) {
  const searchParams = NextRequest.nextUrl.searchParams;
  const search = searchParams.get('search');
  const category = searchParams.get('category');
  const sort = searchParams.get('sort') || 'desc';

  let whereCondition = category ? {
    category:{
      is:{
        name: category
      }
    },
    title: {
      contains: search || ''  ,
      mode: 'insensitive',
    },
  }
  :{
    title: {
      contains: search || ''  ,
      mode: 'insensitive',
    }
  }

  const posts = await prisma.post.findMany({
    where: whereCondition,
    orderBy: {
      createdAt: sort,
    },include: {
      category: true,
    }
  });

  return Response.json(posts);
}

export async function POST(req) {
    try {
        const { title, content, categoryId } = await req.json()
        return Response.json(await prisma.post.create({
        data: { title, content, categoryId },
        }))
    } catch (error) {
        return new Response(error, {
        status: 500,
        })
    }
    
}


export async function PUT(
  req,
  { params },
) {
  try {
    const { title, content } = await req.json()
    return Response.json(await prisma.post.update({
      where: { id: Number(params.id) },
      data: { title, content },
    }))
  } catch (error) {
    return new Response(error, {
      status: 500,
    })
  }
}

export async function DELETE(
  req,
  { params },
) {
  try {
    return Response.json(await prisma.post.delete({
      where: { id: Number(params.id) },
    }))
  } catch (error) {
    return new Response(error, {
      status: 500,
    })
  }
}