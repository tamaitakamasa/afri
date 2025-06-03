# AFRI (Awaji Food Research Institute) プロジェクト概要

## プロジェクト基本情報

- **プロジェクト名**: AFRI (Awaji Food Research Institute)
- **正式名称**: 淡路島食品研究所
- **説明**: 淡路島（兵庫県）で、「食」をテーマに研究・活動を行う組織のWebサイト
- **ドメイン**: 未設定
- **バージョン**: 0.1.0
- **開発言語**: 日本語対応

## プロジェクトの目的・コンセプト

- 淡路島における食品研究活動の情報発信
- チーム紹介とその専門性の紹介
- 研究成果やコラムの配信（Note.comとの連携）
- アカデミー活動の紹介
- 人材募集・参加者募集
- お問い合わせ対応

## サイト構成

### メインセクション
1. **Home** - トップページ
2. **Concept** - コンセプト説明
3. **Team** - チーム紹介
4. **Column** - コラム・記事（Note.com連携）
5. **Academy** - アカデミー活動
6. **Join Us** - 参加募集
7. **Contact** - お問い合わせ

### 現在実装されているページ
- ホームページ（`/`）
  - Hero セクション
  - Concept セクション
  - Field セクション
  - Teams セクション
  - Note セクション
  - Academy Join セクション
  - Office セクション
- お問い合わせページ（`/contact`）

## 外部連携

### Note.com API連携
- **Note URL**: https://note.com/foodtrail
- **API Base URL**: https://note.com/api/v2/creators/foodtrail/
- 記事の取得と表示機能を実装
- ハッシュタグ機能対応

### 画像ホスティング
- `shimatoworks.xsrv.jp`
- `assets.st-note.com`

## プロジェクト特徴

- モダンなWebアプリケーション（Next.js 15、React 19使用）
- レスポンシブデザイン
- ダーク/ライトテーマ対応
- 日本語フォント最適化（Noto Sans JP、Urbanist）
- ページ遷移アニメーション
- フローティングメニュー
- フォーム機能（React Hook Form + Zod）
- 動画プレイヤー対応
- タイプアニメーション効果

## ターゲットユーザー

- 食品研究に興味のある研究者・学生
- 淡路島の食品産業関係者
- 食品開発・研究分野のプロフェッショナル
- アカデミー参加希望者
- 研究所への参加・転職希望者
