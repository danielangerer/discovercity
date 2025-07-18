import { NextResponse } from 'next/server';
import { getCities } from '@/lib/getCities';

export async function GET() {
    //await only necessary if real db is used
  const cities = await getCities();
  return NextResponse.json(cities);
}