const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({
    secret: "fnADzfsjYDACB0ddwbhgDkORu44cndfLFHKu_c0s",
});

const getFaunaposts = async() => {
    try {
        const { data } = await client.query(
            q.Map(
                q.Paginate(q.Documents(q.Collection("posts"))),
                q.Lambda((x) => q.Select(["data"], q.Get(x)))
            )
        );
        return data;
    } catch (e) {
        console.log(e);
    }
};

// faunaposts
export default getFaunaposts;