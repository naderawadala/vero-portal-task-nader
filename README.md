# vero-portal-task

This task was completed using React.js and PHP. The API call directly logs in the user from preset credentials in the backend as soon as the frontend is loaded and displays the relevant data in a table that has pagination as well as searching and limiting the amount of elements displayed.

Furthermore the API is called once every 60 minutes and updates the table with the new data if there is any.

At the bottom there is a modal that can be used to upload and preview images.

## How to run the project
In the project directory, type the following in console to run the frontend.

### `npm run start`

For the backend, navigate to src/api and type in the following:

### `php -S localhost:8000`

Both have to be running at the same time in order for the front end to be able to extract the data and display it.

