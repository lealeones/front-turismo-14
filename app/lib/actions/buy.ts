'use server'

import MercadoPagoConfig, { Preference } from "mercadopago"
import { redirect } from "next/navigation";

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! });
export async function handleBuy(formData: FormData) {
    console.log("dataForm", formData)

    const mayor = Boolean(formData.get("esAdulto"))
    console.log("mayor", mayor)

    const preference = await new Preference(client).create({
        body: {
            items: [
                {
                    id: "1234",
                    title: `Ticket para ${mayor ? "adulto" : "menor"}`,
                    quantity: 1,
                    currency_id: "ARS",
                    unit_price: getPrice(formData.get("esAdulto") === "true")
                }
            ]
        }
    })

    redirect(preference.sandbox_init_point!)
}



export const getPrice = (esAdulto: boolean): number => {
    if (esAdulto) {
        return 1000
    } else {
        return 500
    }
}