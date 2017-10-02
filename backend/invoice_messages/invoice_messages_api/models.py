from django.db import models


class InvoiceFinalisationMessage(models.Model):
    referrence_number = models.IntegerField(default=0)
    customer_number = models.IntegerField(default=0)
    message_code = models.CharField(max_length=20)
    message = models.CharField(max_length=2000)
    message_date = models.DateTimeField('message date')

    def __str__(self):
        return "Customer:{} Invoice:{} Code:{} Message:{}".format(self.customer_number, self.referrence_number, self.message_code, self.message)

# class Question(models.Model):
#     question_text = models.CharField(max_length=200)
#     pub_date = models.DateTimeField('date published')
#
#     def __str__(self):
#         return "{} published on {}".format(self.question_text,self.pub_date)

# class Choice(models.Model):
#     question = models.ForeignKey(Question, on_delete=models.CASCADE)
#     choice_text = models.CharField(max_length=200)
#     votes = models.IntegerField(default=0)
#
#     def __str__(self):
#         return "Question ID:{} Choice:{}".format(self.question_id,self.choice_text)
