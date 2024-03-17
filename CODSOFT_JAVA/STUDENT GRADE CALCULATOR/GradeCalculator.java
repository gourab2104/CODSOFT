import java.util.Scanner;

public class GradeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("STUDENT GRADE CALCULATOR");

        
        System.out.print("Enter student name: ");
        String studentName = scanner.nextLine();

        
        System.out.print("Enter the number of subjects: ");
        int numSubjects = scanner.nextInt();

        int totalMarks = 0;
        int maxMarksPerSubject = 100;

        for (int i = 1; i <= numSubjects; i++) {
            
            System.out.print("Enter name of Subject " + i + ": ");
            String subjectName = scanner.next();

            
            System.out.print("Enter marks for " + subjectName + " (out of " + maxMarksPerSubject + "): ");
            int subjectMarks = scanner.nextInt();

            
            if (subjectMarks < 0 || subjectMarks > maxMarksPerSubject) {
                System.out.println("Invalid marks! Please enter marks between 0 and " + maxMarksPerSubject + ".");
                i--; 
            } else {
                totalMarks += subjectMarks;
            }
        }

        double averagePercentage = (double) totalMarks / (numSubjects * maxMarksPerSubject) * 100;

        System.out.println("\nResults for " + studentName + ":");
        System.out.println("Total Marks: " + totalMarks + " out of " + (numSubjects * maxMarksPerSubject));
        System.out.println("Average Percentage: " + averagePercentage + "%");

        char grade;
        if (averagePercentage >= 90) {
            grade = 'A';
        } else if (averagePercentage >= 80) {
            grade = 'B';
        } else if (averagePercentage >= 70) {
            grade = 'C';
        } else if (averagePercentage >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        System.out.println("Grade: " + grade);

        switch (grade) {
            case 'A':
                System.out.println("Excellent! Keep up the good work.");
                break;
            case 'B':
                System.out.println("Good job! You performed well.");
                break;
            case 'C':
                System.out.println("Satisfactory. Keep improving.");
                break;
            case 'D':
                System.out.println("Needs improvement. Work harder.");
                break;
            default:
                System.out.println("Sorry! You have not passed this time.");
        }

        scanner.close();
    }
}
