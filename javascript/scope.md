Scope of a Variable:

#The scope of a variable is the area in your code where the variable can be accessed or used.


#Execution Context and Lexical Environment:

#Whenever a piece of code runs, it creates an execution context.

Along with this, a lexical environment is created, which is like a storage area for variables and functions.
The lexical environment also has a link to its parent environment (where it was created).
Accessing Parent's Variables:

This link to the parent environment allows a function to access variables and functions from its parent’s storage.
How JavaScript Looks for Variables:

When JavaScript needs to find a variable, it starts looking in the current environment.
If it doesn’t find the variable there, it moves up to the parent environment.
This process continues up the chain until the variable is found or there are no more environments to check.
Scope Chain:

This process of moving up through environments to find a variable is called the Scope Chain.
If the variable isn’t found in any environment, it’s considered out of scope.
In short, variables are searched in the current environment first, then in the parent’s environment, and so on, until the variable is found or no more environments are left to check.