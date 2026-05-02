
Feature: User API

Scenario: Create user
  Given payload is ready
  When user sends POST request
  Then status should be 201

Scenario: Get user
  Given payload is ready
  When user fetches user
  Then status should be 200

Scenario: Validate response schema
  Given payload is ready
  When user sends POST request
  Then validate schema

Scenario: Create another user
  Given payload is ready
  When user sends POST request
  Then status should be 201

Scenario: Fetch again
  Given payload is ready
  When user fetches user
  Then status should be 200

Scenario: Repeat create
  Given payload is ready
  When user sends POST request
  Then status should be 201

Scenario: Repeat fetch
  Given payload is ready
  When user fetches user
  Then status should be 200

Scenario: Negative test
  Given payload is ready
  When user sends POST request
  Then status should be 201

Scenario: Edge test
  Given payload is ready
  When user sends POST request
  Then status should be 201

Scenario: Final test
  Given payload is ready
  When user fetches user
  Then status should be 200
