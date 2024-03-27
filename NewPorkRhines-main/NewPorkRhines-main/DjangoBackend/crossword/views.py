from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import WordSerializer
from .models import Word
from rest_framework.response import Response
from .PythonCrosswordGen.crossword import *
from .PythonCrosswordGen.generator import *
import json
from django.http import HttpResponse
import random

# Create your views here.
#def difficulty(request):
    #res = requests.get("url to on click difficulties")
    #return JsonResponse(res.json())

@api_view(['GET', 'POST'])

def word_list(request):
    random.seed();
    difficulty = request.query_params.get('difficulty'); # "Easy" "Medium" or "Hard" 
    
    structure = "C:/Users/carte/git/" + "NewPorkRhines/DjangoBackend/crossword/PythonCrosswordGen/" + ("grid/grid5x5_" + str(random.randint(1,3))  + ".txt" if difficulty == "Easy" else "grid/grid7x7_" + str(random.randint(1,3))  + ".txt" if difficulty == "Medium" else "grid/grid10x10_" + str(random.randint(1,3))  + ".txt");
    words = "C:/Users/carte/git/" + "NewPorkRhines/DjangoBackend/crossword/PythonCrosswordGen/words-clueslist.txt";
    
    crossword = Crossword(structure, words);
    creator = CrosswordCreator(crossword);
    assignment = creator.solve();

    result = creator.assignment_to_dict(assignment);
    
    return HttpResponse(json.dumps(result));
