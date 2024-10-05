import { connect } from "@/dbConfig/dbConfig";
import { NextApiRequest } from "next";
import { NextResponse, NextRequest } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
//Connect DB
connect();
export async function POST(request: NextRequest) {
  try {
    const { items, email }: any = await request.json();

    const Restaurantid = items[0].Restaurant._id;
    console.log(items, email, Restaurantid);
    const modifiedItems = items.map((item: any) => ({
      quantity: item.quantity,
      price_data: {
        currency: "USD",
        unit_amount: item.FoodPrice * 100,
        product_data: {
          name: item.FoodName,

          description: item.Restaurant.RestaurantName,
        },
      },
    }));
    //console.log(modifiedItems);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ['US', 'IN', 'CA'],
      },
      line_items: modifiedItems,
      phone_number_collection: {
        enabled: true,
      },
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/Success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/CartPage`,
      metadata: {
        email,
        images: JSON.stringify(items.map((item: any) => item.FoodImage)),
        Restaurantid,
      },
    });
    console.log(session);
    return NextResponse.json({
      session: session,
    });

  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
