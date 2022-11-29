const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017/";
const data = require("./data.json");

const client = new MongoClient(url);
console.log("created client");

async function main() {
  await client.connect();
  console.log("connected");

  //Q1. Create a database , give it name like ""Human_Resource"". Create a collection inside this named ""employee""

  const database = client.db("Human_Resource");
  const employee = database.collection("employee");
  console.log("created db");

  //inserting data to collection
  const insertData = await employee.insertMany(data);
  console.log(insertData);

  //Query the collection ""employee"" and list all the documents
  const findData = await employee.find({}).toArray();
  console.log(findData);

  //===================================================================================

  //Q2. Query the collection ""employee"" and list the employees who are having salary more than 30000
  const filteredData = await employee
    .find({
      salary: { $gt: "30000" },
    })
    .toArray();
  console.log(filteredData);

  //==========================================================================

  //Q3. Query the collection ""employee"" and list the employees who are having experience more than 2 years.
  const experiencedEmp = await employee
    .find({
      overallExp: { $gte: "2" },
    })
    .toArray();
  console.log(experiencedEmp);

  // ===========================================================================

  // Q4.Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year

  const graduatedEmp = await employee
    .find({
      $and: [{ yearGrad: { $gt: "2015" } }, { overallExp: { $gt: "1" } }],
    })
    .toArray();

  console.log(graduatedEmp);

  //   ==============================================================================

  //Q5. Query the collection ""employee"" and update the salary of the employee whose salary is greater than 15000 to 25000.

  const updateSalary = await employee.updateMany(
    {
      salary: { $gt: "15000" },
    },
    {
      $set: {
        salary: "25000",
      },
    }
  );
  console.log(updateSalary);

  // ==========================================================================

  //Q6. Delete all the documents from ""employee"" where last company is Y"

  const deleteEmp = await employee.deleteMany({
    lastCompany: "Y",
  });
  console.log(deleteEmp);
  console.log(await employee.find({}).toArray());


  
}
main();
