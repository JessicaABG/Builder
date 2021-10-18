import db from '../db/connection.js'
import Post from '../models/post.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {
// reset database

await db.dropDatabase()

//Users/Servicers
const user1 = new User({
    username: 'bruno',
    email: 'root@super.gmail.com',
    password_digest: await bcrypt.hash('!a$ecureP@ssw0Rd55!', 11)
})
await user1.save()

const user2 = new User({
    username: 'bianca',
    email: 'b.anca@super.gmail.com',
    password_digest: await bcrypt.hash('!$h0pp3R1', 11)
})
await user2.save()

const user3 = new User({
    username: 'enzo',
    email: 'n.zo@super.gmail.com',
    password_digest: await bcrypt.hash('!$eller4Lif3', 11)
})
await user3.save()

//Posts

const posts =
[
{
    "title": "vanity",
    "servicer": "goodCo",
    "imgURL": "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80",
    "description": "well done"
},
{
    "title": "furniture",
    "servicer": "neutralBuilds",
    "imgURL": "https://images.unsplash.com/photo-1611256498632-937c79823ec3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1585&q=80",
    "description": "aesthetic"
},
{
    "title": "custom shelving",
    "servicer": "Mike",
    "imgURL": "https://images.unsplash.com/photo-1523413307857-ef24c53571ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "description": "sturdy"
}
]

await Post.insertMany(posts)
console.log("Created posts!")

  // close database connection. done.
db.close()

}

insertData()