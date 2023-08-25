# qa
## Testing Project

This project uses Cypress to conduct end-to-end tests on a web application. The tests are designed to validate the functionality of searching for GitHub repositories.

## Test Cases

The test cases are designed to cover the following functionalities:

1. **UI Structure Validation**: Checks if the main user interface components are present.
2. **Header Title Display**: Confirms if the title "Get Github Repos" is displayed correctly.
3. **Search Functionality: Input & Activation**: Tests the text input in the search field and the activation of the search.
4. **Repository Display**: Confirms that each found repository is displayed in a separate row and validates the display of the repository's name and description.
5. **Success and Error Messages**: Validates that a success message is displayed when the search is successful and an error message is displayed when an error occurs.

### Prioritization Criteria

The tests were prioritized based on the importance of the functionality to the user and the frequency of use:

1. **UI Structure Validation and Header Title Display**: These tests ensure that the user interface is presented correctly.
2. **Search Functionality**: As the search is the main functionality of the application, tests related to it were prioritized.
3. **Repository Display**: Correctly displaying search results is crucial for the user experience.
4. **Success and Error Messages**: It's important to provide feedback to the user about the success or failure of the search.


## List of test cases

#### #Automated
1. **Verify UI Structure**
   - TN1: Validate the presence of a header, search form, and search result section on the UI.
  
2. **Header Title Display**
   - TN2: Check if the header correctly displays the title "Get Github Repos".

3. **Search Functionality: Input & Activation**
    - TN3.0:Ensure the search form accepts text input.
    - TN3.1:Validate the activation of the search by clicking the "Go" button.
    - TN3.2:Confirm that pressing the "Enter" key also activates the search.

4. **Search Results Display**
    - TN4.0:Confirm that each found repo is displayed in a separate row.
    - TN4.1:Validate the display of the repo's name and description.
    - TN4.2:Check the redirection to the repo's URL when the repo name is clicked.

5. **Feedback on Search Result**
    - TN5.0:Validate that a success message is displayed above the search field when the search is successful.
    - TN5.1:Ensure an error message is displayed above the search field when the search action encounters an error.

#### #Not Automated

6. **Styling and Responsiveness**
    - TN6.0:Validate the styling properties such as font family, font size, and other CSS properties to ensure UI consistency.
    - TN6.1:Check the responsiveness of the UI across different viewport sizes.

7. **Miscellaneous**
    - TN15:Ensure favicon, apple touch icon, and manifest link tags are correctly rendered.
    - TN16:Validate other meta tags such as description, theme-color, and charset.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone [REPOSITORY_URL]
   ```

2. Navigate to the project directory:
```bash
cd [DIRECTORY_NAME]
```

3. Launch the application following the instructions from the repository: https://github.com/project-a/qa-automation-coding-challenge.
It should run on port 3000.


## Prerequisites to run the E2E Tests:
1. Install Node: https://nodejs.org/en/download
2. Install Cypress: https://docs.cypress.io/guides/getting-started/installing-cypress


## Run Cypress Tests

1. Open Cypress:
```bash 
npx cypress open
```
2. In the Cypress panel, click on the test file name you wish to run. Cypress will start the test in the browser.

or

1. Navigate to the `e2e` folder and run the command `npx cypress run` or `npm run test:cypress`

<sub>PS.: Was used for the cypress tests, as per the permission of the test document:</sub>

<sub><i>"Use any testing technology you'd like."</i></sub>
