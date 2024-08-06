from rest_framework import serializers
from .models import Users
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'
    
#    def validate(self, data):
#        if Users.objects.filter(cedula=data['cedula']).exists():
#            raise serializers.ValidationError({"cedula": "Cedula must be unique."})
#        if Users.objects.filter(email=data['email']).exists():
#            raise serializers.ValidationError({"email": "Email must be unique."})
#        return data