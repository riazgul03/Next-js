import { NextResponse } from "next/server";

export function GET(request) {
    return NextResponse.json({ name: 'Riaz', Age: 20, City: 'Peshawar' }, { status: 200 })
}