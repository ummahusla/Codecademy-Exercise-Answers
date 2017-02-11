class Dog {
  int age;
	public Dog(int dogsAge){
    age = dogsAge;
  }
  public void bark(){
    System.out.println("Woof!");
  }
  public void run(int feet){
    System.out.println("Your dog ran " + feet + " feet!");
  }
	public static void main(String[] args) {
    Dog spike = new Dog(4);
    spike.bark();
    spike.run(12);
	}
}
