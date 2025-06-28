import { trackingArtworks } from '@/data/tracking';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  return NextResponse.json(trackingArtworks);
}
