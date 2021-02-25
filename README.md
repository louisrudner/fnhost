# fnhost

`fnhost` is a simple function-endpoint server.

## Usage

```javascript
const fnhost = require('fnhost');

const endpoints = {
  '/string': params => params[1],
  '/number': params => Number(params[1]),
  '/multiply': params => Number(params[1]) * Number(params[2]),
};

fnhost(endpoints);
```

Now visit `http://localhost:3000/multiply/10/4` and you should get `40`
