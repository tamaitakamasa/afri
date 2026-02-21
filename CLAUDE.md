# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

淡路フードリサーチインスティテュート（Awaji Food Research Institute）の公式Webサイト。Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4 で構成。

## 開発コマンド

```bash
bun dev          # 開発サーバー起動
bun run build    # 本番ビルド
bun run start    # 本番サーバー起動
bun run lint     # ESLint実行
```

パッケージマネージャは **Bun** を使用。`bun add <pkg>` で依存関係を追加。

## アーキテクチャ

### データ取得

- 外部データは **note.com API** (`lib/note.ts`) からサーバーサイドで取得（`cache: 'no-store'`）
- API定数は `constants/site.ts` に集約（`NOTE_API_BASE_URL`, `SITE_URL` など）
- GET用のAPIルートは作らず、**Server Componentsでデータフェッチ**する方針
- お問い合わせフォームは外部サービス **ssgform.com** に送信

### コンポーネント構成

```
components/
├── ui/          # shadcn/ui（CLI生成、new-yorkスタイル）
├── layout/      # Header, Footer, FloatingMenu
├── common/      # AnimatedHeading, CustomLink, Spinnerなど汎用部品
├── features/    # ドメイン別（note/, video/, instagram/）
├── form/        # ContactForm（react-hook-form + zod）
├── home/        # トップページ各セクション
└── team/        # チーム関連
```

- デフォルトで **Server Components**、ブラウザAPI・hooks・状態管理が必要な場合のみ `'use client'`
- クラス結合には `cn()` ユーティリティ（`lib/utils.ts`、clsx + tailwind-merge）

### ルーティング（App Router）

- `/` — トップページ（セクション内リンク: `/#concept`, `/#team`, `/#academy`, `/#join`）
- `/column` — 記事一覧（note.comから取得、カテゴリフィルタ付き）
- `/contact` — お問い合わせフォーム
- `/privacy` — プライバシーポリシー

### スタイリング

- **Tailwind CSS v4** ユーティリティファースト
- OKLCHカラーシステム + CSS変数によるテーマ管理（`app/globals.css`）
- ダークモード対応（`next-themes`）
- Prettierプラグインでクラス名自動整列（`printWidth: 70`）

### アニメーション

- **GSAP** (`@gsap/react`) — ヘッダーなどの複雑なアニメーション
- **Motion** (Framer Motion互換) — トランジション
- **react-type-animation** — タイプライター効果

### フォームバリデーション

- `react-hook-form` + `@hookform/resolvers` + `zod`
- バリデーションスキーマは `lib/validations/` に配置

## コーディング規約

- ファイル名: **kebab-case** (`user-profile.tsx`)
- コンポーネント名: **PascalCase** (`UserProfile`)
- 関数/hooks: **camelCase** (`fetchUserData`, `useAuth`)
- boolean変数: `is`, `has`, `can`, `should` プレフィックス
- **named export** を推奨（default exportより）
- 型定義は `types/` ディレクトリに配置

## コミットメッセージ

```
<type>(<scope>): <subject>
```

type: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
日本語での記述可。1コミット = 1つの論理的な変更。

## 外部サービス

- **note.com API**: 記事データ取得元（クリエイター: `foodtrail`）
- **Cloudflare Stream**: 動画配信（`@cloudflare/stream-react`）
- **Google Analytics**: `G-82RWGM5888`
- **ssgform.com**: お問い合わせフォーム送信先

## 画像最適化

`next.config.ts` で外部ドメインを許可: `shimatoworks.xsrv.jp`, `assets.st-note.com`
