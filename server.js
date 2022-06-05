const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const cron = require('node-cron');

app.use(cors());
app.use(express.static('public'));
let usedSongs = [];
let use;

function randomize() {
    if(usedSongs.length === 169) {
        usedSongs = [];
    };
    let test = Math.round(Math.random(0,1) * 169);
    usedSongs.includes(test) ? randomize() : use = String(test);
    usedSongs.push(test)
};
randomize();

cron.schedule('0 0 0 * * *', () => {
    randomize();
}, {scheduled: true,
    timezone: 'America/New_York'
});

const songs = {
    '0': {
        name: 'Picture to Burn', 
        youtube: '', 
        album: 'Speak Now', 
        taylorsversion: 'no',
        lyrics: `State the obvious, I didn't get my perfect fantasy
        I realize you love yourself more than you could ever love me
        So go and tell your friends that I'm obsessive and crazy
        That's fine, you won't mind if I say
        By the way
        I hate that stupid old pickup truck you never let me drive
        You're a redneck heartbreak who's really bad at lying
        So watch me strike a match on all my wasted time
        As far as I'm concerned, you're just another picture to burn
        There's no time for tears
        I'm just sitting here planning my revenge
        There's nothing stopping me
        From going out with all of your best friends
        And if you come around saying sorry to me
        My daddy's gonna show you how sorry you'll be
        'Cause I hate that stupid old pickup truck you never let me drive
        You're a redneck heartbreak who's really bad at lying
        So watch me strike a match on all my wasted time
        As far as I'm concerned, you're just another picture to burn
        And if you're missing me, you'd better keep it to yourself
        'Cause coming back around here would be bad for your health
        'Cause I hate that stupid old pickup truck you never let me drive
        You're a redneck heartbreak who's really bad at lying
        So watch me strike a match on all my wasted time
        In case you haven't heard, I really, really hate that
        Stupid old pickup truck you never let me drive
        You're a redneck heartbreak who's really bad at lying
        So watch me strike a match on all my wasted time
        As far as I'm concerned, you're just another picture to burn
        Burn, burn, burn, baby, burn
        Just another picture to burn
        Baby, burn`
    },
    '1': {
        name: 'Teardrops On My Guitar', 
        youtube: 'https://www.youtube.com/watch?v=xKCek6_dB0M',
        album: 'Taylor Swift', 
        taylorsversion: 'no', 
        lyrics: `Drew looks at me
        I fake a smile so he won't see
        That I want and I'm needing
        Everything that we should be
        
        I'll bet she's beautiful, that girl he talks about
        And she's got everything that I have to live without
        
        Drew talks to me
        I laugh 'cause it's just so funny
        That I can't even see
        Anyone when he's with me
        
        He says he's so in love, he's finally got it right
        I wonder if he knows he's all I think about at night
        
        He's the reason for the teardrops on my guitar
        The only thing that keeps me wishing on a wishing star
        He's the song in the car I keep singing. Don't know why I do
        
        Drew walks by me
        Can he tell that I can't breathe?
        And there he goes, so perfectly
        The kind of flawless I wish I could be
        
        She'd better hold him tight, give him all her love
        Look in those beautiful eyes and know she's lucky 'cause
        
        He's the reason for the teardrops on my guitar
        The only thing that keeps me wishing on a wishing star
        He's the song in the car I keep singing. Don't know why I do
        
        So, I drive home alone
        As I turn out the light
        I'll put his picture down
        And maybe get some sleep tonight
        
        'Cause he's the reason for the teardrops on my guitar
        The only one who's got enough of me to break my heart
        He's the song in the car I keep singing. Don't know why I do
        
        He's the time taken up, but there's never enough
        And he's all that I need to fall into
        
        Drew looks at me
        I fake a smile so he won't see`
    },
    '2': {
        name: 'A Place In This World', 
        youtube: 'https://www.youtube.com/watch?v=_FNQ5qLuLjA',
        album: 'Taylor Swift', 
        taylorsversion: 'no', 
        lyrics: `I don't know what I want, so don't ask me
        'Cause I'm still trying to figure it out
        Don't know what's down this road, I'm just walking
        Trying to see through the rain coming down
        Even though I'm not the only one
        Who feels the way I do
        
        I'm alone, on my own, and that's all I know
        I'll be strong, I'll be wrong, oh but life goes on
        Oh, I'm just a girl, trying to find a place in this world
        
        Got the radio on, my old blue jeans
        And I'm wearing my heart on my sleeve
        Feeling lucky today, got the sunshine
        Could you tell me what more do I need
        And tomorrow's just a mystery, oh yeah
        But that's OK
        
        I'm alone, on my own, and that's all I know
        I'll be strong, I'll be wrong, oh but life goes on
        Oh, I'm just a girl, trying to find a place in this world
        
        Maybe I'm just a girl on a mission
        But I'm ready to fly
        
        I'm alone, on my own, and that's all I know
        I'll be strong, I'll be wrong, oh but life goes on
        Oh I'm alone, on my own, and that's all I know
        Oh I'm just a girl, trying to find a place in this world
        
        Oh I'm just a girl
        Oh I'm just a girl, oh, oh
        Oh I'm just a girl`
    },
    '3': {
        name: 'Cold As You', 
        youtube: 'https://www.youtube.com/watch?v=f5e2ArH5-14',
        album: 'Taylor Swift', 
        taylorsversion: 'no', 
        lyrics: `You have a way of coming easily to me
        And when you take, you take the very best of me
        So I start a fight 'cause I need to feel something
        And you do what you want 'cause I'm not what you wanted
        
        Oh, what a shame, what a rainy ending given to a perfect day
        Just walk away, ain't no use defending words that you will never say
        And now that I'm sitting here thinking it through
        I've never been anywhere cold as you
        
        You put up walls and paint them all a shade of gray
        And I stood there loving you and wished them all away
        And you come away with a great little story
        Of a mess of a dreamer with the nerve to adore you
        
        Oh, what a shame, what a rainy ending given to a perfect day
        So just walk away, ain't no use defending words that you will never say
        And now that I'm sitting here thinking it through
        I've never been anywhere cold as you
        
        You never did give a damn thing, honey, but I cried, cried for you
        And I know you wouldn't have told nobody if I died, died for you, died for you
        
        Oh, what a shame, what a rainy ending given to a perfect day
        Every smile you fake is so condescending counting all the scars you made
        And now that I'm sitting here thinking it through
        I've never been anywhere cold as you`
    },
    '4': {
        name: 'Tim McGraw', 
        youtube: 'https://www.youtube.com/watch?v=GkD20ajVxnY',
        album: 'Taylor Swift', 
        taylorsversion: 'no', 
        lyrics: `He said the way my blue eyes shined
        Put those Georgia stars to shame that night
        I said, "That's a lie"
        Just a boy in a Chevy truck
        That had a tendency of gettin' stuck
        On back roads at night
        And I was right there beside him all summer long
        And then the time we woke up to find that summer gone
        
        But when you think Tim McGraw
        I hope you think my favorite song
        The one we danced to all night long
        The moon like a spotlight on the lake
        When you think happiness
        I hope you think that little black dress
        Think of my head on your chest
        And my old faded blue jeans
        When you think Tim McGraw
        I hope you think of me
        
        September saw a month of tears
        And thankin' God that you weren't here
        To see me like that
        But in a box beneath my bed
        Is a letter that you never read
        From three summers back
        It's hard not to find it all a little bittersweet
        And lookin' back on all of that, it's nice to believe
        
        When you think Tim McGraw
        I hope you think my favorite song
        The one we danced to all night long
        The moon like a spotlight on the lake
        When you think happiness
        I hope you think that little black dress
        Think of my head on your chest
        And my old faded blue jeans
        When you think Tim McGraw
        I hope you think of me
        
        And I'm back for the first time since then
        I'm standin' on your street
        And there's a letter left on your doorstep
        And the first thing that you'll read is:
        
        "When you think Tim McGraw
        I hope you think my favorite song
        Someday you'll turn your radio on
        I hope it takes you back to that place"
        
        When you think happiness
        I hope you think that little black dress
        Think of my head on your chest
        And my old faded blue jeans
        When you think Tim McGraw
        I hope you think of me
        
        Oh, think of me
        Mmmm
        
        He said the way my blue eyes shined
        Put those Georgia stars to shame that night
        I said, "That's a lie"`
    },
    '5': {
        name: 'The Outside', 
        youtube: 'https://www.youtube.com/watch?v=9rkJJoa4L1Y',
        album: 'Taylor Swift', 
        taylorsversion: 'no', 
        lyrics: `I  didn't know what I would find
        When I went looking for a reason
        I know I didn't read between the lines
        And, baby, I've got nowhere to go
        
        I tried to take the road less traveled by
        But nothing seems to work the first few times
        Am I right?
        
        So how can I ever try to be better?
        Nobody ever lets me in
        I can still see you
        This ain't the best view
        On the outside looking in
        And I've been a lot of lonely places
        I've never been on the outside
        
        You saw me there, but never knew
        That I would give it all up to be
        A part of this, a part of you
        And now it's all too late. So you see
        
        You could've helped if you had wanted to
        But no one notices until it's too late to do anything
        
        So how can I ever try to be better?
        Nobody ever lets me in
        I can still see you
        This ain't the best view
        On the outside looking in
        And I've been a lot of lonely places
        I've never been on the outside
        
        Oh, yeah
        
        So how can I ever try to be better?
        Nobody ever lets me in
        And I can still see you
        This ain't the best view
        On the outside looking in
        And I've been a lot of lonely places
        I've never been on the outside`
    },
    '6': {
        name: 'Tied Together With A Smile', 
        youtube: 'https://www.youtube.com/watch?v=B39pr0-LOz4',
        album: 'Taylor Swift', 
        taylorsversion: 'no', 
        lyrics: `Seems the only one who doesn't see your beauty
        Is the face in the mirror looking back at you
        You walk around here thinking you're not pretty
        But that's not true 'cause I know you
        
        Hold on, baby, you're losing it
        The water's high, you're jumping into it
        And letting go
        And no one knows
        That you cry, but you don't tell anyone
        That you might not be the golden one
        And you're tied together with a smile
        But you're coming undone
        
        I guess it's true that love was all you wanted
        'Cause you're giving it away like it's extra change
        Hoping it will end up in his pocket
        But he leaves you out like a penny in the rain
        
        Oh, 'cause it's not his price to pay
        It's not his price to pay
        
        Hold on, baby, you're losing it
        The water's high, you're jumping into it
        And letting go
        And no one knows
        That you cry, but you don't tell anyone
        That you might not be the golden one
        And you're tied together with a smile
        But you're coming undone
        
        Hold on, baby, you're losing it
        The water's high, you're jumping into it
        And letting go
        And no one knows
        That you cry, but you don't tell anyone
        That you might not be the golden one
        And you're tied together with a smile
        But you're coming undone
        
        You're tied together with a smile
        But you're coming undone
        Goodbye, baby
        With a smile, baby, baby`
    },
    '7': {
        name: 'Stay Beautiful', 
        youtube: 'https://www.youtube.com/watch?v=RXhgAdLXvNA',
        album: 'Taylor Swift', 
        taylorsversion: 'no', 
        lyrics: `Cory's eyes are like a jungle
        He smiles, it's like the radio
        He whispers songs into my window
        In words that nobody knows
        There's pretty girls on every corner
        That watch him as he's walking home
        Saying, "Does he know?"
        Will you ever know?
        
        You're beautiful
        Every little piece love
        And don't you know
        You're really gonna be someone
        Ask anyone
        And when you find everything you looked for
        I hope your life leads you back to my door
        Oh, but if it don't
        Stay beautiful
        
        Cory finds another way to be
        The highlight of my day
        I'm taking pictures in my mind
        So I can save them for a rainy day
        It's hard to make a conversation
        When he's taking my breath away
        I should say, hey, by the way
        
        You're beautiful
        Every little piece love
        And don't you know
        You're really gonna be someone
        Ask anyone
        And when you find everything you looked for
        I hope your life leads you back to my door
        Oh, but if it don't
        Stay beautiful
        
        If you and I are a story
        That never gets told
        If what you are is a daydream
        I'll never get to hold
        At least you'll know
        
        You're beautiful
        Every little piece love
        And don't you know
        You're really gonna be someone
        Ask anyone
        And when you find everything you looked for
        I hope your life leads you back to my front door
        Oh, but if it don't
        Will you stay
        Beautiful, beautiful, beautiful
        Beautiful, beautiful, beautiful?
        La la la
        Oh, oh, oh, oh
        Oh, but if it don't
        Stay beautiful
        Stay beautiful
        Na, na, na, na, na`
    },
    '8': {
        name: 'Should\'ve Said No', 
        youtube: 'https://www.youtube.com/watch?v=f85AAi3VOLo',
        album: 'Taylor Swift', 
        taylorsversion: 'no', 
        lyrics: `It's strange to think the songs we used to sing
        The smiles, the flowers, everything is gone
        Yesterday I found out about you
        Even now just looking at you feels wrong
        
        You say that you'd take it all back, given one chance
        It was a moment of weakness and you said, "Yes."
        
        You should've said "No", you should've gone home
        You should've thought twice 'fore you let it all go
        You should've known that word
        'Bout what you did with her'd
        Get back to me (get back to me).
        And I should've been there in the back of your mind
        I shouldn't be asking myself, "Why?"
        You shouldn't be begging for forgiveness at my feet...
        You should've said "No", baby, and you might still have me
        
        You can see that I've been crying
        And baby, you know all the right things to say
        But do you honestly expect me to believe
        We could ever be the same?
        
        You say that the past is the past, you need one chance
        It was a moment of weakness and you said, "Yes."
        
        You should've said "No", you should've gone home
        You should've thought twice 'fore you let it all go
        You should've known that word
        'Bout what you did with her'd,
        Get back to me (get back to me).
        And I should've been there in the back of your mind
        I shouldn't be asking myself, "Why?"
        You shouldn't be begging for forgiveness at my feet...
        You should've said "No", baby, and you might still have me
        
        I can't resist
        Before you go, tell me this:
        Was it worth it?
        Was she worth this?
        
        No... no, no, no...
        
        You should've said "No", you should've gone home
        You should've thought twice 'fore you let it all go
        You should've known that word
        'Bout what you did with her'd,
        Get back to me (get back to me).
        And I should've been there in the back of your mind
        I shouldn't be asking myself, "Why?"
        You shouldn't be begging for forgiveness at my feet...
        You should've said "No", baby, and you might still have me`
    },
    '9': {
        name: 'Mary\'s Song (Oh My My My)', 
        youtube: 'https://www.youtube.com/watch?v=9TCRiGA1A2U',
        album: 'Taylor Swift', 
        taylorsversion: 'no', 
        lyrics: `She said, I was seven and you were nine
        I looked at you like the stars that shined
        In the sky, the pretty lights
        And our daddies used to joke about the two of us
        Growing up and falling in love and our mamas smiled
        And rolled their eyes and said, "Oh my, my, my"
        
        Take me back to the house in the backyard tree
        Said you'd beat me up, you were bigger than me
        You never did, you never did
        Take me back when our world was one block wide
        I dared you to kiss me and ran when you tried
        Just two kids, you and I
        Oh my, my, my, my
        
        Well, I was sixteen when suddenly
        I wasn't that little girl you used to see
        But your eyes still shined like pretty lights
        And our daddies used to joke about the two of us
        They never believed we'd really fall in love
        And our mamas smiled and rolled their eyes
        And said, "Oh my, my, my"
        
        Take me back to the creek beds we turned up
        Two A.M. riding in your truck and all I need is you next to me
        Take me back to the time we had our very first fight
        The slamming of doors instead of kissing goodnight
        You stayed outside 'til the morning light
        Oh my, my, my, my
        
        A few years had gone and come around
        We were sitting at our favorite spot in town
        And you looked at me, got down on one knee
        
        Take me back to the time when we walked down the aisle
        Our whole town came and our mamas cried
        You said "I do" and I did too
        Take me home where we met so many years before
        We'll rock our babies on that very front porch
        After all this time, you and I
        
        I'll be eighty-seven; you'll be eighty-nine
        I'll still look at you like the stars that shine
        In the sky, oh my, my, my`
    },
    '10': {
        name: 'Our Song', 
        youtube: 'https://www.youtube.com/watch?v=Jb2stN7kH28',
        album: 'Taylor Swift', 
        taylorsversion: 'no', 
        lyrics: `I was riding shotgun
        With my hair undone
        In the front seat of his car
        He's got a one-hand feel
        On the steering wheel
        The other on my heart
        I look around, turn the radio down
        He says, "Baby, is something wrong?"
        I say, "Nothing
        I was just thinking
        How we don't have a song"
        And he says...
        
        Our song is the slamming screen door
        Sneakin' out late, tapping on your window
        When we're on the phone and you talk real slow
        'Cause it's late and your mama don't know
        Our song is the way you laugh
        The first date: "Man, I didn't kiss her, and I should have."
        And when I got home ... 'fore I said, "Amen"
        Asking God if he could play it again
        
        I was walking up
        The front porch steps
        After everything that day
        Had gone all wrong
        And been trampled on
        And lost and thrown away
        Got to the hallway,
        Well, on my way
        To my lovin' bed
        I almost didn't notice
        All the roses
        And the note that said...
        
        Our song is the slamming screen door
        Sneakin' out late, tapping on your window
        When we're on the phone and you talk real slow
        'Cause it's late and your mama don't know
        Our song is the way you laugh
        The first date: "Man, I didn't kiss her, and I should have"
        And when I got home ... 'fore I said, "Amen"
        Asking God if he could play it again
        
        I've heard every album, listened to the radio
        Waited for something to come along
        That was as good as our song...
        
        'Cause our song is the slamming screen door
        Sneakin' out late, tapping on his window
        When we're on the phone and he talks real slow
        'Cause it's late and his mama don't know
        Our song is the way he laughs
        The first date: "Man, I didn't kiss him, and I should have"
        And when I got home ... 'fore I said, "Amen"
        Asking God if he could play it again
        Play it again
        
        Oh, yeah...
        Oh-oh, yeah
        
        I was riding shotgun
        With my hair undone
        In the front seat of his car
        I grabbed a pen
        And an old napkin
        And I wrote down our son`
    },
    '11': {
        name: 'I\'m Only Me When I\'m With You', 
        youtube: 'https://www.youtube.com/watch?v=AlTfYj7q5gQ',
        album: 'Taylor Swift (Deluxe Version)', 
        taylorsversion: 'no', 
        lyrics: `Friday night beneath the stars
        In a field behind your yard
        You and I are paintin' pictures in the sky
        And sometimes we don't say a thing
        Just listen to the crickets sing
        Everything I need is right here by my side
        
        And I know everything about you
        I don't wanna live without you
        
        I'm only up when you're not down
        Don't wanna fly if you're still on the ground
        It's like no matter what I do
        Well, you drive me crazy half the time
        The other half I'm only tryna let you know that what I feel is true
        And I'm only me when I'm with you
        
        Just a small town boy and girl
        Livin' in a crazy world
        Tryna figure out what is and isn't true
        And I don't try to hide my tears
        My secrets or my deepest fears
        Through it all nobody gets me like you do
        
        And you know everything about me
        You say that you can't live without me
        
        I'm only up when you're not down
        Don't wanna fly if you're still on the ground
        It's like no matter what I do
        Well, you drive me crazy half the time
        The other half I'm only tryna let you know that what I feel is true
        And I'm only me when I'm with you
        
        When I'm with anybody else
        It's so hard to be myself
        And only you can tell
        
        ...That I'm only up when you're not down
        Don't wanna fly if you're still on the ground
        It's like no matter what I do
        Well, you drive me crazy half the time
        The other half I'm only tryna let you know that what I feel is true
        And I'm only me
        Who I wanna be
        Well, I'm only me when I'm with you
        With you`
    },
    '12': {
        name: 'Invisible', 
        youtube: 'https://www.youtube.com/watch?v=O7mVcg4bEuQ',
        album: 'Taylor Swift (Deluxe Version)', 
        taylorsversion: 'no', 
        lyrics: `She can't see the way your eyes
        Light up when you smile
        She'll never notice how you stop and stare
        Whenever she walks by
        
        And you can't see me wantin' you the way you want her
        But you are everything to me
        
        And I just wanna show you
        She don't even know you
        She's never gonna love you like I want to
        And you just see right through me
        But if you only knew me
        We could be a beautiful
        Miracle
        Unbelievable
        Instead of just invisible
        
        There's a fire inside of you
        That can't help but shine through
        She's never gonna see the light
        No matter what you do
        
        And all I think about is how to make you think of me
        And everything that we could be
        
        I just wanna show you
        She don't even know you
        She's never gonna love you like I want to
        And you just see right through me
        But if you only knew me
        We could be a beautiful
        Miracle
        Unbelievable
        Instead of just invisible
        
        Like shadows in a faded light
        Oh, we're invisible
        I just wanna open your eyes
        And make you realize
        
        I just wanna show you
        She don't even know you
        Baby, let me love you
        Let me want you
        You just see right through me
        But if you only knew me
        We could be a beautiful
        Miracle
        Unbelievable
        Instead of just invisible
        
        She can't see the way your eyes
        Light up when you smile`
    },
    '13': {
        name: 'A Perfectly Good Heart', 
        youtube: 'https://www.youtube.com/watch?v=4-vbnfB29II',
        album: 'Taylor Swift (Deluxe Version)', 
        taylorsversion: 'no', 
        lyrics: `Why would you wanna break a perfectly good heart?
        Why would you wanna take our love and tear it all apart, now?
        Why would you wanna make the very first scar?
        Why would you wanna break a perfectly good heart?
        
        Maybe I should've seen the signs, should've read the writing on the wall
        And realized by the distance in your eyes that I would be the one to fall
        No matter what you say, I still can't believe
        That you would walk away
        It don't make sense to me, but
        
        Why would you wanna break a perfectly good heart?
        Why would you wanna take our love and tear it all apart, now?
        Why would you wanna make the very first scar?
        Why would you wanna break a perfectly good heart?
        
        It's not unbroken anymore
        How do I get it back the way it was before?
        
        Why would you wanna break a perfectly good heart?
        Why would you wanna take our love and tear it all apart, now?
        Why would you wanna make the very first scar?
        Why would you wanna break, would you wanna break a
        
        Why would you wanna break a perfectly good heart?
        Why would you wanna take our love and tear it all apart, now?
        Why would you wanna make the very first scar?
        Why would you wanna break a perfectly good heart?`
    },
    '14': {
        name: 'Fearless', 
        youtube: 'https://www.youtube.com/watch?v=7lLigiVgJsE', 
        album: 'Fearless', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '15': {
        name: 'Fifteen', 
        youtube: 'https://www.youtube.com/watch?v=Pb-K2tXWK4w', 
        album: 'Fearless', 
        taylorsversion: 'no',
        lyrics: `You take a deep breath and you walk through the doors
        It's the mornin' of your very first day
        You say hi to your friends you ain't seen in a while
        Try and stay out of everybody's way
        It's your freshman year and you're gonna be here
        For the next four years in this town
        Hopin' one of those senior boys will wink at you and say
        "You know, I haven't seen you around before"
        
        'Cause when you're fifteen and somebody tells you they love you
        You're gonna believe them
        And when you're fifteen, feelin' like there's nothin' to figure out
        Well, count to ten, take it in
        This is life before you know who you're gonna be
        Fifteen
        
        You sit in class next to a redhead named Abigail
        And soon enough, you're best friends
        Laughin' at the other girls who think they're so cool
        We'll be outta here as soon as we can
        And then you're on your very first date and he's got a car
        And you're feelin' like flyin'
        And your mama's waitin' up and you're thinkin' he's the one
        And you're dancin' 'round your room when the night ends
        When the night ends
        
        'Cause when you're fifteen and somebody tells you they love you
        You're gonna believe them
        And when you're fifteen and your first kiss
        Makes your head spin 'round
        But in your life you'll do things greater than
        Dating the boy on the football team
        But I didn't know it at fifteen
        
        When all you wanted was to be wanted
        Wish you could go back and tell yourself what you know now
        Back then, I swore I was gonna marry him someday
        But I realized some bigger dreams of mine
        And Abigail gave everything she had
        To a boy who changed his mind
        And we both cried
        
        'Cause when you're fifteen and somebody tells you they love you
        You're gonna believe them
        And when you're fifteen, don't forget to look before you fall
        I've found time can heal most anything
        And you just might find who you're supposed to be
        I didn't know who I was supposed to be
        At fifteen
        
        La-la-la, la-la-la, la-la-la-la
        La-la-la, la-la-la, la-la-la-la
        La-la-la, la-la-la
        
        Your very first day
        Take a deep breath, girl
        Take a deep breath as you walk through the doors`
    },
    '16': {
        name: 'Love Story', 
        youtube: 'https://www.youtube.com/watch?v=8xg3vE8Ie_E', 
        album: 'Fearless', 
        taylorsversion: 'no',
        lyrics: `We were both young when I first saw you
        I close my eyes and the flashback starts
        I'm standing there
        On a balcony in summer air
        See the lights, see the party, the ball gowns
        See you make your way through the crowd
        And say, "Hello"
        Little did I know
        
        That you were Romeo, you were throwing pebbles
        And my daddy said, "Stay away from Juliet"
        And I was crying on the staircase
        Begging you, "Please don't go," and I said
        
        Romeo, take me somewhere we can be alone
        I'll be waiting, all there's left to do is run
        You'll be the prince and I'll be the princess
        It's a love story, baby, just say, "Yes"
        
        So I sneak out to the garden to see you
        We keep quiet 'cause we're dead if they knew
        So close your eyes
        Escape this town for a little while, oh, oh
        
        'Cause you were Romeo, I was a scarlet letter
        And my daddy said, "Stay away from Juliet"
        But you were everything to me
        I was begging you, "Please don't go," and I said
        
        Romeo, take me somewhere we can be alone
        I'll be waiting, all there's left to do is run
        You'll be the prince and I'll be the princess
        It's a love story, baby, just say, "Yes"
        Romeo, save me, they're trying to tell me how to feel
        This love is difficult, but it's real
        Don't be afraid, we'll make it out of this mess
        It's a love story, baby, just say, "Yes"
        
        Oh, oh
        
        And I got tired of waiting
        Wondering if you were ever coming around
        My faith in you was fading
        When I met you on the outskirts of town
        
        And I said, "Romeo, save me, I've been feeling so alone
        I keep waiting for you, but you never come
        Is this in my head? I don't know what to think"
        He knelt to the ground and pulled out a ring, and said
        "Marry me, Juliet, you'll never have to be alone
        I love you and that's all I really know
        I talked to your dad, go pick out a white dress
        It's a love story, baby, just say, 'Yes'"
        
        Oh, oh, oh
        Oh, oh, oh
        'Cause we were both young when I first saw you`
    },
    '17': {
        name: 'Hey Stephen', 
        youtube: 'https://www.youtube.com/watch?v=tMhiHrL7rPE', 
        album: 'Fearless', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '18': {
        name: 'White Horse', 
        youtube: 'https://www.youtube.com/watch?v=D1Xr-JFLxik', 
        album: 'Fearless', 
        taylorsversion: 'no',
        lyrics: `Say you're sorry, that face of an angel
        Comes out just when you need it to
        As I paced back and forth all this time
        'Cause I honestly believed in you
        Holdin' on, the days drag on
        Stupid girl, I shoulda known, I shoulda known
        
        That I'm not a princess, this ain't a fairytale
        I'm not the one you'll sweep off her feet, lead her up the stairwell
        This ain't Hollywood, this is a small town
        I was a dreamer before you went and let me down
        Now it's too late for you and your white horse
        To come around
        
        Maybe I was naïve, got lost in your eyes
        And never really had a chance
        My mistake, I didn't know to be in love
        You had to fight to have the upper hand
        I had so many dreams about you and me
        Happy endings, now I know
        
        That I'm not a princess, this ain't a fairytale
        I'm not the one you'll sweep off her feet, lead her up the stairwell
        This ain't Hollywood, this is a small town
        I was a dreamer before you went and let me down
        Now it's too late for you and your white horse
        To come around
        
        And there you are on your knees
        Beggin' for forgiveness, beggin' for me
        Just like I always wanted
        But I'm so sorry
        
        'Cause I'm not your princess, this ain't our fairytale
        I'm gonna find someone someday
        Who might actually treat me well
        This is a big world, that was a small town
        There in my rear view mirror disappearing now
        And it's too late for you and your white horse
        Now it's too late for you and your white horse
        To catch me now
        
        Oh, whoa, whoa, whoa
        Try and catch me now, oh
        It's too late to catch me now`
    },
    '19': {
        name: 'You Belong With Me', 
        youtube: 'https://www.youtube.com/watch?v=VuNIsY6JdUw', 
        album: 'Fearless', 
        taylorsversion: 'no',
        lyrics: `Say you're sorry, that face of an angel
        Comes out just when you need it to
        As I paced back and forth all this time
        'Cause I honestly believed in you
        Holdin' on, the days drag on
        Stupid girl, I shoulda known, I shoulda known
        
        That I'm not a princess, this ain't a fairytale
        I'm not the one you'll sweep off her feet, lead her up the stairwell
        This ain't Hollywood, this is a small town
        I was a dreamer before you went and let me down
        Now it's too late for you and your white horse
        To come around
        
        Maybe I was naïve, got lost in your eyes
        And never really had a chance
        My mistake, I didn't know to be in love
        You had to fight to have the upper hand
        I had so many dreams about you and me
        Happy endings, now I know
        
        That I'm not a princess, this ain't a fairytale
        I'm not the one you'll sweep off her feet, lead her up the stairwell
        This ain't Hollywood, this is a small town
        I was a dreamer before you went and let me down
        Now it's too late for you and your white horse
        To come around
        
        And there you are on your knees
        Beggin' for forgiveness, beggin' for me
        Just like I always wanted
        But I'm so sorry
        
        'Cause I'm not your princess, this ain't our fairytale
        I'm gonna find someone someday
        Who might actually treat me well
        This is a big world, that was a small town
        There in my rear view mirror disappearing now
        And it's too late for you and your white horse
        Now it's too late for you and your white horse
        To catch me now
        
        Oh, whoa, whoa, whoa
        Try and catch me now, oh
        It's too late to catch me now`
    },
    '20': {
        name: 'Breathe', 
        youtube: 'https://www.youtube.com/watch?v=qsUK-BG5OQQ', 
        album: 'Fearless', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '21': {
        name: 'Tell Me Why', 
        youtube: 'https://www.youtube.com/watch?v=cwFbq-70EwE', 
        album: 'Fearless', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '22': {
        name: 'You\'re Not Sorry', 
        youtube: 'https://www.youtube.com/watch?v=DNaSlUYIXBg', 
        album: 'Fearless', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '23': {
        name: 'The Way I Loved You', 
        youtube: 'https://www.youtube.com/watch?v=DlexmDDSDZ0', 
        album: 'Fearless', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '24': {
        name: 'Forever & Always', 
        youtube: 'https://www.youtube.com/watch?v=T-41vMWQTUA', 
        album: 'Fearless', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '25': {
        name: 'The Best Day', 
        youtube: 'https://www.youtube.com/watch?v=l4_6eQm7RTQ', 
        album: 'Fearless', 
        taylorsversion: 'no',
        lyrics: `I'm five years old, it's getting cold, I've got my big coat on
        I hear your laugh and look up smiling at you, I run and run
        Past the pumpkin patch and the tractor rides
        Look now, the sky is gold
        I hug your legs and fall asleep on the way home
        
        I don't know why all the trees change in the fall
        But I know you're not scared of anything at all
        Don't know if Snow White's house is near or far away
        But I know I had the best day with you today
        
        I'm thirteen now
        And don't know how my friends could be so mean
        I come home crying and you hold me tight and grab the keys
        And we drive and drive until we found a town far enough away
        And we talk and window shop 'til I've forgotten all their names
        
        I don't know who I'm going to talk to now at school
        But I know I'm laughing on the car ride home with you
        Don't know how long it's going to take to feel okay
        But I know I had the best day with you today
        
        I have an excellent father, his strength is making me stronger
        God smiles on my little brother, inside and out
        He's better than I am
        I grew up in a pretty house and I had space to run
        And I had the best days with you
        
        There is a video I found from back when I was three
        You set up a paint set in the kitchen and you're talking to me
        It's the age of princesses and pirate ships and the seven dwarfs
        And Daddy's smart
        And you're the prettiest lady in the whole wide world
        
        And now I know why all the trees change in the fall
        I know you were on my side even when I was wrong
        And I love you for giving me your eyes
        For staying back and watching me shine
        And I didn't know if you knew, so I'm taking this chance to say
        That I had the best day with you today`
    },
    '26': {
        name: 'Change', 
        youtube: 'https://www.youtube.com/watch?v=B1jYllE0T-k', 
        album: 'Fearless', 
        taylorsversion: 'no',
        lyrics: `Well, it's a sad picture, the final blow hits you
        Somebody else gets what you wanted again and
        You know it's all the same, another time and place
        Repeating history and you're getting sick of it
        But I believe in whatever you do
        And I'll do anything to see it through
        
        Because these things will change
        Can you feel it now?
        These walls that they put up to hold us back will fall down
        This revolution, the time will come
        For us to finally win
        And we'll sing hallelujah, we'll sing hallelujah
        Oh, oh
        
        So we've been outnumbered, raided, and now cornered
        It's hard to fight when the fight ain't fair
        We're getting stronger now, find things they never found
        They might be bigger but we're faster and never scared
        You can walk away, say we don't need this
        But there's something in your eyes says we can beat this
        
        'Cause these things will change
        Can you feel it now?
        These walls that they put up to hold us back will fall down
        This revolution, the time will come
        For us to finally win
        And we'll sing hallelujah, we'll sing hallelujah
        Oh, oh
        
        Tonight, we'll stand, get off our knees
        Fight for what we've worked for all these years
        And the battle was long, it's the fight of our lives
        But we'll stand up champions tonight
        
        It was the night things changed
        Can you see it now?
        When the walls that they put up to hold us back fell down
        It's a revolution, throw your hands up
        'Cause we never gave in
        And we'll sing hallelujah, we sang hallelujah
        Hallelujah`
    },
    '27': {
        name: 'Jump Then Fall', 
        youtube: 'https://www.youtube.com/watch?v=vUHDR6Rg3Y4', 
        album: 'Fearless', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '28': {
        name: 'Untouchable', 
        youtube: 'https://www.youtube.com/watch?v=8bNlGwnEUAs', 
        album: 'Fearless', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '29': {
        name: 'Bye Bye Bady', 
        youtube: 'https://www.youtube.com/watch?v=yuFuwXd-B9E', 
        album: 'Fearless', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '30': {
        name: 'Forever & Always (Piano Version)', 
        youtube: 'https://www.youtube.com/watch?v=RcGowZ26sE0', 
        album: 'Fearless', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '31': {
        name: 'Come In With The Rain', 
        youtube: 'https://www.youtube.com/watch?v=ePjcjLRHPOo', 
        album: 'Fearless', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '32': {
        name: 'Superstar', 
        youtube: 'https://www.youtube.com/watch?v=IsCik8wznlU', 
        album: 'Fearless', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '33': {
        name: 'The Other Side Of The Door', 
        youtube: 'https://www.youtube.com/watch?v=425n1NoRtgA', 
        album: 'Fearless', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '34': {
        name: 'Today Was A FairyTale', 
        youtube: 'https://www.youtube.com/watch?v=xSWVPqnKcXQ', 
        album: 'Fearless', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '35': {
        name: 'You All Over Me', 
        youtube: 'https://www.youtube.com/watch?v=XKaMUm7YwZc', 
        album: 'Fearless (From The Vault)', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '36': {
        name: 'Mr. Perfectly Fine', 
        youtube: 'https://www.youtube.com/watch?v=rFjJs6ZjPe8', 
        album: 'Fearless (From The Vault)', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '37': {
        name: 'We Were Happy', 
        youtube: 'https://www.youtube.com/watch?v=seU5y5EgIwk', 
        album: 'Fearless (From The Vault)', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '38': {
        name: 'That\'s When', 
        youtube: 'https://www.youtube.com/watch?v=aOa6D6ku3dM', 
        album: 'Fearless (From The Vault)', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '39': {
        name: 'Don\'t You', 
        youtube: 'https://www.youtube.com/watch?v=dHdAN4FXzmc', 
        album: 'Fearless (From The Vault)', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '40': {
        name: 'Mine', 
        youtube: 'https://www.youtube.com/watch?v=XPBwXKgDTdE', 
        album: 'Speak Now', 
        taylorsversion: 'no',
        lyrics: `You were in college working part-time waiting tables
        Left a small town, and never looked back
        I was a flight risk with a fear of falling
        Wondering why we bother with love if it never lasts
        
        I say, "Can you believe it?"
        As we're lying on the couch
        The moment I could see it
        Yes, yes, I can see it now
        
        Do you remember, we were sitting there by the water?
        You put your arm around me for the first time
        You made a rebel of a careless man's careful daughter
        You are the best thing that's ever been mine
        
        Flash forward and we're taking on the world together
        And there's a drawer of my things at your place
        You learn my secrets and you figure out why I'm guarded
        You say we'll never make my parents' mistakes
        
        But we got bills to pay
        We got nothing figured out
        When it was hard to take
        Yes, yes, this is what I thought about
        
        Do you remember, we were sitting there by the water?
        You put your arm around me for the first time
        You made a rebel of a careless man's careful daughter
        You are the best thing that's ever been mine
        
        Do you remember all the city lights on the water?
        You saw me start to believe for the first time
        You made a rebel of a careless man's careful daughter
        You are the best thing that's ever been mine
        
        And I remember that fight
        Two-thirty AM
        As everything was slipping right out of our hands
        I ran out crying and you followed me out into the street
        Braced myself for the "Goodbye"
        'Cause that's all I've ever known
        Then you took me by surprise
        You said, "I'll never leave you alone."
        
        You said, "I remember how we felt sitting by the water
        And every time I look at you, it's like the first time
        I fell in love with a careless man's careful daughter
        She is the best thing that's ever been mine."
        
        Hold on, make it last
        Hold on, never turn back
        
        (Hold on)
        You made a rebel of a careless man's careful daughter
        (Hold on)
        You are the best thing that's ever been mine
        
        (Hold on)
        Yeah, yeah
        Do you believe it?
        (Hold on)
        We're gonna make it now
        (Hold on)
        And I can see it
        (Yes, yes)
        I can see it now (see it now, see it now)`
    },
    '41': {
        name: 'Sparks Fly', 
        youtube: 'https://www.youtube.com/watch?v=oKar-tF__ac', 
        album: 'Speak Now', 
        taylorsversion: 'no',
        lyrics: `The way you move is like a full-on rainstorm
        And I'm a house of cards
        You're the kind of reckless
        That should send me running
        But I kinda know that I won't get far
        And you stood there in front of me
        Just close enough to touch
        Close enough to hope you couldn't see
        What I was thinking of
        
        Drop everything now
        Meet me in the pouring rain
        Kiss me on the sidewalk
        Take away the pain
        'Cause I see sparks fly whenever you smile
        Get me with those green eyes, baby, as the lights go down
        Give me something that'll haunt me when you're not around
        'Cause I see sparks fly whenever you smile
        
        My mind forgets to remind me
        You're a bad idea
        You touch me once and it's really something
        You find I'm even better than you imagined I would be
        I'm on my guard for the rest of the world
        But with you I know it's no good
        And I could wait patiently but I really wish you would
        
        Drop everything now
        Meet me in the pouring rain
        Kiss me on the sidewalk
        Take away the pain
        'Cause I see sparks fly whenever you smile
        Get me with those green eyes, baby, as the lights go down
        Give me something that'll haunt me when you're not around
        'Cause I see sparks fly whenever you smile
        
        I'll run my fingers through your hair and watch the lights go wild
        Just keep on keeping your eyes on me, it's just wrong enough to make it feel right
        And lead me up the staircase
        Won't you whisper soft and slow?
        I'm captivated by you, baby, like a firework show
        
        Drop everything now
        Meet me in the pouring rain
        Kiss me on the sidewalk
        Take away the pain
        'Cause I see sparks fly whenever you smile
        Get me with those green eyes, baby, as the lights go down
        Give me something that'll haunt me when you're not around
        'Cause I see sparks fly whenever you smile
        
        And the sparks fly
        Oh, baby, smile
        And the sparks fly`
    },
    '42': {
        name: 'Back To December', 
        youtube: 'https://www.youtube.com/watch?v=QUwxKWT6m7U', 
        album: 'Speak Now', 
        taylorsversion: 'no',
        lyrics: `I'm so glad you made time to see me
        How's life? Tell me how's your family?
        I haven't seen them in a while
        
        You've been good, busier than ever
        We small-talk, work and the weather
        Your guard is up and I know why
        
        Because the last time you saw me is still burned in the back of your mind
        You gave me roses and I left them there to die
        
        So this is me swallowing my pride
        Standing in front of you, saying, "I'm sorry for that night,"
        And I go back to December all the time
        
        It turns out freedom ain't nothing but missing you
        Wishing I'd realized what I had when you were mine
        I'd go back to December, turn around and make it all right
        I go back to December all the time
        
        These days I haven't been sleeping
        Staying up, playing back myself leaving
        When your birthday passed and I didn't call
        
        And I think about summer, all the beautiful times
        I watched you laughing from the passenger side
        And realized I loved you in the fall
        
        And then the cold came, the dark days when fear crept into my mind
        You gave me all your love and all I gave you was "Goodbye"
        
        So this is me swallowing my pride
        Standing in front of you, saying, "I'm sorry for that night."
        And I go back to December all the time
        
        It turns out freedom ain't nothing but missing you
        Wishing I'd realized what I had when you were mine
        I'd go back to December, turn around and change my own mind
        I go back to December all the time
        
        I miss your tanned skin, your sweet smile
        So good to me, so right
        And how you held me in your arms that September night:
        The first time you ever saw me cry
        
        Maybe this is wishful thinking
        Probably mindless dreaming
        But if we loved again, I swear I'd love you right
        
        I'd go back in time and change it but I can't
        So if the chain is on your door I understand
        
        But this is me swallowing my pride
        Standing in front of you, saying, "I'm sorry for that night."
        And I go back to December
        
        It turns out freedom ain't nothing but missing you
        Wishing I'd realized what I had when you were mine
        I'd go back to December, turn around and make it all right
        I'd go back to December, turn around and change my own mind
        
        I go back to December all the time
        All the time`
    },
    '43': {
        name: 'Speak Now', 
        youtube: 'https://www.youtube.com/watch?v=Gh7u-KTWUq8', 
        album: 'Speak Now', 
        taylorsversion: 'no',
        lyrics: `I am not the kind of girl
        Who should be rudely barging in on a white-veil occasion
        But you are not the kind of boy
        Who should be marrying the wrong girl
        
        I sneak in and see your friends
        And her snotty little family all dressed in pastel
        And she is yelling at a bridesmaid
        Somewhere back inside a room
        Wearing a gown shaped like a pastry
        
        This is surely not what you thought it would be
        I lose myself in a daydream
        Where I stand and say
        
        Don't say "Yes", run away now
        I'll meet you when you're out of the church at the back door
        Don't wait or say a single vow
        You need to hear me out
        And they said, "Speak now."
        
        Fond gestures are exchanged
        And the organ starts to play
        A song that sounds like a death march
        And I am hiding in the curtains
        It seems that I was uninvited by your lovely bride-to-be
        
        She floats down the aisle like a pageant queen
        But I know you wish it was me
        You wish it was me
        Don't you?
        
        Don't say "Yes", run away now
        I'll meet you when you're out of the church at the back door
        Don't wait or say a single vow
        You need to hear me out
        And they said, "Speak now."
        Don't say "Yes", run away now
        I'll meet you when you're out of the church at the back door
        Don't wait or say a single vow
        Your time is running out
        And they said, "Speak now."
        
        Oh, la, la
        Oh, oh
        Say a single vow
        
        I hear the preacher say, "Speak now or forever hold your peace."
        There's the silence, there's my last chance
        I stand up with shaky hands, all eyes on me
        Horrified looks from everyone in the room
        But I'm only looking at you
        
        I am not the kind of girl
        Who should be rudely barging in on a white-veil occasion
        But you are not the kind of boy
        Who should be marrying the wrong girl
        
        So, don't say "Yes", run away now
        I'll meet you when you're out of the church at the back door
        Don't wait or say a single vow
        You need to hear me out
        And they said, "Speak now."
        And you say, "Let's run away now
        I'll meet you when I'm out of my tux at the back door
        Baby, I didn't say my vows
        So glad you were around
        When they said, "Speak now."`
    },
    '44': {
        name: 'Dear John', 
        youtube: 'https://www.youtube.com/watch?v=5ZT566Kjnz8', 
        album: 'Speak Now', 
        taylorsversion: 'no',
        lyrics: `Long were the nights
        When my days once revolved around you
        Counting my footsteps
        Praying the floor won't fall through
        Again
        
        And my mother accused me of losing my mind
        But I swore I was fine
        
        You paint me a blue sky
        And go back and turn it to rain
        And I lived in your chess game
        But you changed the rules every day
        
        Wonderin' which version of you I might get on the phone tonight
        Well, I stopped pickin' up, and this song is to let you know why
        
        Dear John
        I see it all now that you're gone
        Don't you think I was too young to be messed
        With?
        The girl in the dress
        Cried the whole way home
        I should've known
        
        Well, maybe it's me
        And my blind optimism
        To blame
        Or maybe it's you and your sick need
        To give love then take it away
        
        And you'll add my name
        To your long list of traitors
        Who don't understand
        And I look back in regret
        How I ignored when they said
        "Run as fast as you can."
        
        Dear John
        I see it all now that you're gone
        Don't you think I was too young to be messed
        With?
        The girl in the dress
        Cried the whole way home
        
        Dear John
        I see it all now. It was wrong
        Don't you think nineteen's too young to be played
        By your dark twisted games?
        When I loved you so
        I should've known
        
        You are an expert at "Sorry"
        And keeping lines blurry
        Never impressed by me acing your tests
        All the girls that you've run dry
        Have tired lifeless eyes
        'Cause you've burned them out
        
        But I took your matches
        Before fire could catch me
        So, don't look now
        I'm shining like fireworks
        Over your sad empty town
        
        Dear John
        I see it all now that you're gone
        Don't you think I was too young to be messed
        With?
        The girl in the dress
        Cried the whole way home
        
        I see it all now that you're gone
        Don't you think I was too young to be messed
        With?
        The girl in the dress
        Wrote you a song
        You should've known
        
        You should've known
        Don't you think I was too young?
        You should've known`
    },
    '45': {
        name: 'Mean', 
        youtube: 'https://www.youtube.com/watch?v=jYa1eI1hpDE', 
        album: 'Speak Now', 
        taylorsversion: 'no',
        lyrics: `You, with your words like knives
        And swords and weapons that you use against me
        You have knocked me off my feet again
        Got me feeling like I'm nothing
        You, with your voice like nails on a chalkboard
        Calling me out when I'm wounded
        You, picking on the weaker man
        
        Well, you can take me down
        With just one single blow
        But you don't know what you don't know
        
        Someday, I'll be living in a big old city
        And all you're ever gonna be is mean
        Someday, I'll be big enough so you can't hit me
        And all you're ever gonna be is mean
        Why you gotta be so mean?
        
        You, with your switching sides
        And your wildfire lies and your humiliation
        You have pointed out my flaws again
        As if I don't already see them
        I walk with my head down, trying to block you out
        'Cause I'll never impress you
        I just wanna feel okay again
        
        I bet you got pushed around
        Somebody made you cold
        But the cycle ends right now
        'Cause you can't lead me down that road
        And you don't know what you don't know
        
        Someday, I'll be living in a big old city
        And all you're ever gonna be is mean
        Someday, I'll be big enough so you can't hit me
        And all you're ever gonna be is mean
        Why you gotta be so mean?
        
        And I can see you years from now in a bar
        Talking over a football game
        With that same big loud opinion
        But nobody's listening
        Washed up and ranting about the same old bitter things
        Drunk and grumbling on about how I can't sing
        But all you are is mean
        All you are is mean
        And a liar, and pathetic, and alone in life
        And mean, and mean, and mean, and mean
        
        But someday, I'll be living in a big old city
        And all you're ever gonna be is mean, yeah
        
        Someday, I'll be big enough so you can't hit me
        And all you're ever gonna be is mean
        Why you gotta be so mean?
        Someday, I'll be living in a big old city
        (Why you gotta be so mean?)
        And all you're ever gonna be is mean
        (Why you gotta be so mean?)
        Someday, I'll be big enough so you can't hit me
        (Why you gotta be so mean?)
        And all you're ever gonna be is mean
        Why you gotta be so mean?`
    },
    '46': {
        name: 'The Story Of Us', 
        youtube: 'https://www.youtube.com/watch?v=nN6VR92V70M', 
        album: 'Speak Now', 
        taylorsversion: 'no',
        lyrics: `I used to think one day we'd tell the story of us
        How we met and the sparks flew instantly
        And people would say, "They're the lucky ones."
        I used to know my place was the spot next to you
        Now I'm searching the room for an empty seat
        'Cause lately I don't even know what page you're on
        
        Oh, a simple complication
        Miscommunications lead to fall-out
        So many things that I wish you knew
        So many walls up I can't break through
        
        Now I'm standing alone in a crowded room and we're not speaking
        And I'm dying to know is it killing you like it's killing me, yeah?
        I don't know what to say, since the twist of fate when it all broke down
        And the story of us looks a lot like a tragedy now
        
        Next chapter
        
        How'd we end up this way?
        See me nervously pulling at my clothes and trying to look busy
        And you're doing your best to avoid me
        I'm starting to think one day I'll tell the story of us
        How I was losing my mind when I saw you here
        But you held your pride like you should've held me
        
        Oh, I'm scared to see the ending
        Why are we pretending this is nothing?
        I'd tell you I miss you but I don't know how
        I've never heard silence quite this loud
        
        Now I'm standing alone in a crowded room and we're not speaking
        And I'm dying to know is it killing you like it's killing me, yeah?
        I don't know what to say, since the twist of fate when it all broke down
        And the story of us looks a lot like a tragedy now
        
        This is looking like a contest
        Of who can act like they care less
        But I liked it better when you were on my side
        
        The battle's in your hands now
        But I would lay my armour down
        If you said you'd rather love than fight
        
        So many things that you wish I knew
        But the story of us might be ending soon
        
        Now I'm standing alone in a crowded room and we're not speaking
        And I'm dying to know is it killing you like it's killing me, yeah?
        But I don't know what to say, since the twist of fate when it all broke down
        And the story of us looks a lot like a tragedy now, now, now
        
        ...and we're not speaking
        And I'm dying to know is it killing you like it's killing me, yeah?
        I don't know what to say, since the twist of fate 'cause we're going down
        And the story of us looks a lot like a tragedy now
        
        The end`
    },
    '47': {
        name: 'Never Grow Up', 
        youtube: 'https://www.youtube.com/watch?v=R6wHAaa7e2U', 
        album: 'Speak Now', 
        taylorsversion: 'no',
        lyrics: `Your little hand's wrapped around my finger
        And it's so quiet in the world tonight
        Your little eyelids flutter 'cause you're dreaming
        So I tuck you in, turn on your favorite night light
        To you everything's funny, you got nothing to regret
        I'd give all I have, honey
        If you could stay like that
        
        Oh darling, don't you ever grow up
        Don't you ever grow up, just stay this little
        Oh darling, don't you ever grow up
        Don't you ever grow up, it could stay this simple
        I won't let nobody hurt you, won't let no one break your heart
        And no one will desert you
        Just try to never grow up, never grow up
        
        You're in the car on the way to the movies
        And you're mortified your mom's dropping you off
        At fourteen, there's just so much you can't do
        And you can't wait to move out someday and call your own shots
        But don't make her drop you off around the block
        Remember that she's getting older too
        And don't lose the way that you dance around in your pj's getting ready for school
        
        Oh darling, don't you ever grow up
        Don't you ever grow up, just stay this little
        Oh darling, don't you ever grow up
        Don't you ever grow up, it could stay this simple
        No one's ever burned you, nothing's ever left you scarred
        And even though you want to, just try to never grow up
        
        Take pictures in your mind of your childhood room
        Memorize what it sounded like when your dad gets home
        Remember the footsteps, remember the words said
        And all your little brother's favorite songs
        I just realized everything I have is someday gonna be gone
        
        So here I am in my new apartment
        In a big city, they just dropped me off
        It's so much colder than I thought it would be
        So I tuck myself in and turn my night light on
        
        Wish I'd never grown up
        I wish I'd never grown up
        
        Oh, I don't wanna grow up, wish I'd never grown up
        I could still be little
        Oh, I don't wanna grow up, wish I'd never grown up
        It could still be simple
        Oh darling, don't you ever grow up
        Don't you ever grow up, just stay this little
        Oh darling, don't you ever grow up
        Don't you ever grow up, it could stay this simple
        Won't let nobody hurt you
        Won't let no one break your heart
        And even though you want to, please try to never grow up
        Oh, don't you ever grow up
        Oh, never grow up, just never grow up`
    },
    '48': {
        name: 'Enchanted', 
        youtube: 'https://www.youtube.com/watch?v=fvg01l43XBc', 
        album: 'Speak Now', 
        taylorsversion: 'no',
        lyrics: `There I was again tonight
        Forcing laughter, faking smiles
        Same old tired lonely place
        
        Walls of insincerity,
        Shifting eyes and vacancy
        Vanished when I saw your face
        
        All I can say is it was enchanting to meet you
        
        Your eyes whispered, "Have we met?"
        Across the room your silhouette
        Starts to make its way to me
        The playful conversation starts
        Counter all your quick remarks
        Like passing notes in secrecy
        
        And it was enchanting to meet you
        All I can say is I was enchanted to meet you
        
        This night is sparkling, don't you let it go
        I'm wonderstruck, blushing all the way home
        I'll spend forever wondering if you knew
        I was enchanted to meet you
        
        The lingering question kept me up
        2 AM, who do you love?
        I wonder 'til I'm wide awake
        And now I'm pacing back and forth
        Wishing you were at my door
        I'd open up and you would say, "Hey,
        It was enchanting to meet you,
        All I know is I was enchanted to meet you."
        
        This night is sparkling, don't you let it go
        I'm wonderstruck, blushing all the way home
        I'll spend forever wondering if you knew
        This night is flawless, don't you let it go
        I'm wonderstruck, dancing around all alone
        I'll spend forever wondering if you knew
        I was enchanted to meet you
        
        This is me praying that
        This was the very first page
        Not where the story line ends
        My thoughts will echo your name
        Until I see you again
        These are the words I held back
        As I was leaving too soon
        I was enchanted to meet you
        
        Please don't be in love with someone else
        Please don't have somebody waiting on you
        Please don't be in love with someone else
        Please don't have somebody waiting on you
        
        This night is sparkling, don't you let it go
        I'm wonderstruck, blushing all the way home
        I'll spend forever wondering if you knew
        This night is flawless, don't you let it go
        (Please don't be in love with someone else)
        I'm wonderstruck, dancing around all alone
        (Please don't have somebody waiting on you)
        I'll spend forever wondering if you knew
        (Please don't be in love with someone else)
        I was enchanted to meet you
        
        Please don't be in love with someone else
        Please don't have somebody waiting on you`
    },
    '49': {
        name: 'Better Than Revenge', 
        youtube: 'https://www.youtube.com/watch?v=KdJHBYb8S4Y', 
        album: 'Speak Now', 
        taylorsversion: 'no',
        lyrics: `"Now go stand in the corner and think about what you did."

        Time for a little revenge
        
        The story starts when it was hot and it was summer and
        I had it all, I had him right there where I wanted him
        She came along, got him alone and let's hear the applause
        She took him faster than you could say "sabotage"
        
        I never saw it coming, wouldn't have suspected it
        I underestimated just who I was dealing with
        She had to know the pain was beating on me like a drum
        She underestimated just who she was stealing from
        
        She's not a saint
        And she's not what you think
        She's an actress
        She's better known
        For the things that she does on the mattress
        
        Soon she's gonna find
        Stealing other people's toys
        On the playground won't make you many friends
        She should keep in mind
        She should keep in mind
        There is nothing I do better than revenge
        
        She looks at life like it's a party and she's on the list
        She looks at me like I'm a trend and she's so over it
        I think her ever-present frown is a little troubling
        She thinks I'm psycho 'cause I like to rhyme her name with things
        
        But sophistication isn't what you wear or who you know
        Or pushing people down to get you where you wanna go
        They wouldn't teach you that in prep school so it's up to me
        But no amount of vintage dresses gives you dignity
        (Think about what you did)
        
        She's not a saint
        And she's not what you think
        She's an actress
        She's better known
        For the things that she does
        On the mattress
        
        Soon she's gonna find
        Stealing other people's toys
        On the playground won't make you many friends
        She should keep in mind
        She should keep in mind
        There is nothing I do better than revenge
        
        I'm just another thing for you to roll your eyes at, honey
        You might have him but haven't you heard
        I'm just another thing for you to roll your eyes at, honey
        You might have him but I always get the last word
        
        She's not a saint
        And she's not what you think
        She's an actress
        (She deserve it)
        She's better known
        For the things that she does on the mattress
        
        Soon she's gonna find
        Stealing other people's toys
        On the playground won't make you many friends
        She should keep in mind
        She should keep in mind
        There is nothing I do better than revenge
        
        Do you still feel like you know what you're doing?
        'Cause I don't think you do
        (No, no, no, no)
        Do you still feel like you know what you're doing?
        I don't think you do
        I don't think you do
        
        Let's hear the applause
        (Come on, come on)
        Come on show me how much better you are
        (So much better, yeah?)
        So you deserve some applause 'cause you're so much better
        
        She took him faster than you could say "sabotage"`
    },
    '50': {
        name: 'Innocent', 
        youtube: 'https://www.youtube.com/watch?v=IHSKn18Ma8k', 
        album: 'Speak Now', 
        taylorsversion: 'no',
        lyrics: `I guess you really did it this time
        Left yourself in your warpath
        Lost your balance on a tightrope
        Lost your mind tryin' to get it back
        
        Wasn't it easier in your lunchbox days?
        Always a bigger bed to crawl into
        Wasn't it beautiful when you believed in everything
        And everybody believed in you?
        
        It's alright, just wait and see
        Your string of lights is still bright to me
        Oh, who you are is not where you've been
        You're still an innocent
        You're still an innocent
        
        Did some things you can't speak of
        But at night you live it all again
        You wouldn't be shattered on the floor now
        If only you had seen what you know now then
        
        Wasn't it easier in your firefly-catchin' days?
        When everything out of reach
        Someone bigger brought down to you
        Wasn't it beautiful runnin' wild 'til you fell asleep
        Before the monsters caught up to you?
        
        It's alright, just wait and see
        Your string of lights is still bright to me
        Oh, who you are is not what you've been
        You're still an innocent
        It's okay, life is a tough crowd
        32, and still growin' up now
        Who you are is not what you did
        You're still an innocent
        
        Time turns flames to embers
        You'll have new Septembers
        Every one of us has messed up too
        Lives change like the weather
        I hope you remember
        Today is never too late to be brand new
        
        It's alright, just wait and see
        Your string of lights is still bright to me
        Oh, who you are is not what you've been
        You're still an innocent
        It's okay, life is a tough crowd
        32, and still growin' up now
        Who you are is not what you did
        You're still an innocent
        You're still an innocent
        
        Lost your balance on a tightrope
        It's never too late to get it back`
    },
    '51': {
        name: 'Haunted', 
        youtube: 'https://www.youtube.com/watch?v=Kmm8qDtnHEo', 
        album: 'Speak Now', 
        taylorsversion: 'no',
        lyrics: `You and I walk a fragile line
        I have known it all this time
        But I never thought I'd live to see it break
        It's getting dark and it's all too quiet
        And I can't trust anything now
        And it's coming over you like it's all a big mistake
        
        Oh, holding my breath
        Won't lose you again
        Something's made your eyes go cold
        
        Come on, come on, don't leave me like this
        I thought I had you figured out
        Something's gone terribly wrong
        You're all I wanted
        Come on, come on, don't leave me like this
        I thought I had you figured out
        Can't breathe whenever you're gone
        Can't turn back now, I'm haunted
        
        Stood there and watched you walk away
        From everything we had
        But I still mean every word I said to you
        He will try to take away my pain
        And he just might make me smile
        But the whole time I'm wishing he was you instead
        
        Oh, holding my breath
        Won't see you again
        Something keeps me holding on to nothing
        
        Come on, come on, don't leave me like this
        I thought I had you figured out
        Something's gone terribly wrong
        You're all I wanted
        Come on, come on, don't leave me like this
        I thought I had you figured out
        Can't breathe whenever you're gone
        Can't turn back now, I'm haunted
        
        I know, I know, I just know
        You're not gone. You can't be gone. No
        
        Come on, come on, don't leave me like this
        I thought I had you figured out
        Something's gone terribly wrong
        Won't finish what you started
        Come on, come on, don't leave me like this
        I thought I had you figured out
        Can't breathe whenever you're gone
        Can't go back, I'm haunted
        
        Oh
        
        You and I walk a fragile line
        I have known it all this time
        Never ever thought I'd see it break
        Never thought I'd see it`
    },
    '52': {
        name: 'Last Kiss', 
        youtube: 'https://www.youtube.com/watch?v=X1ebhLz13Ug', 
        album: 'Speak Now', 
        taylorsversion: 'no',
        lyrics: `I still remember the look on your face
        Lit through the darkness at 1:58
        The words that you whispered
        For just us to know
        You told me you loved me
        So why did you go away?
        Away
        
        I do recall now the smell of the rain
        Fresh on the pavement
        I ran off the plane
        That July 9th
        The beat of your heart
        It jumps through your shirt
        I can still feel your arms
        
        But now I'll go sit on the floor
        Wearing your clothes
        All that I know is
        I don't know how to be something you miss
        I never thought we'd have a last kiss
        Never imagined we'd end like this
        Your name, forever the name on my lips
        
        I do remember the swing of your step
        The life of the party, you're showing off again
        And I roll my eyes and then
        You pull me in
        I'm not much for dancing
        But for you I did
        
        Because I love your handshake, meeting my father
        I love how you walk with your hands in your pockets
        How you'd kiss me when I was in the middle of saying something
        There's not a day I don't miss those rude interruptions
        
        And I'll go sit on the floor
        Wearing your clothes
        All that I know is
        I don't know how to be something you miss
        I never thought we'd have a last kiss
        I never imagined we'd end like this
        Your name, forever the name on my lips
        
        So I'll watch your life in pictures like I used to watch you sleep
        And I feel you forget me like I used to feel you breathe
        And I keep up with our old friends just to ask them how you are
        Hope it's nice where you are
        
        And I hope the sun shines
        And it's a beautiful day
        And something reminds you
        You wish you had stayed
        You can plan for a change in weather and time
        But I never planned on you changing your mind
        
        So I'll go sit on the floor
        Wearing your clothes
        All that I know is
        I don't know how to be something you miss
        I never thought we'd have a last kiss
        I never imagined we'd end like this
        Your name, forever the name on my lips
        
        Just like our last kiss
        Forever the name on my lips
        Forever the name on my lips
        
        Just like our last`
    },
    '53': {
        name: 'Long Live', 
        youtube: 'https://www.youtube.com/watch?v=TI4g93b_5_s', 
        album: 'Speak Now', 
        taylorsversion: 'no',
        lyrics: `I said remember this moment
        In the back of my mind
        The time we stood with our shaking hands
        The crowds in stands went wild
        
        We were the kings and the queens
        And they read off our names
        The night you danced like you knew
        Our lives would never be the same
        
        You held your head like a hero
        On a history book page
        It was the end of a decade
        But the start of an age
        
        Long live the walls we crashed through
        How the kingdom lights shined just for me and you
        I was screaming long live all the magic we made
        And bring on all the pretenders
        One day, we will be remembered
        
        I said remember this feeling
        I pass the pictures around
        Of all the years that we stood there
        On the side-lines wishing for right now
        
        We are the kings and the queens
        You traded your baseball cap for a crown
        When they gave us our trophies
        And we held them up for our town
        
        And the cynics were outraged
        Screaming, "This is absurd!"
        'Cause for a moment a band of thieves
        In ripped-up jeans got to rule the world
        
        Long live the walls we crashed through
        How the kingdom lights shined just for me and you
        I was screaming long live all the magic we made
        And bring on all the pretenders
        I'm not afraid
        
        Long live all the mountains we moved
        I had the time of my life fighting dragons with you
        I was screaming long live that look on your face
        And bring on all the pretenders
        One day, we will be remembered
        
        Hold on to spinning around
        Confetti falls to the ground
        May these memories break our fall
        
        Will you take a moment
        Promise me this
        That you'll stand by me forever
        But if God forbid fate should step in
        
        And force us into a goodbye
        If you have children some day
        When they point to the pictures
        Please tell them my name
        
        Tell them how the crowds went wild
        Tell them how I hope they shine
        
        Long live the walls we crashed through
        I had the time of my life, with you
        
        Long, long live the walls we crashed through
        How the kingdom lights shined just for me and you
        And I was screaming long live all the magic we made
        And bring on all the pretenders
        I'm not afraid
        
        Singing, long live all the mountains we moved
        I had the time of my life fighting dragons with you
        And long, long live that look on your face
        And bring on all the pretenders
        One day, we will be remembered`
    },
    '54': {
        name: 'Ours', 
        youtube: 'https://www.youtube.com/watch?v=LZ34LlaIk88', 
        album: 'Speak Now (Deluxe Edition)', 
        taylorsversion: 'no',
        lyrics: `Elevator buttons and morning air
        Strangers' silence makes me wanna take the stairs
        If you were here we'd laugh about their vacant stares
        But right now my time is theirs
        
        Seems like there's always someone who disapproves
        They'll judge it like they know about me and you
        And the verdict comes from those with nothing else to do
        The jury's out, but my choice is you
        
        So don't you worry your pretty little mind
        People throw rocks at things that shine
        And life makes love look hard
        The stakes are high, the water's rough
        But this love is ours
        
        You never know what people have up their sleeves
        Ghosts from your past gonna jump out at me
        Lurking in the shadows with their lip gloss smiles
        But I don't care 'cause right now you're mine
        
        And you'll say
        Don't you worry your pretty little mind
        People throw rocks at things that shine
        And life makes love look hard
        The stakes are high, the water's rough
        But this love is ours
        
        And it's not theirs to speculate
        If it's wrong and
        Your hands are tough
        But they are where mine belong and
        I'll fight their doubt and give you faith
        With this song for you
        
        'Cause I love the gap between your teeth
        And I love the riddles that you speak
        And any snide remarks from my father about your tattoos will be ignored
        'Cause my heart is yours
        
        So don't you worry your pretty little mind
        People throw rocks at things that shine
        And life makes love look hard
        Don't you worry your pretty little mind
        People throw rocks at things that shine
        But they can't take what's ours
        They can't take what's ours
        
        The stakes are high, the water's rough
        But this love is ours`
    },
    '55': {
        name: 'If This Was A Movie', 
        youtube: 'https://www.youtube.com/watch?v=usn8R-v9Wwk', 
        album: 'Speak Now (Deluxe Edition)', 
        taylorsversion: 'no',
        lyrics: `Last night I heard my own heart beating
        Sounded like footsteps on my stairs
        Six months gone and I'm still reaching
        Even though I know you're not there
        I was playing back a thousand memories, baby
        Thinking 'bout everything we've been through
        Maybe I've been going back too much lately
        When time stood still and I had you
        
        Come back, come back, come back to me like
        You would, you would if this was a movie
        Stand in the rain outside 'til I came out
        Come back, come back, come back to me like
        You could, you could if you just said you're sorry
        I know that we could work it out somehow
        But if this was a movie you'd be here by now
        
        I know people change and these things happen
        But I remember how it was back then
        Locked up in your arms and our friends are laughing
        'Cause nothing like this ever happened to them
        Now I'm pacing down the hall, chasing down your street
        Flashback to the night when you said to me
        "Nothing's gonna change, not for me and you
        Not before I knew how much I had to lose."
        
        Come back, come back, come back to me like
        You would, you would if this was a movie
        Stand in the rain outside 'til I came out
        Come back, come back, come back to me like
        You could, you could if you just said you're sorry
        I know that we could work it out somehow
        But if this was a movie you'd be here by now
        
        If you're out there
        If you're somewhere
        If you're moving on
        I've been waiting for you
        Ever since you've been gone
        I just want it back the way it was before
        And I just wanna see you back at my front door
        And I'd say
        
        Come back, come back, come back to me like
        You would before you said, "It's not that easy."
        Before the fight, before I locked you out
        But I take it all back now
        
        Come back, come back, come back to me like
        You would, you would if this was a movie
        Stand in the rain outside 'til I came out
        Come back, come back, come back to me like
        You could, you could if you just said you're sorry
        I know that we could work it out somehow
        But if this was a movie you'd be here by now
        
        You'd be here by now
        It's not the kind of ending you wanna see now
        Baby, what about the ending
        Oh, I thought you'd be here by now, whoa
        Thought you'd be here by now`
    },
    '56': {
        name: 'Superman', 
        youtube: 'https://www.youtube.com/watch?v=oQ9H9XWzV4s', 
        album: 'Speak Now (Deluxe Edition)', 
        taylorsversion: 'no',
        lyrics: `Tall, dark and superman
        He puts papers in his briefcase and drives away
        To save the world or go to work
        It's the same thing to me
        He's got his mother's eyes, his father's ambition
        I wonder if he knows how much that I miss him
        I hang on every word you say
        
        And you smile and say, "How are you?"
        I'll say, "Just fine."
        I always forget to tell you, I love you, I'll love you forever
        
        I watch superman fly away
        You've got a busy day today
        Go save the world, I'll be around
        And I watch superman fly away
        Come back I'll be with you someday
        I'll be right here on the ground
        When you come back down
        
        Tall, dark and beautiful
        He's complicated, he's irrational
        But I hope someday you'll take me away and save the day, yeah
        Something in his deep brown eyes has me sayin'
        He's not all bad like his reputation
        And I can't hear one single word they say
        
        And you'll leave, got places to be
        And I'll be OK
        I always forget to tell you I love you, I loved you from the very first day
        
        I watch superman fly away
        You've got a busy day today
        Go save the world I'll be around
        And I watch superman fly away
        Come back I'll be with you someday
        I'll be right here on the ground
        When you come back down
        
        And I watch you fly around the world
        And I hope you don't save some other girl
        Don't forget, don't forget about me
        I'm far away but I never let you go
        I'm love-struck and looking out the window
        Don't forget, don't forget where I'll be
        Right here wishing the flowers were from you
        Wishing the card was from you
        Wishing the call was from you
        
        'Cause I loved you from the very first day
        
        I watch superman fly away
        You've got a busy day today
        Go save the world, I'll be around
        Forever and ever here
        I watch superman fly away
        I swear I'll be with you someday
        I'll be right here on the ground
        When you come back down
        
        When you come back down`
    },
    '57': {
        name: 'State Of Grace', 
        youtube: 'https://www.youtube.com/watch?v=-mrC5tRkxrY', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '58': {
        name: 'Red', 
        youtube: 'https://www.youtube.com/watch?v=R_rUYuFtNO4', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '59': {
        name: 'Treacherous', 
        youtube: 'https://www.youtube.com/watch?v=u1D1AgDfreg', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '60': {
        name: 'I Knew You Were Trouble', 
        youtube: 'https://www.youtube.com/watch?v=vNoKguSdy4Y', 
        album: 'Red', 
        taylorsversion: 'no',
        lyrics: `Once upon a time, a few mistakes ago
        I was in your sights, you got me alone
        You found me, you found me, you found me
        I guess you didn't care, and I guess I liked that
        And when I fell hard, you took a step back
        Without me, without me, without me
        
        And he's long gone when he's next to me
        And I realize the blame is on me
        
        'Cause I knew you were trouble when you walked in
        So shame on me now
        Flew me to places I'd never been
        'Til you put me down, oh
        I knew you were trouble when you walked in
        So shame on me now
        Flew me to places I'd never been
        Now I'm lying on the cold hard ground
        
        Oh, oh-oh
        Trouble, trouble, trouble
        Oh, oh-oh
        Trouble, trouble, trouble
        
        No apologies, he'll never see you cry
        Pretends he doesn't know that he's the reason why
        You're drowning, you're drowning, you're drowning
        And I heard you moved on from whispers on the street
        A new notch in your belt is all I'll ever be
        And now I see, now I see, now I see
        
        He was long gone when he met me
        And I realize the joke is on me, hey
        
        I knew you were trouble when you walked in (Oh)
        So shame on me now
        Flew me to places I'd never been
        'Til you put me down, oh
        I knew you were trouble when you walked in
        So shame on me now
        Flew me to places I'd never been (Yeah)
        Now I'm lying on the cold hard ground
        
        Oh, oh-oh (Yeah)
        Trouble, trouble, trouble (Trouble)
        Oh, oh-oh
        Trouble, trouble, trouble
        
        And the saddest fear
        Comes creeping in
        That you never loved me
        Or her, or anyone, or anything
        Yeah
        
        I knew you were trouble when you walked in
        So shame on me now
        Flew me to places I'd never been (Never been)
        'Til you put me down, oh
        I knew you were trouble when you walked in (Knew it right there)
        So shame on me now (Knew it right there)
        Flew me to places I'd never been (Ooh)
        Now I'm lying on the cold hard ground
        
        Oh, oh-oh
        Trouble, trouble, trouble (Oh)
        Oh, oh-oh
        Trouble, trouble, trouble (Trouble)
        I knew you were trouble when you walked in
        Trouble, trouble, trouble
        I knew you were trouble when you walked in
        Trouble, trouble, trouble`
    },
    '61': {
        name: 'All Too Well', 
        youtube: 'https://www.youtube.com/watch?v=9OQBDdNHmXo', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '62': {
        name: '22', 
        youtube: 'https://www.youtube.com/watch?v=AgFeZr5ptV8', 
        album: 'Red', 
        taylorsversion: 'no',
        lyrics: `It feels like a perfect night
        To dress up like hipsters
        And make fun of our exes
        Ah, ah, ah, ah
        It feels like a perfect night
        For breakfast at midnight
        To fall in love with strangers
        Ah ah, ah, ah
        Yeah, we're happy, free, confused and lonely at the same time
        It's miserable and magical, oh yeah
        Tonight's the night when we forget about the deadlines, it's time
        Ah, ah
        
        I don't know about you
        But I'm feeling 22
        Everything will be alright if
        You keep me next to you
        You don't know about me
        But I'll bet you want to
        Everything will be alright if
        We just keep dancing like we're
        22
        22
        
        It seems like one of those nights
        This place is too crowded
        Too many cool kids ("Who is Taylor Swift anyway?")
        Ah ah, ah ah
        It seems like one of those nights
        We ditch the whole scene
        And end up dreaming instead of sleeping, yeah
        We're happy, free, confused and lonely in the best way
        It's miserable and magical, oh yeah
        Tonight's the night when we forget about the heartbreaks, it's time
        Ah, ah
        
        I don't know about you
        But I'm feeling 22
        Everything will be alright if
        You keep me next to you
        You don't know about me
        But I'll bet you want to
        Everything will be alright if (Alright)
        We just keep dancing like we're
        22
        22 (I don't know about you)
        22
        22
        
        It feels like one of those nights
        We ditch the whole scene
        It feels like one of those nights
        We won't be sleeping
        It feels like one of those nights
        You look like bad news
        I gotta have you
        I gotta have you
        
        I don't know about you (I don't know about you)
        But I'm feeling 22
        Everything will be alright if
        You keep me next to you
        You don't know about me (You don't know about me)
        But I'll bet you want to
        Everything will be alright if
        We just keep dancing like we're 22
        22
        22 (Dancing like)
        22
        22
        
        It feels like one of those nights
        We ditch the whole scene
        It feels like one of those nights
        We won't be sleeping
        It feels like one of those nights
        You look like bad news
        I gotta have you
        I gotta have you`
    },
    '63': {
        name: 'I Almost Do', 
        youtube: 'https://www.youtube.com/watch?v=w1AV_35zVwU', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '64': {
        name: 'We Are Never Ever Getting Back Together', 
        youtube: 'https://www.youtube.com/watch?v=WA4iX5D9Z64', 
        album: 'Red', 
        taylorsversion: 'no',
        lyrics: `I remember when we broke up the first time
        Saying, "This is it, I've had enough", 'cause like
        We hadn't seen each other in a month
        When you said you needed space, what?
        Then you come around again and say
        "Baby, I miss you and I swear I'm gonna change, trust me"
        Remember how that lasted for a day?
        I say, "I hate you," we break up, you call me, "I love you"
        
        Ooh, we called it off again last night but
        Ooh, this time I'm telling you, I'm telling you
        
        We are never ever ever getting back together
        We are never ever ever getting back together
        You go talk to your friends, talk to my friends, talk to me
        But we are never ever ever ever getting back together
        
        Like, ever
        
        I'm really gonna miss you picking fights
        And me falling for it, screaming that I'm right
        And you would hide away and find your peace of mind
        With some indie record that's much cooler than mine
        
        Ooh, you called me up again tonight but
        Ooh, this time, I'm telling you, I'm telling you
        
        We are never ever ever getting back together
        We are never ever ever getting back together
        You go talk to your friends, talk to my friends, talk to me
        But we are never ever ever ever getting back together
        
        Yeah
        Yeah
        Yeah
        
        I used to think that we were forever ever
        And I used to say never say never
        
        So he calls me up and he's like, "I still love you"
        And I'm like, I'm just, I mean this is exhausting you know?
        Like we are never getting back together
        Like, ever
        
        (No)
        We are never ever ever getting back together
        We are never ever ever getting back together
        You go talk to your friends, talk to my friends, talk to me
        But we are never ever ever ever getting back together
        
        (We)
        No
        (Getting back together)
        (We)
        (Getting back together)
        You go talk to your friends, talk to my friends, talk to me
        (Talk to me)
        But we are never ever ever ever getting back together`
    },
    '65': {
        name: 'Stay Stay Stay', 
        youtube: 'https://www.youtube.com/watch?v=OhJ-S9Nrh7Q', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '66': {
        name: 'The Last Time', 
        youtube: 'https://www.youtube.com/watch?v=pCH4QrSx2Jg', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '67': {
        name: 'Holy Ground', 
        youtube: 'https://www.youtube.com/watch?v=S4PuN-IWi2g', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '68': {
        name: 'Sad Beautiful Tragic', 
        youtube: 'https://www.youtube.com/watch?v=jQfB4Gahi3I', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '69': {
        name: 'The Lucky One', 
        youtube: 'https://www.youtube.com/watch?v=4LtQxA_ooLk', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '70': {
        name: 'Everything Has Changed', 
        youtube: 'https://www.youtube.com/watch?v=w1oM3kQpXRo', 
        album: 'Red', 
        taylorsversion: 'no',
        lyrics: `All I knew this morning when I woke
        Is I know something now
        Know something now I didn't before
        And all I've seen since 18 hours ago
        Is green eyes and freckles and your smile
        In the back of my mind, making me feel like
        
        I just wanna know you better
        Know you better, know you better now
        I just wanna know you better
        Know you better, know you better now
        I just wanna know you better
        Know you better, know you better now
        I just wanna know you, know you, know you
        
        'Cause all I know is we said, "Hello"
        And your eyes look like coming home
        All I know is a simple name
        Everything has changed
        All I know is you held the door
        You'll be mine and I'll be yours
        All I know since yesterday
        Is everything has changed
        
        And all my walls stood tall, painted blue
        But I'll take 'em down, take 'em down
        And open up the door for you
        And all I feel in my stomach is butterflies
        The beautiful kind, making up for lost time
        Taking flight, making me feel right
        
        I just wanna know you better
        Know you better, know you better now
        I just wanna know you better
        Know you better, know you better now
        I just wanna know you better
        Know you better, know you better now
        I just wanna know you, know you, know you
        
        'Cause all I know is we said, "Hello"
        And your eyes look like coming home
        All I know is a simple name
        Everything has changed
        All I know is you held the door
        You'll be mine and I'll be yours
        All I know since yesterday
        Is everything has changed
        
        Come back and tell me why
        I'm feeling like I've missed you all this time
        And meet me there tonight
        And let me know that it's not all in my mind
        
        I just wanna know you better
        Know you better, know you better now
        I just wanna know you, know you, know you
        
        All I know is we said, "Hello"
        And your eyes look like coming home
        All I know is a simple name
        Everything has changed
        All I know is you held the door
        And you'll be mine and I'll be yours
        All I know since yesterday
        Is everything has changed
        
        All I know is we said, "Hello"
        So dust off your highest hopes
        All I know is pouring rain
        And everything has changed
        All I know is a new found grace
        All my days, I'll know your face
        All I know since yesterday
        Is everything has changed`
    },
    '71': {
        name: 'Starlight', 
        youtube: 'https://www.youtube.com/watch?v=lPvcwgEuKTg', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '72': {
        name: 'Begin Again', 
        youtube: 'https://www.youtube.com/watch?v=cMPEd8m79Hw', 
        album: 'Red', 
        taylorsversion: 'no',
        lyrics: `Took a deep breath in the mirror
        He didn't like it when I wore high heels, but I do
        Turn the lock and put my headphones on
        He always said he didn't get this song, but I do, I do
        
        I walked in expecting you'd be late
        But you got here early and you stand and wave
        I walk to you
        You pull my chair out and help me in
        And you don't know how nice that is, but I do
        
        And you throw your head back laughing like a little kid
        I think it's strange that you think I'm funny 'cause he never did
        I've been spending the last eight months
        Thinking all love ever does is break and burn and end
        But on a Wednesday in a café, I watched it begin again
        
        You said you never met one girl who
        Had as many James Taylor records as you, but I do
        We tell stories and you don't know why
        I'm coming off a little shy, but I do
        
        But you throw your head back laughing like a little kid
        I think it's strange that you think I'm funny 'cause he never did
        I've been spending the last eight months
        Thinking all love ever does is break and burn and end
        But on a Wednesday in a café, I watched it begin again
        
        And we walked down the block to my car
        And I almost brought him up
        But you start to talk about the movies
        That your family watches every single Christmas
        And I wanna talk about that
        And for the first time, what's past is past
        
        'Cause you throw your head back laughing like a little kid
        I think it's strange that you think I'm funny 'cause he never did
        I've been spending the last eight months
        Thinking all love ever does is break and burn and end
        But on a Wednesday in a café, I watched it begin again
        
        But on a Wednesday in a café, I watched it begin again`
    },
    '73': {
        name: 'The Moment I Knew', 
        youtube: 'https://www.youtube.com/watch?v=LmXn6BU16e0', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '74': {
        name: 'Come Back...Be Here', 
        youtube: 'https://www.youtube.com/watch?v=hHWOAUjnmjQ', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '75': {
        name: 'Girl At Home', 
        youtube: 'https://www.youtube.com/watch?v=UNckfN9upqo', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '76': {
        name: 'State Of Grace (Acoustic Version)', 
        youtube: 'https://www.youtube.com/watch?v=D3mJe28un4M', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '77': {
        name: 'Ronan', 
        youtube: 'https://www.youtube.com/watch?v=kdiBc40gW7s', 
        album: 'Red', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '78': {
        name: 'Better Man', 
        youtube: 'https://www.youtube.com/watch?v=PReSQYTFvcs', 
        album: 'Red (From The Valut)', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '79': {
        name: 'Nothing New', 
        youtube: 'https://www.youtube.com/watch?v=m3fWCRvz5JA', 
        album: 'Red (From The Valut)', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '80': {
        name: 'Babe', 
        youtube: 'https://www.youtube.com/watch?v=3pj39qZZYoQ', 
        album: 'Red (From The Valut)',
        taylorsversion: 'yes',
        lyrics: ``
    },
    '81': {
        name: 'Message In A Bottle', 
        youtube: 'https://www.youtube.com/watch?v=cVaG6adE2mA', 
        album: 'Red (From The Valut)',
        taylorsversion: 'yes',
        lyrics: ``
    },
    '82': {
        name: 'I Bet You Think About Me', 
        youtube: 'https://www.youtube.com/watch?v=5UMCrq-bBCg', 
        album: 'Red (From The Valut)',
        taylorsversion: 'yes',
        lyrics: `3 AM and I'm still awake, I'll bet you're just fine
        Fast asleep in your city that's better than mine
        And the girl in your bed has a fine pedigree
        And I'll bet your friends tell you she's better than me, huh
        
        Well, I tried to fit in with your upper-crust circles
        Yeah, they let me sit in back when we were in love
        Oh, they sit around talkin' about the meaning of life
        And the book that just saved 'em that I hadn't heard of
        
        But now that we're done and it's over
        I bet you couldn't believe
        When you realized I'm harder to forget than I was to leave
        And I bet you think about me
        
        You grew up in a silver-spoon gated community
        Glamorous, shiny, bright Beverly Hills
        I was raised on a farm, no, it wasn't a mansion
        Just livin' room dancin' and kitchen table bills
        
        But you know what they say, you can't help who you fall for
        And you and I fell like an early spring snow
        But reality crept in, you said we're too different
        You laughed at my dreams, rolled your eyes at my jokes
        
        Mr. Superior Thinkin'
        Do you have all the space that you need?
        I don't have to be your shrink to know that you'll never be happy
        And I bet you think about me
        
        I bet you think about me, yes
        I bet you think about me
        
        Oh, block it all out
        The voices so loud, sayin'
        "Why did you let her go?"
        Does it make you feel sad
        That the love that you're lookin' for
        Is the love that you had?
        
        Now you're out in the world, searchin' for your soul
        Scared not to be hip, scared to get old
        Chasing make-believe status, last time you felt free
        Was when none of that shit mattered 'cause you were with me
        
        But now that we're done and it's over
        I bet it's hard to believe
        That it turned out I'm harder to forget than I was to leave
        And, yeah, I bet you think about me
        
        I bet you think about me, yes
        I bet you think about me
        
        I bet you think about me when you're out
        At your cool indie music concerts every week
        I bet you think about me in your house
        With your organic shoes and your million-dollar couch
        I bet you think about me when you say
        "Oh my god, she's insane, she wrote a song about me"
        I bet you think about me`
    },
    '83': {
        name: 'Forever Winter', 
        youtube: 'https://www.youtube.com/watch?v=TkAomsYFsJw', 
        album: 'Red (From The Valut)',
        taylorsversion: 'yes',
        lyrics: ``
    },
    '84': {
        name: 'Run', 
        youtube: 'https://www.youtube.com/watch?v=flv8AEWrRMI', 
        album: 'Red (From The Valut)',
        taylorsversion: 'yes',
        lyrics: ``
    },
    '85': {
        name: 'The Very First Night', 
        youtube: 'https://www.youtube.com/watch?v=rVuyi-dPMIc', 
        album: 'Red (From The Valut)',
        taylorsversion: 'yes',
        lyrics: ``
    },
    '86': {
        name: 'All Too Well (10 Minute Version)', 
        youtube: 'https://www.youtube.com/watch?v=tollGa3S0o8', 
        album: 'Red (From The Valut)', 
        taylorsversion: 'yes',
        lyrics: `I walked through the door with you, the air was cold
        But something 'bout it felt like home somehow
        And I left my scarf there at your sister's house
        And you've still got it in your drawer, even now
        Oh, your sweet disposition and my wide-eyed gaze
        We're singing in the car, getting lost upstate
        Autumn leaves falling down like pieces into place
        And I can picture it after all these days
        
        And I know it's long gone and
        That magic's not here no more
        And I might be okay, but I'm not fine at all
        Oh, oh, oh
        
        'Cause there we are again on that little town street
        You almost ran the red 'cause you were lookin' over at me
        Wind in my hair, I was there
        I remember it all too well
        
        Photo album on the counter, your cheeks were turning red
        You used to be a little kid with glasses in a twin-sized bed
        And your mother's telling stories 'bout you on the tee-ball team
        You taught me 'bout your past, thinking your future was me
        And you were tossing me the car keys, "fuck the patriarchy"
        Key chain on the ground, we were always skipping town
        And I was thinking on the drive down, any time now
        He's gonna say it's love, you never called it what it was
        'Til we were dead and gone and buried
        Check the pulse and come back swearing it's the same
        After three months in the grave
        And then you wondered where it went to as I reached for you
        But all I felt was shame and you held my lifeless frame
        
        And I know it's long gone and
        There was nothing else I could do
        And I forget about you long enough
        To forget why I needed to
        
        'Cause there we are again in the middle of the night
        We're dancing 'round the kitchen in the refrigerator light
        Down the stairs, I was there
        I remember it all too well
        And there we are again when nobody had to know
        You kept me like a secret, but I kept you like an oath
        Sacred prayer and we'd swear
        To remember it all too well, yeah
        
        Well, maybe we got lost in translation
        Maybe I asked for too much
        But maybe this thing was a masterpiece
        'Til you tore it all up
        Running scared, I was there
        I remember it all too well
        And you call me up again just to break me like a promise
        So casually cruel in the name of being honest
        I'm a crumpled up piece of paper lying here
        'Cause I remember it all, all, all
        
        They say all's well that ends well, but I'm in a new Hell
        Every time you double-cross my mind
        You said if we had been closer in age maybe it would have been fine
        And that made me want to die
        The idea you had of me, who was she?
        A never-needy, ever-lovely jewel whose shine reflects on you
        Not weeping in a party bathroom
        Some actress asking me what happened, you
        That's what happened, you
        You who charmed my dad with self-effacing jokes
        Sipping coffee like you're on a late-night show
        But then he watched me watch the front door all night, willing you to come
        And he said, "It's supposed to be fun turning twenty-one"
        
        Time won't fly, it's like I'm paralyzed by it
        I'd like to be my old self again, but I'm still trying to find it
        After plaid shirt days and nights when you made me your own
        Now you mail back my things and I walk home alone
        But you keep my old scarf from that very first week
        'Cause it reminds you of innocence and it smells like me
        You can't get rid of it
        'Cause you remember it all too well, yeah
        'Cause there we are again when I loved you so
        Back before you lost the one real thing you've ever known
        
        It was rare, I was there
        I remember it all too well
        Wind in my hair, you were there
        You remember it all
        Down the stairs, you were there
        You remember it all
        It was rare, I was there
        I remember it all too well
        
        And I was never good at telling jokes, but the punch line goes
        "I'll get older, but your lovers stay my age"
        From when your Brooklyn broke my skin and bones
        I'm a soldier who's returning half her weight
        And did the twin flame bruise paint you blue?
        Just between us, did the love affair maim you, too?
        'Cause in this city's barren cold
        I still remember the first fall of snow
        And how it glistened as it fell
        I remember it all too well
        
        Just between us, did the love affair maim you all too well?
        Just between us, do you remember it all too well?
        Just between us, I remember it (Just between us), all too well
        Wind in my hair, I was there, I was there
        Down the stairs, I was there, I was there
        Sacred prayer, I was there, I was there
        It was rare, you remember it all too well
        Wind in my hair, I was there, I was there
        Down the stairs, I was there, I was there
        Sacred prayer, I was there, I was there
        It was rare, you remember it
        Wind in my hair, I was there, I was there
        Down the stairs, I was there, I was there
        Sacred prayer, I was there, I was there
        It was rare, you remember it
        Wind in my hair, I was there, I was there
        Down the stairs, I was there, I was there
        Sacred prayer, I was there, I was there
        It was rare, you remember it`
    },
    '87': {
        name: 'Welcome To New York', 
        youtube: 'https://www.youtube.com/watch?v=L0N3C6DsisQ', 
        album: '1989', 
        taylorsversion: 'no',
        lyrics: `Walking through a crowd
        The village is aglow
        Kaleidoscope of loud
        Heartbeats under coats
        Everybody here
        Wanted something more
        Searching for a sound we hadn't
        Heard before
        And it said
        
        Welcome to New York
        It's been waiting for you
        Welcome to New York
        Welcome to New York
        Welcome to New York
        It's been waiting for you
        Welcome to New York
        Welcome to New York
        
        It's a new soundtrack
        I could dance to this beat, beat
        Forevermore
        The lights are so bright
        But they never blind me, me
        Welcome to New York
        It's been waiting for you
        Welcome to New York
        Welcome to New York
        
        When we first dropped our bags on
        Apartment floors
        Took our broken hearts
        Put them in a drawer
        Everybody here was someone else
        Before
        And you can want who you want
        Boys and boys and
        Girls and girls
        
        Welcome to New York
        It's been waiting for you
        Welcome to New York
        Welcome to New York
        Welcome to New York
        It's been waiting for you
        Welcome to New York
        Welcome to New York
        
        It's a new soundtrack
        I could dance to this beat, beat
        Forevermore
        The lights are so bright
        But they never blind me, me
        Welcome to New York (New York)
        It's been waiting for you
        Welcome to New York
        Welcome to New York
        
        Like any great love it keeps you
        Guessing
        Like any real love
        It's ever-changing
        Like any true love
        
        It drives you crazy
        But you know you wouldn't
        Change anything anything
        Anything
        
        Welcome to New York
        It's been waiting for you
        Welcome to New York
        Welcome to New York
        Welcome to New York
        It's been waiting for you
        Welcome to New York
        Welcome to New York
        
        It's a new soundtrack
        I could dance to this beat
        The lights are so bright
        But they never blind me
        Welcome to New York
        New soundtrack
        It's been waiting for you
        Welcome to New York
        The lights are so bright
        But they never blind me
        Welcome to New York
        So bright
        They never blind me
        Welcome to New York
        Welcome to New York`
    },
    '88': {
        name: 'Blank Space', 
        youtube: 'https://www.youtube.com/watch?v=e-ORhEE9VVg', 
        album: '1989', 
        taylorsversion: 'no',
        lyrics: `Nice to meet you, where you been?
        I could show you incredible things
        Magic, madness, heaven, sin
        Saw you there, and I thought
        "Oh my God, look at that face
        You look like my next mistake
        Love's a game, wanna play?"
        Ayy
        
        New money, suit and tie
        I can read you like a magazine
        Ain't it funny? Rumors fly
        And I know you heard about me
        So hey, let's be friends
        I'm dying to see how this one ends
        Grab your passport and my hand
        I can make the bad guys good for a weekend
        
        So it's gonna be forever
        Or it's gonna go down in flames
        You can tell me when it's over, mm
        If the high was worth the pain
        Got a long list of ex-lovers
        They'll tell you I'm insane
        'Cause you know I love the players
        And you love the game
        
        'Cause we're young and we're reckless
        We'll take this way too far
        It'll leave you breathless, hmm
        Or with a nasty scar
        Got a long list of ex-lovers
        They'll tell you I'm insane
        But I've got a blank space, baby
        And I'll write your name
        
        Cherry lips, crystal skies
        I could show you incredible things
        Stolen kisses, pretty lies
        You're the King, baby, I'm your Queen
        Find out what you want
        Be that girl for a month
        Wait, the worst is yet to come, oh no
        
        Screaming, crying, perfect storms
        I can make all the tables turn
        Rose garden filled with thorns
        Keep you second guessing like
        "Oh my God, who is she?"
        I get drunk on jealousy
        But you'll come back each time you leave
        'Cause, darling, I'm a nightmare dressed like a daydream
        
        So it's gonna be forever
        Or it's gonna go down in flames
        You can tell me when it's over, mm
        If the high was worth the pain
        Got a long list of ex-lovers
        They'll tell you I'm insane
        'Cause you know I love the players
        And you love the game
        
        'Cause we're young and we're reckless
        We'll take this way too far
        It'll leave you breathless, hmm
        Or with a nasty scar
        Got a long list of ex-lovers
        They'll tell you I'm insane
        But I've got a blank space, baby
        And I'll write your name
        
        Boys only want love if it's torture
        Don't say I didn't, say I didn't warn ya
        Boys only want love if it's torture
        Don't say I didn't say, I didn't warn ya
        
        So it's gonna be forever
        Or it's gonna go down in flames
        You can tell me when it's over, mm
        If the high was worth the pain
        Got a long list of ex-lovers
        They'll tell you I'm insane
        'Cause you know I love the players
        And you love the game
        
        'Cause we're young and we're reckless
        We'll take this way too far
        It'll leave you breathless, hmm
        Or with a nasty scar
        Got a long list of ex-lovers
        They'll tell you I'm insane
        But I've got a blank space, baby
        And I'll write your name`
    },
    '89': {
        name: 'Style', 
        youtube: 'https://www.youtube.com/watch?v=-CmadmM5cOk', 
        album: '1989', 
        taylorsversion: 'no',
        lyrics: `Midnight
        You come and pick me up, no headlights
        Long drive
        Could end in burning flames or paradise
        Fade into view, oh, it's been a while since I have even heard from you (heard from you)
        
        I should just tell you to leave 'cause I
        Know exactly where it leads but I
        Watch us go 'round and 'round each time
        
        You got that James Dean daydream look in your eye
        And I got that red lip classic thing that you like
        And when we go crashing down, we come back every time
        'Cause we never go out of style
        We never go out of style
        
        You got that long hair, slicked back, white t-shirt
        And I got that good girl faith and a tight little skirt
        And when we go crashing down, we come back every time
        'Cause we never go out of style
        We never go out of style
        
        So it goes
        He can't keep his wild eyes on the road
        Takes me home
        Lights are off, he's taking off his coat, hmm, yeah
        I say, "I heard, oh, that you've been out and about with some other girl, some other girl."
        
        He says, "What you've heard is true but I
        Can't stop thinking about you," and I
        I said, "I've been there, too, a few times."
        
        'Cause you got that James Dean daydream look in your eye
        And I got that red lip classic thing that you like
        And when we go crashing down, we come back every time
        'Cause we never go out of style
        We never go out of style
        
        You got that long hair, slicked back, white t-shirt
        And I got that good girl faith and a tight little skirt (tight little skirt)
        And when we go crashing down, we come back every time
        'Cause we never go out of style (We never go, we never go)
        We never go out of style
        
        Take me home
        Just take me home, yeah
        Just take me home
        (Out of style)
        
        You got that James Dean daydream look in your eye
        And I got that red lip classic thing that you like
        And when we go crashing down (And when we go)
        'Cause we never go out of style
        We never go out of style`
    },
    '90': {
        name: 'Out Of The Woods', 
        youtube: 'https://www.youtube.com/watch?v=JLf9q36UsBk', 
        album: '1989', 
        taylorsversion: 'no',
        lyrics: `Looking at it now
        It all seems so simple
        We were lying on your couch
        I remember
        You took a Polaroid of us
        Then discovered (then discovered)
        The rest of the world was black and white
        But we were in screaming color
        And I remember thinking
        
        Are we out of the woods yet?
        Are we out of the woods yet?
        Are we out of the woods yet?
        Are we out of the woods?
        Are we in the clear yet?
        Are we in the clear yet?
        Are we in the clear yet?
        In the clear yet? Good
        Are we out of the woods yet?
        Are we out of the woods yet?
        Are we out of the woods yet?
        Are we out of the woods?
        Are we in the clear yet?
        Are we in the clear yet?
        Are we in the clear yet?
        In the clear yet? Good
        Are we out of the woods?
        
        Looking at it now
        Last December (last December)
        We were built to fall apart
        Then fall back together (back together)
        Ooh, your necklace hanging from my neck
        The night we couldn't quite forget
        When we decided (we decided)
        To move the furniture so we could dance
        Baby, like we stood a chance
        Two paper airplanes flying, flying, flying
        And I remember thinkin'
        
        Are we out of the woods yet?
        Are we out of the woods yet?
        Are we out of the woods yet?
        Are we out of the woods?
        Are we in the clear yet?
        Are we in the clear yet?
        Are we in the clear yet?
        In the clear yet? Good
        Are we out of the woods yet?
        Are we out of the woods yet?
        Are we out of the woods yet?
        Oh
        Are we out of the woods?
        Are we in the clear yet?
        Are we in the clear yet?
        Are we in the clear yet?
        In the clear yet? Good
        Are we out of the woods?
        
        Remember when you hit the brakes too soon?
        Twenty stitches in a hospital room
        When you started cryin', baby, I did, too
        But when the sun came up, I was lookin' at you
        Remember when we couldn't take the heat
        I walked out and said, "I'm settin' you free,"
        But the monsters turned out to be just trees
        When the sun came up, you were lookin' at me
        
        You were lookin' at me
        You were lookin' at me
        
        Are we out of the woods yet?
        Are we out of the woods yet?
        Are we out of the woods yet?
        Are we out of the woods?
        I remember
        Are we in the clear yet?
        Are we in the clear yet?
        Are we in the clear yet?
        In the clear yet? Good
        Oh, I remember
        
        Are we out of the woods yet?
        Are we out of the woods yet?
        (Yeah)
        Are we out of the woods yet?
        Are we out of the woods?
        Are we in the clear yet?
        Are we in the clear yet?
        Are we?
        Are we in the clear yet?
        In the clear yet? Good
        
        Are we out of the woods yet?
        Are we out of the woods yet?
        Are we out of the woods yet?
        Are we out of the woods?
        
        Are we in the clear yet?
        (Yeah)
        Are we in the clear yet?
        (Yeah)
        Are we in the clear yet?
        In the clear yet? Good
        
        Are we out of the woods yet?
        Are we out of the woods yet?
        Are we out of the woods yet?
        Are we out of the woods?
        
        Are we in the clear yet?
        Are we in the clear yet?
        Are we in the clear yet?
        In the clear yet? Good
        Are we out of the woods yet?
        Are we out of the woods yet?
        Are we out of the woods yet?
        Are we out of the woods?
        Are we in the clear yet?
        Are we in the clear yet?
        Are we in the clear yet?
        In the clear yet? Good`
    },
    '91': {
        name: 'Wonderland', 
        youtube: 'https://www.youtube.com/watch?v=Oq4nEzEiegA', 
        album: '1989 (Deluxe Edition)', 
        taylorsversion: 'no',
        lyrics: `Flashing lights and we
        Took a wrong turn and we
        Fell down a rabbit hole
        
        You held on tight to me
        'Cause nothing's as it seems
        And spinning out of control
        
        Didn't they tell us don't rush into things?
        Didn't you flash your green eyes at me?
        Haven't you heard what becomes of curious minds?
        
        Oh
        
        Didn't it all seem new and exciting?
        I felt your arms twisting around me
        I should have slept with one eye open at night
        
        We found wonderland
        You and I got lost in it
        And we pretended it could last forever
        Eh
        We found wonderland
        You and I got lost in it
        And life was never worse but never better
        Eh eh
        
        Eh eh eh eh eh
        In wonderland
        Eh eh eh eh eh
        In wonderland
        Eh eh eh eh eh
        In wonderland
        Eh eh eh eh eh
        In wonderland
        
        So we went on our way
        Too in love to think straight
        All alone or so it seemed
        
        But there were strangers watching
        And whispers turned to talking
        And talking turned to screams
        
        Oh
        
        Didn't they tell us don't rush into things?
        Didn't you flash your green eyes at me?
        Didn't you calm my fears with a Cheshire cat smile?
        
        Oh
        
        Didn't it all seem new and exciting?
        I felt your arms twisting around me
        It's all fun and games 'til somebody loses their mind
        
        But darling, we found wonderland
        You and I got lost in it
        And we pretended it could last forever
        Eh
        We found wonderland
        You and I got lost in it
        And life was never worse but never better
        Eh eh
        
        Eh eh eh eh eh
        In wonderland
        Eh eh eh eh eh
        In wonderland
        Eh eh eh eh eh
        In wonderland
        Eh eh eh eh eh
        In wonderland
        
        I reached for you but you were gone
        I knew I had to go back home
        You searched the world for something else to make you feel like what we had
        And in the end in wonderland we both went mad
        
        Oh
        
        We found wonderland
        You and I got lost in it
        And we pretended it could last forever (last forever)
        Eh eh
        We found wonderland
        You and I got lost in it (got lost in it)
        And life was never worse but never better (never better)
        Eh eh
        
        We found wonderland
        You and I got lost in it (wonderland)
        And we pretended it could last forever (in wonderland)
        
        We found wonderland
        You and I got lost in it (wonderland)
        And life was never worse but never better
        In wonderland`
    },
    '92': {
        name: 'All You Had To Do Was Stay', 
        youtube: 'https://www.youtube.com/watch?v=MHFrXHQpHSQ', 
        album: '1989', 
        taylorsversion: 'no',
        lyrics: `(Hey, hey, hey)
        (Hey, hey, hey)
        (Hey, hey, hey)
        (Hey, hey, hey)
        
        People like you always want back the love they gave away
        And people like me wanna believe you when you say you've changed
        The more I think about it now the less I know
        All I know is that you drove us off the road
        
        Stay
        Hey, all you had to do was stay
        Had me in the palm of your hand
        Then why'd you have to go and lock me out when I let you in?
        Stay
        Hey, now you say you want it back
        Now that it's just too late
        Well, could've been easy
        All you had to do was stay
        
        All you had to do was stay
        All you had to do was stay
        All you had to do was stay
        All you had to do was stay
        
        Here you are now, calling me up, but I don't know what to say
        I've been picking up the pieces of the mess you made
        People like you always want back the love they pushed aside
        But people like me are gone forever when you say goodbye
        
        Stay
        Hey, all you had to do was stay
        Had me in the palm of your hand
        Then why'd you have to go and lock me out when I let you in?
        Stay
        Hey, now you say you want it back
        Now that it's just too late
        Well, could've been easy
        All you had to do was stay
        
        All you had to do was stay
        All you had to do was stay
        All you had to do was stay, stay, stay, stay, stay
        
        Let me remind you
        This was what you wanted
        You ended it
        You were all I wanted
        But not like this
        Not like this
        Not like this
        
        Oh, all you had to do was...
        
        Stay
        Hey, all you had to do was stay
        Had me in the palm of your hand
        Then why'd you have to go and lock me out when I let you in?
        Stay
        Hey, now you say you want it back
        Now that it's just too late
        Well, could've been easy
        All you had to do was stay
        
        Hey, all you had to do was stay
        Had me in the palm of your hand
        Then why'd you have to go and lock me out when I let you in?
        Stay
        Hey, now you say you want it back
        Now that it's just too late
        Well, could've been easy
        (All you had to do was stay)
        All you had to do was stay
        
        All you had to do was stay
        All you had to do was stay
        All you had to do was stay
        All you had to do was stay`
    },
    '93': {
        name: 'Shake It Off', 
        youtube: 'https://www.youtube.com/watch?v=nfWlot6h_JM', 
        album: '1989', 
        taylorsversion: 'no',
        lyrics: `I stay out too late
        Got nothing in my brain
        That's what people say, mmm-mmm
        That's what people say, mmm-mmm
        
        I go on too many dates
        But I can't make them stay
        At least that's what people say, mmm-mmm
        That's what people say, mmm-mmm
        
        But I keep cruising
        Can't stop, won't stop moving
        It's like I got this music
        In my mind
        Saying, "It's gonna be alright."
        
        'Cause the players gonna play, play, play, play, play
        And the haters gonna hate, hate, hate, hate, hate
        Baby, I'm just gonna shake, shake, shake, shake, shake
        I shake it off, I shake it off
        Heart-breakers gonna break, break, break, break, break
        And the fakers gonna fake, fake, fake, fake, fake
        Baby, I'm just gonna shake, shake, shake, shake, shake
        I shake it off, I shake it off
        
        I never miss a beat
        I'm lightning on my feet
        And that's what they don't see, mmm-mmm
        That's what they don't see, mmm-mmm
        
        I'm dancing on my own (dancing on my own)
        I make the moves up as I go (moves up as I go)
        And that's what they don't know, mmm-mmm
        That's what they don't know, mmm-mmm
        
        But I keep cruising
        Can't stop, won't stop grooving
        It's like I got this music
        In my mind
        Saying, "It's gonna be alright."
        
        'Cause the players gonna play, play, play, play, play
        And the haters gonna hate, hate, hate, hate, hate
        Baby, I'm just gonna shake, shake, shake, shake, shake
        I shake it off, I shake it off
        Heart-breakers gonna break, break, break, break, break
        And the fakers gonna fake, fake, fake, fake, fake
        Baby, I'm just gonna shake, shake, shake, shake, shake
        I shake it off, I shake it off
        
        Shake it off, I shake it off,
        I, I, I shake it off, I shake it off,
        I, I, I shake it off, I shake it off,
        I, I, I shake it off, I shake it off
        
        Hey, hey, hey
        Just think while you've been getting down and out about the liars and the dirty, dirty cheats of the world,
        You could've been getting down to this sick beat.
        
        My ex-man brought his new girlfriend
        She's like "Oh, my God!" but I'm just gonna shake.
        And to the fella over there with the hella good hair
        Won't you come on over, baby? We can shake, shake, shake
        
        Yeah ohhh
        
        'Cause the players gonna play, play, play, play, play
        And the haters gonna hate, hate, hate, hate, hate (haters gonna hate)
        I'm just gonna shake, shake, shake, shake, shake
        I shake it off, I shake it off
        Heart-breakers gonna break, break, break, break, break (mmmm)
        And the fakers gonna fake, fake, fake, fake, fake (and fake, and fake, and fake)
        Baby, I'm just gonna shake, shake, shake, shake, shake
        I shake it off, I shake it off
        
        Shake it off, I shake it off,
        I, I, I shake it off, I shake it off,
        I, I, I shake it off, I shake it off
        I, I, I shake it off, I shake it off
        
        Shake it off, I shake it off,
        I, I, I shake it off, I shake it off,
        I, I, I shake it off, I shake it off,
        I, I, I shake it off, I shake it off
        
        Shake it off, I shake it off,
        I, I, I shake it off, I shake it off (you've got to),
        I, I, I shake it off, I shake it off,
        I, I, I shake it off, I shake it off`
    },
    '94': {
        name: 'I Wish You Would', 
        youtube: 'https://www.youtube.com/watch?v=5COhv5NabUI', 
        album: '1989', 
        taylorsversion: 'no',
        lyrics: `It's 2 AM in your car
        Windows down, you pass my street, the memories start
        You say it's in the past, you drive straight ahead
        You're thinking that I hate you now
        'Cause you still don't know what I never said
        
        I wish you would come back
        Wish I never hung up the phone like I did
        I wish you knew that I'd never forget you as long as I live
        And I wish you were right here, right now, it's all good
        I wish you would
        
        It's 2 AM in my room
        Headlights pass the window pane, I think of you
        We're a crooked love in a straight line down
        Makes you wanna run and hide
        But it makes you turn right back around
        
        I wish you would come back
        Wish I never hung up the phone like I did
        I wish you knew that I'd never forget you as long as I live
        And I wish you were right here, right now, it's all good
        I wish you would
        
        I wish we could go back
        And remember what we were fighting for
        And I wish you knew that I miss you too much to be mad anymore
        And I wish you were right here, right now, it's all good
        I wish you would
        
        I, I, I, I, I, I wish, I wish
        I, I, I, I, I, I wish, I wish
        I, I, I, I, I, I wish, I wish
        
        You always knew how to push my buttons
        You give me everything and nothing
        This mad mad love makes you come running
        To stand back where you stood
        I wish you would, I wish you would
        (I wish you would, I wish you would)
        I wish you would, I wish you would
        (I wish you would, I wish you would)
        
        (I wish I, wish I)
        
        2 AM, here we are
        See your face, hear my voice in the dark
        We're a crooked love in a straight line down
        Makes you wanna run and hide
        But it made us turn right back around
        
        I wish you would come back
        Wish I never hung up the phone like I did
        I wish you knew that I'd never forget you as long as I live
        I wish you were right here, right now, it's all good
        I wish you would
        
        I wish you would come back
        Wish I never hung up the phone like I did
        I wish you knew that I'd never forget you as long as I live
        I wish you were right here, right now, it's all good
        I wish you would
        
        I wish we could go back
        And remember what we were fighting for
        I wish you knew that I miss you too much to be mad anymore
        I wish you were right here, right now, it's all good
        I wish you would
        
        You always knew how to push my buttons
        You give me everything and nothing
        This mad mad love makes you come running
        To stand back where you stood
        I wish you would, I wish you would
        (I wish you would, I wish you would)
        I wish you would, I wish you would
        (I wish you would, I wish you would)
        
        I, I, I, I, I, I wish, I wish
        I, I, I, I, I, I wish, I wish
        I, I, I, I, I, I wish, I wish you would`
    },
    '95': {
        name: 'Bad Blood', 
        youtube: 'https://www.youtube.com/watch?v=QcIy9NiNbmo', 
        album: '1989', 
        taylorsversion: 'no',
        lyrics: `'Cause, baby, now we got bad blood
        You know it used to be mad love
        So take a look what you've done
        'Cause, baby, now we got bad blood
        Hey
        Now we got problems
        And I don't think we can solve them
        You made a really deep cut
        And, baby, now we got bad blood
        Hey
        
        Did you have to do this? I was thinking that you could be trusted
        Did you have to ruin what was shiny? Now it's all rusted
        Did you have to hit me where I'm weak? Baby, I couldn't breathe
        And rub it in so deep, salt in the wound like you're laughing right at me
        
        Oh, it's so sad to think about the good times, you and I
        
        'Cause, baby, now we got bad blood
        You know it used to be mad love
        So take a look what you've done
        'Cause, baby, now we got bad blood
        Hey
        Now we got problems
        And I don't think we can solve them
        You made a really deep cut
        And, baby, now we got bad blood
        Hey
        
        Did you think we'd be fine? Still got scars on my back from your knife
        So don't think it's in the past, these kinda wounds they last and they last
        Now did you think it all through? All these things will catch up to you
        And time can heal but this won't, so if you're coming my way, just don't
        
        Oh, it's so sad to think about the good times, you and I
        
        'Cause, baby, now we got bad blood
        You know it used to be mad love
        So take a look what you've done
        'Cause, baby, now we got bad blood
        Hey
        Now we got problems
        And I don't think we can solve them
        You made a really deep cut
        And, baby, now we got bad blood
        Hey
        
        Band-aids don't fix bullet holes
        You say sorry just for show
        If you live like that, you live with ghosts (ghosts)
        Band-aids don't fix bullet holes (hey)
        You say sorry just for show (hey)
        If you live like that, you live with ghosts (hey)
        Mhmmm
        If you love like that blood runs cold
        
        'Cause, baby, now we got bad blood
        You know it used to be mad love (mad love)
        So take a look what you've done
        'Cause, baby, now we got bad blood
        Hey
        Now we got problems
        And I don't think we can solve them (think we can solve them)
        You made a really deep cut
        And, baby, now we got bad blood
        (Hey)
        
        'Cause, baby, now we got bad blood
        You know it used to be mad love
        So take a look what you've done (look what you've done)
        'Cause, baby, now we got bad blood
        Hey
        Now we got problems
        And I don't think we can solve them
        You made a really deep cut
        And, baby, now we got bad blood
        Hey`
    },
    '96': {
        name: 'Wildest Dream', 
        youtube: 'https://www.youtube.com/watch?v=IdneKLhsWOQ', 
        album: '1989', 
        taylorsversion: 'no',
        lyrics: `He said, "Let's get out of this town
        Drive out of this city, away from the crowds"
        I thought, "Heaven can't help me now"
        Nothing lasts forever
        But this is gonna take me down
        
        He's so tall and handsome as hell
        He's so bad, but he does it so well
        I can see the end as it begins
        My one condition is
        
        Say you'll remember me
        Standin' in a nice dress
        Starin' at the sunset, babe
        Red lips and rosy cheeks
        Say you'll see me again
        Even if it's just in your
        Wildest dreams, ah, ha
        Wildest dreams, ah, ha
        
        I said, "No one has to know what we do"
        His hands are in my hair, his clothes are in my room
        And his voice is a familiar sound
        Nothin' lasts forever
        But this is gettin' good now
        
        He's so tall and handsome as hell
        He's so bad, but he does it so well
        And when we've had our very last kiss
        My last request is
        
        Say you'll remember me
        Standin' in a nice dress
        Starin' at the sunset, babe
        Red lips and rosy cheeks
        Say you'll see me again
        Even if it's just in your
        Wildest dreams, ah, ha (Ha, ha)
        Wildest dreams, ah, ha
        
        You'll see me in hindsight
        Tangled up with you all night
        Burnin' it down
        Someday, when you leave me
        I bet these memories
        Follow you around
        You'll see me in hindsight
        Tangled up with you all night
        Burnin' (Burnin') it (It) down (Down)
        Someday, when you leave me
        I bet these memories
        Follow (Follow) you (You) around
        (Follow you around)
        
        Say you'll remember me
        Standing in a nice dress
        Starin' at the sunset, babe
        Red lips and rosy cheeks
        Say you'll see me again
        Even if it's just pretend
        
        Say you'll remember me
        Standin' in a nice dress
        Starin' at the sunset, babe
        Red lips and rosy cheeks
        Say you'll see me again
        Even if it's just in your (Just pretend, just pretend)
        Wildest dreams, ah, ha (Ah)
        In your wildest dreams, ah, ha
        Even if it's just in your
        In your wildest dreams, ah, ha
        In your wildest dreams, ah, ha`
    },
    '97': {
        name: 'How You Get The Girl', 
        youtube: 'https://www.youtube.com/watch?v=KjwTwvtwFlE', 
        album: '1989', 
        taylorsversion: 'no',
        lyrics: `Oh, oh, oh
        Oh, oh, oh
        Oh-oh, oh-oh
        
        Stand there like a ghost
        Shaking from the rain, rain
        She'll open up the door and say, "Are you insane?"
        Say it's been a long six months
        And you were too afraid to tell her what you want, want
        
        And that's how it works
        That's how you get the girl
        And then, you say
        
        I want you for worse or for better
        I would wait forever and ever
        Broke your heart, I'll put it back together
        I would wait forever and ever
        And that's how it works
        That's how you get the girl, girl (Oh-oh, oh)
        And that's how it works
        That's how you get the girl, girl
        
        Remind her how it used to be, be, yeah-yeah
        With pictures in frames of kisses on cheeks, cheeks
        Tell her how you must have lost your mind, ooh-ooh
        When you left her all alone
        And never told her why, why
        
        And that's how it works
        That's how you lost the girl
        And now, you say
        
        I want you for worse or for better
        I would wait forever and ever (Ever and ever)
        Broke your heart, I'll put it back together
        I would wait forever and ever
        And that's how it works
        That's how you get the girl, girl (Oh-oh, oh-oh)
        And that's how it works
        That's how you get the girl, girl
        Yeah, yeah
        
        And you know
        Oh, oh, oh, oh, oh, oh, oh, oh, oh, oh
        That I don't want you to go, oh, oh
        
        Remind me how it used to be
        Pictures in frames of kisses on cheeks
        And say you want me, yeah-yeah
        And then you say
        
        'Cause I want you for worse or for better (Worse or for better)
        I would wait forever and ever (Ever and ever)
        Broke your heart, I'll put it back together
        I would wait forever and ever (I want you forever and ever)
        And that's how it works
        That's how you get the girl, girl (This is how it works)
        And that's how it works
        That's how you get the girl, girl (Get the girl)
        (That's how it works)
        And that's how it works
        That's how you get the girl, girl
        (Oh, oh, oh, oh, oh, oh, oh, oh, oh, oh)
        And that's how it works
        That's how you get the girl, girl
        (Oh, oh, oh, oh, oh, oh, oh, oh, oh, oh)
        
        That's how it works
        That's how you got the girl
        `
    },
    '98': {
        name: 'This Love', 
        youtube: 'https://www.youtube.com/watch?v=mvxQYPR4lmU', 
        album: '1989', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '99': {
        name: 'I Know Places', 
        youtube: 'https://www.youtube.com/watch?v=Rupz8tuap8I', 
        album: '1989', 
        taylorsversion: 'no',
        lyrics: `(I, I, I, I I, I, I, I I, I, I, I, I, I, I, I)

        You stand with your hand on my waistline
        It's a scene and we're out here in plain sight
        I can hear them whisper as we pass by
        It's a bad sign, bad sign
        Something happens when everybody finds out
        See the vultures circling dark clouds
        Love's a fragile little flame, it could burn out
        It could burn out
        
        'Cause they got the cages, they got the boxes
        And guns
        They are the hunters, we are the foxes
        And we run
        
        Baby, I know places we won't be found
        And they'll be chasing their tails tryin' to track us down
        'Cause I, I know places we can hide
        I know places, I know places
        
        Lights flash and we'll run for the fences
        Let them say what they want, we won't hear it
        Loose lips sink ships all the damn time
        Not this time
        
        Just grab my hand and don't ever drop it
        My love
        They are the hunters, we are the foxes
        And we run
        
        Baby, I know places we won't be found
        And they'll be chasing their tails tryin' to track us down
        'Cause I, I know places we can hide
        I know places
        
        They are the hunters, we are the foxes
        And we run
        Just grab my hand and don't ever drop it
        My love
        
        Baby, I know places we won't be found
        And they'll be chasing their tails tryin' to track us down
        'Cause I, I know places we can hide
        I know places
        
        They take their shots, but we're bulletproof
        I know places
        And you know for me, it's always you
        I know places
        In the dead of night, your eyes so green
        I know places
        And I know for you, it's always me
        I know places
        
        (I, I, I, I I, I, I, I I, I, I, I, I, I, I, I)
        `
    },
    '100': {
        name: 'Clean', 
        youtube: 'https://www.youtube.com/watch?v=IGmMW7JTvuw', 
        album: '1989', 
        taylorsversion: 'no',
        lyrics: `The drought was the very worst (Oh-oh, oh-oh)
        When the flowers that we'd grown together died of thirst
        It was months and months of back and forth (Oh-oh, oh-oh)
        You're still all over me
        Like a wine-stained dress I can't wear anymore
        
        Hung my head as I lost the war
        And the sky turned black like a perfect storm
        
        Rain came pouring down
        When I was drowning, that's when I could finally breathe
        And by morning
        Gone was any trace of you, I think I am finally clean
        (Oh, oh, oh, oh)
        
        There was nothing left to do (Oh-oh, oh-oh)
        When the butterflies turned to
        Dust that covered my whole room
        So I punched a hole in the roof (Oh-oh, oh-oh)
        Let the flood carry away all my pictures of you
        
        The water filled my lungs, I screamed so loud
        But no one heard a thing
        
        Rain came pouring down
        When I was drowning, that's when I could finally breathe
        And by morning
        Gone was any trace of you, I think I am finally clean
        (Oh, oh, oh, oh)
        I think I am finally clean
        (Oh, oh)
        Oh, oh, oh, oh, oh-oh
        Said, I think I am finally clean
        (Oh, oh)
        Oh, oh, oh, oh, oh-oh
        
        Ten months sober, I must admit
        Just because you're clean, don't mean you don't miss it
        Ten months older, I won't give in
        Now that I'm clean, I'm never gonna risk it
        
        The drought was the very worst (Oh-oh, oh-oh)
        When the flowers that we'd grown together died of thirst
        (Oh)
        
        The rain came pouring down
        When I was drowning, that's when I could finally breathe
        And by morning
        Gone was any trace of you, I think I am finally clean
        Rain came pouring down
        When I was drowning, that's when I could finally breathe
        And by morning
        Gone was any trace of you, I think I am finally clean
        
        (Oh, oh)
        Finally clean
        Think I'm finally clean
        (Oh, oh)
        Oh-oh, oh-oh
        (Oh, oh, oh)
        Think I'm finally clean`
    },
    '101': {
        name: 'You Are In Love', 
        youtube: 'https://www.youtube.com/watch?v=EwMZ_BYoCpI', 
        album: '1989 (Deluxe Version)', 
        taylorsversion: 'no',
        lyrics: `One look, dark room
        Meant just for you
        Time moved too fast
        You play it back
        Buttons on a coat
        Lighthearted joke
        No proof, not much
        But you saw enough
        Small talk, he drives
        Coffee at midnight
        The light reflects
        The chain on your neck
        He says, "Look up."
        And your shoulders brush
        No proof, one touch
        But you felt enough
        
        You can hear it in the silence (silence), silence (silence) you
        You can feel it on the way home (way home), way home (way home) you
        You can see it with the lights out (lights out), lights out (lights out)
        You are in love, true love
        You are in love
        
        Morning, his place
        Burnt toast, Sunday
        You keep his shirt
        He keeps his word
        And for once you let go
        Of your fears and your ghosts
        One step, not much
        But it said enough
        You kiss on sidewalks
        You fight then you talk
        One night he wakes
        Strange look on his face
        Pauses, then says
        "You're my best friend."
        And you knew what it was
        He is in love
        
        You can hear it in the silence (silence), silence (silence) you
        You can feel it on the way home (way home), way home (way home) you
        You can see it with the lights out (lights out), lights out (lights out)
        You are in love, true love
        
        And so it goes
        You two are dancing in a snow globe 'round and 'round
        And he keeps a picture of you in his office downtown
        And you understand now why they lost their minds and fought the wars
        And why I've spent my whole life trying to put it into words
        
        'Cause you can hear it in the silence
        You can feel it on the way home
        You can see it with the lights out
        You are in love, true love
        You're in love
        
        You can hear it in the silence (silence), silence (silence) you
        You can feel it on the way home (way home), way home (way home) you
        You can see it with the lights out (lights out), lights out (lights out)
        You are in love, true love
        You are in love
        
        You can hear it in the silence (silence), silence (silence) you
        You can feel it on the way home (way home), way home (way home) you
        You can see it with the lights out (lights out), lights out (lights out)
        You are in love, true love
        You are in love`
    },
    '102': {
        name: 'New Romantics', 
        youtube: 'https://www.youtube.com/watch?v=wyK7YuwUWsU', 
        album: '1989 (Deluxe Version)',  
        taylorsversion: 'no',
        lyrics: `We're all bored, we're all so tired of everything
        We wait for trains that just aren't coming
        We show off our different scarlet letters
        Trust me, mine is better
        
        We're so young but we're on the road to ruin
        We play dumb but we know exactly what we're doing
        We cry tears of mascara in the bathroom
        Honey, life is just a classroom
        
        'Cause baby, I could build a castle
        Out of all the bricks they threw at me
        And every day is like a battle
        But every night with us is like a dream
        
        Baby, we're the new romantics
        Come on, come along with me
        Heartbreak is the national anthem
        We sing it proudly
        We are too busy dancing
        To get knocked off our feet
        Baby, we're the new romantics
        The best people in life are free
        
        We're all here, the lights and noise are blinding
        We hang back, it's all in the timing
        It's poker, he can't see it in my face
        But I'm about to play my Ace
        
        We need love, but all we want is danger
        We team up then switch sides like a record changer
        The rumors are terrible and cruel
        But, honey, most of them are true
        
        'Cause baby, I could build a castle
        Out of all the bricks they threw at me
        And every day is like a battle
        But every night with us is like a dream
        
        Baby, we're the new romantics
        Come on, come along with me
        Heartbreak is the national anthem
        We sing it proudly
        We are too busy dancing
        To get knocked off our feet
        Baby, we're the new romantics
        The best people in life are free
        
        So come on, come along with me
        The best people in life are free
        
        Please take my hand and
        Please take me dancing and
        Please leave me stranded
        It's so romantic (it's so romantic)
        (Ah, ah, ah, ah, ah, ah)
        
        Oh, 'cause baby, I could build a castle
        Out of all the bricks they threw at me
        And every day is like a battle
        But every night with us is like a dream
        
        'Cause baby, I could build a castle (castle)
        Out of all the bricks they threw at me
        And every day is like a battle
        But every night with us is like a dream
        
        Baby, we're the new romantics
        Come on, come along with me
        Heartbreak is the national anthem
        We sing it proudly
        We are too busy dancing
        To get knocked off our feet
        Baby, we're the new romantics
        The best people in life are free`
    },
    '103': {
        name: '...Ready For It?', 
        youtube: 'https://www.youtube.com/watch?v=wIft-t-MQuE', 
        album: 'Reputation', 
        taylorsversion: 'no',
        lyrics: `Knew he was a killer first time that I saw him
        Wondered how many girls he had loved and left haunted
        But if he's a ghost, then I can be a phantom
        Holdin' him for ransom, some
        Some boys are tryin' too hard, he don't try at all though
        Younger than my exes, but he act like such a man, so
        I see nothing better, I keep him forever
        Like a vendetta-ta
        
        I, I, I see how this is gon' go
        Touch me and you'll never be alone
        I-Island breeze and lights down low
        No one has to know
        
        In the middle of the night, in my dreams
        You should see the things we do, baby
        In the middle of the night, in my dreams
        I know I'm gonna be with you, so I take my time
        Are you ready for it?
        
        Knew I was a robber first time that he saw me
        Stealing hearts and running off and never sayin' sorry
        But if I'm a thief, then he can join the heist, and
        We'll move to an island, and
        And he can be my jailer, Burton to this Taylor
        Every love I've known in comparison is a failure
        I forget their names now, I'm so very tame now
        Never be the same now, now
        
        I, I, I see how this is gon' go
        Touch me and you'll never be alone
        I-Island breeze and lights down low
        No one has to know (No one has to know)
        
        In the middle of the night, in my dreams
        You should see the things we do, baby
        In the middle of the night in my dreams
        I know I'm gonna be with you, so I take my time
        Are you ready for it?
        Oh, are you ready for it?
        
        Baby, let the games begin
        Let the games begin
        Let the games begin
        Baby, let the games begin
        Let the games begin
        Let the games begin
        
        I, I, I see how this is gon' go
        Touch me and you'll never be alone
        I-Island breeze and lights down low
        No one has to know
        
        In the middle of the night (Night), in my dreams (My dreams)
        You should see the things we do (We do), baby (Baby), hmm (Eh)
        In the middle of the night, in my dreams (My dreams)
        I know I'm gonna be with you (I know I'm gonna be with you)
        So I take my time
        In the middle of the night
        
        Baby, let the games begin
        Let the games begin
        Let the games begin
        Are you ready for it?
        Baby, let the games begin
        Let the games begin
        Let the games begin
        Are you ready for it?`
    },
    '104': {
        name: 'End Game', 
        youtube: 'https://www.youtube.com/watch?v=dfnCAmr569k', 
        album: 'Reputation', 
        taylorsversion: 'no',
        lyrics: `[Taylor Swift and Future:]
        I wanna be your end game
        I wanna be your first string
        I wanna be your A-Team (Whoa, whoa, whoa)
        I wanna be your end game, end game
        
        Big reputation, big reputation
        Ooh, you and me, we got big reputations, ah
        And you heard about me, ooh
        I got some big enemies (Yeah)
        Big reputation, big reputation
        Ooh, you and me would be a big conversation, ah (Git, git)
        And I heard about you, ooh (Yeah)
        You like the bad ones, too
        
        [Future:]
        You so dope, don't overdose, I'm so stoked, I need a toast
        We do the most, I'm in the Ghost like I'm whippin' a boat
        I got a reputation, girl that don't precede me (Yeah)
        I'm one call away whenever you need me (Yeah)
        I'm in a G5 (Yeah), come to the A-Side (Yeah)
        I got a bad boy persona, that's what they like (What they like)
        You love it, I love it too 'cause you're my type (You're my type)
        You hold me down and I protect you with my life
        
        [Taylor Swift and Future:]
        I don't wanna touch you, I don't wanna be
        Just another ex-love you don't wanna see
        I don't wanna miss you (I don't wanna miss you)
        Like the other girls do
        I don't wanna hurt you, I just wanna be
        Drinking on a beach with you all over me
        I know what they all say (I know what they all say)
        But I ain't tryna play
        
        [Taylor Swift:]
        I wanna be your end game (End game)
        I wanna be your first string (First string)
        I wanna be your A-Team (A-Team)
        I wanna be your end game, end game
        
        [Ed Sheeran:]
        Knew her when I was young, reconnected when we were little bit older
        Both sprung, I got issues and chips on both of my shoulders
        Reputation precedes me, in rumors, I'm knee-deep
        The truth is, it's easier to ignore it, believe me
        Even when we'd argue, we'd not do it for long
        And you understand the good and bad end up in the song
        For all your beautiful traits, and the way you do it with ease
        For all my flaws, paranoia, and insecurities
        I've made mistakes and made some choices, that's hard to deny
        After the storm, something was born on the 4th of July
        I've passed days without fun, this end game is the one
        With four words on the tip of my tongue, I'll never say it
        
        [Taylor Swift:]
        I don't wanna touch you, I don't wanna be
        Just another ex-love you don't wanna see
        I don't wanna miss you (I don't wanna miss you)
        Like the other girls do
        I don't wanna hurt you, I just wanna be
        Drinking on a beach with you all over me
        I know what they all say, yeah
        But I ain't tryna play
        
        I wanna be your end game (End game)
        I wanna be your first string (Wanna be your first string)
        I wanna be your A-Team (A-Team)
        I wanna be your end game, end game
        
        [Taylor Swift and Future:]
        Big reputation, big reputation
        Ooh, you and me, we got big reputations, ah
        And you heard about me, ooh
        I got some big enemies
        Hey, big reputation, big reputation
        Ooh, you and me would be a big conversation, ah
        And I heard about you, ooh
        You like the bad ones, too
        
        [Taylor Swift:]
        I hit you like bang, we tried to forget it, but we just couldn't
        And I bury hatchets, but I keep maps of where I put 'em
        Reputation precedes me, they told you I'm crazy
        I swear I don't love the drama, it loves me
        And I can't let you go, your hand prints on my soul
        It's like your eyes are liquor, it's like your body is gold
        You've been calling my bluff on all my usual tricks
        So here's the truth from my red lips
        
        [Swift, Future, and Ed Sheeran:]
        I wanna be your end game (End game)
        I wanna be your first string (Me and you, first string)
        I wanna be your A-Team (Be your A-Team now, A-Team)
        I wanna be your end game, end game
        I wanna be your end game (Oh, I do)
        I wanna be your first string (First string)
        I wanna be your A-Team (A-Team)
        I wanna be your end game, end game`
    },
    '105': {
        name: 'I Did Something Bad', 
        youtube: 'https://www.youtube.com/watch?v=xYLxUJ9v6KU', 
        album: 'Reputation', 
        taylorsversion: 'no',
        lyrics: `I never trust a narcissist, but they love me
        So I play 'em like a violin
        And I make it look—oh—so easy
        
        'Cause for every lie I tell them, they tell me three
        This is how the world works
        Now all he thinks about is me
        
        I can feel the flames on my skin
        Crimson-red paint on my lips
        If a man talks shit
        Then I owe him nothing
        I don't regret it one bit
        'Cause he had it coming
        
        They say I did something bad
        Then why's it feel so good?
        They say I did something bad
        But why's it feel so good?
        Most fun I ever had
        And I'd do it over and over and over again if I could
        It just felt so good, good
        
        I never trust a playboy, but they love me
        So I fly 'em all around the world
        And I let them think they saved me
        
        They never see it comin', what I do next
        This is how the world works
        You gotta leave before you get left
        
        I can feel the flames on my skin
        He says, "Don't throw away a good thing."
        But if he drops my name
        Then I owe him nothin'
        And if he spends my change
        Then he had it comin'
        
        They say I did something bad
        Then why's it feel so good?
        They say I did something bad
        But why's it feel so good?
        Most fun I ever had
        And I'd do it over and over and over again if I could
        It just felt so good, good
        
        It just felt so good
        
        They're burning all the witches, even if you aren't one
        They got their pitchforks and proof, their receipts and reasons
        
        They're burning all the witches, even if you aren't one
        So light me up (light me up), light me up (light me up)
        Light me up, go ahead and light me up (light me up)
        
        Light me up (light me up), light me up (light me up)
        Light me up (light me up), light me up
        
        They say I did something bad (oh)
        Then why's it feel so good? (so good)
        They say I did something bad
        But why's it feel so good?
        Most fun I ever had (most fun I ever had)
        And I'd do it over and over and over again if I could
        It just felt so good (good), good
        
        Oh, you say I did something bad
        (You say I did something bad?)
        Why's it feel so good, good?
        So bad, why's it feel so good?
        Why's it feel, why's it feel so good? (bad)
        It just felt so good, good
        `
    },
    '106': {
        name: 'Don\'t Blame Me', 
        youtube: 'https://www.youtube.com/watch?v=kRJKB291Z1g', 
        album: 'Reputation', 
        taylorsversion: 'no',
        lyrics: `Don't blame me
        Love made me crazy
        If it doesn't, you ain't doing it right
        Lord, save me
        My drug is my baby
        I'll be using for the rest of my life
        
        I've been breaking hearts a long time
        And toying with them older guys
        Just playthings for me to use
        Something happened for the first time
        In the darkest little paradise
        Shaking, pacing, I just need you
        
        For you
        I would cross the line
        I would waste my time
        I would lose my mind
        They say, "She's gone too far this time."
        
        Don't blame me
        Love made me crazy
        If it doesn't, you ain't doing it right
        Lord, save me
        My drug is my baby
        I'll be using for the rest of my life
        
        Don't blame me
        Love made me crazy
        If it doesn't, you ain't doing it right
        Oh, Lord, save me
        My drug is my baby
        I'll be using for the rest of my life
        
        My name is whatever you decide
        And I'm just gonna call you mine
        I'm insane, but I'm your baby (your baby)
        Echoes (echoes) of your name inside my mind
        Halo, hiding my obsession
        I once was poison ivy, but now I'm your daisy
        
        And, baby, for you
        I would fall from grace
        Just to touch your face
        If you walk away
        I'd beg you on my knees to stay
        
        Don't blame me
        Love made me crazy
        If it doesn't, you ain't doing it right
        Lord, save me
        My drug is my baby
        I'll be using for the rest of my life
        
        Don't blame me
        Love made me crazy
        If it doesn't, you ain't doing it right
        Oh, Lord, save me
        My drug is my baby
        I'll be using for the rest of my life
        
        I get so high, oh
        Every time you're—every time you're loving me
        You're loving me
        Trip of my life, oh
        Every time you're—every time you're touching me
        You're touching me
        
        Every time you're—every time you're loving me
        
        Oh, Lord, save me
        My drug is my baby
        I'll be using for the rest of my life
        (Using for the rest of my life. Oh!)
        
        Don't blame me
        Love made me crazy
        If it doesn't, you ain't doing it right (doing it right, no)
        Lord, save me
        My drug is my baby
        I'll be using for the rest of my life
        
        Don't blame me
        Love made me crazy
        If it doesn't, you ain't doing it right (you ain't doing it...)
        Oh, Lord, save me
        My drug is my baby
        I'll be using for the rest of my life (I'll be using, I'll be using)
        
        I get so high, oh
        Every time you're—every time you're loving me
        You're loving me
        Oh, Lord, save me
        My drug is my baby
        I'll be using for the rest of my life`
    },
    '107': {
        name: 'Delicate', 
        youtube: 'https://www.youtube.com/watch?v=tCXGJQYZ9JA', 
        album: 'Reputation', 
        taylorsversion: 'no',
        lyrics: `This ain't for the best
        My reputation's never been worse, so
        You must like me for me
        We can't make
        Any promises now, can we, babe?
        But you can make me a drink
        
        Dive bar on the East Side, where you at?
        Phone lights up my nightstand in the black
        Come here, you can meet me in the back
        Dark jeans and your Nikes, look at you
        Oh damn, never seen that color blue
        Just think of the fun things we could do
        
        'Cause I like you
        This ain't for the best
        My reputation's never been worse, so
        You must like me for me
        Yeah, I want you
        We can't make
        Any promises now, can we, babe?
        But you can make me a drink
        
        Is it cool that I said all that?
        Is it chill that you're in my head?
        'Cause I know that it's delicate (delicate)
        Is it cool that I said all that?
        Is it too soon to do this yet?
        'Cause I know that it's delicate
        Isn't it? Isn't it? Isn't it?
        Isn't it?
        Isn't it? Isn't it? Isn't it?
        Isn't it?
        Delicate
        
        Third floor on the West Side, me and you
        Handsome, you're a mansion with a view
        Do the girls back home touch you like I do?
        Long night, with your hands up in my hair
        Echoes of your footsteps on the stairs
        Stay here, honey, I don't wanna share
        
        'Cause I like you
        This ain't for the best
        My reputation's never been worse, so
        You must like me for me
        Yeah, I want you
        We can't make
        Any promises now, can we, babe?
        But you can make me a drink
        
        Is it cool that I said all that?
        Is it chill that you're in my head?
        'Cause I know that it's delicate (delicate)
        Is it cool that I said all that?
        Is it too soon to do this yet?
        'Cause I know that it's delicate
        Isn't it? Isn't it? Isn't it?
        Isn't it?
        Isn't it? Isn't it? Isn't it?
        Isn't it?
        Delicate
        
        Sometimes I wonder when you sleep
        Are you ever dreaming of me?
        Sometimes when I look into your eyes
        I pretend you're mine, all the damn time
        'Cause I like you
        
        Is it cool that I said all that?
        Is it chill that you're in my head?
        'Cause I know that it's delicate (delicate)
        Yeah, I want you
        Is it cool that I said all that?
        Is it too soon to do this yet?
        'Cause I know that it's delicate (delicate)
        'Cause I like you
        Is it cool that I said all that?
        Isn't it? Isn't it? Isn't it? Isn't it?
        Is it chill that you're in my head?
        Isn't it? Isn't it? Isn't it? Isn't it?
        'Cause I know that it's delicate
        Isn't it? Isn't it? Isn't it? Isn't it?
        (Yeah, I want you)
        Is it cool that I said all that?
        Isn't it? Isn't it? Isn't it? Isn't it?
        Is it too soon to do this yet?
        Isn't it? Isn't it? Isn't it?
        'Cause I know that it's delicate
        (Isn't it?)
        Delicate`
    },
    '108': {
        name: 'Look What You Made Me Do', 
        youtube: 'https://www.youtube.com/watch?v=3tmd-ClpJxA', 
        album: 'Reputation', 
        taylorsversion: 'no',
        lyrics: `I don't like your little games
        Don't like your tilted stage
        The role you made me play
        Of the fool, no, I don't like you
        I don't like your perfect crime
        How you laugh when you lie
        You said the gun was mine
        Isn't cool, no, I don't like you (Oh!)
        
        But I got smarter, I got harder in the nick of time
        Honey, I rose up from the dead, I do it all the time
        I've got a list of names and yours is in red, underlined
        I check it once, then I check it twice, oh!
        
        Ooh, look what you made me do
        Look what you made me do
        Look what you just made me do
        Look what you just made me
        Ooh, look what you made me do
        Look what you made me do
        Look what you just made me do
        Look what you just made me do
        
        I don't like your kingdom keys
        They once belonged to me
        You asked me for a place to sleep
        Locked me out and threw a feast (What?)
        The world moves on, another day, another drama, drama
        But not for me, not for me, all I think about is karma
        And then the world moves on, but one thing's for sure
        Maybe I got mine, but you'll all get yours
        
        But I got smarter, I got harder in the nick of time
        Honey, I rose up from the dead, I do it all the time
        I've got a list of names and yours is in red, underlined
        I check it once, then I check it twice, oh!
        
        Ooh, look what you made me do
        Look what you made me do
        Look what you just made me do
        Look what you just made me
        Ooh, look what you made me do
        Look what you made me do
        Look what you just made me do
        Look what you just made me do
        
        I don't trust nobody and nobody trusts me
        I'll be the actress starring in your bad dreams
        I don't trust nobody and nobody trusts me
        I'll be the actress starring in your bad dreams
        I don't trust nobody and nobody trusts me
        I'll be the actress starring in your bad dreams
        I don't trust nobody and nobody trusts me
        I'll be the actress starring in your bad dreams
        
        (Ooh, look what you made me do)
        (Look what you made me do)
        (Look what you just made me do)
        "I'm sorry, the old Taylor can't come to the phone right now."
        (Look what you just made me do)
        (Look what you made me do)
        (Look what you made me do)
        "Why?"
        (Look what you just made me do)
        "Oh, 'cause she's dead!" (Oh!)
        
        Ooh, look what you made me do
        Look what you made me do
        Look what you just made me do
        Look what you just made me
        Ooh, look what you made me do
        Look what you made me do
        Look what you just made me do
        Look what you just made me do
        
        Ooh, look what you made me do
        Look what you made me do
        Look what you just made me do
        Look what you just made me
        Ooh, look what you made me do
        Look what you made me do
        Look what you just made me do
        Look what you just made me do`
    },
    '109': {
        name: 'So It Goes...', 
        youtube: 'https://www.youtube.com/watch?v=iAv1Y1YIwm8', 
        album: 'Reputation', 
        taylorsversion: 'no',
        lyrics: `See you in the dark
        All eyes on you, my magician
        All eyes on us
        You make everyone disappear, and
        Cut me into pieces
        Gold cage, hostage to my feelings
        Back against the wall
        Trippin', trip, trippin' when you're gone
        
        'Cause we break down a little
        But when you get me alone, it's so simple
        'Cause baby, I know what you know
        We can feel it
        
        And all the pieces fall
        Right into place
        Getting caught up in a moment
        Lipstick on your face
        So it goes
        I'm yours to keep
        And I'm yours to lose
        You know I'm not a bad girl, but I
        Do bad things with you
        So it goes
        
        Met you in a bar
        All eyes on me, your illusionist
        All eyes on us
        I make all your grey days clear and
        Wear you like a necklace
        I'm so chill, but you make me jealous
        But I got your heart
        Skippin', skip, skippin' when I'm gone
        
        'Cause we break down a little
        But when I get you alone, it's so simple
        'Cause baby, I know what you know
        We can feel it
        
        And all the pieces fall
        Right into place
        Getting caught up in a moment
        Lipstick on your face
        So it goes
        I'm yours to keep
        And I'm yours to lose
        You know I'm not a bad girl, but I
        Do bad things with you
        So it goes
        
        Come here, dressed in black now
        So, so, so it goes
        Scratches down your back now
        So, so, so it goes
        
        You did a number on me
        But, honestly, baby, who's counting?
        I did a number on you
        But, honestly, baby, who's counting?
        You did a number on me
        But, honestly, baby, who's counting?
        Who's counting?
        1, 2, 3
        
        And all the pieces fall (pieces fall)
        Right into place
        Getting caught up in a moment (caught up, caught up)
        Lipstick on your face
        So it goes
        I'm yours to keep (oh)
        And I'm yours to lose (baby)
        You know I'm not a bad girl, but I
        Do bad things with you
        So it goes
        
        Come here, dressed in black now
        So, so, so it goes
        Scratches down your back now
        So, so, so it goes
        Come here, dressed in black now
        So, so, so it goes
        Scratches down your back now
        So, so, so it goes`
    },
    '110': {
        name: 'Gorgeous', 
        youtube: 'https://www.youtube.com/watch?v=EUoe7cf0HYw', 
        album: 'Reputation', 
        taylorsversion: 'no',
        lyrics: ``
    },
    '111': {
        name: 'Getaway Car', 
        youtube: 'https://www.youtube.com/watch?v=FhPLQVlUiNQ', 
        album: 'Reputation', 
        taylorsversion: 'no',
        lyrics: `No, nothing good starts in a getaway car

        It was the best of times, the worst of crimes
        I struck a match and blew your mind
        But I didn't mean it
        And you didn't see it
        The ties were black, the lies were white
        In shades of gray in candlelight
        I wanted to leave him
        I needed a reason
        
        "X" marks the spot, where we fell apart
        He poisoned the well, I was lying to myself
        I knew it from the first Old Fashioned, we were cursed
        We never had a shotgun shot in the dark
        
        You were driving the getaway car
        We were flying, but we'd never get far
        Don't pretend it's such a mystery
        Think about the place where you first met me
        We're riding in a getaway car
        There were sirens in the beat of your heart
        Should've known I'd be the first to leave
        Think about the place where you first met me
        In a getaway car
        No, they never get far
        No, nothing good starts in a getaway car
        
        It was the great escape, the prison break
        The light of freedom on my face
        But you weren't thinking
        And I was just drinking
        Well he was running after us, I was screaming, 'Go, go, go!'
        But with three of us, honey, it's a sideshow
        And a circus ain't a love story
        And now we're both sorry (we're both sorry)
        
        "X" marks the spot, where we fell apart
        He poisoned the well, every man for himself
        I knew it from the first Old Fashioned, we were cursed
        It hit you like a shotgun shot to the heart
        
        You were driving the getaway car
        We were flying, but we'd never get far
        Don't pretend it's such a mystery
        Think about the place where you first met me
        We're riding in a getaway car
        There were sirens in the beat of your heart
        Should've known I'd be the first to leave
        Think about the place where you first met me
        In a getaway car
        No, they never get far
        No, nothing good starts in a getaway car
        
        We were jet-set Bonnie and Clyde
        Until I switched to the other side
        To the other side
        It's no surprise, I turned you in
        'Cause us traitors never win
        
        I'm in a getaway car
        I left you in a motel bar
        Put the money in a bag and I stole the keys
        That was the last time you ever saw me
        
        Driving the getaway car
        We were flying, but we'd never get far (Don't pretend)
        Don't pretend it's such a mystery
        Think about the place where you first met me
        We're riding in a getaway car
        There were sirens in the beat of your heart (Should've known)
        Should've known I'd be the first to leave
        Think about the place where you first met me
        In a getaway car
        No, they never get far
        No, nothing good starts in a getaway car
        
        I was riding in a getaway car
        I was crying in a getaway car
        I was dying in a getaway car
        Said 'goodbye' in a getaway car
        
        I was riding in a getaway car
        I was crying in a getaway car
        I was dying in a getaway car
        Said 'goodbye' in a getaway car`
    },
    '112': {
        name: 'New Year\'s Day', 
        youtube: 'https://www.youtube.com/watch?v=KkvTYrFIxNM', 
        album: 'Reputation', 
        taylorsversion: 'no',
        lyrics: `There's glitter on the floor after the party
        Girls carrying their shoes down in the lobby
        Candle wax and Polaroids on the hardwood floor
        You and me from the night before, but
        
        Don't read the last page
        But I stay when you're lost, and I'm scared
        And you're turning away
        I want your midnights
        But I'll be cleaning up bottles with you on New Year's Day
        
        You squeeze my hand three times in the back of the taxi
        I can tell that it's gonna be a long road
        I'll be there if you're the toast of the town, babe
        Or if you strike out and you're crawling home
        
        Don't read the last page
        But I stay when it's hard, or it's wrong
        Or we're making mistakes
        I want your midnights
        But I'll be cleaning up bottles with you on New Year's Day
        
        Hold on to the memories, they will hold on to you
        Hold on to the memories, they will hold on to you
        Hold on to the memories, they will hold on to you
        And I will hold on to you
        
        Please don't ever become a stranger
        Whose laugh I could recognize anywhere
        Please don't ever become a stranger
        Whose laugh I could recognize anywhere
        
        There's glitter on the floor after the party
        Girls carrying their shoes down in the lobby
        Candle wax and Polaroids on the hardwood floor
        You and me forevermore
        
        Don't read the last page
        But I stay when it's hard, or it's wrong
        Or we're making mistakes
        I want your midnights
        But I'll be cleaning up bottles with you on New Year's Day
        
        Hold on to the memories, they will hold on to you
        Hold on to the memories, they will hold on to you
        Hold on to the memories, they will hold on to you
        And I will hold on to you
        
        Please don't ever become a stranger
        (To the memories, they will hold on to you)
        Whose laugh I could recognize anywhere
        (Hold on to the memories, they will hold on to you)
        Please don't ever become a stranger
        (Hold on to the memories, they will hold on to you)
        Whose laugh I could recognize anywhere
        (I will hold on to you)`
    },
    '113': {
        name: 'King Of My Heart', 
        youtube: 'https://www.youtube.com/watch?v=5U7bF68xcRg', 
        album: 'Reputation', 
        taylorsversion: 'no',
        lyrics: `I'm perfectly fine, I live on my own
        I made up my mind, I'm better off being alone
        We met a few weeks ago
        Now you try on callin' me "baby" like tryin' on clothes
        
        Salute to me I'm your American Queen
        And you move to me like I'm a Motown beat
        And we rule the kingdom inside my room
        'Cause all the boys and their expensive cars
        With their Range Rovers and their Jaguars
        Never took me quite where you do
        
        And all at once, you are the one I have been waiting for
        King of my heart, body and soul, ooh whoa
        And all at once, you are all I want, I'll never let you go
        King of my heart, body and soul, ooh whoa
        
        And all at once, I've been waiting, waiting
        Ooh whoa, ooh whoa
        And all at once, you are the one I have been waiting, waiting
        Body and soul, ooh whoa
        And all at once
        
        Late in the night, the city's asleep
        Your love is a secret I'm hoping, dreaming, dying to keep
        Change my priorities
        The taste of your lips is my idea of luxury
        
        Salute to me I'm your American Queen
        And you move to me like I'm a Motown beat
        And we rule the kingdom inside my room
        (Inside my room, oh)
        'Cause all the boys and their expensive cars
        With their Range Rovers and their Jaguars
        Never took me quite where you do (Where you do)
        
        And all at once, you are the one I have been waiting for
        King of my heart, body, and soul, ooh whoa
        And all at once, you're all I want, I'll never let you go
        King of my heart (My heart), body, and soul, ooh whoa
        
        And all at once (Hey), I've been waiting, waiting (Waiting)
        Ooh, whoa, ooh whoa
        And all at once, you are the one
        I have been waiting (Waiting), waiting (Waiting)
        Body and soul, ooh whoa
        And all at once
        
        Is this the end of all the endings?
        My broken bones are mending
        With all these nights we're spending
        Up on the roof with a school girl crush
        Drinking beer out of plastic cups
        Say you fancy me, not fancy stuff
        Baby, all at once, this is enough
        
        And all at once, you are the one I have been waiting for
        King of my heart, body and soul, ooh whoa
        And all at once, you are the one I have been waiting for
        King of my heart, body, and soul, ooh whoa
        And all at once, you're all I want, I'll never let you go
        King of my heart (My heart), body, and soul (My soul), ooh whoa
        
        And all at once, I've been waiting, waiting
        Ooh whoa, ooh whoa
        And all at once
        'Cause you're the one I have been waiting, waiting
        Body and soul, ooh whoa
        And all at once`
    },
    '114': {
        name: 'Dancing With Our Hands Tied', 
        youtube: 'https://www.youtube.com/watch?v=erGyUphZSt8', 
        album: 'Reputation', 
        taylorsversion: 'no',
        lyrics: `I, I loved you in secret
        First sight, yeah, we love without reason
        Oh, 25 years old
        Oh, how were you to know and
        
        My, my love had been frozen
        Deep blue, but you painted me golden
        Oh, and you held me close
        Oh, how was I to know what
        
        I could've spent forever with your hands in my pockets
        Picture of your face in an invisible locket
        You said there was nothing in the world that could stop it
        I had a bad feeling
        And darling, you had turned my bed into a sacred oasis
        People started talking, putting us through our paces
        I knew there was no one in the world who could take it
        I had a bad feeling
        
        But we were dancing
        Dancing with our hands tied, hands tied
        Yeah, we were dancing
        Like it was the first time, first time
        Yeah, we were dancing
        Dancing with our hands tied, hands tied
        Yeah, we were dancing
        And I had a bad feeling
        But we were dancing
        
        I, I loved you in spite of
        Deep fears that the world would divide us
        So, baby, can we dance
        Oh, through an avalanche?
        And say, say that we got it
        I'm a mess, but I'm the mess that you wanted
        Oh, 'cause it's gravity
        Oh, keeping you with me
        
        I could've spent forever with your hands in my pockets
        Picture of your face in an invisible locket
        You said there was nothing in the world that could stop it
        I had a bad feeling
        
        But we were dancing
        Dancing with our hands tied, hands tied
        Yeah, we were dancing
        Like it was the first time, first time
        Yeah, we were dancing
        Dancing with our hands tied, hands tied
        Yeah, we were dancing
        (Ooh, we had our hands tied)
        And I had a bad feeling
        But we were dancing
        
        I'd kiss you as the lights went out
        Swaying as the room burned down
        I'd hold you as the water rushes in
        If I could dance with you again
        I'd kiss you as the lights went out
        Swaying as the room burned down
        I'd hold you as the water rushes in
        If I could dance with you again (Again)
        
        Dancing with our hands tied, hands tied
        Oh, yeah, we were dancing
        Like it was the first time, first time (First time, first time)
        Yeah, we were dancing (Oh)
        Dancing with our hands tied, hands tied
        (Dancing with our hands tied)
        Yeah, we were dancing (Ooh)
        And I had a bad feeling (Had a bad feeling)
        But we were dancing
        
        (Ooh-ooh, ooh-ooh)
        Hands tied, hands tied (Dancing)`
    },
    '115': {
        name: 'Dress', 
        youtube: 'https://www.youtube.com/watch?v=FNEoPctNIUE', 
        album: 'Reputation', 
        taylorsversion: 'no',
        lyrics: `Our secret moments in a crowded room
        They got no idea about me and you
        There is an indentation in the shape of you
        Made your mark on me, a golden tattoo
        
        All of this silence and patience, pining and anticipation
        My hands are shaking from holding back from you
        Ha, ah, ah
        All of this silence and patience, pining and desperately waiting
        My hands are shaking from all this
        Ah, ha, ha, ha-ah
        
        Say my name and everything just stops
        I don't want you like a best friend
        Only bought this dress so you could take it off
        Take it oh, ha, ha, ha-ah
        Carve your name into my bedpost
        'Cause I don't want you like a best friend
        Only bought this dress so you could take it off
        Take it oh, ha, ha, ha-ah
        
        Inescapable, I'm not even gonna try
        And if I get burned, at least we were electrified
        I'm spilling wine in the bathtub
        You kiss my face and we're both drunk
        Everyone thinks that they know us
        But they know nothing about—
        
        All of this silence and patience, pining and anticipation
        My hands are shaking from holding back from you
        Ha, ah, ah
        All of this silence and patience, pining and desperately waiting
        My hands are shaking from all this
        Ah, ha, ha, ha-ah
        
        Say my name and everything just stops
        I don't want you like a best friend
        Only bought this dress so you could take it off
        Take it oh, ha, ha, ha-ah
        Carve your name into my bedpost
        'Cause I don't want you like a best friend
        Only bought this dress so you could take it off
        Take it oh, ha, ha
        
        Ha-ah-ah, ha-ah-ah, ha-ah-ah-ah
        Only bought this dress so you could take it off
        Ha-ah-ah, ha-ah-ah, ha-ah-ah-ah
        Only bought this dress so you could take it off
        
        Flashback when you met me
        Your buzzcut and my hair bleached
        Even in my worst times, you could see the best in me
        Flashback to my mistakes
        My rebounds, my earthquakes
        Even in my worst lies, you saw the truth in me
        And I woke up just in time
        Now I wake up by your side
        My one and only, my lifeline
        I woke up just in time
        Now I wake up by your side
        My hands shake, I can't explain this
        Ah, ha, ha, ha-ah
        
        Say my name and everything just stops
        I don't want you like a best friend
        Only bought this dress so you could take it off
        Take it oh, ha, ha, ha-ah
        Carve your name into my bedpost
        'Cause I don't want you like a best friend
        Only bought this dress so you could take it off
        Take it oh, ha, ha, ha-ah
        
        There is an indentation in the shape of you
        Only bought this dress so you could take it off
        You made your mark on me, golden tattoo
        Only bought this dress so you could take it off`
    },
    '116': {
        name: 'This Why We Can\'t Have Nice Things', 
        youtube: 'https://www.youtube.com/watch?v=6Z3QJ4L1Bg0', 
        album: 'Reputation', 
        taylorsversion: 'no',
        lyrics: `It was so nice throwing big parties
        Jump into the pool from the balcony
        Everyone swimming in a champagne sea
        And there are no rules when you show up here
        Bass beat rattling the chandelier
        Feeling so Gatsby for that whole year
        
        So why'd you have to rain on my parade?
        I'm shaking my head and locking the gates
        
        This is why we can't have nice things, darling
        Because you break them
        I had to take them away
        This is why we can't have nice things, honey (Oh)
        Did you think I wouldn't hear all the things you said about me?
        This is why we can't have nice things
        
        It was so nice being friends again
        There I was, giving you a second chance
        But you stabbed me in the back while shaking my hand
        And therein lies the issue
        Friends don't try to trick you
        Get you on the phone and mind-twist you
        And so I took an axe to a mended fence
        
        But I'm not the only friend you've lost lately (Mm-mm)
        If only you weren't so shady
        
        This is why we can't have nice things, darling (Yeah)
        Because you break them
        I had to take them away
        This is why we can't have nice (Nice things) things (Baby), honey
        Did you think I wouldn't hear all the things you said about me?
        This is why we can't have
        
        Here's a toast to my real friends
        They don't care about the he-said, she-said
        And here's to my baby
        He ain't reading what they call me lately
        And here's to my mama
        Had to listen to all this drama
        And here's to you
        'Cause forgiveness is a nice thing to do
        Haha, I can't even say it with a straight face
        
        This is why we can't have nice things, darling (Darling)
        Because you break them
        I had to take them away
        This is why we can't have nice (Uh-uh) things (Oh no), honey (Baby, oh)
        Did you think I wouldn't hear all the things you said about me?
        This is why we can't have nice things, darling
        (And here's to my real friends)
        Because you break them
        I had to take them
        (And here's to my baby)
        Nice things, honey
        (They didn't care about that he-said, she-said)
        Did you think I wouldn't hear all the things you said about me?
        This is why we can't have nice things`
    },
    '117': {
        name: 'Call It What You Want', 
        youtube: 'https://www.youtube.com/watch?v=V54CEElTF_U', 
        album: 'Reputation', 
        taylorsversion: 'no',
        lyrics: ``
    },
    '118': {
        name: 'I Forget That You Existed', 
        youtube: 'https://www.youtube.com/watch?v=p1cEvNn88jM', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `How many days did I spend thinking
        'Bout how you did me wrong, wrong, wrong?
        Lived in the shade you were throwing
        'Til all of my sunshine was gone, gone, gone
        And I couldn't get away from ya
        In my feelings more than Drake, so yeah
        Your name on my lips, tongue-tied
        Free rent, living in my mind
        
        But then something happened one magical night
        
        I forgot that you existed
        And I thought that it would kill me, but it didn't
        And it was so nice
        So peaceful and quiet
        I forgot that you existed
        It isn't love, it isn't hate, it's just indifference
        I forgot that you
        
        Got out some popcorn
        As soon as my rep started going down, down, down
        Laughed on the school yard
        As soon as I tripped up and hit the ground, ground, ground
        And I would've stuck around for ya
        Would've fought the whole town, so yeah
        Would've been right there, front row
        Even if nobody came to your show
        
        But you showed who you are, then one magical night
        
        I forgot that you existed
        And I thought that it would kill me, but it didn't
        And it was so nice
        So peaceful and quiet
        I forgot that you existed
        It isn't love, it isn't hate, it's just indifference
        I forgot that you
        
        Sent me a clear message
        Taught me some hard lessons
        I just forget what they were
        It's all just a blur
        
        I forgot that you existed
        And I thought that it would kill me, but it didn't
        And it was so nice
        So peaceful and quiet
        I forgot that you existed
        I did, I did, I did
        It isn't hate, it's just indifference
        It isn't love, it isn't hate, it's just indifference
        So, yeah`
    },
    '119': {
        name: 'Cruel Summer', 
        youtube: 'https://www.youtube.com/watch?v=ic8j13piAhQ', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `(Yeah, yeah, yeah, yeah)

        Fever dream high in the quiet of the night
        You know that I caught it (Oh yeah, you're right, I want it)
        Bad, bad boy, shiny toy with a price
        You know that I bought it (Oh yeah, you're right, I want it)
        
        Killing me slow, out the window
        I'm always waiting for you to be waiting below
        Devils roll the dice, angels roll their eyes
        What doesn't kill me makes me want you more
        
        And it's new, the shape of your body
        It's blue, the feeling I've got
        And it's ooh, whoa oh
        It's a cruel summer
        It's cool, that's what I tell 'em
        No rules in breakable heaven
        But ooh, whoa oh
        It's a cruel summer
        With you
        
        Hang your head low in the glow of the vending machine
        I'm not dying (Oh yeah, you're right, I want it)
        We say that we'll just screw it up in these trying times
        We're not trying (Oh yeah, you're right, I want it)
        
        So cut the headlights, summer's a knife
        I'm always waiting for you just to cut to the bone
        Devils roll the dice, angels roll their eyes
        And if I bleed, you'll be the last to know
        
        Oh, it's new, the shape of your body
        It's blue, the feeling I've got
        And it's ooh, whoa oh
        It's a cruel summer
        It's cool, that's what I tell 'em
        No rules in breakable heaven
        But ooh, whoa oh
        It's a cruel summer
        With you
        
        I'm drunk in the back of the car
        And I cried like a baby coming home from the bar (Oh)
        Said, "I'm fine," but it wasn't true
        I don't wanna keep secrets just to keep you
        And I snuck in through the garden gate
        Every night that summer just to seal my fate (Oh)
        And I scream, "For whatever it's worth
        I love you, ain't that the worst thing you ever heard?"
        He looks up, grinning like a devil
        
        It's new, the shape of your body
        It's blue, the feeling I've got
        And it's ooh, whoa oh
        It's a cruel summer
        It's cool, that's what I tell 'em
        No rules in breakable heaven
        But ooh, whoa oh
        It's a cruel summer
        With you
        
        I'm drunk in the back of the car
        And I cried like a baby coming home from the bar (Oh)
        Said, "I'm fine," but it wasn't true
        I don't wanna keep secrets just to keep you
        And I snuck in through the garden gate
        Every night that summer just to seal my fate (Oh)
        And I scream, "For whatever it's worth
        I love you, ain't that the worst thing you ever heard?"
        (Yeah, yeah, yeah, yeah)`
    },
    '120': {
        name: 'Lover', 
        youtube: 'https://www.youtube.com/watch?v=-BjZmE2gtdo', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `We could leave the Christmas lights up 'til January
        This is our place, we make the rules
        And there's a dazzling haze, a mysterious way about you, dear
        Have I known you twenty seconds or twenty years?
        
        Can I go where you go?
        Can we always be this close forever and ever?
        And ah, take me out and take me home
        You're my, my, my, my
        Lover
        
        We could let our friends crash in the living room
        This is our place, we make the call
        And I'm highly suspicious that everyone who sees you wants you
        I've loved you three summers now, honey, but I want 'em all
        
        Can I go where you go?
        Can we always be this close forever and ever?
        And ah, take me out and take me home (Forever and ever)
        You're my, my, my, my
        Lover
        
        Ladies and gentlemen, will you please stand?
        With every guitar string scar on my hand
        I take this magnetic force of a man to be my
        Lover
        My heart's been borrowed and yours has been blue
        All's well that ends well to end up with you
        Swear to be over-dramatic and true to my
        Lover
        
        And you'll save all your dirtiest jokes for me
        And at every table, I'll save you a seat
        Lover
        
        Can I go where you go?
        Can we always be this close forever and ever?
        And ah, take me out and take me home (Forever and ever)
        You're my, my, my, my
        Oh, you're my, my, my, my
        Darling, you're my, my, my, my
        Lover
        `
    },
    '121': {
        name: 'The Man', 
        youtube: 'https://www.youtube.com/watch?v=AqAJLh9wuZ0', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `I would be complex, I would be cool
        They'd say I played the field before I found someone to commit to
        And that would be okay for me to do
        Every conquest I had made would make me more of a boss to you
        
        I'd be a fearless leader
        I'd be an alpha type
        When everyone believes ya
        What's that like?
        
        I'm so sick of running as fast as I can
        Wondering if I'd get there quicker if I was a man
        And I'm so sick of them coming at me again
        'Cause if I was a man, then I'd be the man
        I'd be the man
        I'd be the man
        
        They'd say I hustled, put in the work
        They wouldn't shake their heads and question how much of this I deserve
        What I was wearing, if I was rude
        Could all be separated from my good ideas and power moves
        
        And they would toast to me, oh, let the players play
        I'd be just like Leo in Saint-Tropez
        
        I'm so sick of running as fast as I can
        Wondering if I'd get there quicker if I was a man
        And I'm so sick of them coming at me again
        'Cause if I was a man, then I'd be the man
        I'd be the man
        I'd be the man
        
        What's it like to brag about raking in dollars
        And getting bitches and models?
        And it's all good if you're bad
        And it's okay if you're mad
        If I was out flashing my dollars
        I'd be a bitch, not a baller
        They'd paint me out to be bad
        So, it's okay that I'm mad
        
        I'm so sick of running as fast as I can
        Wondering if I'd get there quicker if I was a man (You know that)
        And I'm so sick of them coming at me again (Coming at me again)
        'Cause if I was a man (If I was a man)
        Then I'd be the man (Then I'd be the man)
        I'm so sick of running as fast as I can (As fast as I can)
        Wondering if I'd get there quicker if I was a man (Hey)
        And I'm so sick of them coming at me again (Coming at me again)
        'Cause if I was a man (If I was a man), then I'd be the man
        I'd be the man
        I'd be the man (Oh)
        I'd be the man (Yeah)
        I'd be the man (I'd be the man)
        
        If I was a man, then I'd be the man`
    },
    '122': {
        name: 'The Archer', 
        youtube: 'https://www.youtube.com/watch?v=8KpKc3C9V3w', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `Combat
        I'm ready for combat
        I say I don't want that
        But what if I do?
        
        'Cause cruelty
        Wins in the movies
        I've got a hundred thrown-out speeches
        I almost said to you
        
        Easy they come
        Easy they go
        I jump from the train
        I ride off alone
        I never grew up
        It's getting so old
        Help me hold on to you
        
        I've been the archer
        I've been the prey
        Who could ever leave me darling...
        But who could stay?
        
        Dark side
        I search for your dark side
        But what if I'm alright
        Right, right, right here?
        
        And I cut off
        My nose just to spite my face
        Then I hate my reflection
        For years and years
        
        I wake in the night
        I pace like a ghost
        The room is on fire
        Invisible smoke
        And all of my heroes
        Die all alone
        Help me hold on to you
        
        I've been the archer
        I've been the prey
        Screaming, "Who could ever leave me darling...
        But who could stay?"
        
        (I see right through me, I see right through me)
        
        'Cause they see right through me
        They see right through me
        They see right through
        Can you see right through me?
        They see right through
        They see right through me
        I see right through me
        I see right through me
        
        All the king's horses
        All the king's men
        Couldn't put me together again
        'Cause all of my enemies
        Started out friends
        Help me hold on to you
        
        I've been the archer
        I've been the prey
        Who could ever leave me darling...
        But who could stay?
        
        (I see right through me, I see right through me)
        
        Who could stay?
        Who could stay?
        Who could stay?
        You could stay
        You could stay
        
        Combat
        I'm ready for combat`
    },
    '123': {
        name: 'I Think He Knows', 
        youtube: 'https://www.youtube.com/watch?v=2d1wKn-oJnA', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `I think he knows
        His footprints on the sidewalk
        Lead to where I can't stop
        Go there every night
        I think he knows
        His hands around a cold glass
        Make me wanna know that
        Body like it's mine
        
        He got that boyish look that I like in a man
        I am an architect, I'm drawing up the plans
        It's like I'm 17, nobody understands
        No one understands
        
        He got my heartbeat
        Skipping down 16th Avenue
        Got that, oh, I mean
        Wanna see what's under that attitude like
        I want you, bless my soul
        And I ain't gotta tell him, I think he knows
        I think he knows
        
        I think he knows
        When we get all alone
        I'll make myself at home
        And he'll want me to stay
        I think he knows
        He better lock it down
        Or I won't stick around
        'Cause good ones never wait (Ha)
        
        He got that boyish look that I like in a man
        I am an architect, I'm drawing up the plans
        He's so obsessed with me and, boy, I understand
        Boy, I understand
        
        He got my heartbeat (Heartbeat)
        Skipping down 16th Avenue
        Got that, oh, I mean (I mean)
        Wanna see what's under that attitude like
        I want you, bless my soul
        And I ain't gotta tell him, I think he knows
        I think he knows
        
        I want you, bless my
        I want you, bless my soul
        I want you, bless my
        I want you, bless my soul
        
        Lyrical smile, indigo eyes, hand on my thigh
        We can follow the sparks, I'll drive
        Lyrical smile, indigo eyes, hand on my thigh
        We can follow the sparks, I'll drive
        "So where we gonna go?"
        I whisper in the dark
        "Where we gonna go?"
        I think he knows
        
        He got my heartbeat (Heartbeat)
        Skipping down 16th Avenue (Baby)
        Got that, oh, I mean (I mean)
        Wanna see what's under that attitude like (Yeah)
        I want you, bless my soul
        And I ain't gotta tell him, I think he knows
        I think he knows
        
        I want you, bless my
        I want you, bless my soul
        I want you, bless my (Oh, baby)
        I want you, bless my soul (He got my heartbeat)
        I want you, bless my (Skipping down 16th Avenue, baby)
        I want you, bless my soul
        I want you, bless my soul
        And I ain't gotta tell him, I think he knows`
    },
    '124': {
        name: 'Miss Americana & The Heartbreak Prince', 
        youtube: 'https://www.youtube.com/watch?v=Kwf7P2GNAVw', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `You know I adore you, I'm crazier for you
        Than I was at sixteen, lost in a film scene
        Waving homecoming queens, marching band playing
        I'm lost in the lights
        American glory faded before me
        Now I'm feeling hopeless, ripped up my prom dress
        Running through rose thorns, I saw the scoreboard
        And ran for my life (Ah)
        
        No cameras catch my pageant smile
        I counted days, I counted miles
        To see you there, to see you there
        It's been a long time coming, but
        
        It's you and me, that's my whole world
        They whisper in the hallway, "She's a bad, bad girl" (Okay)
        The whole school is rolling fake dice
        You play stupid games, you win stupid prizes
        It's you and me, there's nothing like this
        Miss Americana and The Heartbreak Prince (Okay)
        We're so sad, we paint the town blue
        Voted most likely to run away with you
        
        My team is losing, battered and bruising
        I see the high fives between the bad guys
        Leave with my head hung, you are the only one
        Who seems to care
        American stories burning before me
        I'm feeling helpless, the damsels are depressed
        Boys will be boys then, where are the wise men?
        Darling, I'm scared (Ah)
        
        No cameras catch my muffled cries
        I counted days, I counted miles
        To see you there, to see you there
        And now the storm is coming, but
        
        It's you and me, that's my whole world
        They whisper in the hallway, "She's a bad, bad girl" (Okay)
        The whole school is rolling fake dice
        You play stupid games, you win stupid prizes
        It's you and me, there's nothing like this
        Miss Americana and The Heartbreak Prince (Okay)
        We're so sad, we paint the town blue
        Voted most likely to run away with you
        
        And I don't want you to (Go), I don't really wanna (Fight)
        'Cause nobody's gonna (Win), I think you should come home
        And I don't want you to (Go), I don't really wanna (Fight)
        'Cause nobody's gonna (Win), I think you should come home
        And I don't want you to (Go), I don't really wanna (Fight)
        'Cause nobody's gonna (Win), I just thought you should know
        And I'll never let you (Go) 'cause I know this is a (Fight)
        That someday we're gonna (Win)
        
        It's you and me, that's my whole world
        They whisper in the hallway, "She's a bad, bad girl"
        Oh, I just thought you should know (You should know)
        It's you and me, there's nothing like this (Like this)
        Miss Americana and The Heartbreak Prince (Okay)
        We're so sad, we paint the town blue (Paint it blue)
        Voted most likely to run away with you
        
        And I don't want you to (Go), I don't really wanna (Fight)
        'Cause nobody's gonna (Win), I think you should come home
        And I'll never let you (Go) 'cause I know this is a (Fight)
        That someday we're gonna (Win), I just thought you should know
        
        It's you and me, that's my whole world
        They whisper in the hallway, "She's a bad, bad girl"
        "She's a bad, bad girl"`
    },
    '125': {
        name: 'Paper Rings', 
        youtube: 'https://www.youtube.com/watch?v=8zdg-pDF10g', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `The moon is high
        Like your friends were the night that we first met
        Went home and tried to stalk you on the internet
        Now I've read all of the books beside your bed
        The wine is cold
        Like the shoulder that I gave you in the street
        Cat and mouse for a month or two or three
        Now I wake up in the night and watch you breathe
        
        (Ayy)
        Kiss me once 'cause you know I had a long night (Oh)
        Kiss me twice 'cause it's gonna be alright (Uh)
        Three times 'cause I waited my whole life (1, 2, 1, 2, 3, 4)
        
        I like shiny things, but I'd marry you with paper rings
        Uh huh, that's right
        Darling, you're the one I want, and
        I hate accidents except when we went from friends to this
        Uh huh, that's right
        Darling, you're the one I want
        In paper rings in picture frames in dirty dreams
        Oh, you're the one I want
        
        In the winter, in the icy outdoor pool
        When you jumped in first, I went in too
        I'm with you even if it makes me blue
        Which takes me back
        To the color that we painted your brother's wall
        Honey, without all the exes, fights, and flaws
        We wouldn't be standing here so tall, so
        
        (Ayy)
        Kiss you once 'cause I know you had a long night (Oh)
        Kiss you twice 'cause it's gonna be alright (Uh)
        Three times 'cause you waited your whole life (1, 2, 1, 2, 3, 4)
        Ah
        
        I like shiny things, but I'd marry you with paper rings
        Uh huh, that's right
        Darling, you're the one I want, and
        I hate accidents except when we went from friends to this
        Uh huh, that's right
        Darling, you're the one I want
        In paper rings in picture frames in dirty dreams
        Oh, you're the one I want
        
        I want to drive away with you
        I want your complications too
        I want your dreary Mondays
        Wrap your arms around me, baby boy
        I want to drive away with you
        I want your complications too
        I want your dreary Mondays
        Wrap your arms around me, baby boy
        Uh huh
        
        I like shiny things, but I'd marry you with paper rings
        Uh huh, that's right, you're the one I want
        I hate accidents except when we went from friends to this
        Ah-ah, darling, you're the one I want
        I like shiny things, but I'd marry you with paper rings
        Uh huh, that's right
        Darling, you're the one I want, and
        I hate accidents except when we went from friends to this
        Uh huh, that's right
        Darling, you're the one I want
        In paper rings in picture frames in all my dreams
        You're the one I want
        In paper rings in picture frames in all my dreams
        Oh, you're the one I want
        
        You're the one I want, one I want
        You're the one I want, one I want`
    },
    '126': {
        name: 'Cornelia Street', 
        youtube: 'https://www.youtube.com/watch?v=VikHHWrgb4Y', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `We were in the backseat
        Drunk on something stronger than the drinks in the bar
        "I rent a place on Cornelia Street"
        I say casually in the car
        We were a fresh page on the desk
        Filling in the blanks as we go
        As if the street lights pointed in an arrow head
        Leading us home
        
        And I hope I never lose you, hope it never ends
        I'd never walk Cornelia Street again
        That's the kinda heartbreak time could never mend
        I'd never walk Cornelia Street again
        And baby, I get mystified by how this city screams your name
        And baby, I'm so terrified of if you ever walk away
        I'd never walk Cornelia Street again
        I'd never walk Cornelia Street again
        
        Windows flung right open, autumn air
        Jacket 'round my shoulders is yours
        We bless the rains on Cornelia Street
        Memorize the creaks in the floor
        Back when we were card sharks, playing games
        I thought you were leading me on
        I packed my bags, left Cornelia Street
        Before you even knew I was gone
        
        But then you called, showed your hand
        I turned around before I hit the tunnel
        Sat on the roof, you and I
        
        I hope I never lose you, hope it never ends
        I'd never walk Cornelia Street again
        That's the kinda heartbreak time could never mend
        I'd never walk Cornelia Street again
        And baby, I get mystified by how this city screams your name
        And baby, I'm so terrified of if you ever walk away
        I'd never walk Cornelia Street again
        I'd never walk Cornelia Street again
        
        You hold my hand on the street
        Walk me back to that apartment
        Years ago, we were just inside
        Barefoot in the kitchen
        Sacred new beginnings
        That became my religion, listen
        
        I hope I never lose you
        I'd never walk Cornelia Street again
        Oh, never again
        And baby, I get mystified by how this city screams your name
        And baby, I'm so terrified of if you ever walk away
        I'd never walk Cornelia Street again
        I'd never walk Cornelia Street again
        
        I don't wanna lose you (Hope it never ends)
        I'd never walk Cornelia Street again
        I don't wanna lose you (Yeah)
        
        "I rent a place on Cornelia Street"
        I say casually in the car`
    },
    '127': {
        name: 'Death By A Thousand Cuts', 
        youtube: 'https://www.youtube.com/watch?v=GTEFSuFfgnU', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `My, my, my, my
        My, my, my, my
        My, my, my, my
        My, my, my, my
        My, my, my, my
        My, my, my, my
        My, my, my, my
        My, my, my, my
        
        Saying goodbye is death by a thousand cuts
        Flashbacks waking me up
        I get drunk, but it's not enough
        'Cause the morning comes and you're not my baby
        I look through the windows of this love
        Even though we boarded them up
        Chandelier's still flickering here
        'Cause I can't pretend it's okay when it's not
        It's death by a thousand cuts
        
        I dress to kill my time, I take the long way home
        I ask the traffic lights if it'll be alright
        They say, "I don't know"
        And what once was ours is no one's now
        I see you everywhere, the only thing we share
        Is this small town
        You said it was a great love, one for the ages
        But if the story's over, why am I still writing pages?
        
        'Cause saying goodbye is death by a thousand cuts
        Flashbacks waking me up
        I get drunk, but it's not enough
        'Cause the morning comes and you're not my baby
        I look through the windows of this love
        Even though we boarded them up
        Chandelier's still flickering here
        'Cause I can't pretend it's okay when it's not
        
        It's death by a thousand cuts
        
        My heart, my hips, my body, my love
        Tryna find a part of me that you didn't touch
        Gave up on me like I was a bad drug
        Now I'm searching for signs in a haunted club
        Our songs, our films, united we stand
        Our country, guess it was a lawless land
        Quiet my fears with the touch of your hand
        Paper cut stings from our paper-thin plans
        My time, my wine, my spirit, my trust
        Tryna find a part of me you didn't take up
        Gave you so much, but it wasn't enough
        But I'll be alright, it's just a thousand cuts
        
        I get drunk, but it's not enough
        'Cause you're not my baby
        I look through the windows of this love
        Even though we boarded them up
        Chandelier's still flickering here
        'Cause I can't pretend it's okay when it's not
        No, it's not
        It's death by a thousand cuts (You didn't touch)
        
        Tryna find a part of me that you didn't touch
        My body, my love, my trust (It's death by a thousand cuts)
        But it wasn't enough, it wasn't enough, no, no
        
        I take the long way home
        I ask the traffic lights if it'll be alright
        They say, "I don't know"`
    },
    '128': {
        name: 'London Boy', 
        youtube: 'https://www.youtube.com/watch?v=VsKoOH6DVys', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `[Idris Elba and James Corden:]
        We can go driving in, on my scooter
        Uh, you know, just 'round London
        Alright, yeah
        
        I love my hometown as much as Motown, I love SoCal
        And you know I love Springsteen, faded blue jeans, Tennessee whiskey
        But something happened, I heard him laughing
        I saw the dimples first and then I heard the accent
        They say home is where the heart is
        But that's not where mine lives
        
        You know I love a London boy
        I enjoy walking Camden Market in the afternoon
        He likes my American smile, like a child when our eyes meet
        Darling, I fancy you
        Took me back to Highgate, met all of his best mates
        So I guess all the rumors are true
        You know I love a London boy
        Boy, I fancy you (Ooh)
        
        And now I love high tea, stories from Uni, and the West End
        You can find me in the pub, we are watching rugby with his school friends
        Show me a gray sky, a rainy cab ride
        Babes, don't threaten me with a good time
        They say home is where the heart is
        But God, I love the English
        
        You know I love a London boy, I enjoy nights in Brixton
        Shoreditch in the afternoon
        He likes my American smile, like a child when our eyes meet
        Darling, I fancy you
        Took me back to Highgate, met all of his best mates
        So I guess all the rumors are true
        You know I love a London boy
        Boy, I fancy you
        
        So please show me Hackney
        Doesn't have to be Louis V up on Bond Street
        Just wanna be with you
        Wanna be with you
        Stick with me, I'm your queen
        Like a Tennessee Stella McCartney, on the Heath
        Just wanna be with you (Wanna be with you)
        Wanna be with you (Oh)
        
        You know I love a London boy, I enjoy walking SoHo
        Drinking in the afternoon (Yeah)
        He likes my American smile, like a child when our eyes meet
        Darling, I fancy you (You)
        Took me back to Highgate, met all of his best mates
        So I guess all the rumors are true (Yeah)
        You know I love a London boy (Oh)
        Boy (Oh), I fancy you (I fancy you, ooh)
        
        So please show me Hackney
        Doesn't have to be Louis V up on Bond Street
        Just wanna be with you
        I, I, I fancy you
        Oh whoa, oh, I
        Stick with me, I'm your queen
        Like a Tennessee Stella McCartney, on the Heath
        Just wanna be with you (Ooh)
        Wanna be with you
        I fancy you (Yeah), I fancy you
        Oh whoa, ah`
    },
    '129': {
        name: 'Soon You\'ll Get Better', 
        youtube: 'https://www.youtube.com/watch?v=tMoW5G5LU08', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `The buttons of my coat were tangled in my hair
        In doctor's office lighting, I didn't tell you I was scared
        That was the first time we were there
        Holy orange bottles, each night, I pray to you
        Desperate people find faith, so now I pray to Jesus too
        And I say to you
        
        Ooh-ah
        Soon, you'll get better
        Ooh-ah
        Soon, you'll get better
        Ooh-ah
        You'll get better soon
        'Cause you have to
        
        I know delusion when I see it in the mirror
        You like the nicer nurses, you make the best of a bad deal
        I just pretend it isn't real
        I'll paint the kitchen neon, I'll brighten up the sky
        I know I'll never get it, there's not a day that I won't try
        And I say to you
        
        Ooh-ah
        Soon, you'll get better
        Ooh-ah
        Soon, you'll get better
        Ooh-ah
        You'll get better soon
        'Cause you have to
        
        And I hate to make this all about me
        But who am I supposed to talk to?
        What am I supposed to do
        If there's no you?
        
        This won't go back to normal, if it ever was
        It's been years of hoping, and I keep saying it because
        'Cause I have to
        
        Ooh-ah
        You'll get better
        Ooh-ah
        Soon, you'll get better
        Ooh-ah
        You'll get better soon
        Ooh-ah
        Soon, you'll get better
        Ooh-ah
        Soon, you'll get better
        Ooh-ah
        You'll get better soon
        'Cause you have to
        `
    },
    '130': {
        name: 'Daylight', 
        youtube: 'https://www.youtube.com/watch?v=u9raS7-NisU', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `My love was as cruel as the cities I lived in
        Everyone looked worse in the light
        There are so many lines that I've crossed unforgiven
        I'll tell you the truth, but never goodbye
        
        I don't wanna look at anything else now that I saw you
        I don't wanna think of anything else now that I thought of you
        I've been sleeping so long in a twenty-year dark night
        And now I see daylight, I only see daylight
        
        Luck of the draw only draws the unlucky
        And so I became the butt of the joke
        I wounded the good and I trusted the wicked
        Clearing the air, I breathed in the smoke
        Maybe you ran with the wolves and refused to settle down
        Maybe I've stormed out of every single room in this town
        Threw out our cloaks and our daggers because it's morning now
        It's brighter now, now
        
        I don't wanna look at anything else now that I saw you
        (I can never look away)
        I don't wanna think of anything else now that I thought of you
        (Things will never be the same)
        I've been sleeping so long in a twenty-year dark night
        (Now I'm wide awake)
        And now I see daylight (daylight), I only see daylight (daylight)
        I only see daylight, daylight, daylight, daylight
        I only see daylight, daylight, daylight, daylight
        
        And I can still see it all (In my mind)
        All of you, all of me (Intertwined)
        I once believed love would be (Black and white)
        But it's golden (Golden)
        And I can still see it all (In my head)
        Back and forth from New York (Sneaking in your bed)
        I once believed love would be (Burning red)
        But it's golden
        Like daylight, like daylight
        Like daylight, daylight
        
        I don't wanna look at anything else now that I saw you
        (I can never look away)
        I don't wanna think of anything else now that I thought of you
        (Things will never be the same)
        I've been sleeping so long in a twenty-year dark night
        (Now I'm wide awake)
        And now I see daylight (I see daylight), I only see daylight (Ah)
        I only see daylight, daylight, daylight, daylight
        I only see daylight, daylight, daylight, daylight (Ah)
        (And I can still see it all)
        I only see daylight, daylight, daylight, daylight
        (And I can still see it all, back and forth from New York)
        I only see daylight, daylight, daylight, daylight
        (I once believed love would be burning red)
        
        Like daylight
        It's golden like daylight
        You gotta step into the daylight and let it go
        Just let it go, let it go
        I wanna be defined by the things that I love
        Not the things I hate
        Not the things that I'm afraid of, I'm afraid of
        Not the things that haunt me in the middle of the night
        I, I just think that
        You are what you lov`
    },
    '131': {
        name: 'False God', 
        youtube: 'https://www.youtube.com/watch?v=acQXa5ArHIk', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `We were crazy to think
        Crazy to think that this could work
        Remember how I said I'd die for you?
        We were stupid to jump
        In the ocean separating us
        Remember how I'd fly to you?
        
        And I can't talk to you when you're like this
        Staring out the window like I'm not your favorite town
        I'm New York City, I still do it for you, babe
        They all warned us about times like this
        They say the road gets hard and you get lost
        When you're led by blind faith, blind faith
        
        But we might just get away with it
        Religion's in your lips
        Even if it's a false god
        We'd still worship
        We might just get away with it
        The altar is my hips
        Even if it's a false god
        We'd still worship this love
        We'd still worship this love
        We'd still worship this love
        
        I know heaven's a thing
        I go there when you touch me, honey
        Hell is when I fight with you
        But we can patch it up good
        Make confessions and we're begging for forgiveness
        Got the wine for you
        
        And you can't talk to me when I'm like this
        Daring you to leave me just so I can try and scare you
        You're the West Village
        You still do it for me, babe
        They all warned us about times like this
        They say the road gets hard and you get lost
        When you're led by blind faith, blind faith
        
        But we might just get away with it
        Religion's in your lips
        Even if it's a false god
        We'd still worship
        We might just get away with it
        The altar is my hips
        Even if it's a false god
        We'd still worship this love
        We'd still worship this love
        We'd still worship this love, ah
        
        Still worship this love
        Even if it's a false god
        Even if it's a false god
        Still worship this love`
    },
    '132': {
        name: 'You Need To Calm Down', 
        youtube: 'https://www.youtube.com/watch?v=Dkk9gvTmCXY', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `You are somebody that I don't know
        But you're taking shots at me like it's Patrón
        And I'm just like, "Damn!
        It's 7 AM"
        
        Say it in the street, that's a knock-out
        But you say it in a tweet, that's a cop-out
        And I'm just like, "Hey!
        Are you OK?"
        
        And I ain't tryna mess with your self-expression
        But I've learned the lesson
        That stressing and obsessing
        'Bout somebody else is no fun
        And snakes and stones never broke my bones
        
        So, oh-oh, oh-oh, oh-oh, oh-oh, oh-oh!
        You need to calm down
        You're being too loud
        And I'm just like
        "Oh-oh, oh-oh, oh-oh, oh-oh, oh-oh!
        You need to just stop
        Like, can you just not step on my gown?
        You need to calm down"
        
        You are somebody that we don't know
        But you're coming at my friends like a missile
        Why are you mad
        When you could be GLAAD?
        (You could be GLAAD)
        
        Sunshine on the street at the parade
        But you would rather be in the dark ages
        Just making that sign
        Must've taken all night
        
        You just need to take several seats
        And then try to restore the peace
        And control your urges to scream
        About all the people you hate
        'Cause shade never made anybody less gay
        
        So, oh-oh, oh-oh, oh-oh, oh-oh, oh-oh!
        You need to calm down
        You're being too loud
        And I'm just like
        "Oh-oh, oh-oh, oh-oh, oh-oh, oh-oh!
        You need to just stop
        Like, can you just not step on his gown
        You need to calm down"
        
        And we see you over there on the Internet
        Comparing all the girls who are killing it
        But we figured you out
        We all know now
        We all got crowns
        You need to calm down
        
        Oh-oh, oh-oh, oh-oh, oh-oh, oh-oh!
        You need to calm down
        (You need to calm down)
        You're being too loud
        (You're being too loud)
        And I'm just like
        "Oh-oh, oh-oh, oh-oh, oh-oh, oh-oh!
        You need to just stop
        (Can you stop?)
        Like, can you just not step on our gowns
        You need to calm down"`
    },
    '133': {
        name: 'Afterglow', 
        youtube: 'https://www.youtube.com/watch?v=8HxbqAsppwU', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `I blew things out of proportion, now you're blue
        Put you in jail for something you didn't do
        I pinned your hands behind your back, oh
        Thought I had reason to attack, but no
        
        Fighting with a true love is boxing with no gloves
        Chemistry 'til it blows up, 'til there's no us
        Why'd I have to break what I love so much?
        It's on your face, and I'm to blame, I need to say
        
        Hey, it's all me, in my head
        I'm the one who burned us down
        But it's not what I meant
        Sorry that I hurt you
        I don't wanna do, I don't wanna do this to you (Ooh)
        I don't wanna lose, I don't wanna lose this with you (Ooh)
        I need to say, hey, it's all me, just don't go
        Meet me in the afterglow
        
        It's so excruciating to see you low
        Just wanna lift you up and not let you go
        This ultraviolet morning light below
        Tells me this love is worth the fight, oh
        
        I lived like an island, punished you with silence
        Went off like sirens, just crying
        Why'd I have to break what I love so much?
        It's on your face, don't walk away, I need to say
        
        Hey, it's all me, in my head
        I'm the one who burned us down
        But it's not what I meant
        I'm sorry that I hurt you
        I don't wanna do, I don't wanna do this to you (Ooh)
        I don't wanna lose, I don't wanna lose this with you (Ooh)
        I need to say, hey, it's all me, just don't go
        Meet me in the afterglow
        
        Tell me that you're still mine
        Tell me that we'll be just fine
        Even when I lose my mind
        I need to say
        Tell me that it's not my fault
        Tell me that I'm all you want
        Even when I break your heart
        I need to say
        
        Hey, it's all me, in my head
        I'm the one who burned us down
        But it's not what I meant
        Sorry that I hurt you
        I don't wanna do, I don't wanna do this to you (Ooh)
        I don't wanna lose, I don't wanna lose this with you (Ooh)
        I need to say, hey, it's all me, just don't go
        Meet me in the afterglow`
    },
    '134': {
        name: 'ME!', 
        youtube: 'https://www.youtube.com/watch?v=FuXNumBwDOM', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `[Taylor Swift:]
        I promise that you'll never find another like me
        
        I know that I'm a handful baby, uh
        I know I never think before I jump
        And you're the kind of guy the ladies want
        (And there's a lot of cool chicks out there)
        
        I know that I went psycho on the phone
        I never leave well enough alone
        And trouble's gonna follow where I go
        (And there's a lot of cool chicks out there)
        
        But one of these things is not like the others
        Like a rainbow with all of the colors
        Baby doll, when it comes to a lover
        I promise that you'll never find another like me-e-e-eh
        
        Ooh-ooh-ooh-ooh
        I'm the only one of me
        Baby, that's the fun of me-e-eh
        Ooh-ooh-ooh-ooh
        You're the only one of you
        Baby, that's the fun of you
        
        And I promise that nobody's gonna love you like me-e-e-eh
        
        [Brendon Urie, Taylor Swift:]
        I know I tend to make it about me
        I know you never get just what you see
        But I will never bore you, baby
        (And there's a lot of lame guys out there)
        
        And when we had that fight out in the rain
        You ran after me and called my name
        I never wanna see you walk away
        (And there's a lot of lame guys out there)
        
        'Cause one of these things is not like the others
        Living in winter, I am your summer
        Baby doll, when it comes to a lover
        I promise that you'll never find another like me-e-e-eh
        
        Ooh-ooh-ooh-ooh
        I'm the only one of me
        Let me keep you company-e-e-eh
        Ooh-ooh-ooh-ooh
        You're the only one of you
        Baby, that's the fun of you
        
        And I promise that nobody's gonna love you like me-e-e-eh
        
        [Single version:
        "Hey, kids.
        Spelling is fun!"]
        
        Girl, there ain't no "I" in "team"
        But you know there is a "me"
        Strike the band up 1, 2, 3
        I promise that you'll never find another like me
        
        Girl, there ain't no "I" in "team"
        But you know there is a "me"
        And you can't spell "awesome" without "me"
        I promise that you'll never find another like me-e-e-eh
        
        Yeah, ooh-ooh-ooh-ooh
        (And I want you, baby)
        I'm the only one of me
        (I'm the only one of me)
        Baby, that's the fun of me-e-e-eh
        (Baby, that's the fun of me)
        
        Ooh-ooh-ooh-ooh
        You're the only one of you
        Baby, that's the fun of you
        And I promise that nobody's gonna love you like me-e-e-eh
        
        Girl, there ain't no "I" in "team"
        Ooh-ooh-ooh-ooh
        But you know there is a "me"
        I'm the only one of me
        Baby, that's the fun of me-e-e-eh
        
        Strike the band up 1, 2, 3
        Ooh-ooh-ooh-ooh
        You can't spell "awesome" without "me"
        You're the only one of you
        Baby, that's the fun of you
        
        And I promise that nobody's gonna love you like me-e-e-eh`
    },
    '135': {
        name: 'It\'s Nice To Have A Friend', 
        youtube: 'https://www.youtube.com/watch?v=eaP1VswBF28', 
        album: 'Lover', 
        taylorsversion: 'no',
        lyrics: `Ooh
        Ooh
        
        School bell rings, walk me home
        Sidewalk chalk covered in snow
        Lost my gloves, you give me one
        "Wanna hang out?" Yeah, sounds like fun
        Video games, you pass me a note
        Sleeping in tents
        
        It's nice to have a friend (Ooh)
        It's nice to have a friend (Ooh)
        
        Light pink sky up on the roof
        Sun sinks down, no curfew
        20 questions, we tell the truth
        You've been stressed out lately, yeah, me too
        Something gave you the nerve
        To touch my hand
        
        It's nice to have a friend (Ooh)
        It's nice to have a friend (Ooh)
        
        Church bells ring, carry me home
        Rice on the ground looks like snow
        Call my bluff, call you "Babe"
        Have my back, yeah, every day
        Feels like home, stay in bed
        The whole weekend
        
        It's nice to have a friend (Ooh)
        It's nice to have a friend (Ooh)
        It's nice to have a friend (Ooh)
        It's nice to have a friend (Ooh)
        (Ooh)`
    },
    '136': {
        name: 'the 1', 
        youtube: 'https://www.youtube.com/watch?v=KsZ6tROaVOQ', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '137': {
        name: 'cardigan', 
        youtube: 'https://www.youtube.com/watch?v=K-a8s8OLBSE', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: `Vintage tee, brand new phone
        High heels on cobblestones
        When you are young, they assume you know nothing
        Sequin smile, black lipstick
        Sensual politics
        When you are young, they assume you know nothing
        
        But I knew you
        Dancing in your Levi's
        Drunk under a streetlight, I
        I knew you
        Hand under my sweatshirt
        Baby, kiss it better, I
        
        And when I felt like I was an old cardigan under someone's bed
        You put me on and said I was your favorite
        A friend to all is a friend to none
        Chase two girls, lose the one
        When you are young, they assume you know nothing
        
        But I knew you
        Playing hide-and-seek and
        Giving me your weekends
        I, I knew you
        Your heartbeat on the High Line
        Once in twenty lifetimes, I
        
        And when I felt like I was an old cardigan under someone's bed
        You put me on and said I was your favorite
        
        To kiss in cars and downtown bars
        Was all we needed
        You drew stars around my scars
        But now I'm bleeding
        
        'Cause I knew you
        Stepping on the last train
        Marked me like a bloodstain, I
        I knew you
        Tried to change the ending
        Peter losing Wendy
        I, I knew you
        Leaving like a father
        Running like water, I
        And when you are young, they assume you know nothing
        
        But I knew you'd linger like a tattoo kiss
        I knew you'd haunt all of my what-ifs
        The smell of smoke would hang around this long
        'Cause I knew everything when I was young
        I knew I'd curse you for the longest time
        Chasing shadows in the grocery line
        I knew you'd miss me once the thrill expired
        And you'd be standing in my front porch light
        And I knew you'd come back to me
        You'd come back to me
        And you'd come back to me
        And you'd come back
        
        And when I felt like I was an old cardigan under someone's bed
        You put me on and said I was your favorite`
    },
    '138': {
        name: 'the last great american dynasty', 
        youtube: 'https://www.youtube.com/watch?v=2s5xdY6MCeI', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '139': {
        name: 'exile', 
        youtube: 'https://www.youtube.com/watch?v=osdoLjUNFnA', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '140': {
        name: 'my tears ricochet', 
        youtube: 'https://www.youtube.com/watch?v=OWbDJFtHl3w', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '141': {
        name: 'mirrorball', 
        youtube: 'https://www.youtube.com/watch?v=KaM1bCuG4xo', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '142': {
        name: 'seven', 
        youtube: 'https://www.youtube.com/watch?v=pEY-GPsru_E', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '143': {
        name: 'august', 
        youtube: 'https://www.youtube.com/watch?v=nn_0zPAfyo8', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '144': {
        name: 'this is me trying', 
        youtube: 'https://www.youtube.com/watch?v=9bdLTPNrlEg', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '145': {
        name: 'illicit affairs', 
        youtube: 'https://www.youtube.com/watch?v=MLV2SJKWk4M', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '146': {
        name: 'invisible string', 
        youtube: 'https://www.youtube.com/watch?v=OuFnpmGwg5k', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '147': {
        name: 'mad woman', 
        youtube: 'https://www.youtube.com/watch?v=6DP4q_1EgQQ', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '148': {
        name: 'epiphany', 
        youtube: 'https://www.youtube.com/watch?v=DUnDkI7l9LQ', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '149': {
        name: 'betty', 
        youtube: 'https://www.youtube.com/watch?v=6TAPqXkZW_I', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '150': {
        name: 'peace', 
        youtube: 'https://www.youtube.com/watch?v=HpxX4ZE4KWE', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '151': {
        name: 'hoax', 
        youtube: 'https://www.youtube.com/watch?v=ryLGxpjwAhM', 
        album: 'folklore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '152': {
        name: 'the lakes', 
        youtube: 'https://www.youtube.com/watch?v=tOHcAc3r2kw`', 
        album: 'folklore (deluxe edition)', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '153': {
        name: 'willow', 
        youtube: 'https://www.youtube.com/watch?v=RsEZmictANA', 
        album: 'evermore', 
        taylorsversion: 'yes',
        lyrics: `I'm like the water when your ship rolled in that night
        Rough on the surface but you cut through like a knife
        And if it was an open/shut case
        I never would've known from that look on your face
        Lost in your current like a priceless wine
        
        The more that you say, the less I know
        Wherever you stray, I follow
        I'm begging for you to take my hand
        Wreck my plans, that's my man
        
        Life was a willow and it bent right to your wind
        Head on the pillow, I could feel you sneaking in
        As if you were a mythical thing
        Like you were a trophy or a champion ring
        And there was one prize I'd cheat to win
        
        The more that you say, the less I know
        Wherever you stray, I follow
        I'm begging for you to take my hand
        Wreck my plans, that's my man
        You know that my train could take you home
        Anywhere else is hollow
        I'm begging for you to take my hand
        Wreck my plans, that's my man
        
        Life was a willow and it bent right to your wind
        They count me out time and time again
        Life was a willow and it bent right to your wind
        But I come back stronger than a 90's trend
        
        Wait for the signal and I'll meet you after dark
        Show me the places where the others gave you scars
        Now this is an open/shut case
        I guess I should've known from the look on your face
        Every bait-and-switch was a work of art
        
        The more that you say, the less I know
        Wherever you stray, I follow
        I'm begging for you to take my hand
        Wreck my plans, that's my man
        You know that my train could take you home
        Anywhere else is hollow
        I'm begging for you to take my hand
        Wreck my plans, that's my man
        
        The more that you say, the less I know
        Wherever you stray, I follow
        I'm begging for you to take my hand
        Wreck my plans, that's my man
        You know that my train could take you home
        Anywhere else is hollow
        I'm begging for you to take my hand
        Wreck my plans, that's my man
        
        Hey, that's my man
        That's my man
        Yeah, that's my man
        Every bait-and-switch was a work of art
        That's my man
        Hey, that's my man
        I'm begging for you to take my hand
        Wreck my plans, that's my man`
    },
    '154': {
        name: 'champagne problems', 
        youtube: 'https://www.youtube.com/watch?v=wMpqCRF7TKg', 
        album: 'evermore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '155': {
        name: 'gold rush', 
        youtube: 'https://www.youtube.com/watch?v=Pz-f9mM3Ms8', 
        album: 'evermore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '156': {
        name: '\'tis the damn season', 
        youtube: 'https://www.youtube.com/watch?v=WuvhOD-mP8M', 
        album: 'evermore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '157': {
        name: 'tolerate it', 
        youtube: 'https://www.youtube.com/watch?v=ukxEKY_7MOc', 
        album: 'evermore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '158': {
        name: 'no body, no crime', 
        youtube: 'https://www.youtube.com/watch?v=IEPomqor2A8', 
        album: 'evermore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '159': {
        name: 'happiness', 
        youtube: 'https://www.youtube.com/watch?v=tP4TTgt4nb0', 
        album: 'evermore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '160': {
        name: 'dorothea', 
        youtube: 'https://www.youtube.com/watch?v=zI4DS5GmQWE', 
        album: 'evermore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '161': {
        name: 'coney island', 
        youtube: 'https://www.youtube.com/watch?v=c_p_TBaHvos', 
        album: 'evermore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '162': {
        name: 'ivy', 
        youtube: 'https://www.youtube.com/watch?v=9nIOx-ezlzA', 
        album: 'evermore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '163': {
        name: 'cowboy like me', 
        youtube: 'https://www.youtube.com/watch?v=YPlNBb6I8qU', 
        album: 'evermore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '164': {
        name: 'long story short', 
        youtube: 'https://www.youtube.com/watch?v=rqQHa2HcGtM', 
        album: 'evermore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '165': {
        name: 'marjorie', 
        youtube: 'https://www.youtube.com/watch?v=hP6QpMeSG6s', 
        album: 'evermore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '166': {
        name: 'closure', 
        youtube: 'https://www.youtube.com/watch?v=AIFnKqIeEdY', 
        album: 'evermore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '167': {
        name: 'evermore', 
        youtube: 'https://www.youtube.com/watch?v=EXLgZZE072g', 
        album: 'evermore', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '168': {
        name: 'right where you left me', 
        youtube: 'https://www.youtube.com/watch?v=Ur_wAcYDnuA', 
        album: 'evermore (deluxe edition)', 
        taylorsversion: 'yes',
        lyrics: ``
    },
    '169': {
        name: 'it\'s time to go', 
        youtube: 'https://www.youtube.com/watch?v=1iRbIYkccgw', 
        album: 'evermore (deluxe edition)', 
        taylorsversion: 'yes',
        lyrics: ``
    },
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/sotd', (req, res) => {
    console.log(use)
    console.log(usedSongs)
    console.log(songs[use])
    res.json(songs[use]);
});

app.listen(process.env.PORT || PORT);