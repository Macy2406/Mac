package com.scope.Mine;

import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step extends BaseClass {

	@Given("^launch browser$")
	public void launch_brows() throws Throwable {
		launchBroswer("chrome");
		launchUrl("https://www.facebook.com/");
		Implisit();
	}

	@When("^Enter the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_the_and(String arg1, String arg2) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(arg1);
		Implisit();
		driver.findElement(By.id("pass")).sendKeys(arg2);
	}

	@Then("^Click login$")
	public void click_login() throws Throwable {
		driver.findElement(By.id("u_0_b")).click();
		
	}

}
