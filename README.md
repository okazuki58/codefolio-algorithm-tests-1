# アルゴリズムを実践で学ぼう1（FizzBuzz, 文字列操作, 最大値探索）

未経験者・ジュニアエンジニア向けのアルゴリズム課題集です。

## 課題一覧
1. [FizzBuzz](fizzbuzz/)
2. [文字列の逆順表示](reverse-string/)
3. [配列の最大値](find-max-value/)

## 開発環境のセットアップ

課題を始める前に以下の環境が必要です。

### 前提条件（必須）

- **Node.js & npm** （推奨バージョン：Node.js v14以上）

インストール済みかどうかは、以下のコマンドで確認できます。

```bash
node -v
npm -v
```

インストールされていない場合は、公式サイトからインストールしてください。

- [Node.js公式サイト](https://nodejs.org/ja/)

### テスト環境の準備

依存関係をインストールするために、以下のコマンドを実行します。

```bash
npm install
```

## テストの実行方法

### すべての課題のテストを実行

```bash
npm test
```

### 特定の課題だけテストを実行

```bash
npm test -- <課題ディレクトリ>/<テストファイル名>
```

**例：FizzBuzzだけをテストしたい場合**

```bash
npm test -- fizzbuzz/fizzbuzz.test.js
```

### 特定のテストケースのみを実行（任意）

特定のテストケースだけを実行したい場合は、テスト名を指定します。

```bash
npm test -- fizzbuzz/fizzbuzz.test.js -t "FizzBuzz(15)の出力をテストする"
```

## 推奨する学習手順

1. 課題内容をREADMEで確認
2. テストを実行して失敗を確認（TDD方式を推奨）
3. コードを書いてテストを通す
4. テストが全て通ったらコミット＆セルフマージ