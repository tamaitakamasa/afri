# Common Components

## CustomLink

リンクの種類（内部/外部）に応じてアイコンの表示を自動制御する共通リンクコンポーネントです。

### Props

| Props | Type | Default | Description |
|-------|------|---------|-------------|
| `href` | `string` | - | リンク先URL（必須） |
| `children` | `ReactNode` | - | リンクのコンテンツ（必須） |
| `className` | `string` | `""` | 追加のCSSクラス |
| `isExternal` | `boolean` | `false` | 外部リンクかどうか |
| `showIcon` | `boolean` | `true` | アイコンを表示するかどうか |
| `iconSize` | `number` | `16` | アイコンのサイズ |
| `iconClassName` | `string` | `""` | アイコンの追加CSSクラス |

### 使用例

#### 内部リンク（アイコンなし）

```tsx
<CustomLink href="/contact" showIcon={false}>
  Contact
</CustomLink>
```

#### 外部リンク（アイコンあり）

```tsx
<CustomLink
  href="https://shimatoworks.jp"
  isExternal={true}
  className="underline hover:no-underline"
>
  株式会社シマトワークス
</CustomLink>
```

#### 外部リンク（アイコンなし）

```tsx
<CustomLink
  href="https://example.com"
  isExternal={true}
  showIcon={false}
>
  Example Link
</CustomLink>
```

### 特徴

- **自動判定**: `isExternal`プロパティで内部/外部リンクを指定
- **アイコン制御**: 外部リンクには自動でArrowUpRightアイコンが表示される
- **セキュリティ**: 外部リンクには自動で`rel="noopener noreferrer"`が追加される
- **スタイル統一**: cn関数を使用したTailwindクラスの結合
- **型安全**: TypeScriptによる完全な型サポート
