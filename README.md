# NPM Platform Dependencies
Small script that allows you to specify OS-specific dependencies in your package.json and install them only in that OS.

Install via:

`npm install npm-platform-dependencies`

## Specify your packages inside package.json

Specify the specific dependencies for each platform, like:

```
"darwinDependencies": {
    "nodobjc": "latest"
},
"win32Dependencies": {
    "edge": "latest"
}
```

Then run:

```
npmpd
```

And that's it! Depending the platform where you run the command, it will install one or the other (or nothing if linux).

## Use with npm install
To use it just after npm install, put this script on the scripts section of package.json

```
"postinstall": "npmpd"
```

## Append your own arguments to the install process
Simply add any arguments to the npmpd call to have them appended to the `npm install` process.
The example below shows how you could append the `--ignore-scripts` argument to the install process.
```
npmpd --ignore-scripts
```

Or append the arguments at the scripts section of package.json
```
"postinstall": "npmpd --ignore-scripts"
```

## Inside the code
Be sure to make your code detect the platform you are running on, or you will end up requiring things you don't have installed!

## Motivation
I came across a problem where it would be useful to specify platform specific dependencies. For instance, when trying to deal with addons that connect to specific
os frameworks (Cocoa, .NET...). This is an easy solution if you don't want to deal with building a native addon with [node-gyp](https://github.com/nodejs/node-gyp), if
the functionalities you need are already in different os specific packages.

Another use case would be when dealing with wrappers of os specific programs, and you want to link to one or the other depending the platform you run your program with.

## License

MIT License Copyright (c) 2016 Alberto Fernandez
