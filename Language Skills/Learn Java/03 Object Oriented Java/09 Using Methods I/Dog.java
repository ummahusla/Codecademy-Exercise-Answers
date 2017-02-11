class Dog {
  int age;
	public Dog(int dogsAge){
    age = dogsAge;
  }
  public void bark(){
    System.out.println("Woof!");
  }
	public static void main(String[] args) {
    Dog spike = new Dog(4);
    spike.bark();
	}
}
