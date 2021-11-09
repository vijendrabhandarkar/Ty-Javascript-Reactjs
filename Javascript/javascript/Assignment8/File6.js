// Example for class in javascript properties
class Foo {
    bar = 2
    static iha = 'string'
  }
  
  const foo = new Foo();
  console.log(foo.bar, foo.iha, Foo.bar, Foo.iha);
//   (2)
class Article {
    static publisher = "Ilya Kantor";
  }
  
  console.log( Article.publisher );

// Example for class in javascript  static methods
class ClassWithStaticMethod {
    static staticMethod() {
      return 'static method has been called.';
    }
  }
  
  console.log(ClassWithStaticMethod.staticMethod());

//Example for class in javascript  static methods   
class ClassWithPublicInstanceMethod {
    publicMethod() {
      return 'hello world'
    }
  }
  
  const instance = new ClassWithPublicInstanceMethod()
  console.log(instance.publicMethod())