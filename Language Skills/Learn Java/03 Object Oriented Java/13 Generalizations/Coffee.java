class Coffee extends Beverage{

	public Coffee() {

	}

	public void addSugar(int cubes) {

		System.out.println("You added " + cubes + " sugar cubes.");

	}

	public static void main(String[] args) {
		Coffee myOrder = new Coffee();
    myOrder.addSugar(2);
    myOrder.isFull();
	}
}
