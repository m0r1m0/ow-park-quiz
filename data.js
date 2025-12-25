// Overwatch 2 キャラクターとパークのデータ
// position: "left" または "right" でゲーム内の配置を示す

const heroData = [
    // タンク
    {
        hero: "ラインハルト",
        perks: [
            { name: "バリアフィールド強化", position: "left" },
            { name: "チャージ距離延長", position: "right" }
        ]
    },
    {
        hero: "D.Va",
        perks: [
            { name: "ブースター衝撃", position: "left" },
            { name: "ディフェンスマトリックス延長", position: "right" }
        ]
    },
    {
        hero: "オリーサ",
        perks: [
            { name: "エネルギージャベリン強化", position: "left" },
            { name: "フォーティファイ延長", position: "right" }
        ]
    },
    {
        hero: "ザリア",
        perks: [
            { name: "バリアサイズ増加", position: "left" },
            { name: "エネルギー効率向上", position: "right" }
        ]
    },
    {
        hero: "ウィンストン",
        perks: [
            { name: "ジャンプパック衝撃増加", position: "left" },
            { name: "バリア耐久値増加", position: "right" }
        ]
    },
    {
        hero: "ロードホッグ",
        perks: [
            { name: "チェインフック範囲拡大", position: "left" },
            { name: "テイク・ア・ブリーザー回復量増加", position: "right" }
        ]
    },
    {
        hero: "ドゥームフィスト",
        perks: [
            { name: "ロケットパンチ距離延長", position: "left" },
            { name: "パワーブロック吸収増加", position: "right" }
        ]
    },
    {
        hero: "ラマットラ",
        perks: [
            { name: "ネメシスフォーム延長", position: "left" },
            { name: "ボイドアクセラレーター範囲拡大", position: "right" }
        ]
    },
    {
        hero: "シグマ",
        perks: [
            { name: "キネティックグラスプ範囲拡大", position: "left" },
            { name: "実験バリア移動速度向上", position: "right" }
        ]
    },
    {
        hero: "レッキングボール",
        perks: [
            { name: "グラップリングクロー速度向上", position: "left" },
            { name: "アダプティブシールド増加", position: "right" }
        ]
    },
    {
        hero: "ジュンカークイーン",
        perks: [
            { name: "ジャガーノート威力増加", position: "left" },
            { name: "シャウト効果延長", position: "right" }
        ]
    },
    {
        hero: "マウガ",
        perks: [
            { name: "オーバーラン距離延長", position: "left" },
            { name: "カーディアックオーバードライブ延長", position: "right" }
        ]
    },

    // ダメージ
    {
        hero: "ゲンジ",
        perks: [
            { name: "風斬り範囲拡大", position: "left" },
            { name: "木の葉返し反射範囲拡大", position: "right" }
        ]
    },
    {
        hero: "トレーサー",
        perks: [
            { name: "ブリンク距離延長", position: "left" },
            { name: "リコール回復量増加", position: "right" }
        ]
    },
    {
        hero: "ソルジャー76",
        perks: [
            { name: "ヘリックスロケット威力増加", position: "left" },
            { name: "バイオティックフィールド回復速度向上", position: "right" }
        ]
    },
    {
        hero: "リーパー",
        perks: [
            { name: "シャドウステップ距離延長", position: "left" },
            { name: "レイス状態移動速度向上", position: "right" }
        ]
    },
    {
        hero: "ファラ",
        perks: [
            { name: "コンカッシブブラスト衝撃増加", position: "left" },
            { name: "ジャンプジェット燃料増加", position: "right" }
        ]
    },
    {
        hero: "マクリー",
        perks: [
            { name: "フラッシュバン範囲拡大", position: "left" },
            { name: "コンバットロール距離延長", position: "right" }
        ]
    },
    {
        hero: "ジャンクラット",
        perks: [
            { name: "コンカッションマイン衝撃増加", position: "left" },
            { name: "トラップ起動速度向上", position: "right" }
        ]
    },
    {
        hero: "ウィドウメイカー",
        perks: [
            { name: "ヴェノムマイン威力増加", position: "left" },
            { name: "グラップリングフック再使用速度向上", position: "right" }
        ]
    },
    {
        hero: "ハンゾー",
        perks: [
            { name: "ソニックアロー範囲拡大", position: "left" },
            { name: "ストームアロー威力増加", position: "right" }
        ]
    },
    {
        hero: "トールビョーン",
        perks: [
            { name: "タレット耐久値増加", position: "left" },
            { name: "オーバーロード延長", position: "right" }
        ]
    },
    {
        hero: "バスティオン",
        perks: [
            { name: "タクティカルグレネード威力増加", position: "left" },
            { name: "リコンフィギュレーション速度向上", position: "right" }
        ]
    },
    {
        hero: "メイ",
        perks: [
            { name: "クライオフリーズ回復量増加", position: "left" },
            { name: "アイスウォール耐久値増加", position: "right" }
        ]
    },
    {
        hero: "シンメトラ",
        perks: [
            { name: "セントリータレット威力増加", position: "left" },
            { name: "テレポーター範囲拡大", position: "right" }
        ]
    },
    {
        hero: "ソンブラ",
        perks: [
            { name: "ハック速度向上", position: "left" },
            { name: "ステルス移動速度向上", position: "right" }
        ]
    },
    {
        hero: "アッシュ",
        perks: [
            { name: "ダイナマイト威力増加", position: "left" },
            { name: "コーチガン衝撃増加", position: "right" }
        ]
    },
    {
        hero: "エコー",
        perks: [
            { name: "フォーカスビーム威力増加", position: "left" },
            { name: "フライト速度向上", position: "right" }
        ]
    },
    {
        hero: "ソジョーン",
        perks: [
            { name: "パワースライド距離延長", position: "left" },
            { name: "ディスラプターショット範囲拡大", position: "right" }
        ]
    },

    // サポート
    {
        hero: "アナ",
        perks: [
            { name: "スリープダーツ持続時間延長", position: "left" },
            { name: "バイオティックグレネード範囲拡大", position: "right" }
        ]
    },
    {
        hero: "マーシー",
        perks: [
            { name: "ガーディアンエンジェル速度向上", position: "left" },
            { name: "ダメージブースト効果増加", position: "right" }
        ]
    },
    {
        hero: "モイラ",
        perks: [
            { name: "バイオティックオーブ威力増加", position: "left" },
            { name: "フェード距離延長", position: "right" }
        ]
    },
    {
        hero: "ルシオ",
        perks: [
            { name: "サウンドバリア耐久値増加", position: "left" },
            { name: "クロスフェード範囲拡大", position: "right" }
        ]
    },
    {
        hero: "ゼニヤッタ",
        perks: [
            { name: "不和のオーブ威力増加", position: "left" },
            { name: "調和のオーブ回復量増加", position: "right" }
        ]
    },
    {
        hero: "ブリギッテ",
        perks: [
            { name: "シールドバッシュ衝撃増加", position: "left" },
            { name: "リペアパック回復量増加", position: "right" }
        ]
    },
    {
        hero: "バティスト",
        perks: [
            { name: "イモータリティフィールド耐久値増加", position: "left" },
            { name: "リジェネバースト回復量増加", position: "right" }
        ]
    },
    {
        hero: "キリコ",
        perks: [
            { name: "クナイ威力増加", position: "left" },
            { name: "スウィフトステップ距離延長", position: "right" }
        ]
    },
    {
        hero: "ライフウィーバー",
        perks: [
            { name: "ライフグリップ範囲拡大", position: "left" },
            { name: "ペタルプラットフォーム高度向上", position: "right" }
        ]
    },
    {
        hero: "イラリー",
        perks: [
            { name: "ヒーリングパイロン範囲拡大", position: "left" },
            { name: "アウトバースト威力増加", position: "right" }
        ]
    },
    {
        hero: "ジュノ",
        perks: [
            { name: "グライドブースター速度向上", position: "left" },
            { name: "オービタルレイ範囲拡大", position: "right" }
        ]
    }
];
