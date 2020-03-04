const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://jacobsar:884eVabYm@cluster0-izhej.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
async function asyncCall() {
  // connect to your cluster
  const client = await MongoClient.connect(
    "mongodb+srv://jacobsar:884eVabYm@cluster0-izhej.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  // specify the DB's name
  const db = client.db("users");
  // execute find query
  /* Insert Example */
  //   var myObj = {
  //     ID: 100000,
  //     FirstName: "Kelly",
  //     LastName: "Sarosiek",
  //     UserID: "kellys",
  //     Pwd: "ks"
  //   };
  //   await db.collection("users").insertOne(myObj, function(err, res) {
  //     console.log(res);
  //   });

  /* Update Example */
  //   var myquery = { FirstName: "Kelly" };
  //   var newvals = { $set: { ID: 100001 } };
  //   await db.collection("users").updateOne(myquery, newvals, function(err, res) {
  //     console.log(res);
  //   });

  const items = await db
    .collection("users")
    .find({})
    .toArray();
  console.log(items);
  // close connection
  client.close();
}

asyncCall();
