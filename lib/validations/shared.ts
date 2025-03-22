import { z } from 'zod';

// 共通で使用するバリデーションルール
export const getEmailSchema = () =>
  z.string().email('有効なメールアドレスを入力してください');

export const getNameSchema = () =>
  z.string().min(2, '名前は2文字以上で入力してください');

// デフォルトの日本語スキーマ（後方互換性のため）
export const emailSchema = getEmailSchema();
export const nameSchema = getNameSchema();
