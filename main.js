let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = 
    [
        '"The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt"',
        '"The best way to predict the future is to invent it. - Alan Kay"',
        '"Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll"',
        '"The purpose of our lives is to be happy. - Dalai Lama"',
        '"Get busy living or get busy dying. - Stephen King"',
        '"You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy"',
        '"Believe you can and youre halfway there. - Theodore Roosevelt"',
        '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson"',
        '"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer"',
        '"The only way to do great work is to love what you do. - Steve Jobs"',
        '"If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein"',
        '"The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb"',
        '"It does not matter how slowly you go as long as you do not stop. - Confucius"',
        '"Everything youve ever wanted is on the other side of fear. - George Addair"',
        '"The only impossible journey is the one you never begin. - Tony Robbins"',
        '"Happiness is not something ready made. It comes from your own actions. - Dalai Lama"',
        '"Dont watch the clock; do what it does. Keep going. - Sam Levenson"',
        '"You miss 100% of the shots you dont take. - Wayne Gretzky"',
        '"Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis"',
        '"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"'
    ];

btn.addEventListener('click', function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})
