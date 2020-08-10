package com.org.palin;

import java.util.Scanner;

public class PalinCount {
	public static void main(String[] args) {
		int n = 0, a;
		for (a = 1; a <= 100; a++) {
			int rem = 0, b = a;
			while (a > 0) {
				rem = (rem * 10) + a % 10;
				a = a / 10;
			}
			if (rem == a){
				System.out.println("PalinDrome Number" + a);
				n++;
			}
		}
		System.out.println("Total PalinDrome Is = " + n);

	}
}
