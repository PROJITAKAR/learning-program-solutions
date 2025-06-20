public class Logger {
    // Step 2: Private static instance
    private static Logger instance;

    // Step 2: Private constructor to prevent instantiation
    private Logger() {
        System.out.println("Logger instance created.");
    }

    // Step 2: Public method to return the same instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // A method to simulate logging
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
