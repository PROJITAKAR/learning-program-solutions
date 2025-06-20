import java.util.Scanner;

public class FinancialForecast {

    public static double forecastValue(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return forecastValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter initial value (e.g., 10000): ");
        double initialValue = sc.nextDouble();

        System.out.print("Enter annual growth rate in percent (e.g., 8 for 8%): ");
        double annualGrowthRate = sc.nextDouble() / 100; 

        System.out.print("Enter number of years: ");
        int years = sc.nextInt();

        double futureValue = forecastValue(initialValue, annualGrowthRate, years);

        System.out.printf("Predicted value after %d years: Rs %.2f%n", years, futureValue);

        sc.close();
    }
}
