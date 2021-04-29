### Register 
#### POST http://localhost:3600/api/v1/register

Body 
`
{
    "user" : "username",
    "email" : "email@example.com",
    "password" : "12345678"
}
`

Response
`
{
    "status": "success",
    "data": {
        "_id": "sJgiedTGRbW7pyJB",
        "email": "exampsle2@dasds.dsd"
    }
}
`

### Login 
#### POST http://localhost:3600/api/v1/login

Body 
`
{
    "email" : "email@example.com",
    "password" : "12345678"
}
`

Response
`
{
    "status": "success",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5FakNrNDVVRjQzSFRFZnEiLCJpYXQiOjE2MTk1MzYyODd9.8-GJFUCtFlH6UnUrLl3-zsaCuywgzIlxd-eESCyZx6g"
    }
}
`

### Feed 
#### GET http://localhost:3600/api/v1/feed

Response
`
[
   {
        "storeName": "Fruits Unlimited",
        "name": "Raspberry",
        "description": "Box of Raspberrys.",
        "price": {
            "price": 0.99,
            "discount": 0
        },
        "images": [
            "http://localhost:3000/images/raspberry.jpeg"
        ],
        "_id": "2XhiH7KdRUfEuFrz"
    } 
]
`

### Create Order 
#### POST http://localhost:3600/api/v1/orders

Headers
Authorization : ACCESS_TOKEN

Body 
`
{
    "cart" : ["2XhiH7KdRUfEuFrz"]
}
`

Response
`
{
    "userid": "nEjCk45UF43HTEfq",
    "items": [
        "2XhiH7KdRUfEuFrz"
    ],
    "status": "INPROGRESS",
    "_id": "VPP5kX9A5v0cF3bs"
}
`

### Get Orders
#### GET http://localhost:3600/api/v1/orders

Headers
Authorization : ACCESS_TOKEN

Body 
`
{
    "cart" : ["2XhiH7KdRUfEuFrz"]
}
`

Response
`
[
    {
        "items": [
            "2XhiH7KdRUfEuFrz"
        ],
        "status": "DELIVERED",
        "_id": "VPP5kX9A5v0cF3bs"
    }
]
`

### Get Orders
#### GET http://localhost:3600/api/v1/orders/:orderid

Headers
Authorization : ACCESS_TOKEN

Response
`
{
        "items": [
            "2XhiH7KdRUfEuFrz"
        ],
        "status": "DELIVERED",
        "_id": "VPP5kX9A5v0cF3bs"
}
`

### Add Friend
#### POST localhost:3600/api/v1/friends

Headers
Authorization : ACCESS_TOKEN

Body 
`
{
    "id" : "ZP9eMiSZYrlOD5dC"
}
`

Response
`
[
    
]
`

### Get Users
#### GET localhost:3600/api/v1/users

Headers
Authorization : ACCESS_TOKEN


Response `
{
    "status": "success",
    "data": [
        {
            "email": "example2@dasds.dsd",
            "_id": "ZP9eMiSZYrlOD5dC"
        }
    ]
}
`

### Get Users
#### GET http://localhost:3600/api/v1/users/:ID

Headers
Authorization : ACCESS_TOKEN

Response `
{
    "status": "success",
    "data": {
        "email": "example2@dasds.dsd",
        "_id": "ZP9eMiSZYrlOD5dC"
    }
}`

### Change password
#### POST localhost:3600/api/v1/forgotpassword

Headers
Authorization : ACCESS_TOKEN

Body
`
    {
        "password" : "NEW_PASSWORD"
    }
`

Response 
`
{
    "status": "success",
    "data": {
        "email": "example@dasds.dsd"
    }
}
`

### Add Address
#### POST http://localhost:3600/api/v1/settings/address

Headers
Authorization : ACCESS_TOKEN

Body 
`
    "address" : "ADDRESS COME HERE"
`

Response
`
{
    "email": "example@dasds.dsd",
    "_id": "nEjCk45UF43HTEfq",
    "friends": [
        "ZP9eMiSZYrlOD5dC"
    ],
    "addresses": [
        "403927492472947209497289456 457683567865736578436586356 4365643 7856438725 453 532523 5",
        "ldkkjsfkj hskjds hfksdhfkjhsd kfhdkj hfdkshfjd glkflhgds flhjsdjfdshjfg jhsdf",
        "dsalkdhfkjshfshfhdsk hhfjksh fjkhskjfhs klfhdshkjf hdskjfhkdshf khskjdfhsdkjf hkjsdhfhsdkf hksdj"
    ]
}
`