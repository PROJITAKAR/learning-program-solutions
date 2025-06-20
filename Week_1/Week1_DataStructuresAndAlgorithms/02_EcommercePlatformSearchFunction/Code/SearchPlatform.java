import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class SearchPlatform {

    // Linear search by product name
    public static Product linearSearch(Product[] products, String targetName) {
        for (Product product : products) {
            if (product.getProductName().equalsIgnoreCase(targetName)) {
                return product;
            }
        }
        return null;
    }

    // Binary search by product name (assumes sorted array)
    public static Product binarySearch(Product[] products, String targetName) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int comparison = products[mid].getProductName().compareToIgnoreCase(targetName);

            if (comparison == 0) return products[mid];
            else if (comparison < 0) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Watch", "Accessories"),
            new Product(104, "Phone", "Electronics"),
            new Product(105, "Tablet", "Electronics"),
            new Product(106, "Backpack", "Travel"),
            new Product(107, "Sunglasses", "Accessories"),
            new Product(108, "Camera", "Photography"),
            new Product(109, "Jeans", "Fashion"),
            new Product(110, "Headphones", "Electronics")
        };

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter product name to search: ");
        String target = sc.nextLine();

        // Linear Search
        Product foundLinear = linearSearch(products, target);
        System.out.println("\nLinear Search Result:");
        System.out.println(foundLinear != null ? foundLinear : "Product not found");

        // Sort for Binary Search
        Arrays.sort(products, Comparator.comparing(Product::getProductName));

        System.out.println("\nSorted Product List (by name):");
        for (Product p : products) {
            System.out.println(p);
        }

        // Binary Search
        Product foundBinary = binarySearch(products, target);
        System.out.println("\nBinary Search Result:");
        System.out.println(foundBinary != null ? foundBinary : "Product not found");
        sc.close();
    }
}
