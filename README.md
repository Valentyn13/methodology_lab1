# Quadratic Equation Solver

## Description 

This is a console application designed to solve quadratic equations, it supports two modes of operation: interactive and non-interactive (file) mode.

In the interactive mode (application is launched without any arguments) application prompts user to enter the values of the coefficients a, b, and c one by one, then displays the resulting equation on the screen, and computes and displays the roots of the equation. If user enter invalid values he will see an error and application prompts him to try again. 

In the non-interactive (file) mode, application accepts a single argument, which is the path to a file with coefficients of the equation. The file should contain three numbers separated by a single space.

## How to Run

### To start in interactive mode:
```
$ node main.js
```

### To start in interactive mode:
```
$ node main.js /path/to/file
```

## Application output

### Interactive mode:

```
Enter the coefficient a: 1
Enter the coefficient b: 2.7
Enter the coefficient c: -3.1
------------------------------
a = 1
b = 2.7
c = -3.1
Equation is: (1)x^2 + (2.7)x +(-3.1) = 0 
There are 2 roots:
 x1 = 0.8686707732333789
 x2 = -3.568670773233379
```
Example with wrong input
```
Enter the coefficient a: 2
Enter the coefficient b: 3
Enter the coefficient c: gosha)
Please enter a numerical value
Enter the coefficient c: putin loh
Please enter a numerical value
Enter the coefficient c: -5
-------------------------------
a = 2
b = 3
c = -5
Equation is: (2)x^2 + (3)x +(-5) = 0     
There are 2 roots:
 x1 = 1
 x2 = -2.5
```
Example with 0 roots
```
Enter the coefficient a: 2
Enter the coefficient b: 2
Enter the coefficient c: 2
--------------------------
a = 2
b = 2
c = 2
Equation is: (2)x^2 + (2)x +(2) = 0
There is 0 roots
```
Example with 1 root
```
Enter the coefficient a: 1
Enter the coefficient b: -6
Enter the coefficient c: 9
-------------------------
a = 1
b = -6
c = 9
Equation is: (1)x^2 + (-6)x +(9) = 0
There is 1 root:
x = 3
```

### Non-interactive

File numbers.txt: 1 2.7 -3.1

```
$node main.js numbers.txt
Equation is: (1)x^2 + (2.7)x +(-3.1) = 0
There are 2 roots:
 x1 = 0.8686707732333789
 x2 = -3.568670773233379
```
File numbers.txt: 1 -6 9 
```
Equation is: (1)x^2 + (-6)x +(9) = 0 
There is 1 root:
x = 3
```
File numbers.txt: 3 2.7 t

```
$node main.js numbers.txt
invalid file format
```

File numbers.txt: -3 6 -6

```
$node main.js numbers.txt
Equation is: (-3)x^2 + (6)x +(-6) = 0 
There is 0 roots
```

# Link on Revert Commit