/* Amplify Params - DO NOT EDIT
	API_TICTACTOE_GRAPHQLAPIENDPOINTOUTPUT
	API_TICTACTOE_GRAPHQLAPIIDOUTPUT
	API_TICTACTOE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const appsync = require("aws-appsync");
const gql = require("graphql-tag");
const { Expo } = require("expo-server-sdk");
require("cross-fetch/polyfill");

const ticketsQuery = gql`
    query listExpoTicketsObjects {
        listExpoTicketsObjects {
            items {
                tickets
                id
                createdAt
            }
        }
    }
`;

exports.handler = async event => {
    const graphqlClient = new appsync.AWSAppSyncClient({
        url: process.env.API_TICTACTOE_GRAPHQLAPIENDPOINTOUTPUT,
        region: process.env.REGION,
        auth: {
            type: "AWS_IAM",
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                sessionToken: process.env.AWS_SESSION_TOKEN
            }
        },
        disableOffline: true
    });

    const ticketsRes = await graphqlClient.query({
        query: ticketsQuery
    });

    const ticketsObjects = ticketsRes.data.listExpoTicketsObjects.items;
    for (const ticketsObject of ticketsObjects) {
        const ticket = JSON.parse(ticketsObject.tickets);
        console.log("#@#@#@#@#@#@#@ticket: ", ticket);
    }
};
