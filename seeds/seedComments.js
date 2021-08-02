const { Comment } = require("../models");

const commentData = [
  {
    text: `Weddings Are Basically Funerals With A Cake`,
    user_id: 1,
    post_id: 3,
  },
  {
    text: `To live is to risk it all; otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you...`,
    user_id: 1,
    post_id: 4,
  },
  {
    text: `What, So Everyone’s Supposed To Sleep Every Single Night Now?`,
    user_id: 1,
    post_id: 8,
  },
  {
    text: `Well, then get your sh*t together, get it all together, and put it in a backpack, all your sh*t, so it's together. And if you gotta take it somewhere, take it somewhere, you know, take it to the sh*t store and sell it, or put it in the sh*t museum. I don't care what you do, you just gotta get it together. Get your sh*t together.`,
    user_id: 2,
    post_id: 8,
  },
  {
    text: `Sometimes Science Is More Art Than Science, Morty`,
    user_id: 1,
    post_id: 5,
  },
  {
    text: `“Your language has the word “squanch” in it a lot. Doesn’t that become tedious and worn out like the Smurf thing?”`,
    user_id: 3,
    post_id: 3,
  },
  {
    text: `How many of these are just horrible mistakes I made? I mean, maybe I'd stop making so many if I let myself learn from them.`,
    user_id: 2,
    post_id: 5,
  },
  {
    text: `I got my sixth promotion this week, and I still don't know what I do!`,
    user_id: 4,
    post_id: 1,
  },
  {
    text: `Hey listen, you know, if we're all bored over here, wouldn't the common denominator be you?`,
    user_id: 2,
    post_id: 7,
  },
  {
    text: `That's because losers look stuff up while the rest of us are carp'en all them 'diems`,
    user_id: 5,
    post_id: 6,
  },
  {
    text: `Oh yeah, shame me. At least when I'm disgusting it's on purpose.`,
    user_id: 5,
    post_id: 6,
  },
  {
    text: `Y'know what, you're right. I shouldn't even care! This is probably the best thing that could have happened to me! I'm sick of having adventures with Rick!`,
    user_id: 2,
    post_id: 9,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
