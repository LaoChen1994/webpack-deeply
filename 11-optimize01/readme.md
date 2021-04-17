1. loader优化结果


|   优化方式   |   耗时   |   提升效果   |备注|
| ---- | ---- | ---- | ---- |
|   不使用任何优化   |  8.7s    |   /   |/|
|    +loader优化  |   5.66s(无缓存)<br /> 3s(有缓存)   |   较大  |前者仅添加了include，后者还增加了babel-loader的缓存cacheDirectory|
|  +针对浏览器的target进行打包    |  5.5s(无缓存)<br /> 2.8s(有缓存)    |   不大  |这里主要是针对某些模块打包了多个场景，此时针对某个场景进行解析即可，但是本例子引用模块较少，看不太出效果，配置target: web resolve.mainFields: ['browser']来针对浏览器场景|
|+alias|||
