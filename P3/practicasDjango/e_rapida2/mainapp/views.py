from django.shortcuts import render, redirect

#Create your views here.
def index(request):
    return render(request,'mainapp/index.html',{
        'tittle':'Inicion | Pagina principal',
        'content':'..::¡Bienvenido a mBienvenido a mi pagina priincipali pagina priincipal!::..'
    })

def about(request):
    return render(request,'mainapp/about.html',{
        'tittle':'Acerca de',
        'content':'..::Somos un equipo de Desarrollo de SW con DJango::..'
    })

def mision(request):
    return render(request,'mainapp/mision.html',{
        'tittle':'Mision de la UTD',
    })


def vision(request):
    return render(request,'mainapp/vision.html',{
        'tittle':'Vision de la UTD',
    })

def inicio_sesion(request):
    return render(request,'mainapp/inicio_sesion.html',{
        'tittle':'Inicio de secion',
        'content':'Formuario de inicio de secion',
    })

def registro(request):
    return render(request,'mainapp/registro.html',{
        'tittle':'Registro',
        'content':'Formuario de registro',
    })
# Redirige a la URL deseada, por ejemplo, la página de inicio con error 404 1er forma
def redireccion_404(request, exception):
    return redirect('inicio')

# Redirige a la URL deseada, por ejemplo, la página de inicio con error 404 2da forma
def error404_2(request, exception):
    return render(request,'mainapp/404.html')