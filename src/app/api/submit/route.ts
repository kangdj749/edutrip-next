// src/app/api/submit/route.ts
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { nama, email, wa, alamat, tipe } = await req.json();

  if (!nama || !wa || !tipe) {
    return NextResponse.json({ status: 'error', message: 'Data wajib tidak lengkap' }, { status: 400 });
  }

  console.log('Incoming data:', { nama, email, wa, alamat, tipe });
  console.log('GS_CLIENT_EMAIL:', process.env.GS_CLIENT_EMAIL);
  console.log('GS_SHEET_ID:', process.env.GS_SHEET_ID);

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GS_CLIENT_EMAIL,
      private_key: process.env.GS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  try {
    const res = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GS_SHEET_ID,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }),
            tipe,
            nama,
            email || '',
            wa,
            alamat || '',
          ],
        ],
      },
    });

    console.log('GSheet response:', res.status);
    return NextResponse.json({ status: 'success' });
  } catch (err: any) {
    console.error('GSheet error:', err.response?.data || err.message || err);
    return NextResponse.json({ status: 'error', message: 'Gagal menyimpan ke Google Sheet' }, { status: 500 });
  }
}
