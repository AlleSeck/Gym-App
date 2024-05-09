import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { db } from ''; // Importez votre connexion à la base de données

export async function POST(request: Request) {
  const { username, email, password } = await request.json();

  try {
    if (!username || !email || !password) throw new Error('Username, email, and password are required');
    
    // Insérer un nouvel utilisateur dans la base de données en utilisant des placeholders
    await db.query(
      sql`INSERT INTO Users (username, email, password) VALUES (${username}, ${email}, ${password})`
    );

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}
