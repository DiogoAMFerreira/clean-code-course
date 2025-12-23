# Clean Code Course

This is samples of code and small exercises from the following Course:
https://www.udemy.com/course/writing-clean-code/

The original repository can be found here:
https://github.com/academind/clean-code-course-code/tree/general-resources

# Course comments

## Avoid "Magic Numbers & Strings"

Based on the exercises in section four of the course:

There's one additional tweak you might want to make to the code.

At the moment, we always check for hard-coded string identifiers like "PAYPAL" or "CREDIT_CARD".

You typically want to avoid this - not primarily for readability reasons but to avoid errors (e.g. due to typos).

Hence it is a better practice to use globally defined enums - if your programming language supports that - or globally defined constants.

    const TYPE_CREDIT_CARD = 'CREDIT_CARD';
    // ...
    if (transaction.type === TYPE_CREDIT_CARD) { ... }

By doing that, you define a value once (in a place which is easily found and editable) and you then reuse the constant / variable. Hence you can't introduce accidental typos in parts of your code and you also avoid repeating the hard-coded value over and over again. That in turn is helpful if you ever want to change the identifier => You then only need to change it once.
