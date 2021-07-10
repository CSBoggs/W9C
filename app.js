// Array for tweets
var tweets = [
    { user: "Jim", age: 37, tweet: "13-year-old Zaila Avant-garde of Louisiana is your 93rd Scripps National SpellingBee", created_on: "07-09-2021" },
    { user: "Michael", age: 45, tweet: "THE TIREDNESS ON THE COUCH NEVER TRANSLATES TO THE BED AND I DEMAND TO KNOW WHY", created_on: "07-09-2021" },
    { user: "Kevin", age: 45, tweet: "I wish I was dinosaur. No school, no work, just ror ror", created_on: "07-09-2021" },
    { user: "Pam", age: 45, tweet: "repeat after me: 6 months from now ill be a better, healthier, wealthier, and more stable version of myself", created_on: "07-09-2021" },
    { user: "Dwight", age: 45, tweet: "Gf in the passenger seat Smiling face with heart-shaped eyes giving wrong directions and taking selfies", created_on: "07-09-2021" },
    { user: "Angela", age: 45, tweet: "my favorite part of ratatouille is when the dude brings the rat home to his apartment and hes like shy and embarrassed and he’s like “yea sorry it’s not much…” like dude it’s a rat", created_on: "07-09-2021" },
    { user: "Erin", age: 45, tweet: "long story short… i need 1M", created_on: "07-09-2021" },
    { user: "Oscar", age: 45, tweet: "Two truths can exist simultaneously. I dont think a lot of people understand that concept", created_on: "07-09-2021" },
    { user: "Phyllis", age: 45, tweet: "My life been coming together but falling apart at the same time Woozy face", created_on: "07-09-2021" },
    { user: "Stanley", age: 45, tweet: "Im not hiding anything but please dont touch my phone", created_on: "07-09-2021" },
]

// Variable declaration
var arrayLength = tweets.length;

// Loop through tweets array
for (var counter = 0; counter < arrayLength; counter++) {
    let tweet = tweets[counter];
    console.log(tweet.tweet + " " + tweet.user + " " + tweet.created_on);
    console.log();
}
