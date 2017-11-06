<img src="https://remotestorage.io/img/widget-demo.gif" width="364" height="468">

# remotestorage-widget

A ready-to-use connect/sync widget, as add-on library for
[remoteStorage.js](https://github.com/remotestorage/remotestorage.js/).

## Usage

```js
import RemoteStorage from 'remotestoragejs';
import Widget from 'remotestorage-widget';

// ...

const remoteStorage = new RemoteStorage(/* options */);

remoteStorage.access.claim('bookmarks', 'rw');

const widget = new Widget(remoteStorage);
widget.attach();

// ...
```

## Configuration

The widget has some configuration options to customize the behavior:

| Option | Description | Type | Default |
|---|---|---|---|
| `leaveOpen` | Keep the widget open when user clicks outside of it | Boolean | false |
| `autoCloseAfter` | Timeout after which the widget closes automatically (in milliseconds). The widget only closes when a storage is connected. | Number | 1500 |
| `logging` | Enable logging for debugging purposes | Boolean | false |

Example:

```js
const widget = new Widget(remoteStorage, { autoCloseAfter: 2000 });
```

## Available Functions

`attach(elementID)` - Attach the widget to the DOM and display it. You can
use an optional element ID that the widget should be attached to.
Otherwise it will be attached to the body.

While the `attach()` method is required for the widget to be actually
shown, the following functions are usually not needed. They allow for
fine-tuning the experience.

`close()` - Close/minimize the widget to only show the icon.

`open()` - Open the widget when it's minimized.

`toggle()` - Switch between open and closed state.

## Development / Customization

Install deps:

    npm install

Build, run and watch demo/test app:

    npm start

The demo app will then be served at http://localhost:8008
