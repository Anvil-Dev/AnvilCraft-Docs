# 膨发配方 (Bulging Recipe)

膨发配方用于使用炼药锅中的流体将物品转换为其他物品。

## 基本结构

```json
{
  "type": "anvilcraft:bulging",
  "ingredients": [
    {
      "items": "minecraft:dirt",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "minecraft:clay",
      "count": 1
    }
  ],
  "fluid": "minecraft:water"
}
```

## 字段说明

### type

固定值 `anvilcraft:bulging`，标识这是一个膨发配方。

### ingredients

配方所需的输入物品列表。每个元素包含：

- `items`: 物品ID（可以是单个物品ID字符串或物品ID数组）
- `count`: 物品数量

### results

配方的输出物品列表。每个元素包含：

- `id`: 物品ID
- `count`: 物品数量

### fluid (流体)

流体类型，如 "minecraft:water" 或 "minecraft:lava"

### transform (转换流体)

流体类型，如 "minecraft:water" 或 "minecraft:lava"，表示将要转换成的流体

### consume (流体消耗)

流体消耗量（可选）：

- 正数表示消耗流体
- 负数表示产生流体
- 0 表示不改变流体（默认值）

## 使用示例

将泥土膨发成黏土：

```json
{
  "type": "anvilcraft:bulging",
  "ingredients": [
    {
      "items": "minecraft:dirt",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "minecraft:clay",
      "count": 1
    }
  ],
  "cauldron": {
    "fluid": "minecraft:water"
  }
}
```