# from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import generics, views
from ..models import InvoiceFinalisationMessage
from .serializers import InvoiceFinalisationMessageSerializer


class InvoiceMessages(generics.ListAPIView):
    model = InvoiceFinalisationMessage
    serializer_class = InvoiceFinalisationMessageSerializer
    queryset = InvoiceFinalisationMessage.objects.all()


def get_user_info(request):
    try:
        userid = request.META['HTTP_X_FORWARDED_USER']
    except KeyError:
        userid = request.META['USER']

    if userid is None:
        userid = request.user

    data = {'userid': userid ,
            'authenticated': request.user.is_authenticated}
    return JsonResponse(data)

# class InvoiceUserInfo(views.APIView):
#
#     def get(self, request, *args, **kwargs):
#         print('test amy user:',request.user)
#         print('test amy user.id:', request.user.id)
#         print('test amy user.is_authenticated:',request.user.is_authenticated())
#         print('test amy META:', request.META)
#         print('test amy META[USER]:', request.META['USER'])
#         return self.list(request, *args, **kwargs)