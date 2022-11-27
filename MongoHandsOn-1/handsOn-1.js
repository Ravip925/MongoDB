//Mongo HandsOn 1 - using mongoshell

//Q1. Create a database , give it name like ""Human_Resource"". Create a collection inside this named ""employee""
//Query the collection ""employee"" and list all the documents

// test> show dbs
// AWS              72.00 KiB
// Human_Resource   40.00 KiB
// Meta             72.00 KiB
// Microsoft        72.00 KiB
// admin            40.00 KiB
// classdb         144.00 KiB
// config          108.00 KiB
// local

// test> use Human_Resource
// switched to db Human_Resource
// Human_Resource> show collections
// employee

Human_Resource> db.employee.insertMany([
    {
        "firstName": "John",
        "lastName": "Doe",
        "salary": "25000",
        "department": "HR",
        "lastCompany": "X",
        "lastSalary": "10000",
        "overallExp": "2",
        "contactInfo": "1234567890",
        "yearGrad": "2016",
        "gradStream": "CSE"
      },
      {
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },
      {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
      },
      {
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },
      {
        "firstName": "Jame",
        "lastName": "roh",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
      },
      {
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },
      {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
      },
      {
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },
      {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
      },
      {
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },
      {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
      },
      {
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },
      {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
      }
])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId("637f7e778467da8e1bbf17c9"),
//     '1': ObjectId("637f7e778467da8e1bbf17ca"),
//     '2': ObjectId("637f7e778467da8e1bbf17cb"),
//     '3': ObjectId("637f7e778467da8e1bbf17cc"),
//     '4': ObjectId("637f7e778467da8e1bbf17cd"),
//     '5': ObjectId("637f7e778467da8e1bbf17ce"),
//     '6': ObjectId("637f7e778467da8e1bbf17cf"),
//     '7': ObjectId("637f7e778467da8e1bbf17d0"),
//     '8': ObjectId("637f7e778467da8e1bbf17d1"),
//     '9': ObjectId("637f7e778467da8e1bbf17d2"),
//     '10': ObjectId("637f7e778467da8e1bbf17d3"),
//     '11': ObjectId("637f7e778467da8e1bbf17d4"),
//     '12': ObjectId("637f7e778467da8e1bbf17d5")
//   }
// }


Human_Resource> db.employee.find().pretty();
[
    {
        _id: ObjectId("637f7e778467da8e1bbf17c9"),
        firstName: "John",
        lastName: "Doe",
        salary: "25000",
        department: "HR",
        lastCompany: "X",
        lastSalary: "10000",
        overallExp: "2",
        contactInfo: "1234567890",
        yearGrad: "2016",
        gradStream: "CSE",
    },
    {
        _id: ObjectId("637f7e778467da8e1bbf17ca"),
        firstName: "Rohan",
        lastName: "Jame",
        salary: "30000",
        department: "Technical",
        lastCompany: "Y",
        lastSalary: "15000",
        overallExp: "1",
        contactInfo: "1234567860",
        yearGrad: "2015",
        gradStream: "CSE",
    },
    {
        _id: ObjectId("637f7e778467da8e1bbf17cb"),
        firstName: "Jame",
        lastName: "Doe",
        salary: "35000",
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: "20000",
        overallExp: "1",
        contactInfo: "123567890",
        yearGrad: "2019",
        gradStream: "ECE",
    },
    {
        _id: ObjectId("637f7e778467da8e1bbf17cc"),
        firstName: "Sao",
        lastName: "Avika",
        salary: "30000",
        department: "Sales",
        lastCompany: "Y",
        lastSalary: "15000",
        overallExp: "2",
        contactInfo: "1234567860",
        yearGrad: "2015",
        gradStream: "CSE",
    },
    {
        _id: ObjectId("637f7e778467da8e1bbf17cd"),
        firstName: "Jame",
        lastName: "roh",
        salary: "35000",
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: "15000",
        overallExp: "2",
        contactInfo: "123567890",
        yearGrad: "2019",
        gradStream: "EEE",
    },
    {
        _id: ObjectId("637f7e778467da8e1bbf17ce"),
        firstName: "Rohan",
        lastName: "Jame",
        salary: "30000",
        department: "Technical",
        lastCompany: "Y",
        lastSalary: "15000",
        overallExp: "1",
        contactInfo: "1234567860",
        yearGrad: "2015",
        gradStream: "CSE",
    },
    {
        _id: ObjectId("637f7e778467da8e1bbf17cf"),
        firstName: "Jame",
        lastName: "Doe",
        salary: "35000",
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: "20000",
        overallExp: "1",
        contactInfo: "123567890",
        yearGrad: "2019",
        gradStream: "ECE",
    },
    {
        _id: ObjectId("637f7e778467da8e1bbf17d0"),
        firstName: "Sao",
        lastName: "Avika",
        salary: "30000",
        department: "Sales",
        lastCompany: "Y",
        lastSalary: "15000",
        overallExp: "2",
        contactInfo: "1234567860",
        yearGrad: "2015",
        gradStream: "CSE",
    },
    {
        _id: ObjectId("637f7e778467da8e1bbf17d1"),
        firstName: "Jame",
        lastName: "Doe",
        salary: "35000",
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: "15000",
        overallExp: "2",
        contactInfo: "123567890",
        yearGrad: "2019",
        gradStream: "EEE",
    },
    {
        _id: ObjectId("637f7e778467da8e1bbf17d2"),
        firstName: "Rohan",
        lastName: "Jame",
        salary: "30000",
        department: "Technical",
        lastCompany: "Y",
        lastSalary: "15000",
        overallExp: "1",
        contactInfo: "1234567860",
        yearGrad: "2015",
        gradStream: "CSE",
    },
    {
        _id: ObjectId("637f7e778467da8e1bbf17d3"),
        firstName: "Jame",
        lastName: "Doe",
        salary: "35000",
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: "20000",
        overallExp: "1",
        contactInfo: "123567890",
        yearGrad: "2019",
        gradStream: "ECE",
    },
    {
        _id: ObjectId("637f7e778467da8e1bbf17d4"),
        firstName: "Sao",
        lastName: "Avika",
        salary: "30000",
        department: "Sales",
        lastCompany: "Y",
        lastSalary: "15000",
        overallExp: "2",
        contactInfo: "1234567860",
        yearGrad: "2015",
        gradStream: "CSE",
    },
    {
        _id: ObjectId("637f7e778467da8e1bbf17d5"),
        firstName: "Jame",
        lastName: "Doe",
        salary: "35000",
        department: "Accounts",
        lastCompany: "Z",
        lastSalary: "15000",
        overallExp: "2",
        contactInfo: "123567890",
        yearGrad: "2019",
        gradStream: "EEE",
    },
];


// =============================================================

//Q2. Query the collection ""employee"" and list the employees who are having salary more than 30000.

Human_Resource> db.employee.find({"salary": {$gt:"30000"}}).pretty()
[
  {
    _id: ObjectId("637f7e778467da8e1bbf17cb"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17cd"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17cf"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17d1"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17d3"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17d5"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]


// ===============================================================================

//Q3. Query the collection ""employee"" and list the employees who are having experience more than 2 years.

Human_Resource> db.employee.find({"overallExp": {$gte:"2"}}).pretty()
[
  {
    _id: ObjectId("637f7e778467da8e1bbf17c9"),
    firstName: 'John',
    lastName: 'Doe',
    salary: '25000',
    department: 'HR',
    lastCompany: 'X',
    lastSalary: '10000',
    overallExp: '2',
    contactInfo: '1234567890',
    yearGrad: '2016',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17cc"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17cd"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17d0"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17d1"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17d4"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17d5"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]

// ===========================================================================================

//Q4.Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year 

Human_Resource> db.employee.find(
{$and:[{"yearGrad": {$gt:"2015"}},{"overallExp": {$gt: "1"}}]
}
).pretty();


[
  {
    _id: ObjectId("637f7e778467da8e1bbf17c9"),
    firstName: 'John',
    lastName: 'Doe',
    salary: '25000',
    department: 'HR',
    lastCompany: 'X',
    lastSalary: '10000',
    overallExp: '2',
    contactInfo: '1234567890',
    yearGrad: '2016',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17cd"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17d1"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17d5"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]

// =======================================================================================

//Q5. Query the collection ""employee"" and update the salary of the employee whose salary is greater than 15000 to 25000.

Human_Resource> db.employee.updateMany({"salary" : {$gt: "15000"}},{$set: {"salary" : "25000"}});

// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 13,
//   modifiedCount: 12,
//   upsertedCount: 0
// }



Human_Resource> db.employee.find({"salary" : {$gt: "15000"}}).pretty()
[
  {
    _id: ObjectId("637f7e778467da8e1bbf17c9"),
    firstName: 'John',
    lastName: 'Doe',
    salary: '25000',
    department: 'HR',
    lastCompany: 'X',
    lastSalary: '10000',
    overallExp: '2',
    contactInfo: '1234567890',
    yearGrad: '2016',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17ca"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '25000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17cb"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '25000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17cc"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '25000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17cd"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '25000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17ce"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '25000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17cf"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '25000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17d0"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '25000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17d1"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '25000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17d2"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '25000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17d3"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '25000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17d4"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '25000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("637f7e778467da8e1bbf17d5"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '25000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]


// ========================================================================

//Q6. Delete all the documents from ""employee"" where last company is Y"

Human_Resource> db.employee.deleteMany({ "lastCompany": "Y" });

//{ acknowledged: true, deletedCount: 6 }

Human_Resource> db.employee.find().pretty()
[
  {
    _id: ObjectId("6382dd5b2531b7c14ad2e836"),
    firstName: 'John',
    lastName: 'Doe',
    salary: '25000',
    department: 'HR',
    lastCompany: 'X',
    lastSalary: '10000',
    overallExp: '2',
    contactInfo: '1234567890',
    yearGrad: '2016',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6382dd5b2531b7c14ad2e838"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '25000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6382dd5b2531b7c14ad2e83a"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '25000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6382dd5b2531b7c14ad2e83c"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '25000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6382dd5b2531b7c14ad2e83e"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '25000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6382dd5b2531b7c14ad2e840"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '25000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6382dd5b2531b7c14ad2e842"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '25000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]
