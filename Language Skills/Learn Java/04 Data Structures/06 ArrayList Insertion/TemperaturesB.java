import java.util.ArrayList;

public class TemperaturesB {

	public static void main(String[] args) {

		ArrayList<Integer> weeklyTemperatures = new ArrayList<Integer>();
		weeklyTemperatures.add(78);
		weeklyTemperatures.add(67);
		weeklyTemperatures.add(89);
		weeklyTemperatures.add(94);

    weeklyTemperatures.add(2, 111);
    System.out.println( weeklyTemperatures.get(3) );
	}
}
