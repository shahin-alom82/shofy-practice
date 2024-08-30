import { banner } from "@/constants"
import { NextResponse } from "next/server"

export const GET = async () => {
      return NextResponse.json({
            name: banner,
            status: "Success",
            message: "keep alive!"
      })
}