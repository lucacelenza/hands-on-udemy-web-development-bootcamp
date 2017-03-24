##Command line basic exercise

* Make a new folder named "Animals"
* Inside of "Animals" add 2 directories: "AwesomeAnimals" and "SketchyAnimals"
* Inside of "AwesomeAnimals" add the following files: "Capybara.js", "ArcticFox.html", and "TreeFrog.txt"
* Inside of "SketchyAnimals" add the following files: "BrownRecluse.html" and "BulletAnt.js"
* Also inside of "SketchyAnimals" create a "Snakes" directory
* Inside the "Snakes" directory add the following files: "Cobra.css" and "ReticulatedPython.py"
* You have a change of heart and decide that Bullet Ants are no longer sketchy: remove the "BulletAnt.js" files
* All animal life goes extint: delete the entire "Animals" directory
 
** BONUS: See if you can do this without ever changing directories (without using cd) **

mkdir Animals
mkdir Animals/AwesomeAnimals
mkdir Animals/SketchyAnimals
touch Animals/AwesomeAnimals/Capybara.js
touch Animals/AwesomeAnimals/ArcticFox.html
touch Animals/AwesomeAnimals/TreeFrog.txt
touch Animals/SketchyAnimals/BrownRecluse.css
touch Animals/SketchyAnimals/BulletAnt.js
mkdir Animals/SketchyAnimals/Snakes
touch Animals/SketchyAnimals/Snakes/Cobra.css
touch Animals/SketchyAnimals/Snakes/ReticulatedPython.py
rm Animals/SketchyAnimals/BulletAnt.js
rm -rf Animals