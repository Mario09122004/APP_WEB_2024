from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from articulos.models import Article,Category
# Create your views here.

@login_required(login_url='inicio')
def list_art(request):
    
    #Se realiza una consulta *
    articulos = Article.objects.all()

    return render(request,'articulos/listado_articulos.html',{
        'title':'Articulos',
        'content':'Lista de Articulos',
        'articulos':articulos,
    })

@login_required(login_url='inicio')
def list_cat(request):

    #Se realiza una consulta *
    categorias = Category.objects.all()

    return render(request,'categorias/listado_cat.html',{
        'title':'Categorias',
        'content':'Lista de Categorias',
        'categorias':categorias,
    })