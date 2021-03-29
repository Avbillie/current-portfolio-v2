@navigation-bar

Feature: As a user I can navigate the page through its navigation links

    Feature Description

    Scenario: Resume pdf appears when user clicks resume navigation link in navigation bar
      When User navigates to current portfolio webpage
      And Navigates to navigation bar
      And Clicks on resume link
      Then A new browser window opens
      And displays the resume.pdf file
