# Angular CLI + Bootstrap + Django DRF APP
This a sample APP using Bootstrap and Font Awesome with an app generated by Angular CLI, and Django DRF as backend.
In order for the backend to serve Angular frontend, 
a proxy configuration is set-up to route 4200 to port 8000 in proxy.conf.json.

Author: aislaapps

## Requirements
Python
Virtualenv
Pip
Node.js
NPM

## Setting Up Django DRF Backend
Note: Make sure you have set-up your virtualenv for Python

cd djangular_invoice_messages/backend/invoice_messages

pip install -r requirements/base.txt

## Setting Up Data
cd djangular_invoice_messages/backend/invoice_messages

#### Create Superuser
./manage.py createsuperuser

./manage.py migrate

#### Create Data
http://localhost:8000/admin/

## Setting Up Angular CLI Frontend
cd djangular_invoice_messages/frontend/messagesfrontend

npm install

npm run build

## Starting the APP
cd djangular_invoice_messages/backend/invoice_messages

./manage.py runserver

## Launch Frontend
http://localhost:8000/

## Access API Django DRF
http://localhost:8000/messages/