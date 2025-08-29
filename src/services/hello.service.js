class HelloService {
  static sayHello = (name = "Juanito") => {
    console.log(`Hola ${name}`);
  };
}

module.exports = { HelloService };
