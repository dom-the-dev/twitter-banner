const {getFollowers, getProfileImageUrl, updateBanner} = require("./twitterController")
const {saveImage, createBanner} = require("./imageController");
const CronJob = require("cron").CronJob

console.log('starting node app')
const job = new CronJob('* * * * *', async function() {
    console.log('start generating banner')
    generateBanner()
})

job.start()

async function generateBanner() {
    const followers = await getFollowers()

    for(const follower of followers) {
        const url = await getProfileImageUrl(follower.id)
        await saveImage(follower.id, url)
    }

    await createBanner()
    await updateBanner()
}
