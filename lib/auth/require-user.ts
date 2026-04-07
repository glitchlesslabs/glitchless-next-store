import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

export async function getAuthUser() {
  const user = await auth();
  if (!user) redirect('/');
  return user;
}
