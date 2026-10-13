const https = require('https');
const icons = [
  'openai', 'anthropic', 'googlegemini', 'google', 'meta', 'mistral', 'huggingface', 
  'pytorch', 'tensorflow', 'scikitlearn', 'langchain', 'xgboost', 'amazonwebservices', 
  'googlecloud', 'microsoftazure', 'kubernetes', 'ray', 'mlflow', 'weightsandbiases',
  'snowflake', 'databricks', 'pinecone', 'weaviate', 'qdrant', 'apachekafka', 'dbt',
  'apacheairflow', 'apachespark'
];

async function check() {
  for (let icon of icons) {
    await new Promise(resolve => {
      https.get(`https://cdn.simpleicons.org/${icon}`, (res) => {
        console.log(`${icon}: ${res.statusCode}`);
        resolve();
      });
    });
  }
}
check();
