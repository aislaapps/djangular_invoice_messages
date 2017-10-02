from time import strftime

from rest_framework import serializers
from ..models import InvoiceFinalisationMessage


class InvoiceFinalisationMessageSerializer(serializers.Serializer):
    referenceNumber = serializers.IntegerField(source='referrence_number')
    customerNumber = serializers.IntegerField(source='customer_number')
    messageCode = serializers.CharField(source='message_code')
    message = serializers.CharField(max_length=2000)
    messageDate = serializers.DateTimeField(source='message_date',format=strftime("%Y-%m-%d %M:%H:%S"))

    class Meta:
        model = InvoiceFinalisationMessage
        fields = (
            '__all__'
        )
