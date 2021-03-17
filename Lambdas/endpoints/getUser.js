const Responses = require("./API_responses");

exports.handler = async (event) => {
  console.log("event", event);

  if (!event.pathParameters || !event.pathParameters.ID) {
    // failed without an ID
    return Responses._400({ message: "missing the ID from the path" });
  }

  let ID = event.pathParameters.ID;

  if (data[ID]) {
    // return the data
    return Responses._200(data[ID]);
  }

  //failed as ID not in the data
  return Responses._400({ message: "No ID in the data" });
};

const data = {
  1234: { name: "Joey Tribianni", age: 27, job: "Actor" },
  7893: { name: "Chandler M Bing", age: 28, job: "SomethingToDoWithNumbers" },
  5132: { name: "Ross Geller", age: 28, job: "Paleontologist" },
};
