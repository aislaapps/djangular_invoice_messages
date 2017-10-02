from django.conf.urls import url
from .api.views import InvoiceMessages, get_user_info


urlpatterns = [

    # url(r'^/', InvoiceMessages.as_view(), name="invoice_messages")
    # url(r'/?', InvoiceMessages.as_view()),
    url(r'userid/$', get_user_info),
    url(r'$', InvoiceMessages.as_view()),
]