package com.org.palin;

import java.util.Scanner;

public class Palindrome {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a Number");
		int a = sc.nextInt();
		int rem = 0,b=a;
		while (a > 0) {
			rem = (rem * 10) + a % 10;
			a = a / 10;
		}
		if(rem == b) {
			System.out.println("PalinDrome");
		}else {
			System.out.println("Is not a PalinDrome");
		}
	}

}
