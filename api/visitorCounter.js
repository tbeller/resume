const { TableClient } = require('@azure/data-tables');

const connectionString = process.env.AzureWebJobsStorage;
const tableName = "VisitorCounter";

module.exports = async function (context, req) {
    context.log(`VisitorCounter function triggered for URL "${req.url}"`);

    try {
        // Connect to Azure Table Storage
        const client = TableClient.fromConnectionString(connectionString, tableName);

        // Retrieve or initialize the visitor count
        let entity;
        try {
            entity = await client.getEntity("counter", "totalVisits");
        } catch (error) {
            if (error.statusCode === 404) {
                context.log("Entity not found. Initializing...");
                entity = {
                    partitionKey: "counter",
                    rowKey: "totalVisits",
                    count: "0",
                };
                await client.createEntity(entity);
            } else {
                throw error;
            }
        }

        // Increment the visitor count
        let currentCount = parseInt(entity.count, 10) || 0;
        currentCount += 1;

        // Update the entity in Azure Table Storage
        entity.count = currentCount.toString();
        await client.updateEntity(entity, "Replace");

        // Return the updated count
        context.res = {
            status: 200,
            body: { visitorCount: currentCount },
        };
    } catch (error) {
        context.log.error("Error processing visitor counter:", error);
        context.res = {
            status: 500,
            body: "An error occurred while processing the request.",
        };
    }
};
