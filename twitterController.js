const client = require("./twitterClient");

async function getFollowers() {
    const followers = await client.v2.followers("1500775661199400965")
    return followers.data.slice(0, 5)
}

async function getProfileImageUrl(user_id) {
    const {profile_image_url} = await client.v1.user({user_id})
    return profile_image_url
}

async function updateBanner() {
    await client.v1.updateAccountProfileBanner("./final.png", {
        width: 1500,
        height: 500
    })
}

module.exports = {getFollowers, getProfileImageUrl, updateBanner}