# canonical.design

This is the codebase for the canonical.design static website

## Architecture overview

This site is currently under-development.

## Development

The simplest way to run the site is:

- Create a python virtual environment (make sure you are using python3.8)
  `python3 -m venv .venv`
- Activate the virtual environment
  `source .venv/bin/activate`
- Install requirements
  `pip install -r requirements.txt`
- Install node modules
  `yarn install`
- Build the project
  `yarn build`
- Navigate to 'webapp' folder and run the project (assuming you currently at root)
  ```
  cd webapp
  flask run
  ```

Afterwards the website will be available at <http://localhost:5000>.
