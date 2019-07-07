import faunadb, { query as q } from "faunadb";

const client = new faunadb.Client({ secret: process.env.REACT_APP_FAUNA_KEY });

const addNewClass = async newClass => {
  try {
    const ret = await client.query(q.CreateClass({ name: newClass }));
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

const addSingleRecord = async (className, data) => {
  try {
    const ret = await client.query(q.Create(q.Class(className), { data }));
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

const getSingleRecordByRef = async (className, itemRef) => {
  try {
    const ret = await client.query(q.Get(q.Ref(q.Class(className), itemRef)));
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

const deleteSingleRecordByRef = async (className, itemRef) => {
  try {
    const ret = await client.query(
      q.Delete(q.Ref(q.Class(className), itemRef))
    );
    console.log("Deleted: " + itemRef);
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

export {
  addNewClass,
  addSingleRecord,
  deleteSingleRecordByRef,
  getSingleRecordByRef,
  q
};

export default client;
