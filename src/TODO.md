# TODO

- [x] Add rounds of play
    - [] As a user I should have 6 rounds to play.  If I guess incorrectly, I can guess again, but that round is marked as incorrect.  I must find the correct employee before I can advance to the next round by pressing the continue button at the bottom of the screen.
        - To do this: 
            - [] We need to have a round counter up to six.
            - [] Add logic to show final screen after 6 rounds.
            - [] Add state to capture if round was correct or incorrect.
- [ ] *Can Skip if necessary* Add method to capture time to make 1st selection in each round into array.     (Will use this list to get avg response time for last screen).
- [ ] Finish final game screen
    - As a user I should be able to see the final game screen after 6 rounds of play.
    - The final game screen should include the following items on the top half of the screen:
        - [ ] The name game logo.
        - [ ] The name game mascot with three shapes floating above it.
        - [ ] A congratulations message showing how many rounds were scored correctly.
        - [ ] A button that switches the game back to the selection screen and resets all selections.
    - The final game screen should include the following game metrics on the bottom half of the screen:
        - [ ] Correct Selections - percent of correct selections out of the total selections.
        - [ ] Incorrect Selections - precent of incorrect selections out of the total selections.
        - [ ] *Can Skip if necessary* Avg selection time - average of list of selection times.
- [ ] Fix styling issues.
- [ ] Add tests. Research how to test with react context.
    - [ ] "If I press "play" button, I should be taken to game screen.  There should be 1 randomPayer and 6 employees in the employeeList."
    - [ ] "If I choose a matching player, I should receive a "true" response."
    - [ ] "If I choose a non matching player, I should receive a "false" response."
    - [ ] "If I press the continue button, there should not be a selection present, and a new randomPlayer should be chosen."
    - [ ] Other tests???
- [ ] cleanup
    - [ ] remove unused dependancies
    - [ ] remove console.logs

# Updates
- [ ] Timed play
    ## TODO
        - [] Add button to home screen for timed play.  As a user, if I press this button, it will take me to the game screen with a timer.  I will have 30 seconds to guess as many rounds as possible.  I can only move to new round if an answer is correct, but I can select answers until I find the correct one.  Once the timer is 0, I will be taken to the game over screen.
- [ ] Practice round
    ## TODO
        - [] Add button to home screen for practice play.  As a user, if I press this button, it will take me to the game screen without a timer.  If I select an incorrect answer, I will be taken to a "game over" screen.  If I select a correct answer, I can continue by pressing the button until I choose incorrectly where I'll be taken to the game over screen.