package com.org.inher;

import com.org.inheri.Engineering;

public class Class extends Engineering {
	
	public void physiyo() {
		System.out.println("Physiyo");
	}

	public void dental() {
		System.out.println("Dental");
	}

	public void mbbs() {
		System.out.println("MBBs");
}
	public static void main(String[] args) {
	Class v=new Class();
	v.physiyo();
	v.dental();
	v.mbbs();
	v.bE();
	v.bTech();
	}
}