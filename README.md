# Ventera Code Challenge Notes
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This code has been tested with NodeJS v8.12.0
This code has no third-party dependencies.

This code explicitely matches the code challenge instructions, and does not have any functionality asked for. It transforms the raw data, into the data structure provided by the example ```data-transformed.json``` file (now ```data-transformed.example.json```).

Testing for this code was a manual check of the output file to make sure it matches requirements.

To run:
``` bash
git clone https://github.com/justindonnaruma/ventera-code-challenge.git
cd ventera-code-challenge
node transform.js
```

## Questions I have
### Is the source data likely to change structure?
If the data is likely to change, I would add in sanity checks to make sure the input data is the correct structure.

### Is this going to be run manually or in an automated process?
If it was going to be used in an automated process, I would add additional alerting functionality to ensure that only the proper data was transformed. If it wasn't the proper data, it would error and send an alert to a logging system or email, depending on requirements.

