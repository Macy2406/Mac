Feature: Amazon application order

Scenario Outline: login check
 

Given launch browser
When Enter the "<username>" and "<password>" 
Then Click login

Examples:
|username||password|
|9003052406||crazzy@240698|
|9876543323||0506987|


