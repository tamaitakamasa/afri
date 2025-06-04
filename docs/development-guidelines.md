# 開発ガイドライン・ベストプラクティス

## 概要

このドキュメントは、AFRIプロジェクトにおける開発ガイドラインとベストプラクティスをまとめています。一貫性のある高品質なコードを維持するために、すべての開発者が従うべきルールを定義しています。

## 命名規則

### ファイル・フォルダ
- **kebab-case**（ハイフン区切りの小文字）を推奨
  - 例: `user-profile.tsx`, `home-hero.tsx`
- コンポーネント名は **PascalCase**
  - 例: `UserProfile`, `HomeHero`
- 複数のOS環境を考慮し、ファイル名もkebab-caseに統一

### 変数名
- boolean型の状態には補助動詞を接頭辞に使用:
  - `is`: `isLoading`, `isVisible`, `isActive`
  - `has`: `hasError`, `hasData`, `hasPermission`
  - `can`: `canSubmit`, `canEdit`, `canDelete`
  - `should`: `shouldShow`, `shouldRender`
- 配列には複数形: `users`, `items`, `articles`
- 単一データには説明的な名前: `selectedUserId`, `formData`, `apiResponse`

### 関数・Hooks
- **camelCase**を使用: `fetchUserData`, `handleSubmit`
- React Hooksは`use`で始める: `useAuth`, `useWindowSize`, `useLocalStorage`
- イベントハンドラーは`handle`または`on`を接頭辞に:
  - `handleClick`, `handleSubmit`, `onSuccess`, `onError`

### エクスポート
- **named export**を推奨（default exportより）
- 例: `export function Button() {}` を使用

## ディレクトリ構成・ファイル配置

### 基本構造
```
app/              # Next.js App Router構成
components/
├── ui/           # 再利用可能なUI部品（shadcn/ui）
├── layout/       # ヘッダー・フッターなどのレイアウト部品
├── home/         # ホームページ専用コンポーネント
├── form/         # フォーム関連コンポーネント
├── common/       # 汎用的な共通コンポーネント
├── note/         # Note機能関連コンポーネント
└── team/         # チーム機能関連コンポーネント
lib/              # ロジックやユーティリティ関数
types/            # TypeScript型定義
constants/        # 定数定義
public/           # 公開アセット（画像など）
```

### コンポーネント配置ルール
- `components/ui/`にshadcn/uiコンポーネントを配置
- 特定のページのみで使うコンポーネントはそのページルート直下に配置
- 複雑なコンポーネントはフォルダで分離し、`index.tsx`で構成
- レイアウト関連は`layout/`ディレクトリにまとめる
- 重複コードが出てきたら共通化し、再利用しやすくする

## TypeScript設計ルール

### 基本設定
- `strict: true`をtsconfig.jsonに設定
- 全ての関数に戻り値の型を明示
- Props定義はinterfaceまたはtypeで明示

### 型定義のベストプラクティス
```typescript
// Props定義例
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

// 状態の型も明示
const [users, setUsers] = useState<User[]>([]);
const [isLoading, setIsLoading] = useState<boolean>(false);

// API レスポンスのバリデーションにはzodを活用
const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});
```

### ユーティリティ型の活用
- `Partial<T>`, `Omit<T, K>`, `Pick<T, K>`などを積極的に使用
- ジェネリクスを適切に活用

## Tailwind CSS設計

### 基本方針
- **ユーティリティファースト**: JSX内でクラスを直接記述
- クラス名の順序はPrettierプラグインで自動整列
- `@apply`の使用は制限し、使う場合は共通のパターンにのみ

### クラス記述ルール
```tsx
// 良い例: ユーティリティクラスを直接使用
<div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
  <h2 className="text-lg font-semibold text-gray-900">タイトル</h2>
</div>

// 避ける例: 過度な@applyの使用
// .custom-card { @apply flex items-center ... }
```

### レイヤー使用ガイドライン
- `@layer base`: グローバルなスタイル（h1、bodyなど）
- `@layer components`: コンポーネント用のカスタムクラス
- カラーパレットやフォントは`tailwind.config.js`の`theme.extend`に定義

## shadcn/ui使用ガイドライン

### 基本ルール
- `components/ui/`に配置し、CLI生成された構成を保持
- カスタマイズはCSS変数またはTailwindのテーマ拡張で対応
- クラス結合には`cn()`ヘルパーを活用（`clsx` + `tailwind-merge`）

### カスタマイズ方針
```tsx
// 良い例: cn()を使ったクラス結合
<Button className={cn("w-full", className)} {...props}>
  {children}
</Button>

// カスタムコンポーネントは別名で作成
export function CustomButton({ variant = "default", ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "custom-button-styles",
        variant === "special" && "special-styles"
      )}
      {...props}
    />
  );
}
```

### ライブラリ更新対応
- カスタマイズした場合は別コンポーネント名で管理
- 機能拡張が必要な場合はラッパーコンポーネントとして作成

## 状態管理・データフェッチ

### 状態管理の命名
```tsx
// Boolean状態の命名
const [isLoading, setIsLoading] = useState(false);
const [hasError, setHasError] = useState(false);
const [canSubmit, setCanSubmit] = useState(false);

// データフェッチの状態セット
const [data, setData] = useState<T[]>([]);
const [isFetching, setIsFetching] = useState(false);
const [error, setError] = useState<Error | null>(null);
```

### グローバル状態
- 必要な場合はZustandまたはContext APIを使用
- 状態の分離を意識し、関心事ごとに分割

## フォーム設計

### React Hook Form + Zod
```tsx
const formSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
});

type FormData = z.infer<typeof formSchema>;

const form = useForm<FormData>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    name: "",
    email: "",
  },
});
```

## コメント・ドキュメント

### コメント方針
- コメントは「なぜ」「どのように」を説明
- 「何を」はコードが語るようにする
- JSDoc/TSDoc形式で関数や複雑なコンポーネントをドキュメント化

```typescript
/**
 * ユーザー情報を取得する
 * @param userId - 取得するユーザーのID
 * @returns Promise<User> - ユーザー情報
 * @throws {Error} - ユーザーが見つからない場合
 */
async function fetchUser(userId: string): Promise<User> {
  // APIエンドポイントからユーザー情報を取得
  // Note: キャッシュ機能は後日実装予定
  const response = await fetch(`/api/users/${userId}`);

  if (!response.ok) {
    throw new Error('ユーザーの取得に失敗しました');
  }

  return response.json();
}
```

### 複雑な処理の説明
- 複雑な処理には簡潔なコメントやセクション区切りを挿入
- コメントアウトされたコードは極力残さずGitに任せる

## コミットメッセージ

### 基本構造
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type分類
- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメントの変更
- `style`: コードスタイルの変更
- `refactor`: リファクタリング
- `test`: テストの追加・修正
- `chore`: ビルドプロセス・開発環境の変更

### 例
```
feat(blog): 記事一覧ページの実装

- WordPressからの記事取得機能を実装
- 記事一覧の表示コンポーネントを作成
- ページネーション機能を追加

Refs: #123
```

## パフォーマンス最適化

### 画像最適化
- Next.js Imageコンポーネントを必ず使用
- 適切なサイズとフォーマットを指定
- lazy loadingの活用

### コンポーネント最適化
- React.memoは必要な場合のみ使用
- useCallbackとuseMemoは適切に使用
- 大きなコンポーネントは分割を検討

### バンドルサイズ最適化
- 未使用のimportは削除
- dynamic importを活用
- Tree shakingを意識したライブラリ選択

## セキュリティ

### 入力値検証
- フォーム入力は必ずZodでバリデーション
- サニタイゼーションの実装
- XSS対策の徹底

### API セキュリティ
- 環境変数の適切な管理
- APIキーの暗号化
- Rate limitingの実装検討
