const repl = require("repl")

const prompt = require('prompt-sync')()

//This is a function for pausing code execution
function wait(ms)
{
    let start_time = new Date()
    let current_time = null
    do { current_time = new Date(); }
    while(current_time - start_time < ms)
}

//The following are the Madlib story options
magic_computer = function()
{
    //Taking input from the user
    const noun = prompt('Give me a noun ')
    const plural_noun = prompt('Now I need a plural noun ')
    const verb = prompt('Give me an action. It has to be present tense ')
    const verb_2 = prompt('Give me another action, also in present tense ')
    const body = prompt('Name a plural body part ')
    const adjective = prompt('Write an adjective ')
    const plural_noun_2 = prompt('Now I need a plural noun ')
    const adjective_2 = prompt('Write one more adjective ')

    //Cleaning the terminal
    console.clear()

    //Printing madlib story
    console.log(`Today, every student has a computer small enough to fit into their ${noun}`)
    console.log(`They can solve any math problem by simply pushing the computer's little ${plural_noun}.`)
    console.log(`Computers can add, multiply, divide, and ${verb}. They can also ${verb_2} better than a human.`)
    console.log(`Some computers are ${body}. Others have a/an ${adjective} screen that allows all kinds of`)
    console.log(`${plural_noun_2} and ${adjective_2} figures.`)
    

}

weather_report = function()
{
    //Taking input from the user
    const place = prompt('Give me a place ')
    const temperature = prompt('Give me a temperature in C ')
    const verb = prompt('Now I need a verb ')
    const name = prompt('What is your name? ')

    //Cleaning the terminal
    console.clear()

    //Printing madlib story
    console.log(`Good evening, TV viewers. This is the evening weather report for ${place} and vicinity.`)
    console.log(`The ${temperature} will be warm, and the humidity in the low 40s. There will be slight rain that will ${verb} and that is all.`)
    console.log(`Signing off for BNN TV, this is ${name}`)

}

star_trek = function()
{
    //Taking input from the user
    const name = prompt('Give me a cool name ')
    const activity = prompt('What is something you would most like to do right now ')
    const not_activity = prompt('What is something you would least like to do right now ')
    const name_2 = prompt('Give me a your name ')
    const date = prompt('Give me a date. Just the year ')
    const place = prompt('Name a country that is far away ')
    const bestfriend = prompt('Name your best friend ')

    //Cleaning the terminal
    console.clear()

    //Printing madlib story
    console.log(`Space, the final frontier `)
    console.log(`These are the voyages of the ship ${name}`)
    console.log(`Its five-year mission: ${activity}`)
    console.log(`To seek out new life and new civilizations, `)
    console.log(`to ${not_activity}`)
    console.log(`To boldly go where no human has gone before`)
    console.log(`S T A R       T R E K`)
    console.log(`Captain ${name_2}: CAPTAIN'S LOG, STARDATE ${date}`)
    console.log(`We are responding to a distress call from the scientific expedition to ${place}`)
    console.log(`Captain ${name_2}: Lieutenant ${bestfriend}, Please take over the helm while Mr. Spock and I beam down to investigate.`)

}

//This is the main number guessing function that starts and runs the number guessing game
number_guessing = function()
{
    //Printing start sequence
    console.log("\u001b[34m Welcome to Number Guessing")
    console.log("Here's how this game works. I will think of a whole number between 1 and 100.")
    console.log("Try to guess my number. After you guess, I will print 1-6 *s. ")
    console.log("1 * means you're very far from the actual number. 6 *s mean you're very close.")

    console.log("\n I'm thinking of a number now.")

    wait(3000)

    let number = Math.floor((Math.random() * 100) + 1)
    let going = 1

    console.log("\n Start guessing.")
    while(going == 1)
    {
        const guess = prompt('Your guess is ')
        let difference = Math.abs(guess - number)

        if(guess == number)
        {
            console.log("You guessed it ********! Congratulations")
            going = 0
            console.log("Exiting game...")
            wait(3000)
        }

        //Printing stars depending upon distance
        if (difference >= 64)
        {
            console.log("*")
        }

        if (difference >= 32)
        {
            console.log("*")
        }

        if (difference >= 16)
        {
            console.log("*")
        }

        if (difference >= 8)
        {
            console.log("*")
        }

        if (difference >= 4)
        {
            console.log("*")
        }

        if (difference >= 2)
        {
            console.log("*")
        }

        if (difference == 1)
        {
            console.log("*")
        }

    }

}


//This is the main hangman function that starts and runs the hangman game
hangman = function()
{

    //List containing hangman progression
    const hangmanPics = [
        ` 
          +---+
          |   |
              |
              |
              |
              |
        =========`, 
       
        ` 
          +---+
          |   |
          O   |
              |
              |
              |
        =========`, 
       
        ` 
          +---+
          |   |
          O   |
          |   |
              |
              |
        =========`, 
       
        ` 
          +---+
          |   |
          O   |
         /|   |
              |
              |
        =========`, 
       
        ` 
          +---+
          |   |
          O   |
         /|\\  |
              |
              |
        =========`, 
       
        ` 
          +---+
          |   |
          O   |
         /|\\  |
         /    |
              |
        =========`, 
       
        ` 
          +---+
          |   |
          O   |
         /|\\  |
         / \\  |
              |
        =========`]


    //List of words
    let movies = ["Dune", "Titanic", "Interstellar", "Dunkirk", "Joker", "Inception"]

    let places = ["London", "Ottawa", "Islamabad", "Vancouver", "Calgary", "Lahore"]

    let countries = ["Pakistan", "Canada", "USA", "France", "Japan", "Brazil"]

    //Printing starting sequence
    console.log("\u001b[33m Welcome to Hangman. ")
    console.log("We will play this game in English of course. I will present you with a list of options for the categories.")
    console.log("Once you have chosen the category, I will randomly pick a word from that category. I will print the number of dashes for the number of letters in the word.")
    console.log("Remember: uppercase and lowercase letters will be counted as different.")
    console.log("You have 7 guesses in total.")

    let playing = 1
    let choosing = 1
    let selected_word = ""
    let copy_of_selected_word = ""
    let tries = 0

    wait(1500)

    while(choosing == 1)
    {
        console.log("1: Movies")
        console.log("2: Places")
        console.log("3: Countries")

        let choice = prompt('What category would you like to guess from? ')

        //Input handling
        if (choice != 1 && choice != 2 && choice != 3)
        {
            console.clear()
            console.log("You added a wrong option. Please try again. ")
            continue
        }

        //Randomly choosing a word from list depending upon user input
        else if (choice == 1)
        {
            let number = Math.floor((Math.random() * 6))
            selected_word = movies[number]
            copy_of_selected_word = movies[number]
            choosing = 0
        }

        else if (choice == 2)
        {
            let number = Math.floor((Math.random() * 6))
            selected_word = places[number]
            copy_of_selected_word = places[number]
            choosing = 0
        }

        else if (choice == 3)
        {
            let number = Math.floor((Math.random() * 6))
            selected_word = countries[number]
            copy_of_selected_word = countries[number]
            choosing = 0
        }
    }


    let character_list = selected_word.split('')
    let current_stat = []
    
    for (let i = 0; i < character_list.length; i++ )
    {
        current_stat[i] = "_"
    }

    wait(1500)

    console.log("Let's beign!")

    //Main function that runs the game. 
    while(playing == 1)
    {
        console.clear()

        console.log(hangmanPics[tries])

        //Printing the current status of guessed letters
        for(let i = 0; i < current_stat.length; i++)
        {
            console.log(current_stat[i])
        }

        //Ends the game if you have guessed all the letters
        if(current_stat.includes("_") == false)
        {
            console.log("You won!")
            playing = 0
            console.log("Exiting game...")
            wait(3000)
            continue
        }

        //Ends the game if you are out of guesses
        if(tries == 6)
        {
            console.log("You are out of guesses. You lose!")
            playing = 0
            wait(3000)
            continue
        }


        console.log("Guesses left: ", 6 - tries)

        let guess = prompt('Your guess is ')

        //Runs if you have guesses left
        if(tries != 6)
        {
            if (guess.length != 1)
            {
                //Checking if the word you inputted is the same as the selected word
                if(guess == selected_word)
                {
                    console.log("You guessed right!")
                    playing = 0
                }

                else
                {
                    console.log("Tsk tsk. Wrong guess.")
                    tries +=1
                    continue
                }
            }

            else
            {
                //Checking if a guessed letter is in the selected word
                //If it is, we replace the letter with a _ in copy_of_selected_word and update the current_stat 
                if (copy_of_selected_word.includes(guess))
                {
                    var pos = copy_of_selected_word.indexOf(guess)
                    current_stat[pos] = guess
                    copy_of_selected_word = copy_of_selected_word.replace(guess, '_')

                    if(current_stat.includes("_") == false)
                    {
                        console.log("You won!")
                        playing = 0
                        console.log("Exiting game...")
                        wait(3000)
                        continue
                    }
                }

                else
                {
                    console.log("Wrong guess")
                    tries +=1 
                }
            }
        }

    }

    
}

//This is the main madlib function that starts and runs the madlib game
madlib = function()
{
    //Printing the startup sequence
    console.clear()
    console.log("\u001b[32m Welcome to Mad Libs!")
    console.log("We have three options for a story.")
    play = 1

    wait(1500)

    while(play == 1)
    {
        //Options for Madlib. User input will then move you to the specific option you chose.
        console.log("1: Magic Computers")
        console.log("2: Weather Report")
        console.log("3: Star Trek Introduction\n")
        console.log("4: To return to main menu\n")

        wait(1500)

        const choice = prompt('Which story would you like to play? ')

        //Input handling 
        if (choice != 1 && choice != 2 && choice != 3 && choice != 4 )
        {
            console.clear()
            console.log("You added a wrong option. Please try again. ")
            continue
        }


        else if (choice == 1)
        {
            magic_computer()

            //Giving an option to replay the game
            option = prompt('\n Would you like to play again? Enter 1 for yes and 0 for no ')
            if (option == 1)
            {
                continue
            }

            else
            {
                console.log("Exiting to menu...")
                wait(3000)
            }

            play = 0
        }

        else if (choice == 2)
        {
            weather_report()
            //Giving an option to replay the game
            option = prompt('\n Would you like to play again? Enter 1 for yes and 0 for no ')
            if (option == 1)
            {
                continue
            }

            else
            {
                console.log("Exiting to menu...")
                wait(3000)
            }


        }

        else if (choice == 3)
        {
            
            star_trek()
            //Giving an option to replay the game
            option = prompt('\n Would you like to play again? Enter 1 for yes and 0 for no ')
            if (option == 1)
            {
                continue
            }

            else
            {
                console.log("Exiting to menu...")
                wait(3000)
            }


        }

        else if (choice == 4)
        {
            play = 0
        }

    }

}

//Printing the startup screen
console.clear()
console.log("\n")
console.log("\u001b[35m     3-in-1     ")
console.log("    Game with    ")
console.log("   Javascript  \n")

wait(2000)

//Variable for keeping the while loop going
let playing = 1

//The main while loop which acts as the main menu for the game
while(playing == 1)
{
    console.clear()
    console.log("\n")
    console.log("Here are our list of options ")
    console.log("1: Madlib! ")
    console.log("2: Number Guessing")
    console.log("3: Hangman\n")
    console.log("4: Quit game\n")

    wait(2000)

    const choice = prompt('Which game would you like to play? ')

    if (choice != 1 && choice != 2 && choice != 3 && choice != 4 )
        {
            console.clear()
            console.log("You added a wrong option. Please try again. ")
            continue
        }
    
    else if (choice == 1)
        {
            madlib()
        }

    else if (choice == 2)
        {
            number_guessing()
        }

    else if (choice == 3)
        {
            hangman()
        }
    
    else if (choice == 4)
        {
            console.clear()
            console.log("\u001b[0m Quitting game...")
            playing = 0
            continue
        }


}

repl.start()