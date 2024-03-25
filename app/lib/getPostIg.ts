'use server'
import { IgApiClient, UserFeedResponseItemsItem } from 'instagram-private-api';

export default async function GetPost() {

    console.log("*********")
    const ig = new IgApiClient();
    ig.state.generateDevice("pruebartmp");
    await ig.simulate.preLoginFlow();

    const loggedInUser = await ig.account.login("pruebartmp", "lolcito123");
    const userFeed = ig.feed.user(loggedInUser.pk)
    const myPostsFirstPage: UserFeedResponseItemsItem[] = await userFeed.items();
    console.log("*********", myPostsFirstPage.length)
const a = userFeed.items()

}