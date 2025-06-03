# 技術スタック・アーキテクチャ

## フレームワーク・ライブラリ

### Core Framework
- **Next.js 15.2.1** - React フレームワーク
  - App Router 使用
  - Server Components 対応
  - Image 最適化機能
- **React 19.0.0** - UI ライブラリ
- **React DOM 19.0.0** - DOM レンダリング
- **TypeScript 5** - 型安全性

### スタイリング
- **Tailwind CSS v4** - ユーティリティファーストCSS
  - `@tailwindcss/postcss` v4 使用
  - カスタムカラーパレット対応
  - レスポンシブデザイン
- **tailwindcss-animate** - アニメーション拡張
- **PostCSS** - CSS後処理

### UI コンポーネント
- **shadcn/ui** - 再利用可能なUIコンポーネント
  - Radix UI ベース
  - New York スタイル
  - CSS変数使用
  - zinc ベースカラー
- **Radix UI Components**:
  - `@radix-ui/react-checkbox`
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-label`
  - `@radix-ui/react-separator`
  - `@radix-ui/react-slot`
- **Lucide React** - アイコンライブラリ
- **class-variance-authority** - バリアントベーススタイリング

### フォーム・バリデーション
- **React Hook Form 7.54.2** - フォーム状態管理
- **@hookform/resolvers 4.1.3** - バリデーションリゾルバー
- **Zod 3.24.2** - スキーマバリデーション

### アニメーション・UI効果
- **Motion 12.4.10** - アニメーションライブラリ
- **react-type-animation 3.2.0** - タイピングアニメーション
- **React Player 2.16.0** - 動画プレイヤー
- **Vaul 1.1.2** - ドロワーコンポーネント

### ユーティリティ
- **clsx 2.1.1** - クラス名の条件付き結合
- **tailwind-merge 3.0.2** - Tailwindクラスのマージ
- **next-themes 0.4.6** - テーマ切り替え

## 開発環境・ツール

### 開発サーバー・ビルド
- **Bun** - パッケージマネージャー・ランタイム
- **Next.js Dev Server** - 開発サーバー

### コード品質
- **ESLint 9** - リンター
  - Next.js 設定使用
  - `@eslint/eslintrc` v3
- **Prettier** - コードフォーマッター
  - `prettier-plugin-tailwindcss` でクラス順序自動整列

### 型チェック
- **TypeScript 5** - 静的型チェック
- **@types/node** - Node.js 型定義
- **@types/react** - React 型定義
- **@types/react-dom** - React DOM 型定義

## アーキテクチャ構成

### ディレクトリ構造
```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # ルートレイアウト
│   ├── page.tsx      # ホームページ
│   ├── contact/      # お問い合わせページ
│   └── globals.css   # グローバルスタイル
├── components/
│   ├── ui/           # shadcn/ui コンポーネント
│   ├── layout/       # レイアウトコンポーネント
│   ├── home/         # ホームページ用コンポーネント
│   ├── form/         # フォームコンポーネント
│   ├── common/       # 共通コンポーネント
│   ├── note/         # Note関連コンポーネント
│   └── team/         # チーム関連コンポーネント
├── lib/              # ユーティリティ関数
├── types/            # TypeScript型定義
├── constants/        # 定数定義
└── public/           # 静的アセット
```

### 設定ファイル
- `next.config.ts` - Next.js設定
- `components.json` - shadcn/ui設定
- `tsconfig.json` - TypeScript設定
- `eslint.config.mjs` - ESLint設定
- `.prettierrc.json` - Prettier設定
- `postcss.config.mjs` - PostCSS設定

## 外部API・サービス

### Note.com API
- **API Base URL**: `https://note.com/api/v2/creators/foodtrail/`
- 記事一覧取得
- 記事詳細取得
- ハッシュタグ機能

### 画像最適化
- Next.js Image コンポーネント使用
- 外部ドメイン対応:
  - `shimatoworks.xsrv.jp`
  - `assets.st-note.com`

## フォント設定

### 日本語フォント
- **Noto Sans JP** - Google Fonts
  - 9つのウェイト対応（100-900）
  - CSS変数: `--font-noto-sans-jp`

### 英語フォント
- **Urbanist** - Google Fonts
  - 9つのウェイト対応（100-900）
  - CSS変数: `--font-urbanist`

## パフォーマンス最適化

- **Font Display Swap** - フォント表示最適化
- **Image Optimization** - Next.js自動最適化
- **Code Splitting** - 自動コード分割
- **Tree Shaking** - 未使用コード除去
- **Server Components** - サーバーサイドレンダリング

## セキュリティ

- **TypeScript Strict Mode** - 厳密な型チェック
- **Zod Validation** - ランタイムバリデーション
- **Next.js Security Headers** - セキュリティヘッダー自動設定

## デプロイメント

- **Vercel** プラットフォーム対応
- **Edge Runtime** 対応
- **Static Generation** 対応
- **ISR (Incremental Static Regeneration)** 対応
