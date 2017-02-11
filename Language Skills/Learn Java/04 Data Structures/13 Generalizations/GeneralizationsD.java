import java.util.*;

public class GeneralizationsD {
	public static void main(String[] args) {
		ArrayList<String> sports = new ArrayList<String>();
		sports.add("Football");
    sports.add("Boxing");


		for(String sport : sports) {
			System.out.println(sport);
		}

		//Major cities and the year they were founded
		HashMap<String, Integer> majorCities = new HashMap<String, Integer>();

		majorCities.put("New York", 1624);
		majorCities.put("London", 43);
		majorCities.put("Mexico City", 1521);
		majorCities.put("Sao Paulo", 1554);

		for ( String city : majorCities.keySet() ) {

			System.out.println(city + " was founded in " + majorCities.get(city));

		}
	}
}
