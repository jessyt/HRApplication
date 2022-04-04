from pymongo import MongoClient
import random
client = MongoClient('mongodb+srv://db_admin:lGl5pvlG7eFrS0qo@jessycluster.g7jbl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

db = client.myFirstDatabase
  
employeeCollection = db.employees
deductionCollection = db.deductions

# Wipe employee database
employeeCollection.delete_many({})

emp_1 = {
            "firstName" : "Rick",
            "lastName" : "Astley",
            "age" : "72",
            "title": "Singer",
            "salary": "300000"
        }
emp_2 = {
            "firstName" : "Lady",
            "lastName" : "Gaga",
            "age" : "32",
            "title": "Singer",
            "salary": "500000"
        }
emp_3 = {
            "firstName" : "Edgar",
            "lastName" : "Allan Poe",
            "age" : "95",
            "title": "Writer",
            "salary": "100000"
        }
emp_4 = {
            "firstName" : "Daniel",
            "lastName" : "Radcliffe",
            "age" : "27",
            "title": "Wizard",
            "salary": "80000"
        }
emp_5 = {
            "firstName" : "Lady",
            "lastName" : "In Red",
            "age" : "40",
            "title": "Wearing Red",
            "salary": "100000"
        }
  
# # Insert Data
employeeCollection.insert_one(emp_2)  
employeeCollection.insert_one(emp_3)
employeeCollection.insert_one(emp_4)
employeeCollection.insert_one(emp_5)  

# Wiping deduction collection
deductionCollection.delete_many({})
cursor = employeeCollection.find()

# Random values for filling deduction table 
for record in cursor:
    value_1 = {
        "employeeId": str(record["_id"]),
        "type": "Pre-Tax",
        "amount": random.randint(500, 3000)
    }
    deductionCollection.insert_one(value_1)
    value_2 = {
        "employeeId": str(record["_id"]),
        "type": "Post-Tax",
        "amount": random.randint(500, 3000)
    }
    deductionCollection.insert_one(value_2)
    value_3 = {
        "employeeId": str(record["_id"]),
        "type": "Stocks",
        "amount": random.randint(500, 3000)
    }
    deductionCollection.insert_one(value_3)