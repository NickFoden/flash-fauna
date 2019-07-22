import faunadb, { query as q } from "faunadb";

const client = new faunadb.Client({ secret: process.env.REACT_APP_FAUNA_KEY });

const addNewCollection = async newCollection => {
  try {
    const ret = await client.query(q.CreateCollection({ name: newCollection }));
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

const addSingleRecord = async (collectionName, data) => {
  try {
    const ret = await client.query(
      q.Create(q.Collection(collectionName), { data })
    );
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

const getSingleRecordByRef = async (collectionName, itemRef) => {
  try {
    const ret = await client.query(
      q.Get(q.Ref(q.Collection(collectionName), itemRef))
    );
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

const deleteSingleRecordByRef = async (collectionName, itemRef) => {
  try {
    const ret = await client.query(
      q.Delete(q.Ref(q.Collection(collectionName), itemRef))
    );
    console.log("Deleted: " + itemRef);
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

const getAllCards = async () => {
  try {
    const ret = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index("all_cards"))),
        q.Lambda("X", q.Get(q.Var("X")))
      )
    );
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

export {
  addNewCollection,
  addSingleRecord,
  deleteSingleRecordByRef,
  getAllCards,
  getSingleRecordByRef,
  q
};

export default client;
