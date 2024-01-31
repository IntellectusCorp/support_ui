# Support UI
<a href="https://www.npmjs.com/package/int2_support_ui" target="_blank"><img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white&link=https://www.npmjs.com/package/int2_support_ui"/></a>   
React library for Intellectus data team

## Warning
This library is continuously being developed and maintained.🛠️🛠️🛠️

## Installation
using npm:
```js
$ npm install int2_support_ui
```

## Usage
```js
import SupportUI from "int2_support_ui";

const TestComponent = () => {
  return <SupportUI.SearchInput />
}

const TestThroughput = () => {
  const [inputData, setInputData] = useState<NodeDataType>([]);

  const inputDataChangeInterval = () => {
    setInterval(async() => {
      const data = await getData(); // replace to your GET api or something
      setInputData(data);
      setCount(cur => (cur + 1) % 60)
    }, 1000);
  };

  useEffect(() => inputDataChangeInterval(), []);

  return (
    <SupportUI.Throughput 
        maxLength={5}
        inputData={inputData}
        graphWidth={500}
        graphHeight={50}
    />
  )
}
```

## Contributing

See the [Contributing Guide](https://github.com/IntellectusCorp/support_ui/blob/main/Contributing.md) for more details on contributing.

## Roadmap

See the [Roadmap](https://github.com/IntellectusCorp/support_ui/blob/main/Roadmap.md) for more details on roadmap.
