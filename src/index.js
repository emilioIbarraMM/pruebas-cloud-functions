const functions = require('@google-cloud/functions-framework');
const { HelloService } = require('./services/hello.service');

functions.cloudEvent('helloCloudEvents', cloudEvent => {
  HelloService.sayHello();
  console.log(cloudEvent.specversion);
  console.log(cloudEvent.type);
  console.log(cloudEvent.source);
  console.log(cloudEvent.subject);
  console.log(cloudEvent.id);
  console.log(cloudEvent.time);
  console.log(cloudEvent.datacontenttype);
  const base64data = cloudEvent.data.message.data;
  const decodedData = base64data ? Buffer.from(base64data, 'base64').toString() : 'No data';
  console.log(`Mensaje de Pub/Sub: ${decodedData}`);
});
