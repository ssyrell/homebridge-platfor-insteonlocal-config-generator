# homebridge-platform-insteonlocal-config-generator

A command-line tool that uses the Insteon API to fetch your Insteon setup info and then generates the corresponding configuration for use with the [homebridge-platform-insteonlocal](https://github.com/kuestess/homebridge-platform-insteonlocal) plugin. 

What's New?
-----------
See the [changelog](./CHANGELOG.md)

Prerequisites
-------------
- An Insteon account setup with your hub/devices/scenes
- An Insteon API key (see below)
- Node.js installed on your machine


API Key
-------
This tool requires an Insteon API key in order to talk to the Insteon API. If you do not have one, you can request one [here](https://www.insteon.com/become-an-insteon-developer).

Once you have your API key, modify the `.env` file at the root of the repository and set your api key:
```
API_KEY=<Your API Key Here>
```

Usage
-----
- Clone this repository
- Ensure you've setup your `.env` file as instructed in the [API Key](https://github.com/ssyrell/homebridge-platform-insteonlocal-config-generator#api-key) section above
- Run the tool:

```
node . [username] [password]
```

You can also run `npm link` from the repository root, and then run the tool from any directory with the following command:
```
insteon-config-generator [your-insteon-username] [your-insteon-password]
```

The generated configuration will be printed to your console/terminal window. This configuration should be copy/pasted into your overall homebridge configuration.json file.


Current Limitations
-------------------
This tool currently only generates a configuration for the first house on your account. If you have multiple houses, you will need to modify the code to choose the house you are interested in. _Multi-house support will be added soon_ 

What's Coming?
--------------
- Support for multiple houses
- A website front-end deployed in the cloud that users can leverage directly.
