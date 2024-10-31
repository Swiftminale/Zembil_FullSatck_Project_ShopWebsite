import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";

import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";




// POST /api/users/wishlist
export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 }); // Unauthorized
    }

    await connectToDB();

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return new NextResponse("User not found", { status: 404 }); // Not Found
    }

    const { productId } = await req.json();

    if (!productId) {
      return new NextResponse("Product Id required", { status: 400 }); // Bad Request
    }

    const isLiked = user.wishlist.includes(productId);

    if (isLiked) {
      // Dislike
      user.wishlist = user.wishlist.filter((id: string) => id !== productId);
    } else {
      // Like
      user.wishlist.push(productId);
    }

    await user.save();

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.log("[wishlist_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
