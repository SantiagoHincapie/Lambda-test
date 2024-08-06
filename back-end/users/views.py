
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status, viewsets
from .serializer import UserSerializer
from .models import Users

# Create your views here.


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = Users.objects.all()

    @action(detail=False, methods=['get'])
    def search(self, request):

        
        # Obtén los parámetros de la solicitud
        email = request.query_params.get('email', None)
        cedula = request.query_params.get('cedula', None)

        print(email,cedula)

        # Verifica que se hayan proporcionado ambos parámetros
        if email is None or cedula is None:
            return Response(
                {'detail': 'Debe proporcionar tanto email como cedula.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Busca el usuario en la base de datos
        try:
            user = Users.objects.get(email=email, cedula=cedula)
        except Users.DoesNotExist:
            return Response(
                {'detail': 'Usuario no encontrado.'},
                status=status.HTTP_404_NOT_FOUND
            )

        # Serializa y devuelve el usuario encontrado
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

        