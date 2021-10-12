import db from '../db/connection.js'
import Post from '../models/post.js'
import Post from '../user/post.js'
import bcrypt from 'bcrypt'/* authentication */ 

const insertData = async () => {
// reset database

await db.dropDatabase()

//Users/Servicers
const user1 = new User({
    username: 'bruno',
    email: 'root@super.gmail.com',
    // password_digest: await bcrypt.hash('!a$ecureP@ssw0Rd55!', 11)
})
await user1.save()

const user2 = new User({
    username: 'bianca',
    email: 'b.anca@super.gmail.com',
    // password_digest: await bcrypt.hash('!$h0pp3R1', 11)
})
await user2.save()

const user3 = new User({
    username: 'enzo',
    email: 'n.zo@super.gmail.com',
    // password_digest: await bcrypt.hash('!$eller4Lif3', 11)
})
await user3.save()

//Posts

const posts =
[
{
    "title": "vanity",
    "servicer": "goodCo",
    "imgURL": "unsplash.com",
    "description": "well done"
},
{
    "title": "furniture",
    "servicer": "neutralBuilds",
    "imgURL": "unsplash.com",
    "description": "aesthetic"
},
{
    "title": "custom shelving",
    "servicer": "Mike",
    "imgURL": "unsplash.com",
    "description": "sturdy"
}
]

await Post.insertMany(posts)
console.log("Created posts!")

  // close database connection. done.
db.close()

}

insertData()