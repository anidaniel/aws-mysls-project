const Responses = require("../common/API_responses");
const tableName = process.env.tableName;

exports.handler = async (event) => {
  console.log("event", event);

  if (!event.pathParameters || !event.pathParameters.ID) {
    // failed without an ID
    return Responses._400({ message: "missing the ID from the path" });
  }

  let ID = event.pathParameters.ID;

  const user = await Dynamo.get(ID, tableName).catch((err) => {
    console.log("Error in Dynamo GET");
    return null;
  });

  if (!user) {
    return Responses._400({ message: "failed to GET user by ID" });
  }

  return Responses._200({ user });
};
