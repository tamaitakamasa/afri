# プロジェクト構造・ファイル説明

## 全体構造

```
afri/
├── app/                    # Next.js App Router（ページ構成）
├── components/             # Reactコンポーネント
├── lib/                    # ユーティリティ・ヘルパー関数
├── types/                  # TypeScript型定義
├── constants/              # 定数・設定値
├── public/                 # 静的アセット
├── docs/                   # プロジェクトドキュメント
├── .cursor/                # Cursor IDE設定・ルール
├── node_modules/           # npm依存関係
├── .next/                  # Next.jsビルド出力
└── 設定ファイル群
```

## app/ ディレクトリ（Next.js App Router）

Next.js 15のApp Routerを使用したページ・レイアウト構成。

```
app/
├── layout.tsx              # ルートレイアウト（全ページ共通）
├── page.tsx                # ホームページ（/）
├── loading.tsx             # ローディングUI
├── not-found.tsx           # 404エラーページ
├── globals.css             # グローバルCSS
├── favicon.ico             # ファビコン
└── contact/                # お問い合わせページ
    └── page.tsx            # お問い合わせページ（/contact）
```

### 主要ファイル説明

#### `layout.tsx`
- 全ページ共通のルートレイアウト
- フォント設定（Noto Sans JP、Urbanist）
- テーマプロバイダー（ライト/ダークモード）
- 共通コンポーネント（Header、Footer、FloatingMenu）
- ページ遷移プロバイダー
- グローバルローディングインジケーター

#### `page.tsx`
- ホームページのメインコンテンツ
- 複数のセクションコンポーネントで構成:
  - HomeHero: メインビジュアル
  - HomeConceptSection: コンセプト説明
  - HomeFieldSection: 活動分野
  - HomeTeamsSection: チーム紹介
  - HomeNoteSection: コラム・記事
  - AcademyJoinSection: アカデミー参加
  - OfficeSection: オフィス紹介

## components/ ディレクトリ

機能別・用途別に分類されたReactコンポーネント群。

```
components/
├── ui/                     # shadcn/ui再利用可能コンポーネント
├── layout/                 # レイアウト関連コンポーネント
├── home/                   # ホームページ専用コンポーネント
├── form/                   # フォーム関連コンポーネント
├── common/                 # 汎用共通コンポーネント
├── note/                   # Note機能関連コンポーネント
└── team/                   # チーム機能関連コンポーネント
```

### ui/ - shadcn/ui コンポーネント
- Next.js + Tailwind CSS用に最適化されたUIライブラリ
- Radix UIをベースとした再利用可能なコンポーネント
- 統一されたデザインシステム

### layout/ - レイアウトコンポーネント
- **Header**: サイトヘッダー・ナビゲーション
- **Footer**: サイトフッター
- **FloatingMenu**: フローティングメニュー

### home/ - ホームページコンポーネント
- **HomeHero**: メインビジュアル・ヒーローセクション
- **HomeConceptSection**: コンセプト説明セクション
- **HomeFieldSection**: 活動分野説明セクション
- **HomeTeamsSection**: チーム紹介セクション
- **HomeNoteSection**: Note記事表示セクション
- **AcademyJoinSection**: アカデミー参加募集セクション
- **OfficeSection**: オフィス・施設紹介セクション

### form/ - フォームコンポーネント
- React Hook Form + Zodを使用したバリデーション付きフォーム
- お問い合わせフォーム等

### common/ - 共通コンポーネント
- **GlobalLoadingIndicator**: グローバルローディング表示
- **RouterTransitionProvider**: ページ遷移アニメーション管理

### note/ - Note機能コンポーネント
- Note.com APIとの連携機能
- 記事一覧・詳細表示コンポーネント

### team/ - チーム機能コンポーネント
- チームメンバー紹介
- 専門分野・経歴表示

## lib/ ディレクトリ

ユーティリティ関数・ヘルパー関数群。

```
lib/
└── utils.ts                # 汎用ユーティリティ関数
```

### `utils.ts`
- `cn()`: clsxとtailwind-mergeを組み合わせたクラス名結合ヘルパー
- その他の汎用ヘルパー関数

## types/ ディレクトリ

TypeScript型定義ファイル群。

```
types/
└── note.d.ts               # Note.com API関連の型定義
```

### `note.d.ts`
- **NoteArticle**: Note記事の型定義
- **NoteHashtag**: ハッシュタグの型定義
- **NotesData**: API レスポンスの型定義

## constants/ ディレクトリ

定数・設定値の定義。

```
constants/
└── site.ts                 # サイト基本情報・設定
```

### `site.ts`
- **SITE_TITLE**: サイトタイトル
- **SITE_DESCRIPTION**: サイト説明
- **NOTE_URL**: Note.comアカウントURL
- **NOTE_API_BASE_URL**: Note API ベースURL
- **NAVI_ITEMS**: ナビゲーションメニュー項目

## public/ ディレクトリ

静的アセット（画像、アイコン等）の配置場所。

## docs/ ディレクトリ

プロジェクト関連ドキュメント。

```
docs/
├── project-overview.md      # プロジェクト概要
├── technical-stack.md       # 技術スタック・アーキテクチャ
├── development-guidelines.md # 開発ガイドライン
└── project-structure.md     # このファイル
```

## .cursor/ ディレクトリ

Cursor IDE用の設定・開発ルール。

```
.cursor/
└── rules/                  # 開発ルール定義
    ├── globals.mdc         # 高度な問題解決プロセス
    ├── commit-message.mdc  # コミットメッセージ規約
    └── dev-rules/          # 開発ガイドライン
        └── todo.mdc        # タスク管理ルール
```

## 設定ファイル群

### Next.js関連
- **`next.config.ts`**: Next.js設定（画像ドメイン許可等）
- **`next-env.d.ts`**: Next.js型定義
- **`app/globals.css`**: Tailwind CSS＋カスタムスタイル

### TypeScript関連
- **`tsconfig.json`**: TypeScript設定（strict mode等）

### UI・スタイリング関連
- **`components.json`**: shadcn/ui設定
- **`postcss.config.mjs`**: PostCSS設定
- **`.prettierrc.json`**: Prettier設定（Tailwindプラグイン含む）

### リンター・品質管理
- **`eslint.config.mjs`**: ESLint設定

### パッケージ管理
- **`package.json`**: 依存関係・スクリプト定義
- **`bun.lockb`**: Bunロックファイル

### Git・デプロイ関連
- **`.gitignore`**: Git除外ファイル設定
- **`.vercel/`**: Vercelデプロイ設定

## データフロー・アーキテクチャ

### ページレンダリング
1. `app/layout.tsx`でグローバル設定・共通コンポーネント読み込み
2. 各ページ（`app/page.tsx`等）でページ固有コンテンツレンダリング
3. `components/`内のコンポーネントで機能実装

### 状態管理
- ローカル状態: React useState/useReducer
- テーマ状態: next-themes
- フォーム状態: React Hook Form
- グローバル状態: 必要に応じてContext API

### データ取得
- Note.com API: REST API経由でコンテンツ取得
- 画像: Next.js Image最適化で外部ドメイン対応

### スタイリング
- Tailwind CSS: ユーティリティファーストでスタイリング
- shadcn/ui: 統一されたUIコンポーネント
- CSS Variables: テーマ・カラー管理

## 開発・ビルド・デプロイフロー

### 開発環境
1. `bun dev` - 開発サーバー起動
2. ホットリロード・ファイル監視
3. TypeScript型チェック
4. ESLint・Prettier自動実行

### ビルド
1. `bun build` - プロダクション用ビルド
2. 静的最適化・コード分割
3. 画像最適化・アセット処理

### デプロイ
1. Vercelプラットフォーム使用
2. Git連携による自動デプロイ
3. Edge Runtime・CDN配信
