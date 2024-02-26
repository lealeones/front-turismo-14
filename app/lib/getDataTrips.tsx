'use server'
import { getClient } from "@/lib/client";
import findTripsQuery from "../v2/graphql/findTrips.query";
export default async function GetDataTrips() {

    const { data, loading, error } = await getClient().query({
        query: findTripsQuery,
        variables: {
            data: true
        }
    });
    if (loading) return <p>Loading...</p>;

    return (
        <main>{JSON.stringify(data)}</main>
    )
}

// const data = await fetch(
//     "http://localhost:3001/graphql",
//     {
//         method: "POST",
//         body: JSON.stringify({
//             query: `{
//                 findTrips(currentWeek: true){
//                   id
//                   startTime
//                   title
//                   dscr
//                   associationId
//                   availableTickets
//                 }
//               }`,
//         }),
//         headers: {
//             "Content-Type": "application/json",
//         },
//         next: { revalidate: 10 }
//     }
// ).then((res) => res.json());