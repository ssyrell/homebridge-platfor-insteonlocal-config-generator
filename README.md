# homebridge-platform-insteonlocal-config-generator

A command-line tool that uses the Insteon API to fetch your Insteon setup info and then generates the corresponding configuration for use with the [homebridge-platform-insteonlocal](https://github.com/kuestess/homebridge-platform-insteonlocal) plugin. 

Prerequisites
-------------
- An Insteon account setup with your hub/devices/scenes
- An Insteon API key (see below)
- Node.js installed on your machine


API Key
-------
This tool requires an Insteon API key in order to talk to the Insteon API. If you do not have one, you can request one [here](https://www.insteon.com/become-an-insteon-developer).

Once you have your API key, add a file named `.env` at the root of the repository with the following content:
```
API_KEY=<Your API Key Here>
```

Usage
-----
- Clone this repository
- Ensure you've setup your `.env` file as instructed in the [API Key]() section
- Run the tool:

```
node . [username] [password]
```

You can also run `npm link` from the repository root, and then run the tool from any directory with the following command:
```
insteon-config-generator [your-insteon-username] [your-insteon-password]
```

The generated configuration will be printed to your console/terminal window. This configuration should be copy/pasted into your overall homebridge configuration.json file.

What's New?
-----------
See the [changelog](changelog.md)

Current Limitations
-------------------
This tool currently looks at the first house on your account. If you have multiple houses, you will need to modify the code to choose the house you are interested in. _Multi-house support will be added soon_ 
