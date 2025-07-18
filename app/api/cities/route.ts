import { NextResponse } from 'next/server';
import { getCities } from '@/lib/getCities';

export async function GET() {
  const cities = await getCities();
  return NextResponse.json(cities);
}