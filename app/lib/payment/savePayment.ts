'use server'
import prisma from "../../utils/db";
import { TicketCreateInput } from "@prisma/client/";

async function savePayment(data: any) {
    //function to save payment with prisma client
    const { } = data

    await prisma.ticket.create({
        data:{

        }
    })

  

}