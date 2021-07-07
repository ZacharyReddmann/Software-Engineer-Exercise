# MFGx Software Engineer Exercise

This exercise is intended to let you demonstrate your knowledge of JavaScript, as well as sound design & testing principles. If you're unfamiliar with JavaScript, you may adapt the exercise into a language of your choice. Please be sure to read the requirements in depth, as well as the "What We're Looking For" section to understand how we'll be evaluating your solution.

## Requirements

Write an application to format the given data for Chirp Views into a single string, based on the following requirements:

1. Format the data into a string as follows:
   a. The chirp message itself
   b. The date of the chirp in MM/DD/YYYY format
   c. The number of views the chirp has
   d. The author’s name
   e. A fire emoji if the chirp has more than 100,000 views.
2. If the formatted string exceeds 140 characters, truncate the chirp message, and append “…” to it until the truncated message and remaining content can fit into 140 characters.

For example, if the following data were given, it the following outputs would be expected:

1. Message: Hello World!
   Author: Jack Daniels
   Date: 2021-06-28T07:00:00.000Z
   Views: 99999
   Formatted Output: Hello World! 06/28/2021 99999 Jack Daniels
2. Message: This is a maximum length chirp because I like writing long chirps. Why? I'm not really sure. Maybe I'm just a rebel.. or maybe it's a phase?
   Author: John Smith
   Date: 2021-04-22T00:00:00.000Z
   Views: 100
   Formatted Output: This is a maximum length chirp because I like writing long chirps. Why? I'm not really sure. Maybe I'm just a r... 04/22/2021 100 John Smith
3. Message: This chirp probably won't get a lot of attention.
   Author: Jane Doe
   Date: 2021-03-04T04:00:00.000Z
   Views: 251236
   Formatted Output: This chirp probably won't get a lot of attention. 03/04/2021 251236 Jane Doe 🔥
4. Message: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat quis turpis non consectetur. Sed accumsan dui rhoncus, cursus quis.
   Author: Lorem Ipsum
   Date: 2021-01-01T00:00:00.000Z
   Views: 1000001
   Formatted Output: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat quis turpis non consectetur. S... 01/01/2021 1000001 Lorem Ipsum 🔥

## What We’re Looking For

A solution to this exercise must:

1. Have clear and concise git commit history. Remember, your commits are how you communicate your thoughts about the code to other developers.
2. Pass all included unit tests.
3. Include unit tests covering any functions or logic you add to the application.
4. Adhere to good object-oriented or functional programming design & coding principles.
