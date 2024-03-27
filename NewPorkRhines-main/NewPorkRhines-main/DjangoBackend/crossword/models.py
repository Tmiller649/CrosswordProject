from importlib.metadata import MetadataPathFinder
from django.db import models

##ModuleNotFoundError: No module named 'PythonCrosswordGen'
# from PythonCrosswordGen.generator import *

# Create your models here.
# class Crossword (models.Model):
    
#we need to configure this model to take one of three difficulty arguments from the frontend. 
#The model will take the argument, create a puzzle, and output each word's data to the view

class Word(models.Model):
    vertical = models.BooleanField(null = False, default = False)
    answer = models.CharField(max_length=10,default = "", unique = True)
    initialHorizontal = models.IntegerField(null = False, default = 0)
    initialVertical = models.IntegerField(null = False, default = 0)
    clue = models.CharField(max_length=200, default = "", unique = True)
    complete = models.BooleanField(null = False, default = True)
    number = models.IntegerField(null = False, default = 0)


#A function that's supposed create a json file of the crossword
# true if a crossword was generated and false if not

# def cross_gen(difficulty):
#     structure = ''
#     words = 'PythonCrosswordGen/words-clueslist.txt'
#     easy = 'PythonCrosswordGen/grid/grid5x5.txt'
#     medium = 'PythonCrosswordGen/grid/grid57x7.txt'
#     hard = 'PythonCrosswordGen/grid/grid10x10.txt'
#     if difficulty == 'easy':
#         structure = easy
#     elif difficulty == 'medium':
#         structure = medium
#     else:
#         structure = hard
#     crossword = Crossword(structure, words)
#     creator = CrosswordCreator(crossword)
#     assignment = creator.solve()
#     if assignment is None:
#         return False
#     else:
#         creator.save(assignment,'random.js')
#         return True

