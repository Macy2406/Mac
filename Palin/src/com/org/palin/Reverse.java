package com.org.palin;

import java.util.Scanner;

public class Reverse {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a Number");
		int a = sc.nextInt();
		int rem = 0;
		while (a > 0) {
			rem = (rem * 10) + a % 10;
			a = a / 10;
		}
		System.out.println("The Reverse Num Is = " + rem);
	}
}
