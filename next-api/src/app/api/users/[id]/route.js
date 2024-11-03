import { user } from "@/util/db"
import { NextResponse } from "next/server";

export function GET(requst, content) {

    const userData = user.filter((item) => item.id == content.params.id)

    return NextResponse.json(userData.length == 0 ? { result: "No Page Found", success: false } : { result: userData, success: true }, { status: 200 })
}