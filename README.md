# Clean Alert - Vanilla Version

This repository contains the Vanilla JavaScript version of Clean Alert, a plugin designed to create beautiful and clean alert modals. It allows developers to easily integrate alert messages into their web projects.

## Demo
You can see a live demo of Clean Alert Vanilla [here](http://cleanalertvanilla.felipetravassos.com/).

## Installation

To use Clean Alert in your project, you can include the following dependencies:

- [Bootstrap 5.x](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- Clean Alert CSS and JavaScript files (`cleanalert.css` and `cleanalert.js`)

You can include Bootstrap via CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

And Clean Alert files:

```html
<link rel="stylesheet" href="dist/cleanalert.css">
<script src="dist/cleanalert.js"></script>
```

## Usage

To create alert modals with Clean Alert, you can use the provided HTML structure and customize it according to your needs. Here are some examples:

### Types

```html
<button class="btn btn-primary clenalertbtn" data-title="Info Alert" data-text="This is an info alert" data-type="info">Info Alert</button>
<button class="btn btn-warning clenalertbtn" data-title="Warning Alert" data-text="This is a warning alert" data-type="warning">Warning Alert</button>
<button class="btn btn-success clenalertbtn" data-title="Success Alert" data-text="This is a success alert" data-type="success">Success Alert</button>
<button class="btn btn-danger clenalertbtn" data-title="Danger Alert" data-text="This is a danger alert" data-type="danger">Danger Alert</button>
```

### Sizes

```html
<button class="btn btn-primary clenalertbtn" data-title="Small Info Alert" data-text="This is a small info alert" data-type="info" data-size="sm">Small Info Alert</button>
<button class="btn btn-primary clenalertbtn" data-title="Medium Info Alert" data-text="This is a medium info alert" data-type="info" data-size="md">Medium Info Alert</button>
<button class="btn btn-primary clenalertbtn" data-title="Large Info Alert" data-text="This is a large info alert" data-type="info" data-size="lg">Large Info Alert</button>
```

### Background Color

```html
<button class="btn btn-primary clenalertbtn" data-title="Light Alert" data-text="This is a light info alert" data-type="info" data-bg="light">Light Modal</button>
<button class="btn btn-primary clenalertbtn" data-title="Dark Alert" data-text="This is a dark info alert" data-type="info" data-bg="dark">Dark Modal</button>
```

### Button Customization

```html
<button class="btn btn-primary clenalertbtn" data-title="Info Alert w/ Danger Button" data-text="This is an info alert" data-type="info" data-btntype="danger">Info Alert w/ Danger Button</button>
<button class="btn btn-primary clenalertbtn" data-title="Info Alert w/ Custom Button Text" data-text="This is an info alert" data-type="info" data-btntext="Okay">Info Alert w/ Custom Button Text</button>
```

### Direct Call

You can also call Clean Alert directly from your JavaScript code:

```html
<script>
    callalert(title, text, type, btntext, btntype, size, bg);
</script>
```

Replace the parameters with your desired values.
