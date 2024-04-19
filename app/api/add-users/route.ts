import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  const email = searchParams.get('email');
  const password = searchParams.get('password');
 
  try {
    if (!username || !email || !password) throw new Error('Username, email, and password are required');
    
    // Insérer un nouvel utilisateur dans la base de données
    await sql`
      INSERT INTO Users (username, email, password)
      VALUES (${username}, ${email}, ${password});
    `;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
 
  // Sélectionner tous les utilisateurs dans la base de données 
  const users = await sql`SELECT * FROM Users;`;
  return NextResponse.json({ users }, { status: 200 });
}
